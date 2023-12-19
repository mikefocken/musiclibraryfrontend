import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Components/Header/Header";
import MusicTable from "./Components/MusicTable/MusicTable";
import AddSong from "./Components/AddSong/AddSong.jsx";

function App() {
  const [songs, setSongs] = useState([]);

  const fetchSongs = async () => {
    try {
      const response = await axios.get("http://localhost:5176/api/Songs");
      setSongs(response.data);
    } catch (error) {
      console.warn("Error in fetchSongs request:", error);
    }
  };

  const handleDelete = async (title) => {
    try {
      const response = await axios.delete(
        `http://localhost:5176/api/Songs/${title}`
      );
      if (response.status === 204) {
        setSongs(songs.filter((song) => song.title !== title));
      }
    } catch (error) {
      console.warn("Error deleting song:", error);
    }
  };

  const handleEdit = (title, album, artist, genre, releaseDate) => {
    console.log("Edit song:", title, album, artist, genre, releaseDate);
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div className="App">
      <Header />
      <MusicTable
        musicInfo={songs}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      <AddSong onAddASong={fetchSongs} />
    </div>
  );
}
export default App;
