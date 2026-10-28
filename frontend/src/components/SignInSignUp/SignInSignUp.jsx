import React, { useState, useEffect } from "react";
import styles from "../../styles/SignInSignUp.module.css";
import { showError, showSucess } from "../../utils/toastUtils";
import endpoints from "../endpoints/endpoints";
import { useNavigate } from "react-router-dom";

const SignInSignUp = () => {
  const Endpoints = new endpoints();
  const navigator = useNavigate();
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPasswordSignup, setShowPasswordSignup] = useState(false);
  const [showConfirmPasswordSignup, setShowConfirmPasswordSignup] = useState(false);
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);

  const [formDataLogin ,setFormDataLogin] = useState({
    email:"",
    password:""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleChangeLogin = (e) => {
    setFormDataLogin({ ...formDataLogin, [e.target.name]: e.target.value });
  };
  const validate = (type) => {
    if (!formData.email) {
      showError("Email is required");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      showError("Email is not valid");
      return false;
    }

    if (formData.password.length < 3) {
      showError("Password must be at least 3 characters");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      showError("Password and Confirm Password do not match");
      return false;
    }
    if (!formData.name) {
      showError("Name is required");
      return false;
    }
    if (formData.name.length < 3) {
      showError("Name must be at least 3 characters");
      return false;
    }
    return true;
  };

  const loginvalidate = (type) => {
    if (!formDataLogin.email) {
      showError("Email is required");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(formDataLogin.email)) {
      showError("Email is not valid");
      return false;
    }
    else if (!formDataLogin.password) {
      showError("Password is required");
      return false;
    }
    return true;
  }

  const handleSignupFormSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate("signup");
    if (!isValid) return;
    setLoading(true);
    const { name, email, password } = formData;
    try {
      const response = await fetch(Endpoints.SIGNUP_URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (response.status === 200) {
        showSucess("User created successfully");
       const data = await response.json();
        localStorage.setItem("token", data.token);
       navigator("/")
        setLoading(false)
    }
   } catch (err) {
      console.log(err);
      showError("Internal server error");
      setLoading(false);
    }
  };
  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    
    const isValid = loginvalidate("login");
    if (!isValid) return;
    setLoading(true);
    const { email, password } = formDataLogin;
    try {
      const response = await fetch(Endpoints.LOGIN_URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (response.status === 200) {
        showSucess("User logged in successfully");
        const data = await response.json();
        localStorage.setItem("token", data.token);
        window.dispatchEvent(new Event("userUpdated"));
        navigator("/")
        setLoading(false)
      }
      if (response.status === 401) {
        showError("Invalid credentials");
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      showError("Internal server error");
      setLoading(false);
    }
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowForm(isSignUpMode);
    }, 700);

    return () => clearTimeout(timeout);
  }, [isSignUpMode]);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    <div
      className={`${styles.container} ${
        isSignUpMode ? styles["sign-up-mode"] : ""
      }`}
    >
      <div className={styles["forms-container"]}>
        <div className={styles["signin-signup"]}>
          {showForm ? (
            <form
              className={styles["sign-up-form"]}
              onSubmit={handleSignupFormSubmit}>
              <h2 className={styles.title}>Sign up</h2>
              <div className="w-full max-w-xs flex items-center bg-gray-100 rounded-full px-4 py-2 mb-4">
                <i className="fas fa-user text-gray-400 mr-3"></i>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="bg-transparent outline-none flex-1 text-sm text-gray-700"/>
              </div>
              <div className="w-full max-w-xs flex items-center bg-gray-100 rounded-full px-4 py-2 mb-4">
                <i className="fas fa-user text-gray-400 mr-3"></i>
                <input
                  required
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="bg-transparent outline-none flex-1 text-sm text-gray-700"/>
              </div>
              <div className="w-full max-w-xs relative bg-gray-100 rounded-full px-4 py-2 mb-4 flex items-center">
                <i className="fas fa-lock text-gray-400 mr-3"></i>
                <input
                  required
                  type={showPasswordSignup ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder:text-left pr-8"/>
                <span
                  onClick={() => setShowPasswordSignup(!showPasswordSignup)}
                  className="absolute right-4 text-gray-400 cursor-pointer">
                  <i className={`fas ${showPasswordSignup ? "fa-eye" : "fa-eye-slash"}`}></i>
                </span>
              </div>

              <div className="w-full max-w-xs relative bg-gray-100 rounded-full px-4 py-2 mb-4 flex items-center">
                <i className="fas fa-lock text-gray-400 mr-3"></i>
                <input
                  required
                  type={showConfirmPasswordSignup ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder:text-left pr-8"/>
                <span
                  onClick={() => setShowConfirmPasswordSignup(!showConfirmPasswordSignup)}
                  className="absolute right-4 text-gray-400 cursor-pointer">
                  <i className={`fas ${showConfirmPasswordSignup ? "fa-eye" : "fa-eye-slash"}`}></i>
                </span>
              </div>

              <button
                type="submit"
                className="primary-btn m-2"
                disabled={loading}
              >
                {loading ? (
                  <span>
                    <i className="fas fa-spinner fa-spin mr-2"></i> Signing
                    up...
                  </span>
                ) : (
                  "Sign up"
                )}
              </button>

              <p className={styles["social-text"]}>
                Or Sign up with social platforms
              </p>
              <div className={styles["social-media"]}>
                {["google"].map((icon) => (
                  <a key={icon} href="#" className={styles["social-icon"]}>
                    <i className={`fab fa-${icon}`}></i>
                  </a>
                ))}
              </div>
            </form>
          ) : (
            <form className={styles["sign-in-form"]} onSubmit={handleLoginFormSubmit}>
              <h2 className={styles.title}>Sign in</h2>
              <div className="w-full max-w-xs flex items-center bg-gray-100 rounded-full px-4 py-2 mb-4">
                <i className="fas fa-user text-gray-400 mr-3"></i>
                <input
                  required
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formDataLogin.email}
                  onChange={handleChangeLogin}
                  className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder:text-left"/>
              </div>
              <div className="w-full max-w-xs relative bg-gray-100 rounded-full px-4 py-2 mb-4 flex items-center">
                <i className="fas fa-lock text-gray-400 mr-3"></i>
                <input
                  required
                  type={showPasswordLogin ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={formDataLogin.password}
                  onChange={handleChangeLogin}
                  className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder:text-left pr-8"/>
                <span
                  onClick={() => setShowPasswordLogin(!showPasswordLogin)}
                  className="absolute right-4 text-gray-400 cursor-pointer">
                  <i className={`fas ${showPasswordLogin ? "fa-eye" : "fa-eye-slash"}`}></i>
                </span>
              </div>

              <button type="submit" className="primary-btn m-2" disabled={loading}>
              {loading ? (
                  <span>
                    <i className="fas fa-spinner fa-spin mr-2"></i> Please
                    wait...
                  </span>
                ) : (
                  "Login"
                )}
                </button>

              <button
                type="button"
                className="text-black-500 hover:text-blue-700"
              >
                Forgot Password?
              </button>

              <p className={styles["social-text"]}>
                Or Sign in with social platforms
              </p>
              <div className={styles["social-media"]}>
                {["google"].map((icon) => (
                  <a key={icon} href="#" className={styles["social-icon"]}>
                    <i className={`fab fa-${icon}`}></i>
                  </a>
                ))}
              </div>
            </form>
          )}
        </div>
      </div>

      <div className={styles["panels-container"]}>
        <div className={`${styles["panel"]} ${styles["left-panel"]}`}>
          <div className={styles.content}>
            <h3>New here?</h3>
            <p>Join us today to access premium features!</p>
            <button
              className={`${styles.btn} ${styles.transparent}`}
              onClick={handleSignUpClick}
            >
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className={styles.image} alt="" />
        </div>
        <div className={`${styles["panel"]} ${styles["right-panel"]}`}>
          <div className={styles.content}>
            <h3>One of us?</h3>
            <p>Sign in to continue your journey.</p>
            <button
              className={`${styles.btn} ${styles.transparent}`}
              onClick={handleSignInClick}
            >
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className={styles.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
