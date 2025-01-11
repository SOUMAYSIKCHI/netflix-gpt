import React, { useRef, useState } from "react";
import Header from "../Components/Header";
import FreqItem from "../Components/FreqItem";
import {freqdata} from "../utils/freqdata";
import { RxCross2 } from "react-icons/rx";

export const Body = () => {
  const [signUp, setSignUp] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const firstname = useRef(null);
  const [showIndex,setShowIndex] = useState(null);
  function signUpToggle() {
    setSignUp(!signUp);
  }
  function setShowIndex1(index){
    if(showIndex==index){
        setShowIndex(null)
    }else{
    setShowIndex(index);
    }
  }

  return (
    <div className="w-full font-Segoe UI Symbol">
      <Header />
      {/* bg - img */}
      <div className="w-full">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg"
          alt=""
        />
      </div>
      {/* form */}
      <div className="absolute text-white w-full top-[140px] opacity-90 ">
        <form
          className="w-9/12  lg:w-4/12  font-Segoe UI Symbol bg-black rounded-md px-14 py-10 mx-auto  "
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1 className="font-bold font-Segoe UI Symbol  text-3xl">
            {signUp ? "Sign Up" : "Sign In"}
          </h1>
          {signUp && (
            <input
              className=" mt-6 px-4 py-2 text-[20px] w-full rounded-sm bg-black opacity-90 border-2 border-gray-700 "
              type="firstname"
              name="firstname"
              id="firstname"
              ref={firstname}
              placeholder="Name"
            />
          )}
          <input
            className="mt-6 px-4 py-2 text-[20px] w-full rounded-sm bg-black opacity-90 border-2 border-gray-700 "
            type="email"
            name="email"
            id="email"
            ref={email}
            placeholder="Email"
          />
          <input
            className=" mt-6 px-4 py-2 text-[20px] w-full rounded-sm bg-black opacity-90 border-2 border-gray-700 "
            type="password"
            name="password"
            id="password"
            ref={password}
            placeholder="Password"
          />

          <button className="mt-6 px-4 py-2 text-[20px] w-full rounded-md bg-red-700 opacity-100 ">
            {signUp ? "Sign Up" : "Sign In"}
          </button>

          <p
            onClick={signUpToggle}
            className="mt-6 text-wrap px-4 py-2 text-[20px] font-bold cursor-pointer"
          >
            {signUp ? "Already have an Account ?" : "New to Netflix ?"}{" "}
            <span className="text-red-800 text-wrap">
              {" "}
              {signUp ? "Sign in now." : "Sign up now."}.
            </span>
          </p>
        </form>
      </div>

      {/* footer */}
      <div className=" bg-black text-white">
        <div className="w-4/5 p-6 mx-auto">
          <h1 className="text-2xl font-Segoe UI Symbol font-bold">
            Frequently Asked Questions
          </h1>
          {
            freqdata.map((ele,index)=>{
                return <FreqItem key={ele.title} ele ={ele} 
                showItems={index === showIndex ? true : false}
                setShowIndex1={()=>setShowIndex1(index)}
                />
            })
          }
        </div>
      </div>
    </div>
  );
};