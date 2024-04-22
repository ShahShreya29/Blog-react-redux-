import React, { useState } from "react";
import TextField from "./TextField";
import AddBtn from "./AddBtn";
import { Link, useNavigate } from "react-router-dom";
import SelectField from "./SelectField";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { signUP } from "../AuthReducer";

const SignupForm = () => {
  const validates = yup.object().shape({
    name: yup
      .string()
      .required("Name Is Required")
      .max(10, "Must be 10 or less letters "),
    email: yup.string().email("invalid email").required("email is required"),
    password: yup
      .string()
      .required("Password is Required")
      .min(6, "At Least 6 Character"),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState();

  const options = [
    { value: "user", label: "User" },
    { value: "admin", label: "Admin" },
  ];

  const handleSignup = (e) => {
    var users = JSON.parse(localStorage.getItem("users")) || [];
    console.log(users);
    const existingUser = users.find((user) => user.email === e.email);
    if (existingUser) {
      alert("User Already Exists");
    } else {
      alert("Sigh UP SuccessFully ");
      navigate("/LoginForm");
      users.push({
        name: e.name,
        email: e.email,
        password: btoa(e.password),
        role: values.options,
      });
      localStorage.setItem("users", JSON.stringify(users));

      dispatch(signUP(values));
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={validates}
        onSubmit={handleSignup}
      >
        {(Formik) => (
          <div className="container m-5">
            <Form>
              <div className="row justify-content-center">
                <div className="form-group col-md-4 col-md-offset-5 align-center ">
                  <h1 className="m-5 text-center">SignUp </h1>
                  <TextField label="Name: " type="text" name="name" id="name" />
                  <TextField
                    label="Email: "
                    type="email"
                    name="email"
                    id="email"
                  />
                  <TextField
                    label="Password: "
                    type="password"
                    name="password"
                    id="password"
                  />

                  <div className="mb-3">
                    <SelectField
                      name="role"
                      label={options.label}
                      options={options}
                      value={options.value}
                      onChange={(e) =>
                        setValues({ ...values, options: e.target.value })
                      }
                    />
                  </div>
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
                      SignUP
                    </AddBtn>
                  </div>
                  <h6 className="text-center m-3">
                    Already Have Account <Link to="/LoginForm">LogIn!!</Link>
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

export default SignupForm;
