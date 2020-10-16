import { combineReducers } from "redux";

const veganReducer = (state = [], action) => {
	switch (action.type) {
		case "SET_VMEALS":
			return action.payload;
		default:
			return state;
	}
};

export default veganReducer;
