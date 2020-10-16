import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* fetchVeggieMeals() {
	try {
		let mealResponse = yield axios.get("/api/veggie");
		yield put({ type: "SET_VGMEALS", payload: mealResponse.data });
	} catch (err) {
		console.log(err);
	}
}

function* veggieSaga() {
	yield takeLatest("FETCH_VGMEALS", fetchVeggieMeals);
}
export default veggieSaga;
