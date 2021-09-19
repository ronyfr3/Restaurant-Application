import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RegisterAuthAction } from "../../redux/actions/auth/auth";
//toastify
const Register = () => {
  const { error } = useSelector((state) => state.user);
  // console.log(error);
  const dispatch = useDispatch();
  const history = useHistory();

  const validate = Yup.object({
    title: Yup.string()
      .max(5, "Must be 5 characters or less")
      .required("title is Required"),

    name: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("name is Required"),
    address: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("address is Required"),
    city: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("city is Required"),
    postcode: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("postcode is Required"),
    phone: Yup.string()
      .max(20, "phone number must be valid & 20 characters or less")
      .required("phone number is Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });

  return (
    <Formik
      initialValues={{
        restaurant_id: "",
        title: "",
        name: "",
        address: "",
        city: "",
        postcode: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        // console.log("InputValues", values);
        let data = {
          restaurant_id: values.restaurant_id || 4,
          title: values.title,
          name: values.name,
          address: values.address,
          city: values.city,
          postcode: values.postcode,
          phone: values.phone,
          email: values.email,
          password: values.password,
        };
        dispatch(RegisterAuthAction(data, history));
      }}
    >
      {(formik) => (
        <div className="formik_wrapper">
          <Form className="formik_form">
            <h1 className="form_header">Sign Up</h1>
            <small className="errmsg">{error}</small>
            <TextField label="" name="restaurant_id" type="hidden" value="4" />
            <TextField label="title" name="title" type="text" />
            <TextField label="Name" name="name" type="text" />
            <TextField label="address" name="address" type="text" />
            <TextField label="city" name="city" type="text" />
            <TextField label="postcode" name="postcode" type="text" />
            <TextField label="phone" name="phone" type="text" />
            <TextField label="email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <button className="reg_btn" type="submit">
              Register
            </button>
            <button className="reset_btn" type="reset">
              Reset
            </button>
            <div className="reg_to_log">
              <small className="askhbssw">
                Already have an account? <Link to="/login">Login</Link>
              </small>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};
export default Register;
