import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../Extra/Card/Card";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/allposts`)
      .then((res) => setPosts(res.data));
  }, []);

  const postsInHome = posts.slice(0, 6);

  console.log(postsInHome);

  return (
    <div className="max-w-screen-2xl mx-auto mt-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={posts > 2 ? true : false}
        autoplay={{
          delay: 3000,
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
              className="w-full h-80 bg-cover rounded"
              style={{ backgroundImage: `url("${data.image_url}")` }}></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-10 grid md:grid-cols-2 gap-2">
        {postsInHome.map((post) => (
          <Card key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
