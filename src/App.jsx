import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header/Header";
import MusicTable from "./Components/MusicTable/MusicTable";
import AddSong from "./Components/AddSong/AddASong.jsx";



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

  return (
    <div className="App">
      <Header />
      <AddSong />
      <MusicTable musicInfo={songs}/>
      <button onClick={fetchSongs}>fetchSongs</button>
    </div>
  );
}

export default App;
