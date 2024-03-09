import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { netflix_logo } from "../Utils/Constants";
import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/firebase";
import { addUser, removeUser } from "../Redux/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { user_profile_icon } from "../Utils/Constants";
import { FiLogOut } from "react-icons/fi";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

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

  const signOffClick = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {});
  };
  // px-5 py-3
  return (
    <div className="absolute flex justify-between w-[100vw] bg-gradient-to-b from-slate-900 z-10">
      <img className=" h-16 px-5 py-4 " src={netflix_logo}></img>

      {user && (
        <div className="flex py-3 mx-3">
          <img src={user_profile_icon} className="h-7 w-7"></img>
          {/* <button className="mx-5 cursor-pointer" onClick={signOffClick}>
            <FiLogOut className="w-6 h-6  text-white" />
          </button> */}
          <FiLogOut className="w-6 h-6 m-1 mx-5 text-white cursor-pointer" onClick={signOffClick}/>
        </div>
      )}
    </div>
  );
};

export default Header;
