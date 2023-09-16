"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const pi_1 = require("react-icons/pi");
const useMusicPlayer_1 = require("../MusicPlayer/useMusicPlayer");
const react_1 = require("react");
const MusicControl = () => {
    const musicPlayer = (0, useMusicPlayer_1.useMusicPlayer)();
    const [volume, setVolume] = (0, react_1.useState)(musicPlayer.volume * 100);
    (0, react_1.useEffect)(() => {
        function setVolumeChange() {
            setVolume(musicPlayer.volume * 100);
        }
        musicPlayer.addEventListener("volumechange", setVolumeChange);
        return () => {
            musicPlayer.removeEventListener("volumechange", setVolumeChange);
        };
    }, [volume]);
    return ((0, jsx_runtime_1.jsx)("div", { className: "absolute z-50 inline-block w-56 -translate-x-[50%] -translate-y-[130%] bg-[#23232d] shadow-md", children: (0, jsx_runtime_1.jsx)("div", { className: "flex px-2 py-3", children: (0, jsx_runtime_1.jsx)("input", { value: volume, onChange: (e) => (musicPlayer.volume = Number(e.target.value) / 100), className: "flex-1", type: "range", min: 0, step: 0.1, max: 100 }) }) }));
};
function PlayingBarOptions() {
    const [showMusicControl, setShowMusicControl] = (0, react_1.useState)(false);
    const [timeoutId, setTimeoutId] = (0, react_1.useState)(null);
    const handleMouseEnter = () => {
        setShowMusicControl(true);
        clearTimeout(timeoutId);
    };
    const handleMouseLeave = () => {
        const timeoutId = setTimeout(() => {
            setShowMusicControl(false);
        }, 400);
        setTimeoutId(timeoutId);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-1 text-white", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex gap-1 text-base", children: [(0, jsx_runtime_1.jsx)("button", { className: "rounded-[46%] p-2 transition-all hover:bg-[#404053]", children: (0, jsx_runtime_1.jsx)(pi_1.PiArrowsClockwise, {}) }), (0, jsx_runtime_1.jsx)("button", { className: "rounded-[50%] p-2 transition-all hover:bg-[#404053]", children: (0, jsx_runtime_1.jsx)(pi_1.PiShuffle, {}) }), (0, jsx_runtime_1.jsxs)("div", { className: "relative rounded-[50%] p-2 transition-all hover:bg-[#404053]", onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, children: [showMusicControl && (0, jsx_runtime_1.jsx)(MusicControl, {}), (0, jsx_runtime_1.jsx)(pi_1.PiSpeakerHigh, {})] }), (0, jsx_runtime_1.jsx)("button", { className: "rounded-[50%] p-2 transition-all hover:bg-[#404053]", children: (0, jsx_runtime_1.jsx)(pi_1.PiSliders, {}) }), (0, jsx_runtime_1.jsx)("button", { className: "rounded-[50%] p-2 text-green-500 transition-all hover:bg-[#404053]", children: (0, jsx_runtime_1.jsx)(pi_1.PiWaveform, {}) })] }), (0, jsx_runtime_1.jsx)("div", { className: "h-7 w-[1px] bg-white" }), (0, jsx_runtime_1.jsxs)("button", { className: "flex items-center gap-2 rounded p-2", children: [(0, jsx_runtime_1.jsx)("div", { className: "text-base", children: (0, jsx_runtime_1.jsx)(pi_1.PiQueue, {}) }), (0, jsx_runtime_1.jsx)("div", { children: "Reproduciendo" })] })] }));
}
exports.default = PlayingBarOptions;
//# sourceMappingURL=PlayingBarOptions.js.map