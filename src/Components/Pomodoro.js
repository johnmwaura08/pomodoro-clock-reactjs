import React, { Component } from 'react'

export default class Pomodoro extends Component {
    state = {
        breakCount: 5,
        sessionCount: 25,
        clockCount: 25 * 60,
        currentTimer: "Session",
        isPlaying: false
      };

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
