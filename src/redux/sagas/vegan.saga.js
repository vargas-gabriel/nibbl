import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* fetchVeganMeals() {
	try {
		let mealResponse = yield axios.get("/api/vegan");
		yield put({ type: "SET_VMEALS", payload: mealResponse.data });
	} catch (err) {
		console.log(err);
	}
}

function* veganSaga() {
	yield takeLatest("FETCH_VMEALS", fetchVeganMeals);
}
export default veganSaga;
