import React, { useRef, useState } from "react";

function Stopwatch() {

  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);

  const timerRef = useRef(null);

  // Start stopwatch
  const start = () => {

    if (timerRef.current !== null) {
      return;
    }

    timerRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  };

  // Stop stopwatch
  const stop = () => {

    clearInterval(timerRef.current);

    timerRef.current = null;
  };

  // Reset stopwatch
  const reset = () => {

    clearInterval(timerRef.current);

    timerRef.current = null;

    setTime(0);
    setLaps([]);
  };

  // Add lap
  const addLap = () => {

    setLaps(prevLaps => [
      ...prevLaps,
      time
    ]);
  };

  // Convert seconds to HH:MM:SS
  const formatTime = (totalSeconds) => {

    const hours = Math.floor(totalSeconds / 3600);

    const minutes = Math.floor(
      (totalSeconds % 3600) / 60
    );

    const seconds = totalSeconds % 60;

    return (
      String(hours).padStart(2, "0") +
      ":" +
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0")
    );
  };

  return (
    <div>

      <h2>Stopwatch</h2>

      <h1>{formatTime(time)}</h1>

      <button onClick={start}>
        Start
      </button>

      <button onClick={stop}>
        Stop
      </button>

      <button onClick={reset}>
        Reset
      </button>

      <button onClick={addLap}>
        Lap
      </button>

      <h3>Laps</h3>

      <ul>
        {laps.map((lap, index) => (
          <li key={index}>
            Lap {index + 1} → {formatTime(lap)}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Stopwatch;