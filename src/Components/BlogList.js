import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import AddBtn from "./AddBtn";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteBlog } from "../BlogReducer";
import LogoutBtn from "./LogoutBtn";
import { useEffect, useState } from "react";

const BlogList = () => {
  var userName = sessionStorage.getItem("name");
  const [data, setData] = useState();
  const dispatch = useDispatch();
  let selectedId = 0;

  const handleRemoveBlog = (id) => {
    dispatch(deleteBlog(id));
    setData(JSON.parse(localStorage.getItem("blogs")));
  };

  const test = (id) => {
    selectedId = id;
  };

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
            <Link
              to={`/Edit/${blog.id}`}
              style={{ margin: "15px", color: "green", fontSize: "20px" }}
            >
              <CiEdit />
            </Link>
            <Link
              style={{ color: "red", fontSize: "20px" }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <AiOutlineDelete onClick={() => test(blog.id)} />
            </Link>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Delete BLog
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Are You Sure ? You Want To Delete This Blog ??
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => handleRemoveBlog(`${selectedId}`)}
                >
                  YES
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  No
                </button>
              </div>
            </div>
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
      <Link to="/AddBlog">
        <AddBtn
          style={{
            marginLeft: "145px",
            backgroundColor: "#1f813a",
            color: "white",
            marginTop: "15px",
          }}
        >
          {" "}
          Add Blog
        </AddBtn>
      </Link>
      <div className="text-center d-flex flex-wrap m-3 p-3 justify-content-center">
        {data !== "" && data !== null && data !== undefined ? (
          renderBlogs()
        ) : (
          <p>No Blogs</p>
        )}
      </div>
    </>
  );
};

export default BlogList;
