import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import SettingsIcon from "@mui/icons-material/Settings";
import "./wishlist.scss";
import { useNavigate } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
import CloseIcon from '@mui/icons-material/Close';
import "./../../../assets/styles/gridSystem/grid.scss";

const drawerWidth = 270;
interface Props {
  window?: () => Window;
}



export default function Wishlist(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [disp, setDisp] = React.useState(true);
  const [state,setState]=React.useState("hotel") 



  const navigate = useNavigate();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
      setDisp(true);
    }
  };

  const handleDisp = () => {
    setDisp(!disp);
  };
  console.log("mobileOpen", mobileOpen);
  console.log("isClosing", isClosing);
  console.log("disp", disp);

  const drawer = (
    <div style={{ margin: "0px", backgroundColor: "#1A2B48" }}>
      <Toolbar style={{ padding: "30px" }}>
        <div className="img-wrapper">
          <img
            src="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/hotel-1.png"
            alt=""
          />
        </div>
        <div
          className="svg-wrapper"
          style={{
            color: "#a0a9b2",
            marginLeft: "40px",
            boxSizing: "border-box",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDisp}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              style={{ width: "24px", height: "24px" }}
            >
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                fill="#a0a9b2"
              />
            </svg>
          </IconButton>
        </div>
      </Toolbar>

      <Divider style={{ backgroundColor: "#2C3D5B" }} />
      <List style={{ padding: "30px" }}>
        <div className="accout-info">
          <div className="account-prof-img">
            <img
              src="	https://modmixmap.travelerwp.com/wp-content/uploads/2024/01/dfd580a23b65dc9e6cd9bf2d681303b7.jpg"
              alt="account-profile"
            />
          </div>
          <div className="account-name">
            <p>aysunhp</p>
            <p>
              Since: <span>Jan 2024</span>{" "}
            </p>
          </div>
        </div>
      </List>
      <Divider style={{ backgroundColor: "#2C3D5B" }} />
      <List>
        {["Settings", "Booking History", "Wishlist", "Inbox Notification"].map(
          (text, index) => (
            <ListItem
              key={text}
              disablePadding
              style={{ color: "#a0a9b2" }}
              onClick={() => {
                index === 0
                  ? navigate("/account")
                  : index === 1
                  ? navigate("/account/booking-history")
                  : index === 2
                  ? navigate("/account/wishlist")
                  : navigate("/account/inbox");
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 ? (
                    <SettingsSuggestIcon style={{ color: "#a0a9b2" }} />
                  ) : index === 1 ? (
                    <AccessTimeIcon style={{ color: "#a0a9b2" }} />
                  ) : index === 2 ? (
                    <LoyaltyIcon style={{ color: "#a0a9b2" }} />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      style={{ width: "22px", height: "22px" }}
                    >
                      <path
                        d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0l57.4-43c23.9-59.8 79.7-103.3 146.3-109.8l13.9-10.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176V384c0 35.3 28.7 64 64 64H360.2C335.1 417.6 320 378.5 320 336c0-5.6 .3-11.1 .8-16.6l-26.4 19.8zM640 336a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 353.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z"
                        fill="#a0a9b2"
                      />
                    </svg>
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  style={{
                    color: index === 2 ? "#3B71FE" : "#a0a9b2",
                    fontSize: "14px",
                  }}
                />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider style={{ backgroundColor: "#2C3D5B" }} />
      <List>
        {["Log out"].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            style={{ color: "#a0a9b2" }}
            onClick={() => {
              console.log("Cliced");
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? (
                  <SettingsIcon style={{ color: "#a0a9b2" }} />
                ) : null}
              </ListItemIcon>
              <ListItemText
                primary={text}
                style={{ color: "#a0a9b2", fontSize: "14px" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem
          disablePadding
          style={{ padding: "10px 30px" }}
          onClick={() => {
            navigate("/");
          }}
        >
          <ListItemText style={{ color: "#1abc9c", fontSize: "14px" }}>
            Back to HomePage
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        style={{ backgroundColor: "#1A2B48", display: disp ? "block" : "none" }}
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#1A2B48 !important",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#1A2B48",
            },
          }}
          open
          style={{ backgroundColor: "#1A2B48" }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
        style={{
          padding: "20px 40px",
          backgroundColor: "#F5F7F9",
          minHeight: "100vh",
        }}
      >
        <div className="mobile-open-btn">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
        </div>
        <p className="page-name">Wishlist</p>

        <div className="wishlist-sect">
        <ul>
            <li
              style={{
                borderBottom: state == "hotel" ? "3px solid #1976D2" : "none",
                color:state == "hotel" ? "#1976D2" : "black",
              }}
              onClick={() => {
                setState("hotel");
              }}
            >
              Hotel
            </li>
            <li
              style={{
                borderBottom: state == "tour" ? "3px solid #1976D2" : "none",
                color:state == "tour" ? "#1976D2" : "black",
              }}
              onClick={() => {
                setState("tour");
              }}
            >
              Tours
            </li>
            <li
              style={{
                borderBottom: state == "activity" ? "3px solid #1976D2" : "none",
                color:state == "activity" ? "#1976D2" : "black",
              }}
              onClick={() => {
                setState("activity");
              }}
            >
              Activity
            </li>
            <li
              style={{
                borderBottom: state == "rental" ? "3px solid #1976D2" : "none",
                color:state == "rental" ? "#1976D2" : "black",
              }}
              onClick={() => {
                setState("rental");
              }}
            >
              Rental
            </li>
            <li
              style={{
                borderBottom: state == "car" ? "3px solid #1976D2" : "none",
                color:state == "car" ? "#1976D2" : "black",
              }}
              onClick={() => {
                setState("car");
              }}
            >
              Car
            </li>
           
          </ul>
          <Box sx={{ width: "100%" }} style={{ padding: "0px", paddingRight:"20px" }}>
         
          <div className="wishlist-card ">
               
               <div className="wishlist-card-row row ">
                
                 <div className="wishlist-card-img col-xl-3 large col-md-12 col-sm-12  col-xs-12">
                   <img
                     src="	https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/feature-12-450x417.png"
                     alt=""
                   />
                 </div>
               
                   <div className="content-left-sect col-xl-5 large col-md-12 col-sm-12  col-xs-12">
                     <div className="upper">
                       <div className="star-rate">
                         <svg
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 576 512"
                         >
                           <path
                             d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                             fill="#FA5636"
                           />
                         </svg>
                         <svg
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 576 512"
                         >
                           <path
                             d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                             fill="#FA5636"
                           />
                         </svg>
                         <svg
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 576 512"
                         >
                           <path
                             d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                             fill="#FA5636"
                           />
                         </svg>
                         <svg
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 576 512"
                         >
                           <path
                             d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                             fill="#FA5636"
                           />
                         </svg>
                         <svg
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 576 512"
                         >
                           <path
                             d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                             fill="#FA5636"
                           />
                         </svg>
                       </div>
                       <h2 className="name">Name</h2>
                       <p className="facilities">romanticy</p>
                     </div>
                     <p className="location">
                       <PlaceIcon
                         style={{ color: "#5E6D77", fontSize: "16px" }}
                       />
                       Location
                     </p>
                   </div>
                   <div className="content-right-sect col-xl-4 large col-md-12 col-sm-12  col-xs-12">
                     <div className="upper">
                      <div className="rating-left">
                      <div className="text-rating">Excellent</div>
                       <div className="review">
                         <span>3</span> Reviews
                       </div>
                      </div>
                      <div className="rating-right">
                      <span className="rating">
                         5/ <small>5</small>
                       </span>
                      </div>
                       <span className="mobile-rating">
                         5/ <span>5</span> <span>Excellent</span>
                       </span>
                     </div>
                     <p>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" fill="#FFAB53"/></svg>
                       From:{" "}
                     
                         <span>$159,00</span>
                      
                       /night
                     </p>
                   </div>
               
               </div>
               <div className="delete-btn">
                   <CloseIcon style={{color:"white" , fontSize:"16px" ,fontWeight:"bold"}}/>
                   </div>
             </div>
            </Box>
        
        </div>
      </Box>
    </Box>
  );
}
