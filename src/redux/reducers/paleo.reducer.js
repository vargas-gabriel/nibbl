import { combineReducers } from "redux";

const paleoReducer = (state = [], action) => {
	switch (action.type) {
		case "SET_PMEALS":
			return action.payload;
		default:
			return state;
	}
};

export default paleoReducer;
