import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Dashboard = () => {
  const handleUpdateProfile = () => {
    navigate("/update-profile");
  };
  const {user} = useContext(AuthContext)
  console.log(user);
  return (
    <div>
      <Helmet>
        <title>Donate For Winter | Dashboard</title>
      </Helmet>
      <div className="max-w-[90%] mx-auto p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Welcome, {user.displayName}!
        </h1>
        <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <img
            src={user?.photoURL}
            alt={`${user.displayName}'s Profile`}
            className="w-32 h-32 rounded-full mb-4"
          />
          <div className="text-gray-700 ">
            <p className="text-lg mb-2">
              <strong>Name:</strong> {user.displayName}
            </p>
            <p className="text-lg mb-4">
              <strong>Email:</strong> {user.email}
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md text-lg"
              onClick={handleUpdateProfile}
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
