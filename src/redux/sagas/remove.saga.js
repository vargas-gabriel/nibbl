import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// function* removeMeal(action) {
// 	try {
// 		let response = yield axios.delete("/api/ind", action.url);
// 		console.log("this is the payload:", response.url);
// 		yield put({ type: "SET_IND_MEAL" });
// 	} catch (err) {
// 		console.log(err);
// 	}
// }

// function* removeMeal(action) {
// 	console.log("in deleteItem Saga", action);

// 	yield axios({
// 		method: "DELETE",
// 		url: action.url,
// 	});
// 	yield put({
// 		type: "SET_IND_MEAL",
// 	});
// }

function* fetchIndMeal(action) {
	try {
		let indResponse = yield axios.get(action.url);
		yield put({ type: "SET_IND_MEAL", payload: indResponse.data });
	} catch (err) {
		console.log(err);
	}
}

function* removeSaga() {
	// yield takeLatest("REMOVE_MEAL", removeMeal);
	yield takeLatest("FETCH_IND_MEAL", fetchIndMeal);
}
export default removeSaga;
