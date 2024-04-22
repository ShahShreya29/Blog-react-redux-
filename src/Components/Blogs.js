import { Link } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";
import { useEffect, useState } from "react";

const Blogs = () => {
  var userName = sessionStorage.getItem("name");
  const [data, setData] = useState();

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("blogs")));
  }, [setData]);

  const renderBlogs = () =>
    data.map((blog) => (
      <div key={blog.id}>
        {console.log(blog, blog.id)}
        <div className="card m-2" style={{ width: "20rem" }}>
          <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
            <p className="card-text">{blog.content}</p>
          </div>
        </div>
      </div>
    ));

  return (
    <>
      <div className="justify-content-between m-5">
        <h3 className="ml-5">Welcome {userName}</h3>
        <Link to="/LoginForm">
          <LogoutBtn />
        </Link>
      </div>
      <h1 style={{ color: "black" }} className="text-center m-3">
        Blogs
      </h1>{" "}
      <div className="text-center d-flex flex-wrap m-3 p-3 justify-content-center">
        {data !== "" && data !== null && data !== undefined
          ? renderBlogs()
          : "No Blogs"}
      </div>
    </>
  );
};

export default Blogs;
