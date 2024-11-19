import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "./Firebase.init";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const provider = new GoogleAuthProvider();
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true)
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      toast.success('Successfully Google Login!')
    }).catch((error) => {
      
    });
  };
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  };

  const handleLogin = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const handleSignOut = ()=>{
    setLoading(true)
    return signOut(auth)
  }

  const handleProfile = (updatedData)=>{
    setLoading(true)
    return updateProfile(auth.currentUser, updatedData)
  }
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
  })
  return ()=>unSubscribe()
  },[])
  const allData = {
    signInWithGoogle,
    setUser,
    user,
    createUser,
    handleLogin,
    handleSignOut,
    handleProfile,
    loading
  };
  return (
    
    <AuthContext.Provider value={allData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

// export default AuthProviders;
// import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProvider";
// import { Navigate } from "react-router-dom";

// const PrivateRoutes = ({children}) => {

//     const {user, loading}= useContext(AuthContext)

//     if(loading){
//         return <span className="loading loading-spinner text-success"></span>
//     }
//     if(user){
//         return children
//     }
//     return (

//         <Navigate to={"/login"}></Navigate>
//     );
// };

// export default PrivateRoutes;

// ---------------------------
// import {
//     createUserWithEmailAndPassword,
//     GoogleAuthProvider,
//     onAuthStateChanged,
//     signInWithEmailAndPassword,
//     signInWithPopup,
//     signOut,
//   } from "firebase/auth";
//   import React, { createContext, useEffect, useState } from "react";
//   import { auth } from "../Firebase.init";

//   export const AuthContext = createContext(null);
//   const googleProvider = new GoogleAuthProvider()
//   const AuthProvider = ({ children }) => {

//       const [user, setUser]= useState(null)
//       const [loading, setLoading] = useState(true)
//     const createUser = (email, password) => {
//       setLoading(true)
//       return createUserWithEmailAndPassword(auth, email, password);
//     };
//     const signInWith = (email, password) => {
//       setLoading(true)
//       return signInWithEmailAndPassword(auth, email, password);
//     };
//     const signOutUser = ()=>{
//       setLoading(true)
//       return signOut(auth)
//     }

//     const signInWithGoogle =()=>{
//       return signInWithPopup(auth, googleProvider)
//     }

//     useEffect(()=>{
//       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
//           console.log("current user", currentUser);
//           setUser(currentUser)
//           setLoading(false)

//         })
//         return ()=>{
//           unSubscribe()
//         }
//     },[])

//     const name = "alu vaz";
//     const authInfo = {
//       name,
//       user,
//       loading,
//       signInWithGoogle,
//       signInWith,
//       signOutUser,
//       createUser,
//     };
//     return (
//       <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//     );
//   };

//   export default AuthProvider;
