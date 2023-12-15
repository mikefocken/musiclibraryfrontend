import "./App.css";
import axios from "axios";
import React from "react";

function App() {
  const fetchSongs = async () => {
    const response = await axios.get("http://localhost:5176/api/Songs");
    console.log(response);
  };
  return (
    <div className="App">
      <button onClick={fetchSongs}>fetchSongs</button>
    </div>
  );
}

export default App;
