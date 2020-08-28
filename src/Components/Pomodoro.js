import React, { Component } from "react";

export default class Pomodoro extends Component {
  state = {
    breakCount: 5,
    sessionCount: 25,
    clockCount: 25 * 60,
    currentTimer: "Session",
    isPlaying: false,
  };

  render() {
    return (
      <div>
        <div>
          <div className="flex">
            <SetTimer {...breakProps} />
            <SetTimer {...sessionProps} />
          </div>

          <div className="clock-container">
            <h1 id="timer-label">{currentTimer}</h1>
            <span id="time-left">{this.convertToTime(clockCount)}</span>

            <div className="flex">
              <button id="start_stop" onClick={this.handlePlayPause}>
                <i className={`fas fa-${isPlaying ? "pause" : "play"}`} />
              </button>
              <button id="reset" onClick={this.handleReset}>
                <i className="fas fa-sync" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
