import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useState } from "react";
const Discover = () => {
  const [genreTitle, setGenreTitle] = useState(genres[0].title);
  console.log(genres);
  return (
    <div className="flex flex-col">
      <div className="w-[100%] flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="text-bold text-3xl text-white">Discover {genreTitle}</h2>
        <select
          onChange={() => {}}
          value={genreTitle}
          className="bg-black text-gray-300 rounded-lg outline-none p-3 text-sm sm:mt-0 mt-5"
        >
          {genres.map((genres) => (
            <option key={genres.value}>{genres.title}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {[1, 2, 3, 4, 5, 6, 7].map((song, i) => (
          <SongCard key={song.key} song={song} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
