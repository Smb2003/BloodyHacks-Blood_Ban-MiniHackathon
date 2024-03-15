import React, { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Link,  useNavigate, } from "react-router-dom";
import { auth, db } from "../config/firebase/index";
import { useDispatch, useSelector } from "react-redux";
import { InputField } from "../components/InputFields";
import { set_auth_users } from "../config/store/slices/userData";
import { child, push, ref, set } from "firebase/database";
import { signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";


export const LoginPage = () => {
  const [userdata, setUser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    const { id, value } = e.target;
    setUser({ ...userdata, [id]: value });
  };
  console.log(userdata);
 
  const onHandleSubmit = (e) => {
    e.preventDefault()
    
    signInWithEmailAndPassword(auth, userdata.email, userdata.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("Signned In",user);
        navigate("/")
        dispatch(set_auth_users(true))
        console.log("User Logged in : ",user);
        const UserUid = userCredential.user.uid
        console.log("UserUid: ",UserUid);
        set(ref(db,`Registered_Users/${UserUid}`),{
          Username: userdata.username,
          Email: userdata.email,
          BloodGroup: userdata.Bloodgroup
        })
        Swal.fire ({
          position: "top-center",
          icon: "success",
          title: "LoggedIn Successfully!",
          showConfirmButton: false,
          timer: 1500
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorCode",errorMessage);
        Swal.fire({
          icon: "error",
          title: "Error...",
          text: errorMessage,
          
      });
        dispatch(set_auth_users(false))

      });
  }
  // const onHandleSubmit = (e) => {
  //   e.preventDefault();
  //   signInWithEmailAndPassword(auth, userdata.email, userdata.password,userdata)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       navigate("/")
  //       dispatch(set_auth_users(true))
  //       console.log("User Logged in : ",user);
  //       const UserUid = userCredential.user.uid
  //       console.log("UserUid: ",UserUid);
  //       set(ref(db,`Registered_Users/${UserUid}`),{
  //         Username: userdata.username,
  //         Email: userdata.email,
  //         BloodGroup: userdata.Bloodgroup
  //       })
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log("Error Message: ",errorMessage);
  //       console.log("Error Code: ",errorCode);
  //       dispatch(set_auth_users(false))
  //     });
  // };
  // useEffect(() => {
  //   onHandleSubmit()
  // }, [])
  
  return (
    <div className="w-full h-screen grid place-content-center bgPic ">
      <div className="flex shadow-lg shadow-black rounded-3xl m-4 ">
        <div className="md:w-[400px] md:h-full w-full h-auto bg-gradient-to-t from-red-900 to-black p-2 rounded-l-3xl">
          <div className="flex flex-wrap justify-center items-center py-[190px] gap-4">
            <h1 className="text-2xl md:text-3xl font-medium text-center text-white">
              Create, Account!
            </h1>
            <h1 className="text-md md:text-lg font-medium text-center text-white">
              Sign up if you still don't have an account
            </h1>
            <Link to="/SignUpPage">
              <button className="md:w-28 md:h-12 w-24 h-10 border-2 text-white hover:font-medium border-white rounded-full">
                Sign up
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-[400px] md:h-full w-full h-auto p-2 bg-slate-50 rounded-r-3xl">
          <h1 className="text-3xl md:text-3xl font-medium text-center my-6 ">
            Log in
          </h1>
          <form onSubmit={onHandleSubmit}>
            <div className="flex flex-col gap-y-3 py-14 items-center justify-center ">
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
                  type="type"
                  id="Bloodgroup"
                  placeholder="Enter Blood Group"
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
