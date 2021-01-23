import { Button } from "antd";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "./ContextAPI/GlobalContext";
import { v4 as uuid } from "uuid";

const AddScreen = () => {
  const { teams, addTeam } = useContext(GlobalContext);
  const hist = useHistory();
  const [input, setInput] = useState("");

  const clickToAddTeam = () => {
    const newTeam = {
      id: uuid(),
      name: input,
    };
    addTeam(newTeam);
    hist.push("/");
  };

  return (
    <div
      style={{
        fontFamily: "Poppins",
        marginTop: "50px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          style={{
            width: "600px",
            marginBottom: "10px",
            paddingLeft: "20px",
          }}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Add New Team Member"
        />

        <div>
          <Button
            style={{
              backgroundColor: "green",
              color: "white",
              marginRight: "10px",
              width: "90px",
            }}
            onClick={() => {
              clickToAddTeam(input);
            }}
          >
            Add
          </Button>
          <Button
            style={{
              backgroundColor: "red",
              color: "white",
              // marginRight: "10px",
              width: "90px",
            }}
            onClick={() => {
              hist.push("/");
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddScreen;
