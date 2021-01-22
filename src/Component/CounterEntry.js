import { Button } from "antd";
import React, { useState, useEffect } from "react";

const CounterEntry = () => {
  const [input, setInput] = useState(0);
  const [counting, setCounting] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const inputNumb = parseInt(input);
    if (counting && inputNumb > 0) {
      return setTimeout(() => {
        setInput(inputNumb - 1);
      }, 1000);
    } else {
      if (show) {
        alert("Your time is up");
        setShow(false);
      }
      setCounting(false);
    }
  }, [counting, input]);
  return (
    <div>
      <form>
        <input
          disabled={counting}
          placeholder="Enter the time"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            setCounting(true);
            setShow(true);
          }}
        >
          Enter
        </Button>
      </form>
    </div>
  );
};
export default CounterEntry;
