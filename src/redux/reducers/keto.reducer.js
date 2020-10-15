import { combineReducers } from "redux";

const ketoReducer = (state = [], action) => {
	switch (action.type) {
		case "SET_KMEALS":
			return action.payload;
		default:
			return state;
	}
};

export default ketoReducer;
