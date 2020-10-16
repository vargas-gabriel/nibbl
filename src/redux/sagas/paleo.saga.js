import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* fetchPaleoMeals() {
	try {
		let mealResponse = yield axios.get("/api/paleo");
		yield put({ type: "SET_PMEALS", payload: mealResponse.data });
	} catch (err) {
		console.log(err);
	}
}

function* paleoSaga() {
	yield takeLatest("FETCH_PMEALS", fetchPaleoMeals);
}
export default paleoSaga;
