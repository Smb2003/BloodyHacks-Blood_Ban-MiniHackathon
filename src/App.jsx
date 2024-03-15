import { onAuthStateChanged } from 'firebase/auth';
import './App.css'
import { Routing } from './config/Routing'
import { auth } from './config/firebase';
import { useDispatch } from 'react-redux';
import { set_auth_users } from './config/store/slices/userData';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const CheckUser = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          console.log("Mojjood hai user! useriD: ",uid);
          // navigate("/")
          dispatch(set_auth_users(true))
          // ...
        } else {
          console.log("User Has been logged Out!");        
          dispatch(set_auth_users(false))
          // navigate("/")


          // ...
        }
      });
    }
    useEffect(()=>{
      CheckUser();
    },[]);

  return (
    <>
      <Routing/>
    </>
  )
}

export default App
