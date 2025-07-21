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
  TitleBtn,
  ModalOverlay,
  ModalContent
} from "../styles/SongListStyles";
import SongForm from "./SongForm";

function SongList() {
  const dispatch = useDispatch();
  const { list, currentPage, pageSize, loading } = useSelector((state) => state.songs);

  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editArtist, setEditArtist] = useState("");
  const [showModal, setShowModal] = useState(false); 

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
      payload: { id, data: { title: editTitle, artist: editArtist, year: new Date().getFullYear() } },
    });
    setEditId(null);
    setEditTitle("");
    setEditArtist("");
  };

  const handleDelete = (id) => {
    dispatch({ type: "songs/deleteSong", payload: id });
  };

  const startIndex = (currentPage - 1) * pageSize;
  const paginatedSongs = list.slice(startIndex, startIndex + pageSize);
  const totalPages = Math.ceil(list.length / pageSize);

  if (loading) return <p>Loading...</p>;

  return (
    <Container p={3}>
      <TitleBtn>
        <h2>Song List</h2>
        <Button bg={"blue"} color="white" p={2} onClick={() => setShowModal(true)}>
          Add Song
        </Button>
      </TitleBtn>

      <HeaderRow>
        <span>Name</span>
        <span>Artist</span>
        <span>Year</span>
        <span>Actions</span>
      </HeaderRow>

      <SongListWrapper>
        {paginatedSongs.map((song) => (
          <SongCard key={song._id} bg="white">
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
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
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

      {showModal && (
        <ModalOverlay onClick={() => setShowModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <SongForm />
            <Button mt={3} bg="gray" color="white" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
}

export default SongList;
