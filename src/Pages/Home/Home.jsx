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
    <div className="max-w-screen-2xl mx-auto mt-10">
      <Helmet>
        <title>EventX - Spiritual Activity Booking Services</title>
      </Helmet>

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

      <h3 className="mt-10 text-center text-xl font-semibold">Our Services</h3>

      <div className="mt-10 grid md:grid-cols-2 gap-2">
        {loading && (
          <>
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
    </div>
  );
};

export default Home;
