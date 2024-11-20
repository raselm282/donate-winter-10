import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../AuthProvider/Firebase.init";
import toast from "react-hot-toast";

const UpdateProfile = () => {
    const navigate = useNavigate()
    const handleUpdateProfile = (e)=>{
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        console.log(name,photo);

        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          }).then(() => {
            toast.success("Profile updated!")
            navigate("/dashboard")
          }).catch((error) => {
            // An error occurred
            // ...
          });

    }
    return (
        <div className="max-w-lg mx-auto my-10">
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form onSubmit={handleUpdateProfile} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo"
              className="input input-bordered"
              required
            />
            {/* <button
              type="button"
              className="absolute top-[52px] right-5"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button> */}
            {/* <label className="label">
              <a
                onClick={handleForgotPassword}
                href="#"
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </a>
            </label> */}
            {/* {error && <label className="label text-red-500">{error}</label>} */}
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

export default UpdateProfile;