import React, { useState } from "react";
import { InputField } from "../components/InputFields";
import { Button } from "../components/Button";
// import { IoIosChatbubbles } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase/index";
// import { useDispatch } from "react-redux";

export const SignUpPage = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate(); 
  // const dispatch = useDispatch();

  const onHandleChange = (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };
  const onHandleSubmit = (e) => {
      e.preventDefault();

    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("User-->", user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error Message--> ", errorMessage);
        // ..
      });
  };
  return (
    <div className="w-full h-screen grid place-content-center bgPic ">
      <div className="flex shadow-lg shadow-black rounded-3xl m-5">
        <div className="md:w-[400px] md:h-full w-full h-auto bg-gradient-to-t from-red-900 to-black p-2 rounded-l-3xl">
          <div className="flex flex-wrap justify-center items-center py-[170px] gap-4">
            {/* <span>
              <IoIosChatbubbles className="text-5xl md:text-6xl font-medium text-center text-white" />
            </span> */}
            <h1 className="text-lg text-center py-4 md:text-4xl font-medium  text-white px-1">
              WELCOME TO OUR <br />
              BLOODY HACKS
            </h1>
          </div>
        </div>
        <div className="md:w-[400px] md:h-full w-full h-auto p-2 bg-slate-50 rounded-r-3xl">
          <h1 className="text-xl md:text-3xl font-medium text-center my-5 ">
            SignUpPage
          </h1>
          <form onSubmit={onHandleSubmit}>
            <div>
              <InputField
                type="text"
                id="firstname"
                placeholder="Enter First name"
                required={true}
                onChange={onHandleChange}
              />
            </div>
            <div>
              <InputField
                type="text"
                id="lastname"
                placeholder="Enter Last name"
                required={true}
                onChange={onHandleChange}
              />
            </div>
            <div>
              <InputField
                type="text"
                id="username"
                placeholder="Enter Username"
                required={true}
                onChange={onHandleChange}
              />
            </div>
            <div>
              <InputField
                type="email"
                id="email"
                placeholder="Enter Email Address"
                required={true}
                onChange={onHandleChange}
              />
            </div>
            <div>
              <InputField
                type="password"
                id="password"
                required={true}
                placeholder="Enter Password"
                onChange={onHandleChange}
              />
            </div>
            <Button label={"Submit"} />
          </form>
          <h1 className="text-center my-2">
            Have already account then,{" "}
            <Link
              to="/LoginPage"
              className="text-md underline-offset-1 underline font-medium cursor-pointer "
            >
              LoginPage
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

