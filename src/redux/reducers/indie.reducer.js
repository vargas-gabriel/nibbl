const indieReducer = (state = [], action) => {
	switch (action.type) {
		case "SET_IND_MEAL":
			return action.payload;
		default:
			return state;
	}
};

export default indieReducer;
