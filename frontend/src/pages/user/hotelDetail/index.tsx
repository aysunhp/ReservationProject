import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import "./../../../assets/styles/gridSystem/grid.scss";
import "./hotelDetail.scss";
import { Button } from "antd";

const HotelDetail = () => {
  return (
    <div className="hotel-detail-page">
      <div className="location-hero">
        <div className="container ">
          <h1>Hotel name</h1>
          <div className="page-breadcrumb">
            <Breadcrumbs
              aria-label="breadcrumbs"
              className="breadcrumbs"
              style={{ color: "white" }}
            >
              <Link href="/" className="linkk" style={{ color: "white" }}>
                Home
              </Link>
              <Link
                href="/location"
                className="linkk"
                style={{ color: "white" }}
              >
                United States
              </Link>
              <Typography className="page-name linkk">Hotel Name</Typography>
            </Breadcrumbs>
          </div>
        </div>
        <div className="overlay"></div>
      </div>
      <div className="hotel-page-main-part">
        <div className="container row">
          <div className="hotel-page-main-sect-left col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
            <div className="page-header-sect">
              <div className="rate">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    fill="#FA5636"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    fill="#FA5636"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    fill="#FA5636"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    fill="#FA5636"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    fill="#FA5636"
                  />
                </svg>
              </div>
              <div className="review-wrapper">
                <div className="puan-box">5/5</div>
                <span>Excellent</span>
                <span className="review">(0 review)</span>

                <ul className="location">
                  <li>Location</li>
                </ul>
              </div>
            </div>
            <div className="about-hotel-sect">
              <h1>About this Hotel</h1>
              <p>
                Located in the Shinsaibashi area, Hotel WBF Hommachi is the
                ideal point of departure for your excursions in Osaka. With its
                location just from the city center and from the airport, this
                3-star property attracts numerous travelers each year. With its
                convenient location, the property offers easy access to the
                city’s must-see destinations.
              </p>
              <p>
                Hotel WBF Hommachi offers many facilities to enrich your stay in
                Osaka. Guests can enjoy on-site features like free Wi-Fi in all
                rooms, daily housekeeping, laundromat, wheelchair accessible,
                24-hour front desk.
              </p>
              <p>
                Hotel WBF Hommachi is home to 182 guestrooms. All are tastefully
                furnished, and many even provide such comforts as towels,
                carpeting, clothes rack, slippers, flat screen television. The
                property’s host of recreational offerings ensures you have
                plenty to do during your stay. Hotel WBF Hommachi is an ideal
                place of stay for travelers seeking charm, comfort, and
                convenience in Osaka.
              </p>
            </div>
            <div className="facilities-sect row">
              <h1>Hotel Facilities</h1>
              <div className="facilities-item col-12 col-sm-6 col-md-4">
                <svg
                  height="24px"
                  width="24px"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 24 24"
                  style={{ enableBackground: "new 0 0 24 24" }}
                  xml:space="preserve"
                >
                  <g fill="#5E6D77">
                    <path
                      d="M21.75,13.5c-0.414,0-0.75-0.336-0.75-0.75S21.336,12,21.75,12s0.75-0.336,0.75-0.75V10.5h-21v0.75
        C1.5,11.664,1.836,12,2.25,12S3,12.336,3,12.75S2.664,13.5,2.25,13.5C1.009,13.5,0,12.491,0,11.25v-7.5C0,1.682,1.682,0,3.75,0
        h16.5C22.318,0,24,1.682,24,3.75v7.5C24,12.491,22.991,13.5,21.75,13.5z M22.5,9V3.75c0-1.241-1.009-2.25-2.25-2.25H3.75
        C2.509,1.5,1.5,2.509,1.5,3.75V9H22.5z"
                    ></path>
                    <circle cx="19.5" cy="4.5" r="1.125"></circle>
                    <path
                      d="M2.25,21c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75c1.241,0,2.25-1.009,2.25-2.25v-3
        c0-0.414,0.336-0.75,0.75-0.75S6,13.836,6,14.25v3C6,19.318,4.318,21,2.25,21z"
                    ></path>
                    <path
                      d="M8.25,24c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75S9,22.164,9,21.75v-7.5c0-0.414,0.336-0.75,0.75-0.75
        s0.75,0.336,0.75,0.75v7.5C10.5,22.991,9.491,24,8.25,24z"
                    ></path>
                    <path
                      d="M21.75,21C19.682,21,18,19.318,18,17.25v-3c0-0.414,0.336-0.75,0.75-0.75s0.75,0.336,0.75,0.75v3
        c0,1.241,1.009,2.25,2.25,2.25c0.414,0,0.75,0.336,0.75,0.75S22.164,21,21.75,21z"
                    ></path>
                    <path
                      d="M15.75,24c-1.241,0-2.25-1.009-2.25-2.25v-7.5c0-0.414,0.336-0.75,0.75-0.75S15,13.836,15,14.25v7.5
        c0,0.414,0.336,0.75,0.75,0.75s0.75,0.336,0.75,0.75S16.164,24,15.75,24z"
                    ></path>
                  </g>
                </svg>
                <span>Air Conditioning</span>
              </div>
              <div className="facilities-item col-12 col-sm-6 col-md-4">
                <svg
                  height="24px"
                  width="24px"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 24 24"
                  style={{ enableBackground: "new 0 0 24 24" }}
                  xml:space="preserve"
                >
                  <g fill="#5E6D77">
                    <path
                      d="M10.799,21.002c-0.553,0-1.086-0.205-1.501-0.578L7.52,18.823c-0.01-0.008-0.02-0.016-0.028-0.024l-1.243-1.115
        C6.1,17.55,6.012,17.366,6.001,17.165c-0.011-0.2,0.057-0.392,0.191-0.541c0.142-0.158,0.345-0.249,0.558-0.249
        c0.185,0,0.363,0.068,0.501,0.192l0.923,0.828l1.981-0.669l-2.341-2.795c-0.154-0.184-0.211-0.433-0.152-0.667
        c0.059-0.233,0.228-0.425,0.452-0.513l2.093-0.825c0.087-0.035,0.18-0.052,0.275-0.052c0.185,0,0.363,0.068,0.501,0.192
        l3.371,3.026l1.188-0.569c0.042-0.027,0.087-0.05,0.134-0.068c0.259-0.1,0.531-0.151,0.807-0.151c0.914,0,1.756,0.567,2.094,1.412
        c0.224,0.558,0.217,1.169-0.02,1.722c-0.236,0.552-0.673,0.98-1.231,1.204l-5.703,2.203C11.359,20.949,11.081,21.002,10.799,21.002
        z M10.302,19.309c0.138,0.124,0.315,0.192,0.498,0.192c0.094,0,0.188-0.018,0.277-0.053l5.698-2.202
        c0.179-0.072,0.323-0.214,0.402-0.398c0.079-0.184,0.081-0.388,0.006-0.573c-0.113-0.282-0.394-0.471-0.7-0.471
        c-0.07,0-0.139,0.01-0.206,0.029c-0.001,0.001-1.729,0.829-1.729,0.829c-0.1,0.048-0.212,0.074-0.324,0.074
        c-0.185,0-0.363-0.068-0.501-0.192l-3.4-3.052l-0.694,0.273l2.378,2.838c0.159,0.19,0.214,0.446,0.147,0.685
        c-0.067,0.239-0.247,0.428-0.482,0.507l-2.219,0.749L10.302,19.309z"
                    ></path>
                    <path
                      d="M2.25,24C1.009,24,0,22.991,0,21.75V5.25C0,4.009,1.009,3,2.25,3H6V0.75C6,0.336,6.336,0,6.75,0S7.5,0.336,7.5,0.75V3h9
        V0.75C16.5,0.336,16.836,0,17.25,0S18,0.336,18,0.75V3h3.75C22.991,3,24,4.009,24,5.25v16.5c0,1.241-1.009,2.25-2.25,2.25H2.25z
         M1.5,21.75c0,0.414,0.336,0.75,0.75,0.75h19.5c0.414,0,0.75-0.336,0.75-0.75V10.5h-21V21.75z M22.5,9V5.25
        c0-0.414-0.336-0.75-0.75-0.75H18V6c0,0.414-0.336,0.75-0.75,0.75S16.5,6.414,16.5,6V4.5h-9V6c0,0.414-0.336,0.75-0.75,0.75
        S6,6.414,6,6V4.5H2.25C1.836,4.5,1.5,4.836,1.5,5.25V9H22.5z"
                    ></path>
                  </g>
                </svg>
                <span>Airport Transport</span>
              </div>
              <div className="facilities-item col-12 col-sm-6 col-md-4">
                <svg
                  height="24px"
                  width="24px"
                  version="1.1"
                  id="Regular"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 24 24"
                  style={{ enableBackground: "new 0 0 24 24" }}
                  xml:space="preserve"
                >
                  <g fill="#5E6D77">
                    <path
                      d="M12,12.75c-1.861,0-3.375-1.514-3.375-3.375S10.139,6,12,6c1.861,0,3.375,1.514,3.375,3.375S13.861,12.75,12,12.75z
         M12,7.5c-1.034,0-1.875,0.841-1.875,1.875S10.966,11.25,12,11.25s1.875-0.841,1.875-1.875S13.034,7.5,12,7.5z"
                    ></path>
                    <path
                      d="M9,24c-0.414,0-0.75-0.336-0.75-0.75v-5.44c-0.963-0.458-1.844-1.106-2.562-1.886c-1.629-1.945-2.574-4.388-2.673-6.894
        C3,8.616,3.322,8.267,3.735,8.25c0.005,0,0.022,0,0.027,0c0.406,0,0.736,0.317,0.752,0.72c0.086,2.176,0.903,4.294,2.301,5.964
        c0.667,0.724,1.523,1.312,2.464,1.689c0.286,0.115,0.471,0.388,0.471,0.696v5.93C9.75,23.664,9.414,24,9,24z"
                    ></path>
                    <path
                      d="M9.575,15c-0.124,0-0.248-0.031-0.357-0.091c-0.482-0.261-0.919-0.594-1.3-0.989c-2.225-2.412-1.922-6.325-1.918-6.364
        c0.024-0.304-0.138-0.59-0.413-0.727C5.216,6.644,5.065,6.193,5.25,5.823c0.128-0.256,0.385-0.415,0.671-0.415
        c0.115,0,0.231,0.027,0.335,0.079C7.082,5.899,7.567,6.76,7.494,7.68c-0.002,0.031-0.222,3.328,1.515,5.212
        c0.223,0.231,0.482,0.437,0.766,0.608h4.453c0.288-0.174,0.552-0.387,0.785-0.632c1.62-1.763,1.513-4.847,1.496-5.193
        c0-0.001,0-0.002,0-0.003c-0.071-0.916,0.414-1.772,1.236-2.184c0.104-0.052,0.22-0.079,0.335-0.079
        c0.286,0,0.543,0.159,0.671,0.414c0.185,0.37,0.035,0.821-0.335,1.006c-0.276,0.138-0.438,0.426-0.411,0.733
        c0.002,0.025,0.002,0.044,0.002,0.063c0.034,0.649,0.102,4.089-1.898,6.266c-0.391,0.412-0.835,0.753-1.325,1.018
        C14.673,14.969,14.55,15,14.426,15H9.575z"
                    ></path>
                    <path
                      d="M15,24c-0.414,0-0.75-0.336-0.75-0.75v-5.93c0-0.309,0.185-0.582,0.472-0.696c0.94-0.376,1.801-0.968,2.487-1.712
        c1.379-1.649,2.192-3.763,2.277-5.941c0.016-0.411,0.342-0.72,0.759-0.72c0.433,0.016,0.756,0.366,0.74,0.779
        c-0.098,2.507-1.039,4.948-2.649,6.872c-0.736,0.799-1.623,1.452-2.585,1.909v5.439C15.75,23.664,15.414,24,15,24z"
                    ></path>
                    <path
                      d="M21.75,7.5c-1.241,0-2.25-1.009-2.25-2.25V4.386c-2.48-0.422-5.001-0.636-7.499-0.636C9.502,3.75,6.98,3.964,4.5,4.386
        V5.25c0,1.241-1.009,2.25-2.25,2.25S0,6.491,0,5.25v-3C0,1.009,1.009,0,2.25,0S4.5,1.009,4.5,2.25v0.616
        C6.982,2.457,9.503,2.25,12.001,2.25c2.497,0,5.018,0.207,7.499,0.615V2.25C19.5,1.009,20.509,0,21.75,0S24,1.009,24,2.25v3
        C24,6.491,22.991,7.5,21.75,7.5z M21.75,1.5C21.336,1.5,21,1.836,21,2.25v3C21,5.664,21.336,6,21.75,6s0.75-0.336,0.75-0.75v-3
        C22.5,1.836,22.164,1.5,21.75,1.5z M2.25,1.5C1.836,1.5,1.5,1.836,1.5,2.25v3C1.5,5.664,1.836,6,2.25,6S3,5.664,3,5.25v-3
        C3,1.836,2.664,1.5,2.25,1.5z"
                    ></path>
                  </g>
                </svg>
                <span> Fitness Center</span>
              </div>
              <div className="facilities-item col-12 col-sm-6 col-md-4">
                <svg
                  height="24px"
                  width="24px"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 24 24"
                  style={{ enableBackground: "new 0 0 24 24}" }}
                  xml:space="preserve"
                >
                  <g fill="#5E6D77">
                    <path
                      d="M8.251,13.515c-0.414,0-0.75-0.336-0.75-0.75v-0.878C6.615,11.573,6,10.725,6,9.765s0.615-1.808,1.501-2.122V3.811
        c0-0.414,0.336-0.75,0.75-0.75s0.75,0.336,0.75,0.75v3.833C9.885,7.958,10.5,8.806,10.5,9.765s-0.615,1.807-1.499,2.121v0.879
        C9.001,13.178,8.665,13.515,8.251,13.515z M8.25,9.015c-0.414,0-0.75,0.336-0.75,0.75s0.336,0.75,0.75,0.75S9,10.179,9,9.765
        S8.664,9.015,8.25,9.015z"
                    ></path>
                    <path
                      d="M15.751,13.517c-0.414,0-0.75-0.336-0.75-0.75v-3.88C14.115,8.573,13.5,7.725,13.5,6.765s0.615-1.808,1.501-2.122V3.765
        c0-0.414,0.336-0.75,0.75-0.75s0.75,0.336,0.75,0.75v0.879C17.385,4.958,18,5.806,18,6.765s-0.615,1.807-1.499,2.121v3.881
        C16.501,13.181,16.165,13.517,15.751,13.517z M15.729,6.016C15.325,6.027,15,6.36,15,6.765c0,0.414,0.336,0.75,0.75,0.75
        s0.75-0.336,0.75-0.75c0-0.404-0.325-0.737-0.728-0.749C15.765,6.017,15.737,6.017,15.729,6.016z"
                    ></path>
                    <path
                      d="M6.751,24c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h1.832c0.552-0.916,0.922-1.943,1.083-3H2.251
        c-1.241,0-2.25-1.009-2.25-2.25v-15C0.001,1.009,1.01,0,2.251,0h19.5c1.241,0,2.25,1.009,2.25,2.25v15
        c0,1.241-1.009,2.25-2.25,2.25h-7.417c0.161,1.058,0.531,2.084,1.083,3h1.834c0.414,0,0.75,0.336,0.75,0.75S17.665,24,17.251,24
        H6.751z M13.707,22.5c-0.458-0.944-0.756-1.949-0.888-3h-1.637c-0.133,1.051-0.431,2.056-0.889,3H13.707z M1.501,17.25
        c0,0.414,0.336,0.75,0.75,0.75h19.5c0.414,0,0.75-0.336,0.75-0.75V16.5h-21V17.25z M22.501,15V2.25c0-0.414-0.336-0.75-0.75-0.75
        h-19.5c-0.414,0-0.75,0.336-0.75,0.75V15H22.501z"
                    ></path>
                  </g>
                </svg>
                <span>Flat TV</span>
              </div>
            </div>
            <div className="rules-sect">
              <h1>Rules</h1>
              <div className="check-in col-12 row ">
                <p className="col-5">Check In</p>
                <p className="col-7">12:00 pm</p>
              </div>
              <div className="check-out col-12 row check">
                <p className="col-5">Check Out</p>
                <p className="col-7">12:00 pm</p>
              </div>
            </div>
            <div className="availability-sect">
              <h1>Availability</h1>
              <div className="available-rooms-wrapper row">
                <div className="room-item col-12 col-xxl-12 col-xl-12 col-lg-12 col-md-6">
                  <div className="room-item-card-row row ">
                    <div className="item-card-img col-xl-4 large col-lg-4 col-md-12 col-sm-12  col-xs-12">
                      <img
                        src="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/JA-Ocean-View-Hotel-800x600.png"
                        alt=""
                      />
                    </div>

                    <div className="item-card-content col-xl-8 large col-lg-8 col-md-12 col-sm-12  col-xs-12 row">
                      <div className="content-left-sect col-xl-7 large col-lg-7 col-md-12 col-sm-12  col-xs-12">
                        <div className="upper">
                          <h2 className="name">Name</h2>
                        </div>
                        <div className="down-side">
                          <div className="count-item-wrapper">
                            <div
                              className="count-item "
                              style={{ marginBottom: "1px" }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm96 288H448c17.7 0 32-14.3 32-32V251.8c0-7.6-2.7-15-7.7-20.8l-65.8-76.8c-12.1-14.2-33.7-15-46.9-1.8l-21 21c-10 10-26.4 9.2-35.4-1.6l-39.2-47c-12.6-15.1-35.7-15.4-48.7-.6L135.9 215c-5.1 5.8-7.9 13.3-7.9 21.1v84c0 17.7 14.3 32 32 32z" />
                              </svg>
                            </div>
                            <p>
                              {" "}
                              <span>2</span>m<sup>2</sup>
                            </p>
                          </div>
                          <div className="count-item-wrapper">
                            <div className="count-item">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 512"
                              >
                                <path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
                              </svg>
                            </div>
                            <p>
                              {" "}
                              x<span>2</span>
                            </p>
                          </div>
                          <div className="count-item-wrapper">
                            <div className="count-item">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                              >
                                <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                              </svg>
                            </div>
                            <p>
                              {" "}
                              x<span>2</span>
                            </p>
                          </div>

                          <div className="count-item-wrapper">
                            <div className="count-item">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                              >
                                <path d="M224 64A64 64 0 1 0 96 64a64 64 0 1 0 128 0zM88 400v80c0 17.7 14.3 32 32 32s32-14.3 32-32V400h16v80c0 17.7 14.3 32 32 32s32-14.3 32-32V400h17.8c10.9 0 18.6-10.7 15.2-21.1l-31.1-93.4 28.6 37.8c10.7 14.1 30.8 16.8 44.8 6.2s16.8-30.7 6.2-44.8L254.6 207c-22.4-29.6-57.5-47-94.6-47s-72.2 17.4-94.6 47L6.5 284.7c-10.7 14.1-7.9 34.2 6.2 44.8s34.2 7.9 44.8-6.2l28.7-37.8L55 378.9C51.6 389.3 59.3 400 70.2 400H88z" />
                              </svg>
                            </div>
                            <p>
                              x<span>3</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="content-right-sect col-xl-5 large col-lg-5 col-md-12 col-sm-12  col-xs-12">
                        <p>
                          <span>$120,00</span>
                          /night
                        </p>

                        <Button type="primary" shape="round" className="btn">
                          Room Detail
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="room-item col-12 col-xxl-12 col-xl-12 col-lg-12 col-md-6">
                  <div className="room-item-card-row row ">
                    <div className="item-card-img col-xl-4 large col-lg-4 col-md-12 col-sm-12  col-xs-12">
                      <img
                        src="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/JA-Ocean-View-Hotel-800x600.png"
                        alt=""
                      />
                    </div>

                    <div className="item-card-content col-xl-8 large col-lg-8 col-md-12 col-sm-12  col-xs-12 row">
                      <div className="content-left-sect col-xl-7 large col-lg-7 col-md-12 col-sm-12  col-xs-12">
                        <div className="upper">
                          <h2 className="name">Name</h2>
                        </div>
                        <div className="down-side">
                          <div className="count-item-wrapper">
                            <div
                              className="count-item "
                              style={{ marginBottom: "1px" }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm96 288H448c17.7 0 32-14.3 32-32V251.8c0-7.6-2.7-15-7.7-20.8l-65.8-76.8c-12.1-14.2-33.7-15-46.9-1.8l-21 21c-10 10-26.4 9.2-35.4-1.6l-39.2-47c-12.6-15.1-35.7-15.4-48.7-.6L135.9 215c-5.1 5.8-7.9 13.3-7.9 21.1v84c0 17.7 14.3 32 32 32z" />
                              </svg>
                            </div>
                            <p>
                              {" "}
                              <span>2</span>m<sup>2</sup>
                            </p>
                          </div>
                          <div className="count-item-wrapper">
                            <div className="count-item">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 512"
                              >
                                <path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
                              </svg>
                            </div>
                            <p>
                              {" "}
                              x<span>2</span>
                            </p>
                          </div>
                          <div className="count-item-wrapper">
                            <div className="count-item">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                              >
                                <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                              </svg>
                            </div>
                            <p>
                              {" "}
                              x<span>2</span>
                            </p>
                          </div>

                          <div className="count-item-wrapper">
                            <div className="count-item">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                              >
                                <path d="M224 64A64 64 0 1 0 96 64a64 64 0 1 0 128 0zM88 400v80c0 17.7 14.3 32 32 32s32-14.3 32-32V400h16v80c0 17.7 14.3 32 32 32s32-14.3 32-32V400h17.8c10.9 0 18.6-10.7 15.2-21.1l-31.1-93.4 28.6 37.8c10.7 14.1 30.8 16.8 44.8 6.2s16.8-30.7 6.2-44.8L254.6 207c-22.4-29.6-57.5-47-94.6-47s-72.2 17.4-94.6 47L6.5 284.7c-10.7 14.1-7.9 34.2 6.2 44.8s34.2 7.9 44.8-6.2l28.7-37.8L55 378.9C51.6 389.3 59.3 400 70.2 400H88z" />
                              </svg>
                            </div>
                            <p>
                              x<span>3</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="content-right-sect col-xl-5 large col-lg-5 col-md-12 col-sm-12  col-xs-12">
                        <p>
                          <span>$120,00</span>
                          /night
                        </p>

                        <Button type="primary" shape="round" className="btn">
                          Room Detail
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hotel-page-main-sect-right col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div className="hotel-img-wrapper">
              <div className="img-wrapper">
                <img
                  src="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/feature-1.png"
                  alt=""
                />
              </div>
            </div>
            <div className="hotel-locate-map">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" fill="red"/></svg>
                <div></div>
                <Button shape="round" className="map-btn">View in a Map</Button>
            </div>
            <div className="hotel-partner-commonication-box">
                <div className="partner-box">
                    <div className="partner-img">
                        <img src="https://modmixmap.travelerwp.com/wp-content/uploads/2024/01/dfd580a23b65dc9e6cd9bf2d681303b7.jpg" alt="" />
                    </div>
                    <div className="partner-name">
                        aysunhpp
                    </div>
                </div>
                <p className="member-since">Member Since 2022</p>
                <Button shape="round" type="primary" className="partner-btn">Ask a Question</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;
