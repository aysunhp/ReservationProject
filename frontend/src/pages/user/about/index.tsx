import "./about.scss"
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import MeetOurTeam from "../../../components/ourTeam";
import WhatOurClientsSay from "../../../components/ourClientSay";
import "./../../../assets/styles/gridSystem/grid.scss";

const About = () => {
  return (
   <section className="about-sect">
   
<div className="about-hero">
    <div className="containerr">
    <h1>About</h1>
    </div>
    <div className="overlay">

    </div>
   
</div>
<div className="page-breadcrumb">
<Breadcrumbs aria-label="breadcrumbs" className="breadcrumbs">
    
        <Link   href="/" style={{color:"black"}}>
         Home
        </Link>
      <Typography className="page-name">About</Typography>
    </Breadcrumbs>
</div>
<div className="about-page-content">
<div className="container container-xxl,
    container-xl,
    container-lg,
    container-md,
    container-sm,
    ">

        <div className="video-player-wrapper">
            <div className="video-bg-image">
                
            </div>

        </div>
        <div className="about-page-text-content">
       <h1> About the company</h1>
<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci velit, sed quia non numquam eius modi ullma tempora incidunt ut labore et dolore magnam aliquam quaerat fruitr voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem. Itaque earum rerum hic tea sapiente delectus, ut aut reiciendis voluptatibus.
</p>
<div className="our-mission-sect row">
    <div className="our-mission-left-sect col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
<h3>Our Mission</h3>
<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Quis nostrud kemmith exercitation ullamco laboris nisi ut aliquip.</p>
   <p>Excepteur sint occaecat cupidatat non proident.</p>
   <p>Quis autem vel eum iure reprehende qui in ea.</p>
   <p>At vero eos accusamus iusto odio dignissimos.</p>
    </div>
    <div className="our-mission-right-sect col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
    <h3>Our Mission</h3>
    <p>
    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium minima veniam.
    </p>
</div>
</div>
        </div>
    </div>
</div>
<WhatOurClientsSay/>
<MeetOurTeam/>

   </section>
  )
}

export default About