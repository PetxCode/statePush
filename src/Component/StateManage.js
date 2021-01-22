import { Button } from "antd";
import React, { useState, useReducer } from "react";

const initState = {
  counter: 10,
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        counter: state.counter + 1,
      };

    case "DECREASE":
      return {
        counter: state.counter - 1,
      };

    case "ADD_VALUE":
      return {
        counter: action.payload,
      };

    default:
      return state;
  }
};

const StateManage = () => {
  const [state, dispatch] = useReducer(AppReducer, initState);
  const [input, setInput] = useState(0);
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setInput(input + 1);
  };
  const decrease = () => {
    setInput(input - 1);
  };
  return (
    <div>
      <center
        style={{
          fontSize: "20px",
          marginTop: "60px",
          fontFamily: "Poppins",
        }}
      >
        State Management
      </center>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "50px",
          fontFamily: "Poppins",
        }}
      >
        <div>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />{" "}
          <Button
            onClick={() => {
              dispatch({
                type: "ADD_VALUE",
                payload: input,
              });
            }}
          >
            Enter
          </Button>
        </div>
        <div
          style={{
            marginTop: "30px",
            fontSize: "30px",
          }}
        >
          {state.counter}
        </div>
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <Button
            style={{
              marginRight: "10px",
              backgroundColor: "green",
              color: "white",
            }}
            onClick={() =>
              dispatch({
                type: "DECREASE",
              })
            }
          >
            -
          </Button>
          <Button
            style={{
              // marginRight: "10px",
              backgroundColor: "red",
              color: "white",
            }}
            onClick={() =>
              dispatch({
                type: "INCREASE",
              })
            }
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StateManage;
