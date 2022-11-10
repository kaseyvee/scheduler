import { useState } from "react";

// Used in Appointment/index.js
export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  // "Replace = true" replaces most recent mode
  const transition = (mode, replace = false) => {
    if (replace) {
      history.pop(history[history.length - 1]);
      history.push(mode);
      setHistory(history);
      setMode(mode)
    } else {
      history.push(mode);
      setMode(mode);
    }
  };

  const back = () => {
    if (history.length > 1) {
      history.pop(mode)
      setMode(history[history.length - 1]);
    }
  };

  return { mode, transition, back };
}