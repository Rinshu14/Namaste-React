import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { netflix_logo } from "../Utils/Constants";
import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/firebase";
import { addUser, removeUser } from "../Redux/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { user_profile_icon,gptSearch,home } from "../Utils/Constants";
import { FiLogOut } from "react-icons/fi";
import { toggleShowSearchGPT } from "../Redux/GPTSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const  showSearchGPT =useSelector((state)=>state.GPTSlice.showSearchGPT)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, photoURL, uid } = auth.currentUser;
        dispatch(
          addUser({
            userId: uid,
            userName: displayName,
            email: email,
            dispalyPhoto: photoURL,
          })
        );

        navigate("/browse");
      } else {
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const toggelGPTSrearch=()=>{
    dispatch(toggleShowSearchGPT())

  }

  const signOffClick = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {});
  };
  // px-5 py-3
  return (
    <div className="absolute flex sm:justify-between w-screen bg-slate-950 md:bg-gradient-to-b from-slate-900 z-10">
      <img className=" h-16 px-2 py-5 md:px-5 md:py-4 " src={netflix_logo}></img>

      {user && (
        <div className="flex py-3 mx-3">
      <button className="w-28 rounded-xl h-8 text-sm ml-[4.5rem] mr-5  md:mx-5 cursor-pointer bg-gradient-to-r from-pink-800 to-pink-950  text-white realtive z-10" onClick={toggelGPTSrearch}>
           {showSearchGPT? home: gptSearch}
          </button> 
        
          <img src={user_profile_icon} className="h-7 w-7"></img>
          <FiLogOut className="w-6 h-6 m-1 mx-4 md:mx-5 text-white cursor-pointer" onClick={signOffClick}/>
        </div>
      )}
    </div>
  );
};

export default Header;
