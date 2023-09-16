"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMusicPlayer = exports.MusicPlayerContext = void 0;
const react_1 = require("react");
// Crea el contexto y tipa su valor inicial como null
exports.MusicPlayerContext = (0, react_1.createContext)(null);
// Define el tipo de retorno de la función useMusicPlayer
const useMusicPlayer = () => {
    const context = (0, react_1.useContext)(exports.MusicPlayerContext);
    if (!context) {
        throw new Error("useMusicPlayer debe usarse dentro de un MusicPlayerProvider");
    }
    return context;
};
exports.useMusicPlayer = useMusicPlayer;
//# sourceMappingURL=useMusicPlayer.js.map