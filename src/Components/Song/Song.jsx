import React from "react";
import SongComponent from "../musicInfo/songs";

const Song = ({ title, album, artist, genre, releaseDate }) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{album}</td>
      <td>{artist}</td>
      <td>{genre}</td>
      <td>{releaseDate}</td>
    </tr>
  );
};

export default Song;
