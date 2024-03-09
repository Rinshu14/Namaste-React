import React from "react";
import { useState, useRef } from "react";
import { signInValidator } from "../Utils/CommonMethods";
import { auth } from "../Utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/userSlice";

import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isError, setIsError] = useState("");
  const dispatch = useDispatch();
  

  let handleToggel = () => {
    setIsSignIn(!isSignIn);
  };

  let fullName = useRef(null);
  let email = useRef(null);
  let password = useRef(null);

  let handleClick = () => {
    let message = signInValidator(email.current.value, password.current.value);
    setIsError(message);
    if (message) return;

    if (isSignIn) {
      //singn logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {})
        .catch((error) => {
          setIsError(error.message);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: fullName.current.value,
            photoURL:
              "https://tse1.mm.bing.net/th?id=OIP.1-EZQ3Fc2-y07ZyljzT9oQHaE7&pid=Api&rs=1&c=1&qlt=95&w=157&h=104",
          })
            .then(() => {
              const { displayName, email, photoURL, uid } = auth.currentUser;
              dispatch(
                addUser({
                  userId: uid,
                  userName: displayName,
                  email: email,
                  dispalyPhoto: photoURL,
                })
              );
            })
            .catch((error) => {
              setIsError(error.message);
            });
        })
        .catch((error) => {
          setIsError(error.message);
        });
    }
  };

  return (
    <div className=" bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg')] h-[100vh] flex flex-col ">
      <Header />

      <div className=" bg-slate-800  w-[22rem]   bg-opacity-80 rounded-md m-auto p-3">
        <span className="text-slate-200 m-6 font-medium text-2xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </span>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex flex-col"
        >
          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="rounded-lg bg-gray-900 m-auto my-4 w-72 h-10 p-4 mb-0 outline-none caret-slate-300 text-white"
              ref={fullName}
            />
          )}
          <input
            className={
              " rounded-lg bg-gray-900 m-auto my-4 w-72 h-10 p-4 mb-0 outline-none caret-slate-300 text-white"
            }
            type="text"
            placeholder="Email or Phone Number"
            id="email"
            ref={email}
          />

          <input
            className=" rounded-lg bg-gray-900 m-auto my-4 w-72 h-10 p-4 outline-none caret-slate-300 text-white mb-1"
            placeholder="Password"
            type="text"
            id="password"
            ref={password}
          />
          <p className="text-red-700 mx-6 mb-4">{isError}</p>
          <button
            className=" bg-red-600 rounded-md m-auto w-72  h-10 content-center text-white font-semibold "
            onClick={handleClick}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <p
            className="text-slate-200  m-auto my-4  cursor-pointer"
            onClick={handleToggel}
          >
            {isSignIn
              ? " New to Netflix ?Sign Up now"
              : "Already Registered ?Sign In now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
