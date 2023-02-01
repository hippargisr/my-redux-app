import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./Reducers";

const store = configureStore({
	reducer:{
		counter: counterReducer,
	}
});

export default store;