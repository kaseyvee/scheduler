import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  // "Replace = true" replaces most recent mode
  const transition = (mode, replace = false) => {
    console.log("previous history:", history)
    if (replace) {
      history.pop(history[history.length - 1]);
      history.push(mode);
      setHistory(history);
      setMode(mode)
      console.log("history after when replace true: ", history)
    } else {
      history.push(mode);
      setMode(mode);
      console.log("history after when replace false: ", history)
    }
  };

  const back = () => {
    if (history.length > 1) {
      history.pop(mode)
      setMode(history[history.length - 1]);
    }
    console.log("history after going back: ", history)
  };

  return { mode, transition, back };
}