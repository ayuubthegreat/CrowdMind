import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice.js";
import community_postReducer from "../slices/community_postSlice.js"
const store = configureStore({
    reducer: {
        auth: authReducer,
        posts: community_postReducer,
    },
});
export default store;