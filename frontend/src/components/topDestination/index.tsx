import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import "./topDestinations.scss"

const TopDestinations = () => {
  return (
 <section className="top-destinations">
    <div className="containerr">
   <div className="offers">
   <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={6}>
        <div className="img-wrapper">
            <img src="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Frame-3151-min.png" alt="" />
        </div>
        </Grid>
        <Grid xs={6}>
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
        <Grid xs={4}>
        <div className="img-wrapper">
            <img src="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/California.jpg" alt="" />
        </div>
        </Grid>
        <Grid xs={4}>
        <div className="img-wrapper">
            <img src="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/California.jpg" alt="" />
        </div>
        </Grid>
        <Grid xs={4}>
        <div className="img-wrapper">
            <img src="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/California.jpg" alt="" />
        </div>
        </Grid>
        <Grid xs={4}>
        <div className="img-wrapper">
            <img src="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/California.jpg" alt="" />
        </div>
        </Grid>
        <Grid xs={4}>
          <div className="img-wrapper">
            <img src="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/California.jpg" alt="" />
        </div>
        </Grid>
        <Grid xs={4}>
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