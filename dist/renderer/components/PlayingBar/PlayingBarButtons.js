"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const pi_1 = require("react-icons/pi");
const useMusicPlayer_1 = require("../MusicPlayer/useMusicPlayer");
const react_1 = require("react");
function PlayingBarButtons() {
    const musicPlayer = (0, useMusicPlayer_1.useMusicPlayer)();
    const [paused, setPaused] = (0, react_1.useState)(musicPlayer.paused);
    (0, react_1.useEffect)(() => {
        function onPlayPause() {
            setPaused(musicPlayer.paused);
        }
        musicPlayer.addEventListener("pause", onPlayPause);
        musicPlayer.addEventListener("play", onPlayPause);
        return () => {
            musicPlayer.removeEventListener("pause", onPlayPause);
            musicPlayer.removeEventListener("play", onPlayPause);
        };
    }, []);
    function togglePause() {
        return __awaiter(this, void 0, void 0, function* () {
            if (paused) {
                yield musicPlayer.play();
            }
            else {
                musicPlayer.pause();
            }
            setPaused(musicPlayer.paused);
        });
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-center gap-1 text-base text-white", children: [(0, jsx_runtime_1.jsx)("button", { className: "rounded-[50%] p-2 hover:bg-[#404053]", children: (0, jsx_runtime_1.jsx)(pi_1.PiSkipBackFill, {}) }), (0, jsx_runtime_1.jsx)("button", { onClick: togglePause, className: "rounded-[50%] p-3 text-2xl hover:bg-[#404053]", children: paused ? (0, jsx_runtime_1.jsx)(pi_1.PiPlayFill, {}) : (0, jsx_runtime_1.jsx)(pi_1.PiPauseFill, {}) }), (0, jsx_runtime_1.jsx)("button", { className: "rounded-[50%] p-2 hover:bg-[#404053]", children: (0, jsx_runtime_1.jsx)(pi_1.PiSkipForwardFill, {}) })] }));
}
exports.default = PlayingBarButtons;
//# sourceMappingURL=PlayingBarButtons.js.map