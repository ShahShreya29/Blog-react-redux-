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
  let loggedUser = {};

  const handleLogin = (e) => {
    var users = JSON.parse(localStorage.getItem("users"));
    let isUserValid = false;
    users.map((user) => {
      if (e.email === user.email && btoa(e.password) === user.password) {
        sessionStorage.setItem("name", user.name);
        sessionStorage.setItem("user", JSON.stringify({ userEmail: e.email }));
        dispatch(logIn({ userEmail: e.email }));
        isUserValid = true;
        loggedUser = user;
      }
    });
    if (isUserValid) {
      alert("login SuccessFully " + loggedUser.name);
      if (loggedUser.role === "user") {
        navigate("/Blogs");
      } else {
        navigate("/BlogList");
      }
    } else {
      alert("invalid username or password");
    }
  };

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
                    PLEASE <Link to="/Blog-react-redux/">SIGNUP!!</Link> FIRST
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
