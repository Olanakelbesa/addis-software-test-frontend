import { createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
    name: "songs",
    initialState: { list:[], loading: false, error:null, currentPage: 1, pageSize: 5 },
    reducers: {
        fetchSongs: (state) => { state.loading = true; },
        setSongs: (state, action) => {
            state.list = action.payload;
            state.loading = false
        },
        addSong: (state, action) => {
            state.list.push(action.payload)
        },
        updateSong: (state, action) => {
            const index = state.list.findIndex(song => song._id === action.payload._id);
            if(index !== -1) state.list[index] = action.payload;
        },
        deleteSong: (state, action) => {
            state.list = state.list.filter(song => song._id !== action.payload);
        },
        setPage: (state, action) => {
            state.currentPage = action.payload;
        },
        requestAddSong: (state, action) => {
        }
    }
});

export const { fetchSongs, setSongs, addSong, updateSong, deleteSong, setPage, requestAddSong } = songsSlice.actions;
export default songsSlice.reducer;