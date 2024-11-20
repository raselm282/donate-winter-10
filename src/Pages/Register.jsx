import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";
const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {
    signInWithGoogle,
    createUser,
    setUser,
    handleProfile,
    handleSignOut,
  } = useContext(AuthContext);
const signInWithGoogleFn=()=>{
  signInWithGoogle()
  navigate("/")
}
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      setError("Give at least 6 characters");
      return;
    }
    const passwordRegex = /^(?=.*[a-z]).*$/;
    const passwordRegexUpper = /^(?=.*[A-Z]).*$/;

    if (!passwordRegex.test(password)) {
      setError("Give at least one lowercase");
      return;
    }
    if (!passwordRegexUpper.test(password)) {
      setError("Give at least one uppercase");
      return;
    }
    createUser(email, password)
      .then((result) => {
        setSuccess(true);
        toast.success('Successfully Sign Up Go to Login!')
        handleSignOut();
        handleProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/login");
          })
          .catch((err) => err.message);
        e.target.reset();
        navigate("/login");
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div className="card bg-base-100 w-full shrink-0 shadow-2xl max-w-lg mx-auto my-10">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Photo"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
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
        </div>
        <label className="label">
          <span className="label-text text-red-500">{error}</span>
        </label>

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary text-xl">
            Register
          </button>
        </div>
      </form>

      <div className="my-8 ml-6 space-y-5">
        <p>
          Have an Account? Please{" "}
          <Link className="text-blue-900 underline" to={"/login"}>
            Login
          </Link>
          .
        </p>
        <button onClick={signInWithGoogleFn} className="btn btn-neutral">
        <FaGoogle /> Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
