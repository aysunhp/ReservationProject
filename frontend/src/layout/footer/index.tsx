import {Box} from '@mui/material';
import Grid from "@mui/material/Grid";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import "./footer.scss";

const Footer = () => {
  return (
   <footer>
    <div className="containerr">
    <Box sx={{ flexGrow: 1 }} style={{marginBottom:"50px"}}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                <h2>Support</h2>
                <ul>
                  <li>Help Center</li>
                  <li>Our COVID-19 Response</li>
                  <li>Cancellation options</li>
                  <li>Safety information</li>
                </ul>
           
              </Grid>
              <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                <h2>Company</h2>
                <ul>
                  <li>About us</li>
                  <li>Community Blog</li>
                  <li>Careers</li>
                  <li>Privacy policy</li>
                  <li>Terms of service</li>
                </ul>
              </Grid>
              <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                <h2>Contact </h2>
                <ul>
                  <li>Partnership</li>
                  <li>FAQ</li>
                  <li>Get in touch</li>
                </ul>
              </Grid>
              <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                <h2>Social</h2>
             
                <div className="icons">
                <FaFacebook
                    style={{ fontSize: "40px", backgroundColor: "white" }}
                  />
                  <FaTwitterSquare
                    style={{ fontSize: "40px", backgroundColor: "white" }}
                  />
                  <FaSquareInstagram
                    style={{ fontSize: "40px", backgroundColor: "white" }}
                  />
                  <FaYoutube style={{ fontSize: "40px", backgroundColor: "white" }}/>
                </div>
              </Grid>
            </Grid>
          </Box>
<div className="line"></div>
<div className="copyright-sect">

       <p className='copyright'>
       © Copyright Traveler
       </p>
      
        <div className="card-img-wrapper">
          <img src="	https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Frame-3182.svg" alt="" />
        </div>

    
</div>
    </div>
    
   </footer>
  )
}

export default Footer