import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (mode, replace = false) => {
    console.log(history)
    if (replace) {
      history.pop(history[history.length - 1]);
      history.push(mode);
      setHistory(history);
      setMode(mode)
      console.log(history)
    } else {
      history.push(mode);
      setMode(mode);
      console.log(history)
    }
  };

  const back = () => {
    if (history.length > 1) {
      history.pop(mode)
      setMode(history[history.length - 1]);
    }
    console.log(history)
  };

  return { mode, transition, back };
}