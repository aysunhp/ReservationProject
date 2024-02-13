
import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import SettingsIcon from '@mui/icons-material/Settings';
import "./bookingHistory.scss"
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store/hotelStore';
import { login } from '../../../redux/slice/userSlice';

const drawerWidth = 270;

interface Props {
  window?: () => Window;
}

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];





export default function BookingHistory(props: Props) {


  
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [disp, setDisp] = React.useState(true);
  const [state,setState]=React.useState("all");
  const user=JSON.parse(localStorage.getItem("user") || "{}")
  const dispatch= useDispatch<AppDispatch>()
  const navigate= useNavigate()

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
      setDisp(true)
    }
  };

  const handleDisp = () => {
   setDisp(!disp)
  };
  console.log("mobileOpen", mobileOpen)
  console.log("isClosing", isClosing)
 console.log("disp", disp)

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
            src={user.userImage}
            alt="account-profile"
          />
        </div>
        <div className="account-name">
          <p>{user.userName}</p>
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
        dispatch(login(false));
        localStorage.removeItem("user")
        navigate("/")
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

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        style={{ backgroundColor:"#1A2B48", display:disp?"block":"none"}}

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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth , backgroundColor: "#1A2B48 !important"},
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
       
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,  backgroundColor: "#1A2B48" },
          }}
          open
          style={{  backgroundColor: "#1A2B48"}}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        className='booking-history-page-wrapper-box'
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        style={{padding:"20px 40px", backgroundColor:"#F5F7F9", minHeight:"100vh"}}
      >
        <div className='mobile-open-btn'>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
        <MenuIcon style={{color:"white"}} />
        </IconButton>
        </div>

<p className='page-name'>Booking History</p>
<div className="booking-history-sect">
<ul>
            <li
              style={{
                borderBottom: state == "all" ? "3px solid #3B71FE" : "none",
                color:state == "all" ? "3px solid #3B71FE" : "black",
              }}
              onClick={() => {
                setState("all");
              }}
            >
           ALL
            </li>
            <li
              style={{
                borderBottom: state == "pending" ? "3px solid #3B71FE" : "none",
                color:state == "pending" ? "3px solid #3B71FE" : "black",
              }}
              onClick={() => {
                setState("pending");
              }}
            >
              PENDING
            </li>
            <li
              style={{
                borderBottom: state == "completed" ? "3px solid #3B71FE" : "none",
                color:state == "completed" ? "3px solid #3B71FE" : "black",
              }}
              onClick={() => {
                setState("completed");
              }}
            >
             COMPLETED
            </li>
            <li
              style={{
                borderBottom: state == "incomplete" ? "3px solid #3B71FE" : "none",
                color:state == "incomplete" ? "3px solid #3B71FE" : "black",
              }}
              onClick={() => {
                setState("incomplete");
              }}
            >
              INCOMPLETE
            </li>
            <li
              style={{
                borderBottom: state == "canselled" ? "3px solid #3B71FE" : "none",
                color:state == "canselled" ? "3px solid #3B71FE" : "black",
              }}
              onClick={() => {
                setState("canselled");
              }}
            >
              CANSELLED
            </li>
            <li
              style={{
                borderBottom: state == "canselling" ? "3px solid #3B71FE" : "none",
                color:state == "canselling" ? "3px solid #3B71FE" : "black",
              }}
              onClick={() => {
                setState("canselling");
              }}
            >
              CANSELLING
            </li>
          </ul>
<Box style={{padding:"0px"}}>

{
  state=="all"?<TableContainer component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell className='mobile-table-item'>#ID</TableCell>
        <TableCell align="left" >Title</TableCell>
        <TableCell align="left" className='mobile-table-item'>Type</TableCell>
        <TableCell align="left" className='mobile-table-item'>Cost</TableCell>
        <TableCell align="left">Status</TableCell>
        <TableCell align="left">Action</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow
          key={row.name}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row" className='mobile-table-item'>
            {row.name}
          </TableCell>
          <TableCell align="left">{row.calories}</TableCell>
          <TableCell align="left" className='mobile-table-item'>{row.fat}</TableCell>
          <TableCell align="left" className='mobile-table-item'>{row.carbs}</TableCell>
          <TableCell align="left">{row.protein}</TableCell>
          <TableCell align="left"><Button variant="contained" style={{fontSize:"13px", padding:"5px 10px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width:"11px", height:"13px", marginRight:"8px"}}><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" fill='white'/></svg>Details</Button></TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>:state==="pending"?<p>No booking history</p>:state==="completed"?<p>No booking history</p>:state==="incomplete"?<p>No booking history</p>:state==="canselled"?<p>No booking history</p>:state==="canselling"?<p>No booking history</p>:null
}
</Box>
</div>
      </Box>
    </Box>
  );
}