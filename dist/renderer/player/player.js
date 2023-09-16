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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const playlist_1 = __importDefault(require("./playlist"));
class Player extends playlist_1.default {
    constructor() {
        super();
        this.eventListeners = {};
        this.eventListeners = {};
        const player = window.player;
        if (player && player.audioElement && player.audioContext && player.audioElementSource) {
            this.audioElement = player.audioElement;
            this.audioContext = player.audioContext;
            this.audioElementSource = player.audioElementSource;
        }
        else {
            const player = {};
            this.audioElement = player.audioElement = new Audio();
            this.audioContext = player.audioContext = new AudioContext();
            this.audioElementSource = player.audioElementSource = player.audioContext.createMediaElementSource(player.audioElement);
            window.player = player;
        }
        this.audioElementSource.connect(this.audioContext.destination);
        this.audioElement.src =
            "file:///C:/Users/Undead34/Music/MV%20LUVORATORRRRRY%20ver%20Reol%E3%82%8C%E3%82%92%E3%82%8B%20featnqrse.mp3";
    }
    play() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.audioElement.play();
        });
    }
    pause() {
        this.audioElement.pause();
    }
    addEventListener(event, listener) {
        this.audioElement.addEventListener(event, listener);
        if (!this.eventListeners[event]) {
            this.eventListeners[event] = [];
        }
        this.eventListeners[event].push(listener);
    }
    removeEventListener(event, listener) {
        this.audioElement.removeEventListener(String(event), listener);
        if (this.eventListeners[event]) {
            this.eventListeners[event] = this.eventListeners[event].filter((l) => l !== listener);
        }
    }
    removeAllEventListeners() {
        for (const event in this.eventListeners) {
            if (this.eventListeners.hasOwnProperty(event)) {
                this.eventListeners[event].forEach((listener) => {
                    this.audioElement.removeEventListener(event, listener);
                });
            }
        }
        this.eventListeners = {};
    }
    destroy() {
        this.audioElementSource.disconnect(this.audioContext.destination);
    }
    get paused() {
        return this.audioElement.paused;
    }
    get duration() {
        return this.audioElement.duration;
    }
    get volume() {
        return this.audioElement.volume;
    }
    set volume(value) {
        this.audioElement.volume = value;
    }
    get currentTime() {
        return this.audioElement.currentTime;
    }
    set currentTime(value) {
        this.audioElement.currentTime = value;
    }
}
exports.default = Player;
//# sourceMappingURL=player.js.map