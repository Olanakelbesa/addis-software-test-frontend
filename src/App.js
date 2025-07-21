import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchSongs } from "./redux/songsSlice";
import SongList from "./components/SongList";
import SongForm from "./components/SongForm";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>Song List App</h1>
        <Routes>
          <Route path="/" element={<SongList />} />
          <Route path="/add-song" element={<SongForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
