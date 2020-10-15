import { combineReducers } from "redux";

const mealReducer = (state = [], action) => {
	switch (action.type) {
		case "SET_MEALS":
			return action.payload;
		default:
			return state;
	}
};

export default mealReducer;
