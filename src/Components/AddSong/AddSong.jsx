import React, { useState } from "react";
import axios from "axios";

const AddSong = ({ onAddASong }) => {
  const [newSong, setNewSong] = useState({
    title: "",
    album: "",
    artist: "",
    genre: "",
    releaseDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSong({ ...newSong, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSongData = newSong;

    try {
      const response = await axios.post(
        "http://localhost:5176/api/Songs",
        newSongData
      );
      if (response.status === 201) {
        onAddASong();
      }
    } catch (error) {
      console.warn("Error Submitting add song form", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add Song</h4>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={newSong.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Album</label>
        <input
          type="text"
          name="album"
          value={newSong.album}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Artist</label>
        <input
          type="text"
          name="artist"
          value={newSong.artist}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Genre</label>
        <input
          type="text"
          name="genre"
          value={newSong.genre}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Release Date</label>
        <input
          type="date"
          name="releaseDate"
          value={newSong.releaseDate}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Add Song</button>
    </form>
  );
};

export default AddSong;


