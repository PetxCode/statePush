import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import { Link } from "react-router-dom";

const HeaderView = () => {
  return (
    <div>
      <Header
        style={{
          color: "white",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          fontFamily: "Poppins",
          textTransform: "uppercase",
        }}
      >
        <Link to="/counter" style={{ textDecoration: "none", color: "white" }}>
          Counter
        </Link>
        <Link to="/quote" style={{ textDecoration: "none", color: "white" }}>
          Quote
        </Link>
        <Link to="/state" style={{ textDecoration: "none", color: "white" }}>
          State Management
        </Link>
        <Button>Donate</Button>
      </Header>
    </div>
  );
};

export default HeaderView;
