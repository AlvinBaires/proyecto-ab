import React, { useEffect, useState } from "react";
import "./styles.css";

import {Col, Row, Container} from 'react-bootstrap';

function PomodoroApp() {

    return (
        <div className="App">
        <h1>Pomodoro App</h1>
        <div className="container">
            <Pomodoro />
        </div>      
        </div>
    );
}

const intervals = {
  pomodoro: { id: "pomodoro", time: 25, timeMs: 25 * 60 * 1000 },
  shortBreak: { id: "shortBreak", time: 5, timeMs: 5 * 60 * 1000 },
  longBreak: { id: "longBreak", time: 15, timeMs: 15 * 60 * 1000 },
};
const initInterval = "pomodoro";

function Timer({ time }) {
  const formatTime = (time, digit) =>
    ("0" + Math.floor((time / (digit * 1000)) % 60)).slice(-2);

  return (
    <div className="timer">
      <span className="digits-minutes">{formatTime(time, 60)}:</span>
      <span className="digits-seconds">{formatTime(time, 1)}</span>
    </div>
  );
}

let intervalId;
function Pomodoro(props) {

    const [ciclos , setCiclos] = useState(() => {
    return parseInt(window.localStorage.getItem("ciclos") || 0);
    });

    useEffect(() => {
    window.localStorage.setItem("ciclos", ciclos);
    }, [ciclos]);

  const [time, timeSet] = useState(intervals[initInterval].timeMs);
  const [intervalSelection, intervalSelectionSet] = useState(
    intervals[initInterval].id
  );
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    if (isActive && isPaused === false && time > 0) {
      intervalId = setInterval(() => {
        timeSet((time) => time - 1000);
      }, 1000);
    } else {
        if(isActive && time == 0 && isPaused == false){
            setCiclos(ciclos + 1);
            setIsPaused(false);
            setIsActive(false);
        }
      clearInterval(intervalId);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isActive, isPaused, time]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleOnClick = (event) => {
    event.preventDefault();
    const id = event.target.id;
    intervalSelectionSet(intervals[id].id);
    timeSet(intervals[id].timeMs);
    setIsPaused(true);
  };

  const handleClickStartButton = (event) => {      
    event.preventDefault();

    if (isPaused) {
      handleStart();
    } else {
      handlePauseResume();
    }
  };

  return (
    <main>
      <form>

            <Container>
                <Row>
                    <Col>
                        <button
                        onClick={handleOnClick}
                        id="pomodoro"
                        className={`btn btn-primary btn-md`}>
                        Pomodoro
                        </button>
                    </Col>
                    <Col>
                        <button
                        onClick={handleOnClick}
                        id="shortBreak"
                        className={`btn btn-primary btn-md`}>
                        Short Break
                        </button>
                    </Col>
                    <Col>
                        <button
                        onClick={handleOnClick}
                        id="longBreak"
                        className={`btn btn-primary btn-md`}>
                        Long Break
                        </button>
                    </Col>
                </Row>

                <Row>
                     <Timer time={time} />
                </Row>
            
                <Row className="iteracciones">
                    <Col>
                        {ciclos} Iteracciones
                    </Col>
                </Row>

                
            </Container>
       

        <button onClick={handleClickStartButton}
        className={`btn btn-primary btn-md`}>
          {isPaused ? "Start" : "Pause"}
        </button>
        
      </form>
    </main>
  );
}

export default PomodoroApp;
