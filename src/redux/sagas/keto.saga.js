import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* fetchKetoMeals() {
	try {
		let mealResponse = yield axios.get("/api/keto");
		yield put({ type: "SET_KMEALS", payload: mealResponse.data });
	} catch (err) {
		console.log(err);
	}
}

function* ketoSaga() {
	yield takeLatest("FETCH_KMEALS", fetchKetoMeals);
}
export default ketoSaga;
