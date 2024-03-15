import { configureStore } from "@reduxjs/toolkit";
import userData from "./slices/userData";


const Store = configureStore({
    reducer:{
      user_data : userData
    }
})
export default Store;