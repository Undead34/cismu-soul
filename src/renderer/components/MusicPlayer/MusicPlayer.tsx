import { MusicPlayerContext } from "./useMusicPlayer";
import Player from "../../player/player";
import React from "react";

class MusicPlayer extends React.Component<{ children: React.ReactNode }> {
  player: Player;

  componentWillUnmount(): void {
    this.player.destroy();
  }

  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.player = new Player();
  }

  render() {
    return (
      <MusicPlayerContext.Provider value={this.player}>{this.props.children}</MusicPlayerContext.Provider>
    );
  }
}

export default MusicPlayer;
