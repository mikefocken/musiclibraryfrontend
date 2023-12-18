import React from "react";
import SongComponent from "../SongComponent/SongComponent";

const MusicTable = ({ musicInfo, onDelete, onEdit }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Album</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          {musicInfo.map((item, index) => (
            <SongComponent
              key={index}
              title={item.title}
              album={item.album}
              artist={item.artist}
              genre={item.genre}
              releaseDate={item.releaseDate}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MusicTable;
