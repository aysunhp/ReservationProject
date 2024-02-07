import "./contact.scss"
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';

const Contact = () => {
  return (
    <section className="contact-sect">
   
    <div className="contact-hero">
        <div className="containerr">
        <h1>Contact</h1>
        <div className="page-breadcrumb">
        <Breadcrumbs aria-label="breadcrumbs" className="breadcrumbs" style={{color:"white"}}> 
        <Link   href="/" style={{color:"white"}}>
         Home
        </Link>
      <Typography className="page-name">Contact</Typography>
    </Breadcrumbs>
    </div>
        </div>
        <div className="overlay">
        </div>
       
    </div>
 <div className="contact-location">
 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d774392.3715797374!2d-74.63904254633377!3d40.69665391863234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2saz!4v1707240002220!5m2!1sen!2saz" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
 </div>
 <div className="contact-page-content">
  
 </div>
    </section>
  )
}

export default Contact