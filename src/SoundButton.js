import React, { Component } from "react";

class SoundButton extends Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
  }

  playSound = () => {
    const audio = this.audioRef.current;
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  };

  render() {
    return (
      <div
        className="sound-button"
        onClick={this.playSound}
        style={{ backgroundImage: `url(${this.props.thumb})` }}
      >
        <audio preload="true" ref={this.audioRef}>
          <source src={`/sounds/${this.props.sound}.mp3`} type="audio/mp3" />
        </audio>

        <div class="instant" style="position:relative;">
          <div class="circle small-button-background" style="background-color:#3399ff;"></div>
          <div class="small-button" onmousedown="play('/media/sounds/hey_listen.mp3')"></div>
          <div class="small-button-shadow" style="margin-bottom:5px;"></div>
          <a href="/instant/hey-listen/" style="text-decoration: underline; font-size: 14px;">Hey listen !</a>
          <div style="margin:10px 0">
          <a href="#" onclick="share('https://www.myinstants.com/instant/hey-listen/')"><img src="/media/images/facebook_share.png"></a>
</div>
</div>
      </div>
      
    );
  }
}

export default SoundButton;
