// import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editBlog } from "../BlogReducer";
import TextField from "./TextField";
import AddBtn from "./AddBtn";
import { Formik, Form } from "formik";
import * as yup from "yup";

const EditBlog = () => {
  const validates = yup.object().shape({
    title: yup
      .string()
      .required("Title Is Required")
      .max(120, "Must be 120 or less letters ")
      .min(10),
    content: yup
      .string()
      .required("Content Is Required")
      .max(520, "Must be 500 or less letters ")
      .min(10),
  });

  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [values, setValues] = useState({
  //   title: "",
  //   content: "",
  // });

  const data = JSON.parse(localStorage.getItem("blogs"));
  const blog = data.find((blog) => blog.id === parseInt(params.id));
  if (blog) {
    var t = blog.title;
    var c = blog.content;
    // console.log("t", t);
    // console.log("c", c);
  }

  const handleUpdateBlog = (values) => {
    dispatch(
      editBlog({
        id: parseInt(params.id),
        title: values.title,
        content: values.content,
      })
    );
    alert("Blog Updated!!");
    navigate("/BlogList");
  };

  return (
    <>
      <h1 className="text-center m-5">EDIT BLOG</h1>
      <Formik
        initialValues={{ title: t, content: c }}
        validationSchema={validates}
        onSubmit={handleUpdateBlog}
      >
        {() => (
          <div className="container m-5">
            <Form>
              <div className="row justify-content-center">
                <div className="form-group col-md-4 col-md-offset-5 align-center ">
                  <TextField label="Title: " type="text" name="title" />
                  <TextField label="Content: " type="text" name="content" />
                  <div>
                    <AddBtn
                      style={{
                        marginLeft: "64px",
                        marginTop: "20px",
                        backgroundColor: "#1070ef",
                        color: "white",
                        width: "99px",
                      }}
                      type="submit"
                    >
                      {" "}
                      Edit Blog
                    </AddBtn>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default EditBlog;
