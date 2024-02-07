import "./contact.scss";
import "./../../../assets/styles/gridSystem/grid.scss";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import { Divider } from "antd";
import { Input } from "antd";
import { Button } from "antd";
const { TextArea } = Input;
const Contact = () => {



  return (
    <section className="contact-sect">
      <div className="contact-hero">
        <div className="container ">
          <h1>Contact</h1>
          <div className="page-breadcrumb">
            <Breadcrumbs
              aria-label="breadcrumbs"
              className="breadcrumbs"
              style={{ color: "white" }}
            >
              <Link href="/" style={{ color: "white" }}>
                Home
              </Link>
              <Typography className="page-name">Contact</Typography>
            </Breadcrumbs>
          </div>
        </div>
        <div className="overlay"></div>
      </div>
      <div className="contact-location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d774392.3715797374!2d-74.63904254633377!3d40.69665391863234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2saz!4v1707240002220!5m2!1sen!2saz"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contact-page-content ">
       <div className="container container-xxl
    container-xl
    container-lg
    container-md
    container-sm row">
       <div className="contact-content-left-sect  col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <h1>Contact information</h1>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <ul>
            <li>
              <span className="elementor-icon elementor-animation-">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.99947 1.875C7.15219 1.87308 4.3673 3.52527 3.62295 6.7966C2.74207 10.6884 5.1535 14.0635 7.42192 16.2498C9.99683 18.4517 9.99683 18.4517 12.5627 16.2503L12.5639 16.2492C14.8405 14.063 17.2515 10.6962 16.3705 6.80466C15.6301 3.53312 12.8469 1.87693 9.99947 1.875ZM17.5897 6.52867C16.6968 2.58357 13.3174 0.627244 10.0003 0.625002C6.68312 0.62276 3.30144 2.57461 2.404 6.5197C1.36842 11.0943 4.22326 14.903 6.55472 17.15L6.55551 17.1508C9.99683 20.1184 9.99683 20.1184 13.4305 17.15C15.8848 15.0283 18.6253 11.1033 17.5897 6.52867ZM9.99677 6.2C8.906 6.2 8.02177 7.08424 8.02177 8.175C8.02177 9.26577 8.906 10.15 9.99677 10.15C11.0875 10.15 11.9718 9.26577 11.9718 8.175C11.9718 7.08424 11.0875 6.2 9.99677 6.2ZM6.77177 8.175C6.77177 6.39389 8.21565 4.95 9.99677 4.95C11.7779 4.95 13.2218 6.39389 13.2218 8.175C13.2218 9.95612 11.7779 11.4 9.99677 11.4C8.21565 11.4 6.77177 9.95612 6.77177 8.175Z"
                    fill="#3B71FE"
                  ></path>
                </svg>{" "}
              </span>
              540 Libety Road, New District, New York
            </li>
            <Divider  />
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M14.5417 18.9596C13.6 18.9596 12.6083 18.7346 11.5833 18.3013C10.5833 17.8763 9.57499 17.293 8.59166 16.5846C7.61666 15.868 6.67499 15.068 5.78332 14.193C4.89999 13.3013 4.09999 12.3596 3.39166 11.393C2.67499 10.393 2.09999 9.39297 1.69166 8.4263C1.25832 7.39297 1.04166 6.39297 1.04166 5.4513C1.04166 4.8013 1.15832 4.18464 1.38332 3.60964C1.61666 3.01797 1.99166 2.46797 2.49999 1.99297C3.14166 1.35964 3.87499 1.04297 4.65832 1.04297C4.98332 1.04297 5.31666 1.11797 5.59999 1.2513C5.92499 1.4013 6.19999 1.6263 6.39999 1.9263L8.33332 4.6513C8.50832 4.89297 8.64166 5.1263 8.73332 5.35964C8.84166 5.60964 8.89999 5.85964 8.89999 6.1013C8.89999 6.41797 8.80832 6.7263 8.63332 7.01797C8.50832 7.24297 8.31666 7.48464 8.07499 7.7263L7.50832 8.31797C7.51666 8.34297 7.52499 8.35964 7.53332 8.3763C7.63332 8.5513 7.83332 8.8513 8.21666 9.3013C8.62499 9.76797 9.00832 10.193 9.39166 10.5846C9.88332 11.068 10.2917 11.4513 10.675 11.768C11.15 12.168 11.4583 12.368 11.6417 12.4596L11.625 12.5013L12.2333 11.9013C12.4917 11.643 12.7417 11.4513 12.9833 11.3263C13.4417 11.043 14.025 10.993 14.6083 11.2346C14.825 11.3263 15.0583 11.4513 15.3083 11.6263L18.075 13.593C18.3833 13.8013 18.6083 14.068 18.7417 14.3846C18.8667 14.7013 18.925 14.993 18.925 15.2846C18.925 15.6846 18.8333 16.0846 18.6583 16.4596C18.4833 16.8346 18.2667 17.1596 17.9917 17.4596C17.5167 17.9846 17 18.3596 16.4 18.6013C15.825 18.8346 15.2 18.9596 14.5417 18.9596ZM4.65832 2.29297C4.19999 2.29297 3.77499 2.49297 3.36666 2.89297C2.98332 3.2513 2.71666 3.64297 2.54999 4.06797C2.37499 4.5013 2.29166 4.95964 2.29166 5.4513C2.29166 6.2263 2.47499 7.06797 2.84166 7.93464C3.21666 8.81797 3.74166 9.73464 4.40832 10.6513C5.07499 11.568 5.83332 12.4596 6.66666 13.3013C7.49999 14.1263 8.39999 14.893 9.32499 15.568C10.225 16.2263 11.15 16.7596 12.0667 17.143C13.4917 17.7513 14.825 17.893 15.925 17.4346C16.35 17.2596 16.725 16.993 17.0667 16.6096C17.2583 16.4013 17.4083 16.1763 17.5333 15.9096C17.6333 15.7013 17.6833 15.4846 17.6833 15.268C17.6833 15.1346 17.6583 15.0013 17.5917 14.8513C17.5667 14.8013 17.5167 14.7096 17.3583 14.6013L14.5917 12.6346C14.425 12.518 14.275 12.4346 14.1333 12.3763C13.95 12.3013 13.875 12.2263 13.5917 12.4013C13.425 12.4846 13.275 12.6096 13.1083 12.7763L12.475 13.4013C12.15 13.718 11.65 13.793 11.2667 13.6513L11.0417 13.5513C10.7 13.368 10.3 13.0846 9.85832 12.7096C9.45832 12.368 9.02499 11.968 8.49999 11.4513C8.09166 11.0346 7.68332 10.593 7.25832 10.1013C6.86666 9.64297 6.58332 9.2513 6.40832 8.9263L6.30832 8.6763C6.25832 8.48464 6.24166 8.3763 6.24166 8.25964C6.24166 7.95964 6.34999 7.69297 6.55832 7.48464L7.18332 6.83464C7.34999 6.66797 7.47499 6.50964 7.55832 6.36797C7.62499 6.25964 7.64999 6.16797 7.64999 6.08464C7.64999 6.01797 7.62499 5.91797 7.58332 5.81797C7.52499 5.68464 7.43332 5.53464 7.31666 5.3763L5.38332 2.64297C5.29999 2.5263 5.19999 2.44297 5.07499 2.38464C4.94166 2.3263 4.79999 2.29297 4.65832 2.29297ZM11.625 12.5096L11.4917 13.0763L11.7167 12.493C11.675 12.4846 11.6417 12.493 11.625 12.5096Z"
                  fill="#3B71FE"
                ></path>
                <path
                  d="M15.4167 8.1263C15.075 8.1263 14.7917 7.84297 14.7917 7.5013C14.7917 7.2013 14.4917 6.5763 13.9917 6.04297C13.5 5.51797 12.9583 5.20964 12.5 5.20964C12.1583 5.20964 11.875 4.9263 11.875 4.58464C11.875 4.24297 12.1583 3.95964 12.5 3.95964C13.3083 3.95964 14.1583 4.39297 14.9 5.18464C15.5917 5.9263 16.0417 6.83464 16.0417 7.5013C16.0417 7.84297 15.7583 8.1263 15.4167 8.1263Z"
                  fill="#3B71FE"
                ></path>
                <path
                  d="M18.3333 8.1263C17.9917 8.1263 17.7083 7.84297 17.7083 7.5013C17.7083 4.6263 15.375 2.29297 12.5 2.29297C12.1583 2.29297 11.875 2.00964 11.875 1.66797C11.875 1.3263 12.1583 1.04297 12.5 1.04297C16.0583 1.04297 18.9583 3.94297 18.9583 7.5013C18.9583 7.84297 18.675 8.1263 18.3333 8.1263Z"
                  fill="#3B71FE"
                ></path>
              </svg>
              (000) 999 -656 -888
            </li>
            <Divider />
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M14.1667 17.7096H5.83332C2.79166 17.7096 1.04166 15.9596 1.04166 12.918V7.08464C1.04166 4.04297 2.79166 2.29297 5.83332 2.29297H14.1667C17.2083 2.29297 18.9583 4.04297 18.9583 7.08464V12.918C18.9583 15.9596 17.2083 17.7096 14.1667 17.7096ZM5.83332 3.54297C3.44999 3.54297 2.29166 4.7013 2.29166 7.08464V12.918C2.29166 15.3013 3.44999 16.4596 5.83332 16.4596H14.1667C16.55 16.4596 17.7083 15.3013 17.7083 12.918V7.08464C17.7083 4.7013 16.55 3.54297 14.1667 3.54297H5.83332Z"
                  fill="#3B71FE"
                ></path>
                <path
                  d="M9.99981 10.7263C9.2998 10.7263 8.59147 10.5096 8.04981 10.0679L5.44147 7.98461C5.1748 7.76795 5.12481 7.37628 5.34147 7.10961C5.55814 6.84294 5.94981 6.79295 6.21648 7.00961L8.8248 9.09295C9.45814 9.60128 10.5331 9.60128 11.1665 9.09295L13.7748 7.00961C14.0415 6.79295 14.4415 6.83461 14.6498 7.10961C14.8665 7.37628 14.8248 7.77628 14.5498 7.98461L11.9415 10.0679C11.4081 10.5096 10.6998 10.7263 9.99981 10.7263Z"
                  fill="#3B71FE"
                ></path>
              </svg>
              travelerwp@gmail.com
            </li>
          </ul>
        </div>
        <div className="contact-content-right-sect  col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
         <div className="contact-content-right-sect-inner-wrapper">
         <h1>Send a message</h1>
          <form action="">
           <div className="col-wrapper row">
           <div className="inp-wrapper col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <Input size="large" placeholder="Your name*" className="inp " />
            </div>
            <div className="inp-wrapper col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <Input size="large" placeholder="Phone number" className="inp  " />
            </div>
           </div>
            <div className="inp-wrapper">
            <Input size="large" placeholder="Your email*" className="inp" />
            </div>
      
            <div className="inp-wrapper">
            <TextArea rows={4} placeholder="Message" className="text-area-inp" />
            </div>
            <Button type="primary" className="login-btn">
             
              Submit <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" fill="white"/></svg>
            </Button>
          </form>
         </div>
        </div>
       </div>
      </div>
    </section>
  );
};

export default Contact;
