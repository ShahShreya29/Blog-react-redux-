import TextField from "./TextField";
import AddBtn from "./AddBtn";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBlog } from "../BlogReducer";
import { Formik, Form } from "formik";
import * as yup from "yup";

const AddBlog = () => {
  const validates = yup.object().shape({
    title: yup
      .string()
      .required("Name Is Required")
      .max(120, "Must be 120 or less letters ")
      .min(10),
    content: yup
      .string()
      .required("Name Is Required")
      .max(520, "Must be 500 or less letters ")
      .min(10),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddBlog = (e) => {
    // Dispatching the new blog with the current values
    dispatch(
      addBlog({
        title: e.title,
        content: e.content,
      })
    );

    navigate("/BlogList");
  };

  return (
    <>
      <h1 className="text-center m-5">ADD BLOG</h1>
      <Formik
        initialValues={{
          title: "",
          content: "",
        }}
        validationSchema={validates}
        onSubmit={handleAddBlog}
      >
        {(Formik) => (
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
                    >
                      {" "}
                      Add Blog
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

export default AddBlog;
