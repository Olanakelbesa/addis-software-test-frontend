import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../redux/songsSlice";
import {
  Container,
  SongListWrapper,
  SongCard,
  SongColumn,
  HeaderRow,
  Button,
  ActionRow,
  TitleBtn
} from "../styles/SongListStyles";
import { useNavigate } from "react-router-dom";

function SongList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list = [], currentPage, pageSize, loading, error } = useSelector(
    (state) => state.songs
  );

  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editArtist, setEditArtist] = useState("");

  const handelEditClick = (song) => {
    setEditId(song._id);
    setEditTitle(song.title);
    setEditArtist(song.artist);
  };

  const handleUpdate = (id) => {
    if (!editTitle.trim() || !editArtist.trim()) {
      alert("Please fill all fields");
      return;
    }
    dispatch({
      type: "songs/updateSong",
      payload: {
        id,
        data: { title: editTitle, artist: editArtist, year: new Date().getFullYear() }
      }
    });
    setEditId(null);
    setEditTitle("");
    setEditArtist("");
  };

  const handleDelete = (id) => {
    dispatch({ type: "songs/deleteSong", payload: id });
  };

  const startIndex = (currentPage - 1) * pageSize;
  const paginatedSongs = Array.isArray(list)
    ? list.slice(startIndex, startIndex + pageSize)
    : [];

  if (loading) return <p>Loading...</p>;

  if (error) return <p style={{ color: "red" }}>Error loading songs: {error}</p>;

  if (!Array.isArray(list) || list.length === 0) {
    return (
      <Container p={3}>
        <TitleBtn>
          <h2>Song List</h2>
          <Button bg="blue" color="white" p={2} onClick={() => navigate("add-song")}>
            Add Song
          </Button>
        </TitleBtn>
        <p>No songs available. Add a new one!</p>
      </Container>
    );
  }

  return (
    <Container p={3}>
      <TitleBtn>
        <h2>Song List</h2>
        <div>
          <Button bg="blue" color="white" p={2} onClick={() => navigate("add-song")}>
            Add Song
          </Button>
        </div>
      </TitleBtn>

      <HeaderRow>
        <span>Name</span>
        <span>Artist</span>
        <span>Year</span>
        <span>Actions</span>
      </HeaderRow>

      <SongListWrapper>
        {paginatedSongs.map((song) => (
          <SongCard key={song._id || song.title} bg="white">
            <SongColumn>
              {editId === song._id ? (
                <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
              ) : (
                song.title
              )}
            </SongColumn>
            <SongColumn>
              {editId === song._id ? (
                <input value={editArtist} onChange={(e) => setEditArtist(e.target.value)} />
              ) : (
                song.artist
              )}
            </SongColumn>
            <SongColumn>{song.year}</SongColumn>
            <ActionRow>
              {editId === song._id ? (
                <Button onClick={() => handleUpdate(song._id)} bg="blue" color="white">
                  Save
                </Button>
              ) : (
                <>
                  <Button onClick={() => handelEditClick(song)} bg="green" color="white">
                    Edit
                  </Button>
                  <Button onClick={() => handleDelete(song._id)} bg="red" color="white">
                    Delete
                  </Button>
                </>
              )}
            </ActionRow>
          </SongCard>
        ))}
      </SongListWrapper>

      <div style={{ marginTop: "16px", display: "flex", justifyContent: "center", gap: "8px" }}>
        {Array.from({ length: Math.ceil(list.length / pageSize) }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            onClick={() => dispatch(setPage(page))}
            bg={page === currentPage ? "blue" : "gray"}
            color="white"
            p={2}
          >
            {page}
          </Button>
        ))}
      </div>
    </Container>
  );
}

export default SongList;
