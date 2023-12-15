import React from "react";
import Song from './Components/Components/Song';
const MusicTable = ({musicInfo}) => {
  return (
    <div>
      <table>
        <thread>
          <tr>
            <th>Title</th>
            <th>Album</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Release Date</th>
          </tr>
        </thread>
        <tbody>
          {musicInfo.map((item, index) => (
            <Song
              key={index}
              title={item.title}
              album={item.album}
              artist={item.artis}
              genre={item.genre}
              releaseDate={item.releaseDate}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default MusicTable;
