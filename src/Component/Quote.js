import React, { useState } from "react";

const quotes = [
  "This is the best day of the Year",
  "Man know thee self",
  "It pays to serve",
  "The fear of GOD, is the beginning of Knowledge",
];

const Quote = () => {
  const [quoter, setQuoter] = useState(0);

  return (
    <div>
      <center
        style={{
          marginTop: "50px",
          marginBottom: "150px",
          fontFamily: "Poppins",
          fontSize: "26px",
        }}
      >
        {" "}
        This the best Quote{" "}
      </center>

      <div
        style={{
          marginTop: "150px ",
          fontFamily: "Poppins",
          fontSize: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          // flexDirection: "column",
        }}
        onClick={() => {
          setQuoter(quoter + 1);
          console.log(quotes[2]);
        }}
      >
        <div
          style={{
            fontSize: "90px",
            color: "red",
            marginRight: "20px",
          }}
        >
          "
        </div>
        <div
          style={
            {
              // marginLeft: "20px",
            }
          }
        >
          {quotes[quoter % quotes.length]}
        </div>
        <div
          style={{
            fontSize: "90px",
            marginLeft: "20px",
            color: "red",
          }}
        >
          "
        </div>
      </div>
    </div>
  );
};

export default Quote;
