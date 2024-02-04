import  { useState } from "react";
import "./hero.scss";
import {Box} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";




const Hero = () => {
  const [state, setState] = useState("hotel");
  return (
    <section className="hero-sect">
      <div className="containerr ">
        <h1>Let the journey begin</h1>
        <p>Get the best prices on 2,000,000+ properties, worldwide</p>
        <nav>
          <ul>
            <li
              style={{
                textDecoration: state == "hotel" ? "underline" : "none",
              }}
              onClick={() => {
                setState("hotel");
              }}
            >
              Hotel
            </li>
            <li
              style={{
                textDecoration: state == "tours" ? "underline" : "none",
              }}
              onClick={() => {
                setState("tours");
              }}
            >
              Tours
            </li>
            <li
              style={{
                textDecoration: state == "activity" ? "underline" : "none",
              }}
              onClick={() => {
                setState("activity");
              }}
            >
              Activity
            </li>
            <li
              style={{
                textDecoration: state == "rental" ? "underline" : "none",
              }}
              onClick={() => {
                setState("rental");
              }}
            >
              Rental
            </li>
            <li
              style={{
                textDecoration: state == "cars-rental" ? "underline" : "none",
              }}
              onClick={() => {
                setState("cars-rental");
              }}
            >
              Cars Rental
            </li>
            <li
              style={{
                textDecoration: state == "car-transfer" ? "underline" : "none",
              }}
              onClick={() => {
                setState("car-transfer");
              }}
            >
              Car Transfer
            </li>
          </ul>
        </nav>
        <div className="search-box">
          <ul>
            <li className="location">
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                  <Grid
                    xs={2}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                        fill="#707E86"
                      />
                    </svg>
                  </Grid>
                  <Grid xs={10}>
                    <Grid container spacing={1}>
                      <Grid xs={12} style={{ margin: "0px" }}>
                        Location
                      </Grid>
                      <Grid xs={12} style={{ margin: "0px", color: "gray" }}>
                        Where are you going?
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </li>
            <li className="line"></li>
            <li className="date">
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                  <Grid
                    xs={2}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                        fill="#707E86"
                      />
                    </svg>
                  </Grid>
                  <Grid xs={10}>
                    <Grid container spacing={1}>
                      <Grid xs={12} style={{ margin: "0px" }}>
                        Date
                      </Grid>
                      <Grid xs={12} style={{ margin: "0px", color: "gray" }}>
                        01/02/2024
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </li>
            <li className="arrow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                  fill="#3d3d3d"
                />
              </svg>
            </li>
            <li className="check">
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                  <Grid
                    xs={2}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                        fill="#707E86"
                      />
                    </svg>
                  </Grid>
                  <Grid xs={10}>
                    <Grid container spacing={1}>
                      <Grid xs={12} style={{ margin: "0px" }}>
                        Check out
                      </Grid>
                      <Grid xs={12} style={{ margin: "0px", color: "gray" }}>
                        02/02/2024
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </li>
            <li className="line"></li>
            <li className="guest" style={{display:state=="hotel"?"flex":"none"}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                  <Grid
                    xs={2}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"  ><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" fill="#707E86"/></svg>
                  </Grid>
                  <Grid xs={10}>
                    <Grid container spacing={1}>
                      <Grid xs={12} style={{ margin: "0px" }}>
                        Guest
                      </Grid>
                      <Grid xs={12} style={{ margin: "0px", color: "gray" }}>
                        1 guest,1 room
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </li>

            <li className="search-btn">
              <button>Search</button>
            </li>
          </ul>
        </div>

      
      </div>
    </section>
  );
};

export default Hero;
