import { combineReducers } from "redux";

const veggieReducer = (state = [], action) => {
	switch (action.type) {
		case "SET_VGMEALS":
			return action.payload;
		default:
			return state;
	}
};

export default veggieReducer;
