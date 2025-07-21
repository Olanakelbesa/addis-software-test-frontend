import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchSongs } from "./redux/songsSlice";

const SongList = lazy(() => import("./components/SongList"));
const SongForm = lazy(() => import("./components/SongForm"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Song List App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SongList />} />
          <Route path="/add-song" element={<SongForm />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
