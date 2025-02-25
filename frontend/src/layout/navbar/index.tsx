import { useState, useEffect, useRef } from "react";
import "./navbar.scss";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import SignIN from "../../components/signIn";
import { Modal } from "antd";
import Box from "@mui/material/Box";
import SignUp from "../../components/signUp";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/hotelStore";
import { login } from "../../redux/slice/userSlice";

interface Props {
  window?: () => Window;
}

const drawerWidth = 300;

const Navbar = (props: Props) => {
  // const [value, setValue] = useState(1);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [loginType, setLoginType] = useState("signIn");
  const [isVisible, setVisible] = useState("");
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isBasketVisible, setBasketVisible] = useState(false);
  const dispatch=useDispatch<AppDispatch>()
  const isLogin=useSelector((state:RootState)=>state.user.isLogin)
  const user= JSON.parse(localStorage.getItem("user") || "{}");
  const handleCancel = () => {
    setOpen(false);
  };

  const dropdownRef = useRef<HTMLInputElement>(null);
  const basketRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };
    const handleBasketOutsideClick = (event: any) => {
      if (basketRef.current && !basketRef.current.contains(event.target)) {
        setBasketVisible(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("mousedown", handleBasketOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("mousedown", handleBasketOutsideClick);
    };
  }, []);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


  
  // const onChange = (e: RadioChangeEvent) => {
  //   console.log('radio checked', e.target.value);
  //   setValue(e.target.value);
  // };

console.log("login",isLogin)

  const drawer = (
    <Box className="mobile-nav-wrapper">
      <div className="mobile-nav-header">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" onClick={handleDrawerToggle}>
          <path
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
            fill="gray"
          />
        </svg>
      </div>
      <div className="mobile-nav-content">
        <ul>
          <Link to="/">
            <li style={{ color: isVisible === "" ? "#3b71fe" : "#232323" }}>
              Home
            </li>
          </Link>
          <li
           
            className="hotel-list-item"
            style={{ color: isVisible === "hotel" ? "#3b71fe" : "#232323" }}
          >
            Hotel
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  onClick={() => {
             setOpenMenu(!openMenu)
             setVisible("hotel");
            }}>
              <path
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                fill="#232323"
              />
            </svg>
          </li>
          <ul className="hotel-menu-dropdown menu-dropdown" style={{display:(isVisible==="hotel" && openMenu==true)?"block":"none"}}>
              <Link to="/">
                <li>Home Search Halfmap</li>
              </Link>
              <Link to="/">
                <li>Detail Hotel</li>
              </Link>
              <Link to="/">
                <li>Detail Room</li>
              </Link>
            </ul>
          <li
    
            style={{ color: isVisible === "tour" ? "#3b71fe" : "#232323" }}
            className="tour-list-item"
          >
            Tour{" "}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"         onClick={() => {
            setOpenMenu(!openMenu)
              setVisible("tour");
            }}>
              <path
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                fill="#232323"
              />
            </svg>
         
          </li>
          <ul className="tour-menu-dropdown menu-dropdown" style={{display:(isVisible==="tour" && openMenu==true)?"block":"none"}}>
              <Link to="/">
                <li>Tour Search Topbar</li>
              </Link>
              <Link to="/">
                <li>Detail Tour</li>
              </Link>
              <Link to="/">
                <li>Tour Package</li>
              </Link>
              <Link to="/">
                <li>Tour Starttime</li>
              </Link>
              <Link to="/">
                <li>External Booking</li>
              </Link>
              <Link to="/">
                <li>Book & Inquary Form</li>
              </Link>
            </ul>
          <li
           
            style={{ color: isVisible === "activity" ? "#3b71fe" : "#232323" }}
            className="activity-list-item"
          >
            Activity{" "}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  onClick={() => {
                           setOpenMenu(!openMenu)
              setVisible("activity");
            }}>
              <path
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                fill="#232323"
              />
            </svg>
          </li>
          <ul className="activity-menu-dropdown menu-dropdown" style={{display:(isVisible==="activity" && openMenu==true)?"block":"none"}}>
              <Link to="/">
                <li>Activity Search Topbar</li>
              </Link>
              <Link to="/">
                <li>Detail Activity</li>
              </Link>
              <Link to="/">
                <li>Activity Starttime</li>
              </Link>
              <Link to="/">
                <li>Book & Inquary Form</li>
              </Link>
          </ul>
          <li
           
            style={{ color: isVisible === "rental" ? "#3b71fe" : "#232323" }}
            className="rental-list-item"
          >
            Rental{" "}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  onClick={() => {
                          setOpenMenu(!openMenu)
             setVisible("rental");
            }}>
              <path
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                fill="#232323"
              />
            </svg>
          </li>
          <ul className="rental-menu-dropdown menu-dropdown" style={{display:(isVisible==="rental" && openMenu==true)?"block":"none"}}>
              <Link to="/">
                <li>Rental Search</li>
              </Link>
              <Link to="/">
                <li>Detail Rental</li>
              </Link>
              <Link to="/">
                <li>External Booking</li>
              </Link>
            </ul>
          <li
            style={{ color: isVisible === "car" ? "#3b71fe" : "#232323" }}
            className="car-list-item"
          >
            Car{" "}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"   onClick={() => {
                          setOpenMenu(!openMenu)
             setVisible("car");
            }}>
              <path
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                fill="#232323"
              />
            </svg>
            
          </li>
          <ul className="car-menu-dropdown menu-dropdown" style={{display:(isVisible==="car" && openMenu==true)?"block":"none"}}>
              <Link to="/">
                <li>Car Search Top Bar</li>
              </Link>
              <Link to="/">
                <li>Detail Car</li>
              </Link>
          </ul>
          <li
            
            style={{ color: isVisible === "pages" ? "#3b71fe" : "#232323" }}
            className="pages-list-item"
          >
            Pages{" "}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={() => {
                           setOpenMenu(!openMenu)
              setVisible("pages");
            }}>
              <path
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                fill="#232323"
              />
            </svg>
          </li>
          <ul className=" pages-menu-dropdown menu-dropdown"  style={{display:(isVisible==="pages" && openMenu==true)?"block":"none"}}>
              <Link to="/">
                <li>About</li>
              </Link>
              <Link to="/">
                <li>Blog</li>
              </Link>
              <Link to="/">
                <li>Become Local Expert</li>
              </Link>
              <Link to="/">
                <li>Contact</li>
              </Link>
              <Link to="/">
                <li>Destination</li>
              </Link>
              <Link to="/">
                <li>FAQ</li>
              </Link>
            </ul>
        </ul>
      </div>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <header>
        <div className="header-upp">
          <div className="containerr">
            <ul className="left-sect">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"
                    fill="#D3D3D3"
                  />
                </svg>
                <span>(000) 999 -656 -888</span>
              </li>
              <li className="line"></li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                    fill="#D3D3D3"
                  />
                </svg>{" "}
                <span> travelerwp@gmail.com</span>
              </li>
            </ul>
            <ul className="right-sect">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path
                    d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                    fill="#D3D3D3"
                  />
                </svg>
              </li>
              <li className="line"></li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
                    fill="#D3D3D3"
                  />
                </svg>
              </li>
              <li className="line"></li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    fill="#D3D3D3"
                  />
                </svg>
              </li>
              <li className="line"></li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path
                    d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
                    fill="#D3D3D3"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div>
        <nav>
          <div className="containerr">
            <div className="logo">
              <img
                src="	https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Demo-Background-Overlay-1.svg"
                alt=""
              />
            </div>
            <div className="mobile-menu-wrapper">
              <div className="mobile-menu-bar">
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                      fill="#232323"
                    />
                  </svg>
                </IconButton>
              </div>
            </div>
            <div className="mobile-logo-wrapper">
              <div className="mobile-logo">
                <img
                  src="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Default-Color-1-NewDemo.svg"
                  alt=""
                />
              </div>
            </div>

            <ul>
              <Link to="/" >
                <li   style={{ color: isVisible === "" ? "#3b71fe" : "white" }}  onClick={() => {
                  setVisible("");
                }}>Home</li>
              </Link>
              <li
                onClick={() => {
                  setVisible("hotel");
                }}
                className="hotel-list-item"
                style={{ color: isVisible === "hotel" ? "#3b71fe" : "white" }}
              >
                Hotel{" "}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                    fill="white"
                  />
                </svg>
                <ul className="hotel-menu-dropdown menu-dropdown">
                  <Link to="/">
                    <li>Home Search Halfmap</li>
                  </Link>
                  <Link to="/">
                    <li>Detail Hotel</li>
                  </Link>
                  <Link to="/">
                    <li>Detail Room</li>
                  </Link>
                </ul>
              </li>
              <li
                onClick={() => {
                  setVisible("tour");
                }}
                style={{ color: isVisible === "tour" ? "#3b71fe" : "white" }}
                className="tour-list-item"
              >
                Tour{" "}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                    fill="white"
                  />
                </svg>
                <ul className="tour-menu-dropdown menu-dropdown">
                  <Link to="/">
                    <li>Tour Search Topbar</li>
                  </Link>
                  <Link to="/">
                    <li>Detail Tour</li>
                  </Link>
                  <Link to="/">
                    <li>Tour Package</li>
                  </Link>
                  <Link to="/">
                    <li>Tour Starttime</li>
                  </Link>
                  <Link to="/">
                    <li>External Booking</li>
                  </Link>
                  <Link to="/">
                    <li>Book & Inquary Form</li>
                  </Link>
                </ul>
              </li>
              <li
                onClick={() => {
                  setVisible("activity");
                }}
                style={{
                  color: isVisible === "activity" ? "#3b71fe" : "white",
                }}
                className="activity-list-item"
              >
                Activity{" "}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                    fill="white"
                  />
                </svg>
                <ul className="activity-menu-dropdown menu-dropdown">
                  <Link to="/">
                    <li>Activity Search Topbar</li>
                  </Link>
                  <Link to="/">
                    <li>Detail Activity</li>
                  </Link>
                  <Link to="/">
                    <li>Activity Starttime</li>
                  </Link>
                  <Link to="/">
                    <li>Book & Inquary Form</li>
                  </Link>
                </ul>
              </li>
              <li
                onClick={() => {
                  setVisible("rental");
                }}
                style={{ color: isVisible === "rental" ? "#3b71fe" : "white" }}
                className="rental-list-item"
              >
                Rental{" "}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                    fill="white"
                  />
                </svg>
                <ul className="rental-menu-dropdown menu-dropdown">
                  <Link to="/">
                    <li>Rental Search</li>
                  </Link>
                  <Link to="/">
                    <li>Detail Rental</li>
                  </Link>
                  <Link to="/">
                    <li>External Booking</li>
                  </Link>
                </ul>
              </li>
              <li
                onClick={() => {
                  setVisible("car");
                }}
                style={{ color: isVisible === "car" ? "#3b71fe" : "white" }}
                className="car-list-item"
              >
                Car{" "}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                    fill="white"
                  />
                </svg>
                <ul className="car-menu-dropdown menu-dropdown">
                  <Link to="/">
                    <li>Car Search Top Bar</li>
                  </Link>
                  <Link to="/">
                    <li>Detail Car</li>
                  </Link>
                </ul>
              </li>
              <li
                onClick={() => {
                  setVisible("pages");
                }}
                style={{ color: isVisible === "pages" ? "#3b71fe" : "white" }}
                className="pages-list-item"
              >
                Pages{" "}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                    fill="white"
                  />
                </svg>
                <ul className=" pages-menu-dropdown menu-dropdown">
                  <Link to="/">
                    <li>About</li>
                  </Link>
                  <Link to="/">
                    <li>Blog</li>
                  </Link>
                  <Link to="/">
                    <li>Become Local Expert</li>
                  </Link>
                  <Link to="/">
                    <li>Contact</li>
                  </Link>
                  <Link to="/">
                    <li>Destination</li>
                  </Link>
                  <Link to="/">
                    <li>FAQ</li>
                  </Link>
                </ul>
              </li>
            </ul>

            <ul className="nav-buttonss">
              <li className="usd">USD</li>
              <li>
                <button
                  onClick={() => {
                    setBasketVisible(true);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path
                      d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"
                      fill="#3d3d3d"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                   isLogin
                      ? setDropdownVisible(true)
                      : setOpen(true);
                  }}
                  className="user-acc-btn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
                      fill="#3d3d3d"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <nav className="mobile-nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "block", lg: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <ul
          className="dropdown-menu"
          style={{ display: isDropdownVisible ? "block" : "none" }}
          ref={dropdownRef}
        >
          <li className="user-img-name">
            <div className="user-img-wrapper">
              <img
                src="https://modmixmap.travelerwp.com/wp-content/uploads/2024/01/dfd580a23b65dc9e6cd9bf2d681303b7.jpg"
                alt=""
              />
            </div>
            <p>
              Hi,
              <br />
              <span>{user?.userName}</span>
            </p>
          </li>
          <Link to="/account">
            <li>Dashboard</li>
          </Link>
          <Link to="/account/booking-history">
            <li>Booking History</li>
          </Link>
          <Divider />
          <li
            className="log-out"
            onClick={() => {
             dispatch(login(false))
            }}
          >
            Log out
          </li>
        </ul>
        <Modal open={open} title="" onCancel={handleCancel} footer={[]}>
          <Box>
            <ul className="modal-header-sect">
              <li
                onClick={() => {
                  setLoginType("signIn");
                }}
                style={{
                  color: loginType === "signIn" ? "#3b71fe" : "#5e6d77",
                  textDecoration: loginType === "signIn" ? "underline" : "none",
                }}
              >
                Sign In
              </li>
              <li
                onClick={() => {
                  setLoginType("signUp");
                }}
                style={{
                  color: loginType === "signUp" ? "#3b71fe" : "#5e6d77",
                  textDecoration: loginType === "signUp" ? "underline" : "none",
                }}
              >
                Sign Up
              </li>
            </ul>

            <Divider />
            <div id="modal-modal-description">
              {loginType === "signIn" ? <SignIN /> : <SignUp />}
            </div>
          </Box>
        </Modal>
        <div
          className="basket-wrapper"
          style={{ display: isBasketVisible ? "block" : "none" }}
          ref={basketRef}
        >
        <h2>Your Cart</h2>
        <p>Your cart is empty</p>
        </div>
      </header>
    </>
  );
};

export default Navbar;
