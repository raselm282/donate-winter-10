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