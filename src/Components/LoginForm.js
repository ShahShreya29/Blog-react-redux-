// import React, { useState } from "react";
import "./LoginForm.module.css";
import TextField from "./TextField";
import AddBtn from "./AddBtn";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { logIn } from "../AuthReducer";

const LoginForm = () => {
  const validate = yup.object({
    email: yup.string().email("invalid email").required("email is required"),
    password: yup
      .string()
      .required("Password is Required")
      .min(6, "At Least 6 Character"),
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [values,setValues] = useSta

  const handleLogin = (e) => {
    var user = JSON.parse(localStorage.getItem("users"));

    user = user.find(function (user) {
      if (e.email === user.email && btoa(e.password) === user.password) {
        alert("login SuccessFully");
        if (user.role === "user") {
          navigate("/Blogs");
        } else {
          navigate("/BlogList");
        }
        sessionStorage.setItem("user", JSON.stringify({ userEmail: e.email }));
        dispatch(logIn({ userEmail: e.email }));
      } else {
        alert("invalid username or password");
      }
    });
  };

  // const handleLogin = (e) => {
  //   // e.preventDefault();

  //   const formData = {
  //     email: e.email,
  //     password: e.password,
  //   };

  //   const errors = validate.validate(formData);

  //   if (errors.length > 0) {
  //     alert(errors.join("\n"));
  //   } else {
  //     var users = JSON.parse(localStorage.getItem("users")) || [];
  //     sessionStorage.setItem("ce", e.email);

  //     //  Find the user with the matching email
  //     var user = users.find(function (user) {
  //       return user.email === e.email;
  //     });

  //     if (user) {
  //       // Check if passwords match
  //       if (user.password === btoa(e.password)) {
  //         alert("Login successful for " + user.name + "!");
  //         sessionStorage.setItem('name',user.name)
  //         if (user.role === "user") {
  //           navigate("/Blogs");
  //         } else {
  //           navigate("/BlogList");
  //         }
  //       }else{
  //         alert('invalid login')
  //       }
  //     }else{
  //       alert('Please Signup first')
  //     }
  //   }

  // };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validate}
        onSubmit={handleLogin}
      >
        {(Formik) => (
          <div className="container m-5">
            <Form>
              <div className="row justify-content-center">
                <div className="form-group col-md-4 col-md-offset-5 align-center ">
                  <h1 className="m-5 text-center">Login </h1>
                  <TextField label="Email: " type="email" name="email" />
                  <TextField
                    label="Password: "
                    type="password"
                    name="password"
                  />
                  <div>
                    <AddBtn
                      style={{
                        marginLeft: "130px",
                        marginTop: "10px",
                        backgroundColor: "#1070ef",
                        color: "white",
                        width: "99px",
                      }}
                    >
                      {" "}
                      LogIn
                    </AddBtn>
                  </div>
                  <h6 className="text-center m-3">
                    PLEASE <Link to="/">SIGNUP!!</Link> FIRST
                  </h6>
                </div>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
