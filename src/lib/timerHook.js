// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function useTimer(initialValue) {
  const [duration, setDuration] = useState(initialValue || 0);

  const startTimer = () => {
    if (window.durationInterval) {
      clearInterval(window.durationInterval);
      setDuration(0);
    }

    window.durationInterval = setInterval(() => {
      setDuration(duration => duration + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (window.durationInterval) {
      clearInterval(window.durationInterval);
    }
  };

  const clearTimer = () => {
      stopTimer();
      setDuration(0);
  };

  return [duration, startTimer, stopTimer, clearTimer];
}

export default useTimer;
