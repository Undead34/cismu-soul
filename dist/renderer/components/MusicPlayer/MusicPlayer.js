"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const useMusicPlayer_1 = require("./useMusicPlayer");
const player_1 = __importDefault(require("../../player/player"));
const react_1 = __importDefault(require("react"));
class MusicPlayer extends react_1.default.Component {
    componentWillUnmount() {
        this.player.destroy();
    }
    constructor(props) {
        super(props);
        this.player = new player_1.default();
    }
    render() {
        return ((0, jsx_runtime_1.jsx)(useMusicPlayer_1.MusicPlayerContext.Provider, { value: this.player, children: this.props.children }));
    }
}
exports.default = MusicPlayer;
//# sourceMappingURL=MusicPlayer.js.map