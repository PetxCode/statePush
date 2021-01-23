import { Button } from "antd";
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "./ContextAPI/GlobalContext";

const EditScreen = (props) => {
  const hist = useHistory();
  const { teams, editTeam } = useContext(GlobalContext);
  const [input, setInput] = useState("");
  const [selectedTeam, setSelectedTeam] = useState({
    id: "",
    name: "",
  });

  const currentTeamID = props.match.params.id;

  useEffect(() => {
    const TeamID = currentTeamID;
    const selectedTeam = teams.find((team) => team.id === TeamID);
    setSelectedTeam(selectedTeam);
  }, [teams, currentTeamID]);

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
          value={selectedTeam.name}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Enter Edited Name"
        />

        <div>
          <Button
            style={{
              backgroundColor: "green",
              color: "white",
              marginRight: "10px",
              width: "90px",
            }}
          >
            Edit
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

export default EditScreen;
