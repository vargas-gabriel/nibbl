import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* addIndMeal(action) {
	try {
		let indMealResponse = yield axios.post("/api/ind", action.payload);
		console.log("this is the payload:", action.payload);
		yield put({ type: "FETCH_IND_MEAL", payload: indMealResponse.data });
	} catch (err) {
		console.log(err);
	}
}

function* fetchIndMeal(action) {
	try {
		let indResponse = yield axios.get(action.url);
		console.log("url to check", action.url);
		console.log("this is the payload:", indResponse.data);
		yield put({ type: "SET_IND_MEAL", payload: indResponse.data });
	} catch (err) {
		console.log(err);
	}
}

function* removeMeal(action) {
	try {
		let response = yield axios.delete(action.url);
		console.log("this is the payload:", response.url);
		yield put({ type: "FETCH_IND_MEAL" });
	} catch (err) {
		console.log(err);
	}
}
function* addLike(action) {
	try {
		let indMealResponse = yield axios.put(action.url);
		console.log("this is the payload:", indMealResponse.data);
		yield put({ type: "FETCH_IND_MEAL" });
	} catch (err) {
		console.log(err);
	}
}

function* indieSaga() {
	yield takeLatest("ADD_IND_MEAL", addIndMeal);
	yield takeLatest("FETCH_IND_MEAL", fetchIndMeal);
	yield takeLatest("REMOVE_MEAL", removeMeal);
	yield takeLatest("ADD_LIKE", addLike);
}
export default indieSaga;
