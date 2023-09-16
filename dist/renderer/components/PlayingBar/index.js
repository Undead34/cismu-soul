"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const PlayingBarTrack_1 = __importDefault(require("./PlayingBarTrack"));
const PlayingBarOptions_1 = __importDefault(require("./PlayingBarOptions"));
const PlayingBarButtons_1 = __importDefault(require("./PlayingBarButtons"));
function PlayingBar() {
    return ((0, jsx_runtime_1.jsx)("div", { className: "skeleton-music-playing-bar mt-2 rounded-lg bg-[#23232d]", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex h-20 min-w-[990px] items-center px-6", children: [(0, jsx_runtime_1.jsx)(PlayingBarButtons_1.default, {}), (0, jsx_runtime_1.jsx)(PlayingBarTrack_1.default, {}), (0, jsx_runtime_1.jsx)(PlayingBarOptions_1.default, {})] }) }));
}
exports.default = PlayingBar;
//# sourceMappingURL=index.js.map