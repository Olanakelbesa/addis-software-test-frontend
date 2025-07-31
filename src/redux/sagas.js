import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import { setSongs, addSong, updateSong, deleteSong } from "./songsSlice";

const API_URL = `${process.env.API_BASE_URL}`;



function* fetchSongsSaga() {
    try {
        const response = yield call(axios.get, API_URL);
        yield put(setSongs(response.data));
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

function* addSongSaga(action) {
    try {
        const response = yield call(axios.post, API_URL, action.payload, {
            headers: { "Content-Type": "application/json" }
        });
        yield put(addSong(response.data));
    } catch (error) {
        console.error("Add song error:", error);
    }
}

function* updateSongSaga(action) {
    try {
        const { id, data } = action.payload;
        const response = yield call(axios.put, `${API_URL}/${id}`, data);
        yield put(updateSong(response.data));
    } catch (error) {
        console.error("Update error:", error);
    }
}

function* deleteSongSaga(action) {
    try {
        yield call(axios.delete, `${API_URL}/${action.payload}`);
        yield put(deleteSong(action.payload));
    } catch (error) {
        console.error("Delete error:", error);
    }
}

function* rootSaga() {
    yield takeLatest("songs/fetchSongs", fetchSongsSaga);
    yield takeLatest("songs/requestAddSong", addSongSaga); 
    yield takeLatest("songs/updateSong", updateSongSaga);
    yield takeLatest("songs/deleteSong", deleteSongSaga);
}

export default rootSaga;
