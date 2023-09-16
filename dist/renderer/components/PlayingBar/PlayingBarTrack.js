"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const pi_1 = require("react-icons/pi");
const useMusicPlayer_1 = require("../MusicPlayer/useMusicPlayer");
const react_1 = require("react");
function formatTime(seconds) {
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
    }
    else {
        return `${formattedMinutes}:${formattedSeconds}`;
    }
}
function PlayingBarTrack() {
    const musicPlayer = (0, useMusicPlayer_1.useMusicPlayer)();
    const [currentTime, setCurrentTime] = (0, react_1.useState)(0);
    const [duration, setDuration] = (0, react_1.useState)(0);
    const [durationMode, setDurationMode] = (0, react_1.useState)("normal");
    function changeCurrentTime(event) {
        musicPlayer.currentTime = Number(event.target.value);
    }
    (0, react_1.useEffect)(() => {
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
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-1 flex-row gap-2 px-18 text-white", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex gap-2", children: [(0, jsx_runtime_1.jsx)("img", { draggable: false, className: "select-none", width: 52, height: 52, src: "https://i.scdn.co/image/ab67616d0000485181fccd758776d16b87721b17" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: [(0, jsx_runtime_1.jsx)("div", { children: "BANANA SHAKE (SPEED UP)" }), (0, jsx_runtime_1.jsx)("div", { children: "HUS" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-1 flex-col gap-1", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between gap-1", children: [(0, jsx_runtime_1.jsx)("div", {}), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-1 text-base", children: [(0, jsx_runtime_1.jsx)("button", { className: "rounded-[50%] p-2 hover:bg-[#404053]", children: (0, jsx_runtime_1.jsx)(pi_1.PiMicrophoneStage, {}) }), (0, jsx_runtime_1.jsx)("button", { className: "rounded-[50%] p-2 hover:bg-[#404053]", children: (0, jsx_runtime_1.jsx)(pi_1.PiHeart, {}) }), (0, jsx_runtime_1.jsx)("button", { className: "rounded-[50%] p-2 hover:bg-[#404053]", children: (0, jsx_runtime_1.jsx)(pi_1.PiHeartBreak, {}) }), (0, jsx_runtime_1.jsx)("button", { className: "rounded-[50%] p-2 hover:bg-[#404053]", children: (0, jsx_runtime_1.jsx)(pi_1.PiPlus, {}) })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex gap-2", children: [(0, jsx_runtime_1.jsx)("div", { className: "select-none", children: formatTime(currentTime) }), (0, jsx_runtime_1.jsx)("input", { className: "flex-1", type: "range", value: currentTime, onChange: changeCurrentTime, min: 0, step: duration / 200, max: duration }), (0, jsx_runtime_1.jsx)("div", { onClick: () => setDurationMode(durationMode === "normal" ? "remaining" : "normal"), className: "cursor-pointer select-none", children: formatTime(durationMode === "normal" ? duration : duration - currentTime) })] })] })] }));
}
exports.default = PlayingBarTrack;
//# sourceMappingURL=PlayingBarTrack.js.map