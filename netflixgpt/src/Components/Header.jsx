import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { netflix_logo } from "../Utils/Constants";
import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/firebase";
import { addUser, removeUser } from "../Redux/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";

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
        dispatch(removeUser())
      })
      .catch((error) => {});
  };
  console.log("before return")
  console.log(user)
  return (
    <div className="absolute  flex justify-between w-[100vw] px-5 py-3">
      <img
        className=" h-16 px-5 py-4 bg-gradient-to-t from-slate-900"
        src={netflix_logo}
      ></img>

      {user && (
        <div className="flex">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.tGq2V-jYrBmm_r0qgA910QHaFj&pid=Api&rs=1&c=1&qlt=95&w=139&h=104"
            className="h-12 w-12"
          ></img>

          <button
            className=" bg-red-600 h-10 w-16 rounded-xl mx-5"
            onClick={signOffClick}
          >
            sign off
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
