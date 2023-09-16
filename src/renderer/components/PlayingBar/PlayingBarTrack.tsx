import { PiHeart, PiHeartBreak, PiMicrophoneStage, PiPlus } from "react-icons/pi";
import { useMusicPlayer } from "../MusicPlayer/useMusicPlayer";
import { useState, useEffect } from "react";

function formatTime(seconds: number): string {
  if (isNaN(seconds) || seconds < 0) {
    throw new Error("El tiempo debe ser un número positivo.");
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  if (hours > 0) {
    const formattedHours = String(hours).padStart(2, "0");
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  } else {
    return `${formattedMinutes}:${formattedSeconds}`;
  }
}

export default function PlayingBarTrack() {
  const musicPlayer = useMusicPlayer();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [durationMode, setDurationMode] = useState<"normal" | "remaining">("normal");

  function changeCurrentTime(event: React.ChangeEvent<HTMLInputElement>) {
    musicPlayer.currentTime = Number(event.target.value);
  }

  useEffect(() => {
    function onTimeUpdate() {
      setCurrentTime(musicPlayer.currentTime);
    }

    function onDurationChange() {
      setDuration(musicPlayer.duration);
    }

    musicPlayer.addEventListener("timeupdate", onTimeUpdate);
    musicPlayer.addEventListener("durationchange", onDurationChange);

    return () => {
      musicPlayer.removeEventListener("timeupdate", onTimeUpdate);
      musicPlayer.removeEventListener("durationchange", onDurationChange);
    };
  }, []);

  return (
    <div className="flex flex-1 flex-row gap-2 px-18 text-white">
      <div className="flex gap-2">
        <img
          draggable={false}
          className="select-none"
          width={52}
          height={52}
          src="https://i.scdn.co/image/ab67616d0000485181fccd758776d16b87721b17"
        />
        <div className="flex flex-col">
          <div>BANANA SHAKE (SPEED UP)</div>
          <div>HUS</div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-1">
        <div className="flex justify-between gap-1">
          <div></div>
          <div className="flex items-center gap-1 text-base">
            <button className="rounded-[50%] p-2 hover:bg-[#404053]">
              <PiMicrophoneStage />
            </button>
            <button className="rounded-[50%] p-2 hover:bg-[#404053]">
              <PiHeart />
            </button>
            <button className="rounded-[50%] p-2 hover:bg-[#404053]">
              <PiHeartBreak />
            </button>
            <button className="rounded-[50%] p-2 hover:bg-[#404053]">
              <PiPlus />
            </button>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="select-none">{formatTime(currentTime)}</div>
          <input
            className="flex-1"
            type="range"
            value={currentTime}
            onChange={changeCurrentTime}
            min={0}
            step={duration / 200}
            max={duration}
          />
          <div
            onClick={() => setDurationMode(durationMode === "normal" ? "remaining" : "normal")}
            className="cursor-pointer select-none"
          >
            {formatTime(durationMode === "normal" ? duration : duration - currentTime)}
          </div>
        </div>
      </div>
    </div>
  );
}
