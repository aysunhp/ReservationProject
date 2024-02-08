import "./location.scss";
import "./../../../assets/styles/gridSystem/grid.scss";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import StoriesTipsGuides from "../../../components/storiesTips";
import SubscribeComponent from "../../../components/subscribeComponent";
import RecomendedForYou from "../../../components/recomendedForYou";

const Location = () => {
  return (
    <div className="location-page">
      <div className="location-hero">
        <div className="container ">
          <h1>United States</h1>
          <div className="page-breadcrumb">
            <Breadcrumbs
              aria-label="breadcrumbs"
              className="breadcrumbs"
              style={{ color: "white" }}
            >
              <Link href="/" style={{ color: "white" }}>
                Home
              </Link>
              <Typography className="page-name">United States</Typography>
            </Breadcrumbs>
          </div>
        </div>
        <div className="overlay"></div>
      </div>
      {/* <div className="location-page-info-images">

      </div> */}
      <div className="location-page-main-sect ">
        <div className="container">
          <div className="location-page-main-inner-wrapper row">
            <div className="location-page-main-left-sect col-12 col-xxl-8 col-xl-8 col-lg-8 col-md-6 col-sm-12">
              <h1>United States</h1>
              <p>
                Justo, vel, quisque senectus malesuada amet. Faucibus amet id
                quam vitae massa sociis varius maecenas. Dui dis sit tincidunt
                et consequat scelerisque. Posuere vitae velit, adipiscing
                viverra tristique ornare. Venenatis sollicitudin sagittis,
                turpis est. Urna a velit purus ac vel volutpat eu eget. Libero,
                turpis pellentesque congue eget turpis nunc, enim, at non. Ut
                sagittis sed tempor non tincidunt elementum orci, fringilla.
                Scelerisque nunc ullamcorper elementum etiam pulvinar sit
                commodo placerat massa.
              </p>
              <p>
                Dapibus tortor sagittis a mattis donec. Ut arcu tempor
                scelerisque lorem eget elementum. Tortor donec et purus
                scelerisque purus. Consectetur enim, suspendisse feugiat sapien
                iaculis nulla dictumst. Ac ut in lectus purus aliquam, ultrices.
                Sed enim diam fringilla sed gravida.
              </p>
            </div>
            <div className="location-page-main-right-sect col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d774392.3715797374!2d-74.63904254633377!3d40.69665391863234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2saz!4v1707240002220!5m2!1sen!2saz"
                width="100%"
                min-height="300"
                height="100%"
                style={{ border: "0" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="recomended-location-title">
        <div className="container">
          <h1> United States</h1>
        </div>
      </div>
      <RecomendedForYou />
      <StoriesTipsGuides />
      <SubscribeComponent />
    </div>
  );
};

export default Location;
