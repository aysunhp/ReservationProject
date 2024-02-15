import { useEffect, useState } from "react";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import "./../../../assets/styles/gridSystem/grid.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store/hotelStore";
import { fetchHotelData } from "../../../redux/slice/hotelSlice";
import { useParams } from "react-router-dom";
import { fetchRoomData } from "../../../redux/slice/roomSlice";
import "./roomDetail.scss";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import { Button } from "antd";
import { styled } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import {
  DateRangePickerDay as MuiDateRangePickerDay,
  DateRangePickerDayProps,
} from "@mui/x-date-pickers-pro/DateRangePickerDay";

const DateRangePickerDay = styled(MuiDateRangePickerDay)(
  ({
    theme,
    isHighlighting,
    isStartOfHighlighting,
    isEndOfHighlighting,
    outsideCurrentMonth,
  }) => ({
    ...(!outsideCurrentMonth &&
      isHighlighting && {
        borderRadius: 0,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        "&:hover, &:focus": {
          backgroundColor: theme.palette.primary.dark,
        },
      }),
    ...(isStartOfHighlighting && {
      borderTopLeftRadius: "50%",
      borderBottomLeftRadius: "50%",
    }),
    ...(isEndOfHighlighting && {
      borderTopRightRadius: "50%",
      borderBottomRightRadius: "50%",
    }),
  })
) as React.ComponentType<DateRangePickerDayProps<Dayjs>>;

const RoomDetail = () => {
  const dispatch = useDispatch<AppDispatch>();
  const hotels = useSelector((state: RootState) => state.hotel.hotels);
  const rooms = useSelector((state: RootState) => state.room.rooms);
  const { idR } = useParams();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchHotelData());
    dispatch(fetchRoomData());
  }, [dispatch]);

  let found = rooms.find((item) => item.id == id);
  let foundRoom = found?.room.find((item) => item.roomId == idR);
  let foundHotel = hotels.find((item) => item._id == id);
  return (
    <div className="room-detail-page">
      <div className="location-hero">
        {foundRoom && (
          <div className="container ">
            <h1>{foundRoom.roomName}</h1>
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
                <Typography className="page-name linkk">
                  {foundRoom.roomName}
                </Typography>
              </Breadcrumbs>
            </div>
          </div>
        )}
        <div className="overlay"></div>
      </div>
      <div className="room-detail-main-sect ">
        {foundRoom && (
          <div className="container">
            <div className="room-detail-main-sect-heading">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                  fill="#5E6D77"
                />
              </svg>
              <span>Location</span>
            </div>
            <div className="room-detail-main-sect-inner-wrapper row">
              <div className="room-detail-main-sect-left col-12 col-sm-12 col-md-12 col-lg-8">
                <div className="upper-side">
                  <div className="count-item-wrapper">
                    <div className="count-item ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm96 288H448c17.7 0 32-14.3 32-32V251.8c0-7.6-2.7-15-7.7-20.8l-65.8-76.8c-12.1-14.2-33.7-15-46.9-1.8l-21 21c-10 10-26.4 9.2-35.4-1.6l-39.2-47c-12.6-15.1-35.7-15.4-48.7-.6L135.9 215c-5.1 5.8-7.9 13.3-7.9 21.1v84c0 17.7 14.3 32 32 32z" />
                      </svg>
                    </div>
                    <p>
                      {" "}
                      <span>{foundRoom.square}</span>m<sup>2</sup>
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
                      x<span>{foundRoom.bedCount}</span>
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
                      x<span>{foundRoom.adultCount}</span>
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
                      x<span>{foundRoom.childrenCount}</span>
                    </p>
                  </div>
                </div>
                <div className="about-room-sect">
                  <h1>About this Room</h1>
                  <p>
                    This room comprises of 1 Double Bed or 2 Twin Beds, 2
                    Bedside Tables, a Desk & Chair. The room is furnished with
                    wall to wall carpeting, trendy furnishings and a balcony.
                  </p>
                  <p>
                    Our ultramodern glass bathroom is equipped with hairdryer,
                    magnifying shaving and make up mirror as well as all the
                    amenities you could possible need during your stay.
                  </p>
                  <p>
                    A Complimentary Bottle of Wine, Fresh Fruit and Mineral
                    Water, are provided on arrival. Electric current: 220 Volts.
                    Smoking rooms & inter-connecting rooms are also available.
                  </p>
                </div>
                <div className="facilities-sect row">
                  <h1>Room Facilities</h1>
                  <div className="facilities-item col-12 col-sm-6 col-md-4">
                    <svg
                      height="24px"
                      width="24px"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 24 24"
                      style={{ enableBackground: "new 0 0 24 24" }}
                      xmlSpace="preserve"
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
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 24 24"
                      style={{ enableBackground: "new 0 0 24 24" }}
                      xmlSpace="preserve"
                    >
                      <g fill="#5E6D77">
                        <path
                          d="M6.33,24c-0.147,0-0.295-0.015-0.44-0.044c-0.589-0.118-1.098-0.458-1.431-0.958c-0.333-0.5-0.452-1.1-0.334-1.689
        l0.452-2.559H1.5c-0.414,0-0.75-0.336-0.75-0.75V6.75C0.75,3.028,3.778,0,7.5,0h9.001c3.721,0.001,6.749,3.029,6.749,6.75V18
        c0,0.414-0.336,0.75-0.75,0.75h-3.075l0.456,2.575c0.026,0.13,0.04,0.279,0.04,0.425c0,1.241-1.01,2.25-2.25,2.25H6.33z
         M17.671,22.5c0.414,0,0.75-0.336,0.75-0.75c0-0.049-0.005-0.099-0.015-0.147l-1.145-6.472C17.254,15.085,17.25,15.043,17.25,15h-3
        v7.5H17.671z M6.75,15c0,0.044-0.004,0.087-0.011,0.13l-1.14,6.456c-0.042,0.213-0.004,0.411,0.108,0.58
        c0.111,0.167,0.281,0.28,0.477,0.319C6.232,22.495,6.281,22.5,6.33,22.5h6.42V15H6.75z M21.75,17.25V6.75
        c0-2.755-2.097-5.011-4.815-5.232l-3.974,7.278l1.19,2.082c0.065,0.114,0.099,0.242,0.099,0.372v2.25h3V8.25
        c0-0.414,0.336-0.75,0.75-0.75s0.75,0.336,0.75,0.75v5.974c0.001,0.009,0.001,0.018,0.001,0.026s0,0.017-0.001,0.026v0.658
        l0.41,2.316H21.75z M4.841,17.25l0.409-2.316V8.25C5.25,7.836,5.586,7.5,6,7.5s0.75,0.336,0.75,0.75v5.25h6v-2.051l-1.262-2.209
        c-0.025-0.035-0.046-0.073-0.066-0.115L7.074,1.517C4.352,1.734,2.25,3.991,2.25,6.75v10.5H4.841z M12.087,7.266L15.236,1.5H8.792
        L12.087,7.266z"
                        ></path>
                      </g>
                    </svg>
                    <span>Bathroom robe</span>
                  </div>
                  <div className="facilities-item col-12 col-sm-6 col-md-4">
                    <svg
                      height="24px"
                      width="24px"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 24 24"
                      style={{ enableBackground: "new 0 0 24 24" }}
                      xmlSpace="preserve"
                    >
                      <g fill="#5E6D77">
                        <path
                          d="M7.332,24c-3.314,0-6.114-2.372-6.658-5.641L0.01,14.373c-0.036-0.217,0.025-0.439,0.167-0.608
        C0.321,13.596,0.529,13.5,0.75,13.5h3.879C4.942,12.615,5.79,12,6.75,12h4.5c0.96,0,1.808,0.615,2.121,1.5H21V3.75
        c0-1.241-1.009-2.25-2.25-2.25c-0.999,0-1.869,0.667-2.151,1.599C18.278,3.488,19.5,4.991,19.5,6.75c0,0.414-0.336,0.75-0.75,0.75
        h-6C12.336,7.5,12,7.164,12,6.75c0-1.825,1.298-3.361,3.063-3.687C15.388,1.298,16.924,0,18.75,0c2.068,0,3.75,1.682,3.75,3.75
        v9.75h0.75c0.221,0,0.429,0.096,0.572,0.265c0.143,0.169,0.204,0.39,0.168,0.608l-0.664,3.986C22.781,21.628,19.981,24,16.667,24
        H7.332z M2.154,18.113C2.577,20.655,4.755,22.5,7.332,22.5h9.334c2.578,0,4.756-1.845,5.179-4.387L22.365,15H13.5v4.5
        c0,0.827-0.673,1.5-1.5,1.5H6c-0.827,0-1.5-0.673-1.5-1.5V15H1.635L2.154,18.113z M6.75,13.5C6.336,13.5,6,13.836,6,14.25v5.25h6
        v-5.25c0-0.414-0.336-0.75-0.75-0.75H6.75z M17.871,6c-0.313-0.879-1.159-1.5-2.121-1.5S13.941,5.121,13.629,6H17.871z"
                        ></path>
                      </g>
                    </svg>
                    <span> Bathtub</span>
                  </div>
                  <div className="facilities-item col-12 col-sm-6 col-md-4">
                    <svg
                      height="24px"
                      width="24px"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 24 24"
                      style={{ enableBackground: "new 0 0 24 24" }}
                      xmlSpace="preserve"
                    >
                      <g fill="#5E6D77">
                        <path
                          d="M3.75,24.004c-0.414,0-0.75-0.336-0.75-0.75v-15c0-1.241-1.009-2.25-2.25-2.25C0.336,6.004,0,5.667,0,5.254
        s0.336-0.75,0.75-0.75c2.068,0,3.75,1.682,3.75,3.75v2.25h3.402C7.64,10.053,7.5,9.539,7.5,9.004H6.75C6.336,9.004,6,8.667,6,8.254
        s0.336-0.75,0.75-0.75h0.792c0.347-3.132,2.826-5.611,5.958-5.958V0.754c0-0.414,0.336-0.75,0.75-0.75S15,0.34,15,0.754v0.792
        c3.132,0.347,5.611,2.826,5.958,5.958h0.792c0.414,0,0.75,0.336,0.75,0.75s-0.336,0.75-0.75,0.75H21c0,0.535-0.139,1.049-0.4,1.5
        h1.15c1.241,0,2.25,1.009,2.25,2.25v10.5c0,0.414-0.336,0.75-0.75,0.75H3.75z M22.5,22.504v-9.75c0-0.414-0.336-0.75-0.75-0.75H4.5
        v10.5H9v-6.75c0-0.414,0.336-0.75,0.75-0.75s0.75,0.336,0.75,0.75v6.75h3v-6.75c0-0.414,0.336-0.75,0.75-0.75S15,15.34,15,15.754
        v6.75h3v-6.75c0-0.414,0.336-0.75,0.75-0.75s0.75,0.336,0.75,0.75v6.75H22.5z M9,9.004c0.002,0.827,0.674,1.5,1.5,1.5H18
        c0.402-0.001,0.78-0.157,1.062-0.441C19.345,9.779,19.5,9.404,19.5,9.004H9z M19.446,7.5c-0.369-2.551-2.577-4.496-5.196-4.496
        c-2.618,0-4.827,1.945-5.196,4.496H19.446z"
                        ></path>
                      </g>
                    </svg>
                    <span>Cart food</span>
                  </div>
                </div>
                <div className="rates-avability-sect">
                  <h1>Rates & availability</h1>
                  <div className="data-picker-wrapper">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DateRangeCalendar"]}>
                        <DateRangeCalendar
                          slots={{ day: DateRangePickerDay }}
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
                </div>
                <div className="explor-sect">
                  <h1>Explor other options</h1>
                </div>
              </div>
              <div className="room-detail-main-sect-right col-12 col-sm-12 col-md-12 col-lg-4">
                {foundHotel && (
                  <div className="hotel-partner-commonication-box">
                    <div className="partner-box">
                      <div className="partner-img">
                        <img
                          src="https://modmixmap.travelerwp.com/wp-content/uploads/2024/01/dfd580a23b65dc9e6cd9bf2d681303b7.jpg"
                          alt=""
                        />
                      </div>
                      <div className="partner-name">
                        {foundHotel.partnerName}
                      </div>
                    </div>
                    <p className="member-since">Member Since 2022</p>
                    <Button
                      shape="round"
                      type="primary"
                      className="partner-btn"
                    >
                      Ask a Question
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomDetail;
