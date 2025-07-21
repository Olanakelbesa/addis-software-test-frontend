import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FormContainer, FormWrapper, Input, Button } from "../styles/SongFormStyles";

function SongForm() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !artist.trim()) {
      alert("Please fill both fields");
      return;
    }

    const currentYear = new Date().getFullYear();

    dispatch({ type: "songs/requestAddSong", payload: { title, artist, year: currentYear } });

    setTitle("");
    setArtist("");
  };

  return (
    <FormContainer bg="white" p={[3, 4]} width={["100%", "400px"]}>
      <h3 style={{ marginBottom: "12px" }}>Add New Song</h3>
      <FormWrapper onSubmit={handleSubmit}>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Song Title"
        />
        <Input
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          placeholder="Artist"
        />
        <Button type="submit" bg="blue" color="white">
          Add Song
        </Button>
      </FormWrapper>
    </FormContainer>
  );
}

export default SongForm;
