import React, { useState } from "react";
import { Box, ThemeProvider } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import "./App.css";
const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [add, setAdd] = useState(0);
  const handleClick = () => {
    setAdd(0);
    window.location.reload();
  };
  const calInterest = (e) => {
    e.preventDefault();
    if (num1 === 0 || num2 === 0 || num3 === 0) {
      alert(
        "Please enter valid principal amount, rate of interest and time period."
      );
    } else {
      let add = (parseInt(num1) * parseInt(num2) * parseInt(num3)) / 100;
      setAdd(parseInt(add));
    }
  };
  return (
    <div className="app">
      <div className="container">
        <div className="heading_text">
          <h1 className="heading_one">Simple Interest Calculator</h1>
          <p className="heading_two">Calculate your Simple Interest easily</p>
        </div>
        <div className="total_amount_card">
          <div className="card_text ">
            <h3 className="total_amount_heading">₹{add}</h3>
            <p className="total_amount_para">Total simple interest</p>
          </div>
        </div>
        <form onSubmit={calInterest}>
          <div className="input_area">
            <div className="input_field">
              <TextField
                type="number"
                id="outlined-basic"
                label="₹ Principal Amount"
                variant="outlined"
                value={num1 || ""}
                onChange={(e) => setNum1(e.target.value)}
              />
            </div>
            <div className="input_field">
              <TextField
                type="number"
                id="outlined-basic"
                label="Rate of interest (p.a) %"
                variant="outlined"
                value={num2 || ""}
                onChange={(e) => setNum2(e.target.value)}
              />
            </div>
            <div className="input_field">
              <TextField
                type="number"
                id="outlined-basic"
                label="Time period ( Yr )"
                variant="outlined"
                value={num3 || ""}
                onChange={(e) => setNum3(e.target.value)}
              />
            </div>
            <div className="button_collection">
              <Stack spacing={2} direction="row">
                <Button type="submit" variant="contained" color="success">
                  Calculate
                </Button>
                <Button variant="contained" color="error" onClick={handleClick}>
                  Reset
                </Button>
              </Stack>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
