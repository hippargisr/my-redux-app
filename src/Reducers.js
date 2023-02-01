import { createReducer } from "@reduxjs/toolkit";

const initialCounterState = {
	counter:0,
}

export const counterReducer = createReducer(initialCounterState, {
	increment: (state, action) => {
		state.counter += 1;
	},
	decrement: (state, action) => {
		state.counter -= 1;
	},
	incrementByValue: (state, action) => {
		state.counter += action.payload;
	}
});