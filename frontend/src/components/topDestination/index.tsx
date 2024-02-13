import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import "./topDestinations.scss"
import "./../../assets/styles/gridSystem/grid.scss"

const TopDestinations = () => {
  return (
 <section className="top-destinations">
    <div className=" container container-sm container-md 
  container-lg container-xl  container-xxl">
   <div className="offers">
   <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
        <div className="img-wrapper ">
            <img src="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Frame-3151-min.png" alt="" />
        </div>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
        <div className="img-wrapper">
            <img src="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Frame-3150-min.png" alt="" />
        </div>
        </Grid>
        
      </Grid>
    </Box>
   </div>
   <div className="destinations">
    <h2>Top destinations</h2>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid className="destination-item col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
        <div className="img-wrapper">
            <img src="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/California.jpg" alt="" />
        </div>
        <div className="img-content">
          <div className="content-title">
            California
          </div>
          <ul>
            <li className='first'>14 Hotels</li>
            <li>22 Tours</li>
            <li>22 Rentals</li>
            <li>25 Cars</li>
            <li>18 Activities</li>
          </ul>
        </div>

        </Grid>
        <Grid className="destination-item col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
        <div className="img-wrapper">
            <img src="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/New-York-City.jpg" alt="" />
        </div>
        <div className="img-content">
          <div className="content-title">
            New York
          </div>
          <ul>
            <li className='first'>14 Hotels</li>
            <li>22 Tours</li>
            <li>22 Rentals</li>
            <li>25 Cars</li>
            <li>18 Activities</li>
          </ul>
        </div>
        </Grid>
        <Grid className="destination-item col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
        <div className="img-wrapper">
            <img src="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/New-Jersey.jpg" alt="" />
        </div>
        <div className="img-content">
          <div className="content-title">
            New Jersey
          </div>
          <ul>
            <li className='first'>14 Hotels</li>
            <li>22 Tours</li>
            <li>22 Rentals</li>
            <li>25 Cars</li>
            <li>18 Activities</li>
          </ul>
        </div>
        </Grid>
        <Grid className="destination-item col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
        <div className="img-wrapper">
            <img src="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles.jpg" alt="" />
        </div>
        <div className="img-content">
          <div className="content-title">
            Los Angeles
          </div>
          <ul>
            <li className='first'>14 Hotels</li>
            <li>22 Tours</li>
            <li>22 Rentals</li>
            <li>25 Cars</li>
            <li>18 Activities</li>
          </ul>
        </div>
        </Grid>
        <Grid className="destination-item col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <div className="img-wrapper">
            <img src="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/San-Francisco.jpg" alt="" />
        </div>
        <div className="img-content">
          <div className="content-title">
           San FRansisco
          </div>
          <ul>
            <li className='first'>14 Hotels</li>
            <li>22 Tours</li>
            <li>22 Rentals</li>
            <li>25 Cars</li>
            <li>18 Activities</li>
          </ul>
        </div>
        </Grid>
        <Grid className="destination-item col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <div className="img-wrapper">
            <img src="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Nevada_.jpg" alt="" />
        </div>
        <div className="img-content">
          <div className="content-title">
         Nevada
          </div>
          <ul>
            <li className='first'>14 Hotels</li>
            <li>22 Tours</li>
            <li>22 Rentals</li>
            <li>25 Cars</li>
            <li>18 Activities</li>
          </ul>
        </div>
        </Grid>
      </Grid>
    </Box>
   </div>
    </div>
 </section>
  )
}

export default TopDestinations