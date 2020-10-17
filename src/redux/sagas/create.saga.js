import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* createMeal(action) {
	try {
		let createMealResponse = yield axios.post("/api/add", action.payload);
		console.log("this is the payload:", action.payload);
		yield put({ type: "SET_IND_MEAL" });
	} catch (err) {
		console.log(err);
	}
}

// function* fetchIndMeal(action) {
// 	try {
// 		let indResponse = yield axios.get(action.url);
// 		yield put({ type: "SET_IND_MEAL", payload: indResponse.data });
// 	} catch (err) {
// 		console.log(err);
// 	}
// }

function* createSaga() {
	yield takeLatest("CREATE_MEAL", createMeal);
	// yield takeLatest("FETCH_IND_MEAL", fetchIndMeal);
}
export default createSaga;
