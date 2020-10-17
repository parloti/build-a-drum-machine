import React, { Component } from "react";
import { render } from "react-dom";
import { Footer } from "./footer";

import "./style.css";

interface AppProps {}
interface AppState {
  lastAudio: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      lastAudio: ""
    };
  }

  componentDidMount() {
    const drumPads = document.querySelectorAll(".drum-pad");
    drumPads.forEach(drumPad => {
      const listener = (event: Event) => {
        const button = event.target as HTMLButtonElement;
        const audio = button.querySelector("audio");
        this.playAudio(audio);
      };
      drumPad.addEventListener("click", listener);
    });

    document.addEventListener("keydown", event => {
      const key = event.key.toUpperCase();
      const audio = document.getElementById(key);
      if (audio instanceof HTMLAudioElement) {
        this.playAudio(audio);
      }
    });
  }
  playAudio(audio: HTMLAudioElement) {
    audio.play();
    const button = audio.parentElement;
    this.setState({ lastAudio: button.id });
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid h-100 m-0">
        <div className="h-100 d-flex flex-column align-items-stretch">
          <div className="flex-grow-1 d-flex align-items-center justify-content-center">
            <div id="drum-machine">
              <div id="display" className="text-center">
                {this.state.lastAudio}
              </div>
              <div className="container">
                <div className="row">
                  <button
                    type="button"
                    id="Heater-1"
                    className="col drum-pad btn btn-outline-info"
                  >
                    <audio
                      className="clip"
                      id="Q"
                      src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
                    />
                    Q
                  </button>
                  <button
                    type="button"
                    id="Heater-2"
                    className="col drum-pad btn btn-outline-info"
                  >
                    <audio
                      className="clip"
                      id="W"
                      src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
                    />
                    W
                  </button>
                  <button
                    type="button"
                    id="Heater-3"
                    className="col drum-pad btn btn-outline-info"
                  >
                    <audio
                      className="clip"
                      id="E"
                      src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
                    />
                    E
                  </button>
                </div>
                <div className="row">
                  <button
                    type="button"
                    id="Heater-4"
                    className="col drum-pad btn btn-outline-info"
                  >
                    <audio
                      className="clip"
                      id="A"
                      src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
                    />
                    A
                  </button>
                  <button
                    type="button"
                    id="Clap"
                    className="col drum-pad btn btn-outline-info"
                  >
                    <audio
                      className="clip"
                      id="S"
                      src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
                    />
                    S
                  </button>
                  <button
                    type="button"
                    id="Open-HH"
                    className="col drum-pad btn btn-outline-info"
                  >
                    <audio
                      className="clip"
                      id="D"
                      src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
                    />
                    D
                  </button>
                </div>
                <div className="row">
                  <button
                    id="Kick-n'-Hat"
                    type="button"
                    className="col drum-pad btn btn-outline-info"
                  >
                    <audio
                      className="clip"
                      id="Z"
                      src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
                    />
                    Z
                  </button>
                  <button
                    id="Kick"
                    type="button"
                    className="col drum-pad btn btn-outline-info"
                  >
                    <audio
                      className="clip"
                      id="X"
                      src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
                    />
                    X
                  </button>
                  <button
                    id="Closed-HH"
                    type="button"
                    className="col drum-pad btn btn-outline-info"
                  >
                    <audio
                      className="clip"
                      id="C"
                      src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
                    />
                    C
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
