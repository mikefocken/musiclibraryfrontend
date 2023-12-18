import React from "react";

const SongComponent = ({ title, album, artist, genre, releaseDate, onDelete, onEdit }) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{album}</td>
      <td>{artist}</td>
      <td>{genre}</td>
      <td>{releaseDate}</td>
      <td> 
      <button onClick={() => onEdit(title, album, artist, genre, releaseDate)}>Edit</button>
      </td>
      <td>
      <button onClick={() => onDelete(title)}>Delete</button>
      </td>
    </tr>
  );
};

export default SongComponent;

