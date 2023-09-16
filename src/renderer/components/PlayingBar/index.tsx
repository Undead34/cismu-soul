import PlayingBarTrack from "./PlayingBarTrack";
import PlayingBarOptions from "./PlayingBarOptions";
import PlayingBarButtons from "./PlayingBarButtons";

export default function PlayingBar() {
  return (
    <div className="skeleton-music-playing-bar mt-2 rounded-lg bg-[#23232d]">
      <div className="flex h-20 min-w-[990px] items-center px-6">
        <PlayingBarButtons />
        <PlayingBarTrack />
        <PlayingBarOptions />
      </div>
    </div>
  );
}
