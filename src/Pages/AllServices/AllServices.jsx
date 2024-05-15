import { useEffect, useRef, useState } from "react";
import Card from "../../Extra/Card/Card";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import Skeleton from "react-loading-skeleton";

const AllServices = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPostCount, setTotalPostCount] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [postInEveryPage, setPostInEveryPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const divRef = useRef();
 

  // Pagination

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/totalpostcount`).then((res) => {
      setTotalPostCount(res.data.count);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${
          import.meta.env.VITE_API_URL
        }/allposts/post?currentPage=${currentPage}`
      )
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      });
  }, [currentPage]);

  const pageCount = Math.ceil(totalPostCount / postInEveryPage);
  const pages = [...Array(pageCount).keys()].map((el) => el + 1);

  // Search Handling

  const handleSearch = (e) => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_API_URL}/search?posts=${e.target.value}`)
      .then((res) => {
        setPosts(res.data);
        setTotalPostCount(res.data.length);
        setLoading(false);
      })
      .catch((err) => console.err(err));
  };

  const intoView = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <div ref={divRef} className="max-w-screen-2xl mx-auto my-10">
      <Helmet>
        <title>All Services - EventX</title>
      </Helmet>
      <div>
        <input
          onChange={handleSearch}
          type="text"
          className="border-2 py-1 px-2 rounded outline-blue-400"
          placeholder="Search..."
        />
      </div>
      <div className="mt-10 space-y-2">
        {loading && <Skeleton count={6} className="h-96" />}
        {posts.map((post) => (
          <Card key={post._id} post={post} />
        ))}
        {/* <Card/> */}
      </div>
      <div className="text-center flex justify-center gap-2 *:px-2 *:py-1 *:border *:rounded my-10 text-xl">
        <button
          className="bg-blue-200"
          onClick={() => {
            currentPage > 1 && (setCurrentPage(currentPage - 1), intoView())
          }}>
          Previous
        </button>
        {pages.map((num) => (
          <button
            className={currentPage === num && "bg-blue-400"}
            onClick={() => {
              setCurrentPage(num);
              intoView();
            }}
            key={num}>
            {num}
          </button>
        ))}
        <button
          className="bg-blue-200"
          onClick={() => {
            currentPage < pages.length &&
              (setCurrentPage(currentPage + 1), intoView());
          }}>
          Next
        </button>
      </div>
    </div>
  );
};

export default AllServices;
