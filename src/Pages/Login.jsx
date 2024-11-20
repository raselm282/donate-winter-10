import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../AuthProvider/Firebase.init";
const Login = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const { handleLogin, user } = useContext(AuthContext);
  const emailRef = useRef()
  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    handleLogin(email, password)
      .then((result) => {
        toast.success("Successfully Login!");
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleForgotPassword = () => {
    // console.log(emailRef.current.value);
    const email = emailRef.current.value
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent!")
        // ..
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };
  return (
    <div className="max-w-lg mx-auto my-10">
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form onSubmit={handleLoginForm} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <button
              type="button"
              className="absolute top-[52px] right-5"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
            <label className="label">
              <a
                onClick={handleForgotPassword}
                href="#"
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </a>
            </label>
            {error && <label className="label text-red-500">{error}</label>}
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary text-xl">
              Login
            </button>
          </div>
        </form>
      </div>
      <p className="my-8 ml-6">
        New to This Website? Please{" "}
        <Link className="underline text-blue-900" to={"/register"}>
          Register
        </Link>
        .
      </p>
    </div>
  );
};

export default Login;
