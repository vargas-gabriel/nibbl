import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* removeMeal(action) {
	try {
		let response = yield axios.delete("/api/remove", action.payload);
		console.log("this is the payload:", action.payload);
		yield put({ type: "SET_IND_MEAL" });
	} catch (err) {
		console.log(err);
	}
}

function* fetchIndMeal(action) {
	try {
		let indResponse = yield axios.get(action.url);
		yield put({ type: "SET_IND_MEAL" });
	} catch (err) {
		console.log(err);
	}
}

function* removeSaga() {
	yield takeLatest("REMOVE_MEAL", removeMeal);
	yield takeLatest("FETCH_IND_MEAL", fetchIndMeal);
}
export default removeSaga;
