import React, { Component } from "react";

const SetTimer = (props) => {
    const id = props.title.toLowerCase();
  
    return (
      <div className="timer-container">
        <h2 id={`${id}-label`}>{props.title} Length</h2>
        <div className="flex actions-wrapper">
          <button id={`${id}-decrement`} onClick={props.handleDecrease}>
            <i className="fas fa-minus" />
          </button>
  
          <span id={`${id}-length`}>{props.count}</span>
  
          <button id={`${id}-increment`} onClick={props.handleIncrease}>
            <i className="fas fa-plus" />
          </button>
        </div>
      </div>
    );
  };
  

export default class Pomodoro extends Component {
  state = {
    breakCount: 5,
    sessionCount: 25,
    clockCount: 25 * 60,
    currentTimer: "Session",
    isPlaying: false,
  };

  render() {
    const {
        breakCount,
        sessionCount,
        clockCount,
        currentTimer,
        isPlaying
      } = this.state;
  
      const breakProps = {
        title: "Break",
        count: breakCount,
        handleDecrease: () => this.handleLengthChange(-1, "break"),
        handleIncrease: () => this.handleLengthChange(1, "break")
      };
  
      const sessionProps = {
        title: "Session",
        count: sessionCount,
        handleDecrease: () => this.handleLengthChange(-1, "session"),
        handleIncrease: () => this.handleLengthChange(1, "session")
      };
  
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
