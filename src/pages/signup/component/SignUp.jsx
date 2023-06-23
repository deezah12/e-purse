import React, { useState } from "react";
// import SignUpImage from "../../../assets/images/svg/signup-image.svg";
import eye from "../../../assets/icons/svg/eyeslash.svg";
import eyeOpen from "../../../assets/icons/svg/eye.svg";
import "../styles/signup.css";
import SignUpImage from "../../../assets/images/png/webpix.png";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Simulating API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Perform API call to register the user with form values
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (response.ok) {
        // Reset form after successful submission
        resetForm();

        // Show success message or redirect to another page
        alert("Signup successful!");
      } else {
        throw new Error("Signup failed");
      }
    } catch (error) {
      // Handle error from API call
      console.error("Signup failed:", error);
      alert("Signup failed. Please try again.");
    } finally {
      // Reset submitting state
      setSubmitting(false);
    }
  };
  const [visible, setVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="signup-main-ctn">
      <div>
        <img src={SignUpImage} alt="Login image" className="signup-img" />
      </div>
      <div className="form-ctn">
        <div>
          <p className="signup-txt">
            <span className="welcome">Welcome!</span>
            Sign up by entering the information below.
          </p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <form className="sign-up-form">
            <div className="form-group">
              <Field
                type="text"
                id="firstName"
                name="firstName"
                placeholder="FirstName:"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <Field
                type="text"
                id="lastName"
                name="lastName"
                placeholder="LastName:"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Email:"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Password:"
              />
              <div
                className="eye-icon"
                onClick={togglePasswordVisibility}
                onKeyDown={togglePasswordVisibility}
                role="button"
                tabIndex={0}
              >
                <img
                  src={visible ? eyeOpen : eye}
                  alt=""
                  style={{
                    paddingLeft: "23rem",
                    cursor: "pointer",
                  }}
                />
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>
          </form>
        </Formik>

        <div className="login-ctn">
          <p className="acct-tag">Already have an account ?</p>
          <a className="login-btn" href="/login">
            Login
          </a>
        </div>

        <button type="submit" className="sign-up-button">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
