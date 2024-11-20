import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const{handleSignOut,user} = useContext(AuthContext)
    const links = 
    <>
       <li><NavLink to={"/"}>Home</NavLink></li> 
       <li><NavLink to={"/donationCampaigns"}>Donation Campaigns</NavLink></li> 
       <li><NavLink to={"/howToHelp"}>How to Help</NavLink></li> 
       <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li> 
    </>
  return (
    
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <NavLink to={"/"} className="btn btn-ghost text-2xl flex items-center justify-center"><img src="https://i.ibb.co.com/pZYt7Kt/donate-logo.jpg" className="w-10 rounded-full" alt="" /><span>Donate For Winter</span></NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">
        {links}
        </ul>
      </div>
      <div className="navbar-end">
        
        {/* <NavLink to={"/login"} className="btn text-lg">Login</NavLink> */}
        {user? <div className="flex flex-row gap-5"><img className="w-12 h-12 rounded-full border-2 border-gray-600" src={user?.photoURL} alt="Logout" /> <button onClick={handleSignOut} className="btn btn-neutral">Log Out</button></div> : <NavLink to={"/login"} className="btn btn-neutral">Login</NavLink>}
      </div>
    </div>
  );
};

export default Navbar;
