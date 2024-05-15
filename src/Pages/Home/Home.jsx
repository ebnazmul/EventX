import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../Extra/Card/Card";
import { Helmet } from "react-helmet-async";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/allposts`).then((res) => {
      setPosts(res.data);
      setLoading(false);
    });
  }, []);

  const postsInHome = posts.slice(0, 6);

  // console.log(postsInHome);

  return (
    <div className="mt-10">
      <Helmet>
        <title>EventX - Spiritual Activity Booking Services</title>
      </Helmet>

      <div className="max-w-screen-2xl mx-auto">
        {loading ? (
          <Skeleton height={"400px"} />
        ) : (
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={posts > 2 ? true : false}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper">
            {posts.map((data) => (
              <SwiperSlide key={data._id}>
                <div
                  className="w-full h-96 bg-cover rounded relative"
                  style={{ backgroundImage: `url("${data.image_url}")` }}>
                  <div className="p-10 rounded bg-[#1f293752] absolute top-10 left-20">
                    <h3 className="py-1 px-2 rounded bg-gray-800 text-white text-xl">
                      {data.service_name}
                    </h3>
                    <button className="px-2 py-1 border bg-gray-400 rounded mt-2">
                      Book Now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <h3 className="mt-10 text-center text-xl font-semibold">Our Services</h3>

      <div className="mt-10 grid md:grid-cols-2 gap-2 max-w-screen-2xl mx-auto">
        {loading && (
          <>
            <Skeleton style={{ width: "100%", height: "600px" }} />
            <Skeleton style={{ width: "100%", height: "600px" }} />
            <Skeleton style={{ width: "100%", height: "600px" }} />
            <Skeleton style={{ width: "100%", height: "600px" }} />
            <Skeleton style={{ width: "100%", height: "600px" }} />
            <Skeleton style={{ width: "100%", height: "600px" }} />
          </>
        )}
        {postsInHome.map((post) => (
          <Card key={post._id} post={post} />
        ))}
      </div>
      <div className="my-10 p-10 md:p-28 bg-[url('https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <h2 className="text-3xl text-center uppercase font-bold max-w-80 mx-auto">
          Get Stared and Book your <span className="bg-blue-400 text-white px-2 rounded">service now!</span>
        </h2>
        <img className="absolute h-20" src="/blob.gif" alt="" />
      </div>
      <div className="my-10 p-10 border text-center space-y-4">
        <div>
          <h3 className="text-xl font-semibold">Subscribe to our newsletter</h3>
          <p>
            Subscribe to out newsletter for intersting offers and huge
            discounts.
          </p>
        </div>
        <input
          placeholder="jhon@eon.com"
          className="max-w-48 border px-2 py-1 outline-blue-200"
          type="email"
        />
        <button className="md:ml-3 ml-1 px-2 py-1 bg-blue-400 rounded">
          Subscribe
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-screen-2xl mx-auto text-white">
        <div className="w-full p-10 bg-blue-400 flex gap-2 rounded">
        <img className="rounded h-12" src="https://cdn-icons-png.flaticon.com/512/11107/11107699.png" alt="" />
        <div>
          <h4 className="text-xl">Angela</h4>
          <p>Great service.</p>
        </div>
        </div>
        <div className="w-full p-10 bg-blue-400 flex gap-2 rounded">
        <img className="rounded h-12" src="https://cdn-icons-png.flaticon.com/512/1864/1864593.png" alt="" />
        <div>
          <h4 className="text-xl">Mathew</h4>
          <p>Great service.</p>
        </div>
        </div>
        <div className="w-full p-10 bg-blue-400 flex gap-2 rounded">
        <img className="rounded h-12" src="https://cdn-icons-png.flaticon.com/512/9576/9576233.png" alt="" />
        <div>
          <h4 className="text-xl">Angela</h4>
          <p>Great service.</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
