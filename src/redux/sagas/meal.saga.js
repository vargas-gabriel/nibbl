import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* fetchMeals() {
	try {
		let mealResponse = yield axios.get("/api/meals");
		yield put({ type: "SET_MEALS", payload: mealResponse.data });
	} catch (err) {
		console.log(err);
	}
}

function* mealSaga() {
	yield takeLatest("FETCH_MEALS", fetchMeals);
}
export default mealSaga;
