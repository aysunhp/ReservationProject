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
        <div className="img-wrapper">
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
        <Grid className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
        <div className="img-wrapper">
            <img src="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/California.jpg" alt="" />
        </div>
        </Grid>
        <Grid className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
        <div className="img-wrapper">
            <img src="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/California.jpg" alt="" />
        </div>
        </Grid>
        <Grid className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
        <div className="img-wrapper">
            <img src="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/California.jpg" alt="" />
        </div>
        </Grid>
        <Grid className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
        <div className="img-wrapper">
            <img src="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/California.jpg" alt="" />
        </div>
        </Grid>
        <Grid className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <div className="img-wrapper">
            <img src="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/California.jpg" alt="" />
        </div>
        </Grid>
        <Grid className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <div className="img-wrapper">
            <img src="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/California.jpg" alt="" />
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