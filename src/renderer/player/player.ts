import Playlist from "./playlist";

class Player extends Playlist {
  private audioElement: HTMLAudioElement;
  private audioContext: AudioContext;
  private audioElementSource: MediaElementAudioSourceNode;
  eventListeners: { [key: string]: EventListener[] } = {};

  constructor() {
    super();
    this.eventListeners = {};
    const player = window.player;

    if (player && player.audioElement && player.audioContext && player.audioElementSource) {
      this.audioElement = player.audioElement;
      this.audioContext = player.audioContext;
      this.audioElementSource = player.audioElementSource;
    } else {
      const player: typeof window.player = {};
      this.audioElement = player.audioElement = new Audio();
      this.audioContext = player.audioContext = new AudioContext();
      this.audioElementSource = player.audioElementSource = player.audioContext.createMediaElementSource(
        player.audioElement,
      );

      window.player = player;
    }

    this.audioElementSource.connect(this.audioContext.destination);
    this.audioElement.src =
      "file:///C:/Users/Undead34/Music/MV%20LUVORATORRRRRY%20ver%20Reol%E3%82%8C%E3%82%92%E3%82%8B%20featnqrse.mp3";
  }

  async play() {
    await this.audioElement.play();
  }

  pause() {
    this.audioElement.pause();
  }

  addEventListener(event: keyof HTMLElementEventMap, listener: EventListener): void {
    this.audioElement.addEventListener(event, listener);

    if (!this.eventListeners[event]) {
      this.eventListeners[event] = [];
    }

    this.eventListeners[event].push(listener);
  }

  removeEventListener(event: keyof HTMLElementEventMap, listener: EventListener): void {
    this.audioElement.removeEventListener(String(event), listener);

    if (this.eventListeners[event]) {
      this.eventListeners[event] = this.eventListeners[event].filter((l) => l !== listener);
    }
  }

  removeAllEventListeners(): void {
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

  set volume(value: number) {
    this.audioElement.volume = value;
  }

  get currentTime() {
    return this.audioElement.currentTime;
  }

  set currentTime(value: number) {
    this.audioElement.currentTime = value;
  }
}

export default Player;
