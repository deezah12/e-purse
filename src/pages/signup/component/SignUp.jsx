import React, { useState } from "react";
// import SignUpImage from "../../../assets/images/svg/signup-image.svg";
import eye from "../../../assets/icons/svg/eyeslash.svg";
import eyeOpen from "../../../assets/icons/svg/eye.svg";
import "../styles/signup.css";
import SignUpImage from "../../../assets/images/png/webpix.png";
const SignUp = () => {
  const [visible, setVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <div className="signup-main-ctn">
        <div className="signup-image">
          <img className="signup-img" src={SignUpImage} alt="sign-up-image" />
          <div></div>
        </div>
        <div className="sign-up-form">
          <p className="signup-txt">
            <span className="welcome">Welcome!</span>
            Sign up by entering the information below
          </p>
          <div>
            <form>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="First Name"
                  id="fname"
                  name="fname"
                  required
                />
              </div>

              <div class="form-group">
                <input
                  type="text"
                  placeholder="Last Name"
                  id="lname"
                  name="lname"
                  required
                />
              </div>

              <div class="form-group">
                <input
                  type="text"
                  placeholder="Email"
                  id="email"
                  name="email"
                  required
                />
              </div>

              <div class="form-group">
                <input
                  type={visible ? "text" : "password"}
                  placeholder="Password"
                  id="password"
                  name="password"
                  required
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
                      //   width: "10%",
                    }}
                  />
                </div>
              </div>
            </form>

            <div className="login-ctn">
              <p>Already have an account?</p>
              <p>
                <a href="/login">Login</a>
              </p>
            </div>

            <div className="sign-up-button">
              <button>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
