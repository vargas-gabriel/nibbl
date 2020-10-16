const initialState = {
	meals: "",
};

const indieReducer = (state = [], action) => {
	switch (action.type) {
		case "SET_IND_MEAL":
			return action.payload;
		default:
	}
	switch (action.type) {
		case "CLEAR_VALUES":
			return initialState;
	}
	return state;
};

export default indieReducer;
