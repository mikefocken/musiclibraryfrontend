import React, { useState } from "react";

const [filteredSongs, setFilteredSongs] = useState([]);



const handleSearchQueryChange = (e) => {
  setSearchQuery(e.target.value);
};
const filterSongs = () => {
  return songs.filter((song) =>
    song.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

const filterByalbum = () => {
  return songs.filter((song) =>
    song.album.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

const filterByArtist = () => {
  return songs.filter((song) =>
    song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

const filterBygenre = () => {
  return songs.filter((song) =>
    song.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

const filterByreleaseDate = () => {
  return songs.filter((song) =>
    song.releaseDate.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

const SearchInput = ({ searchQuery, handleSearchQueryChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by title..."
        value={searchQuery}
        onChange={handleSearchQueryChange}
      />
    </div>
  );
};
export default SearchInput;
