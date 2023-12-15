import "./App.css";
import axios from "axios";
import React from "react";
import Header from "./Components/Header/Header";
import MusicTable from "./Components/MusicTable/MusicTable";
import AddSong from './Components/AddSong/AddASong.jsx';

function App() {
  const fetchSongs = async () => {
    const response = await axios.get("http://localhost:5176/api/Songs");
    console.log(response);
  };
  return (
    <div className="App">
      <Header />
      <AddSong/>
      <MusicTable/>
      <button onClick={fetchSongs}>fetchSongs</button>
    </div>
  );
};

export default App;
