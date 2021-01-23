import { Button } from "antd";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./ContextAPI/GlobalContext";

const HomeScreen = () => {
  const { teams, removeTeam } = useContext(GlobalContext);
  return (
    <div
      style={{
        fontFamily: "Poppins",
        marginTop: "50px",
      }}
    >
      {teams.map(({ id, name }) => (
        <div
          kay={id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "5px 20px",
            // width: "700px",
            alignItems: "center",
            margin: "0 50px",
            border: "1px solid lightblue",
          }}
        >
          <div> {name} </div>
          <div>
            <Button
              style={{
                backgroundColor: "green",
                color: "white",
                marginRight: "10px",
                width: "90px",
              }}
            >
              <Link to={`edit/${id}`}>Edit</Link>
            </Button>
            <Button
              style={{
                backgroundColor: "red",
                color: "white",
                // marginRight: "10px",
                width: "90px",
              }}
              onClick={() => {
                removeTeam(id);
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeScreen;
