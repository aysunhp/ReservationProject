import "./localExpert.scss";
import "./../../../assets/styles/gridSystem/grid.scss";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import FAQComponent from "../../../components/faqComponent";
import MeetOurTeam from "../../../components/ourTeam";
import { Button } from "antd";



const BecomeLocalExpert = () => {
  return (
    <section className="local-expert-sect">
      <div className="local-expert-hero">
        <div className="container ">
          <h1>Become Local Expert</h1>
          <div className="page-breadcrumb">
            <Breadcrumbs
              aria-label="breadcrumbs"
              className="breadcrumbs"
              style={{ color: "white" }}
            >
              <Link href="/" style={{ color: "white" }}>
                Home
              </Link>
              <Typography className="page-name">Become Local Expert</Typography>
            </Breadcrumbs>
          </div>
        </div>
        <div className="overlay"></div>
      </div>
      <div className="local-expert-main-sect">
        <div className="container">
          <div className="widget-wrapper">
            <div className="widget">
              <div className="containerr">
                <h1>You can become a Local Expert anything, anywhere</h1>
              </div>
            </div>
          </div>
          <h1>How does it work?</h1>
          <div className="work-step-cards row">
            <div className="step-1 step col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 ">
           <div className="step-inner-wrapper row">
           <div className="step-count col-3">
              <div className="step-icon-wrapper">
              <span className="step-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                  >
                    <rect width="60" height="60" rx="30" fill="#E9EFFF"></rect>
                    <path
                      d="M25.5191 39.312C23.8377 39.312 22.3991 38.922 21.2031 38.142C20.0071 37.3447 19.0797 36.244 18.4211 34.84C17.7797 33.4187 17.4591 31.772 17.4591 29.9C17.4591 28.0453 17.7797 26.4073 18.4211 24.986C19.0797 23.5647 20.0071 22.464 21.2031 21.684C22.3991 20.8867 23.8377 20.488 25.5191 20.488C27.2004 20.488 28.6391 20.8867 29.8351 21.684C31.0311 22.464 31.9497 23.5647 32.5911 24.986C33.2497 26.4073 33.5791 28.0453 33.5791 29.9C33.5791 31.772 33.2497 33.4187 32.5911 34.84C31.9497 36.244 31.0311 37.3447 29.8351 38.142C28.6391 38.922 27.2004 39.312 25.5191 39.312ZM25.5191 36.322C26.8884 36.322 28.0064 35.75 28.8731 34.606C29.7397 33.462 30.1731 31.8933 30.1731 29.9C30.1731 27.9067 29.7397 26.338 28.8731 25.194C28.0064 24.05 26.8884 23.478 25.5191 23.478C24.1324 23.478 23.0057 24.05 22.1391 25.194C21.2897 26.338 20.8651 27.9067 20.8651 29.9C20.8651 31.8933 21.2897 33.462 22.1391 34.606C23.0057 35.75 24.1324 36.322 25.5191 36.322ZM38.492 39V24.596L35.502 25.298V22.75L39.896 20.8H41.95V39H38.492Z"
                      fill="#3B71FE"
                    ></path>
                  </svg>{" "}
                </span>
              </div>
              </div>
              <div className="step-content-wrapper col-9">
                <div className="step-content-title ">Sign up</div>
                <div className="step-content">
                  Praesent dolor sagittis, rhoncus netus bibendum et. Dolor id
                  sed urna netus volutpat tortor.
                </div>
              </div>
           </div>
            </div>
            <div className="step-2 step col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 ">
            <div className="step-inner-wrapper row">
            <div className="step-count col-3">
             <div className="step-icon-wraapper">
             <span className="step-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none"><rect width="60" height="60" rx="30" fill="#E9EFFF"></rect><path d="M22.6372 39.312C20.9559 39.312 19.5172 38.922 18.3212 38.142C17.1252 37.3447 16.1979 36.244 15.5392 34.84C14.8979 33.4187 14.5772 31.772 14.5772 29.9C14.5772 28.0453 14.8979 26.4073 15.5392 24.986C16.1979 23.5647 17.1252 22.464 18.3212 21.684C19.5172 20.8867 20.9559 20.488 22.6372 20.488C24.3186 20.488 25.7572 20.8867 26.9532 21.684C28.1492 22.464 29.0679 23.5647 29.7092 24.986C30.3679 26.4073 30.6972 28.0453 30.6972 29.9C30.6972 31.772 30.3679 33.4187 29.7092 34.84C29.0679 36.244 28.1492 37.3447 26.9532 38.142C25.7572 38.922 24.3186 39.312 22.6372 39.312ZM22.6372 36.322C24.0066 36.322 25.1246 35.75 25.9912 34.606C26.8579 33.462 27.2912 31.8933 27.2912 29.9C27.2912 27.9067 26.8579 26.338 25.9912 25.194C25.1246 24.05 24.0066 23.478 22.6372 23.478C21.2506 23.478 20.1239 24.05 19.2572 25.194C18.4079 26.338 17.9832 27.9067 17.9832 29.9C17.9832 31.8933 18.4079 33.462 19.2572 34.606C20.1239 35.75 21.2506 36.322 22.6372 36.322ZM33.0653 39V36.582C34.1746 35.6633 35.2493 34.7533 36.2893 33.852C37.3466 32.9507 38.2826 32.058 39.0973 31.174C39.9293 30.29 40.5879 29.432 41.0733 28.6C41.5759 27.7507 41.8273 26.9273 41.8273 26.13C41.8273 25.3847 41.6193 24.726 41.2033 24.154C40.8046 23.582 40.1373 23.296 39.2013 23.296C38.2479 23.296 37.5286 23.608 37.0433 24.232C36.5579 24.856 36.3153 25.61 36.3153 26.494H33.0913C33.1259 25.1593 33.4206 24.05 33.9753 23.166C34.5299 22.2647 35.2666 21.5973 36.1853 21.164C37.1039 20.7133 38.1353 20.488 39.2793 20.488C41.1339 20.488 42.5726 20.9993 43.5953 22.022C44.6353 23.0273 45.1553 24.336 45.1553 25.948C45.1553 26.9533 44.9213 27.9327 44.4533 28.886C44.0026 29.8393 43.4046 30.758 42.6593 31.642C41.9139 32.526 41.1079 33.358 40.2413 34.138C39.3746 34.9007 38.5339 35.6113 37.7193 36.27H45.5973V39H33.0653Z" fill="#3B71FE"></path></svg> </span>
             </div>
              </div>
              <div className="step-content-wrapper col-9">
                <div className="step-content-title ">Add your services</div>
                <div className="step-content">
                  Praesent dolor sagittis, rhoncus netus bibendum et. Dolor id
                  sed urna netus volutpat tortor.
                </div>
              </div>
            </div>
            </div>
            <div className="step-3 step col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 ">
          <div className="step-inner-wrapper row">
          <div className="step-count col-3">
            <div className="step-icon-wrapper">
            <span className="step-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none"><rect width="60" height="60" rx="30" fill="#E9EFFF"></rect><path d="M22.2564 39.312C20.575 39.312 19.1364 38.922 17.9404 38.142C16.7444 37.3447 15.817 36.244 15.1584 34.84C14.517 33.4187 14.1964 31.772 14.1964 29.9C14.1964 28.0453 14.517 26.4073 15.1584 24.986C15.817 23.5647 16.7444 22.464 17.9404 21.684C19.1364 20.8867 20.575 20.488 22.2564 20.488C23.9377 20.488 25.3764 20.8867 26.5724 21.684C27.7684 22.464 28.687 23.5647 29.3284 24.986C29.987 26.4073 30.3164 28.0453 30.3164 29.9C30.3164 31.772 29.987 33.4187 29.3284 34.84C28.687 36.244 27.7684 37.3447 26.5724 38.142C25.3764 38.922 23.9377 39.312 22.2564 39.312ZM22.2564 36.322C23.6257 36.322 24.7437 35.75 25.6104 34.606C26.477 33.462 26.9104 31.8933 26.9104 29.9C26.9104 27.9067 26.477 26.338 25.6104 25.194C24.7437 24.05 23.6257 23.478 22.2564 23.478C20.8697 23.478 19.743 24.05 18.8764 25.194C18.027 26.338 17.6024 27.9067 17.6024 29.9C17.6024 31.8933 18.027 33.462 18.8764 34.606C19.743 35.75 20.8697 36.322 22.2564 36.322ZM39.2074 39.312C38.0114 39.312 36.928 39.104 35.9574 38.688C34.9867 38.2547 34.2067 37.596 33.6174 36.712C33.028 35.828 32.716 34.7187 32.6814 33.384H35.9574C35.9747 34.268 36.2607 35.0133 36.8154 35.62C37.3874 36.2093 38.1847 36.504 39.2074 36.504C40.178 36.504 40.9234 36.2353 41.4434 35.698C41.9634 35.1607 42.2234 34.4847 42.2234 33.67C42.2234 32.7167 41.8767 31.9973 41.1834 31.512C40.5074 31.0093 39.632 30.758 38.5574 30.758H37.2054V28.028H38.5834C39.4674 28.028 40.204 27.82 40.7934 27.404C41.3827 26.988 41.6774 26.3727 41.6774 25.558C41.6774 24.882 41.452 24.3447 41.0014 23.946C40.568 23.53 39.9614 23.322 39.1814 23.322C38.332 23.322 37.6647 23.5733 37.1794 24.076C36.7114 24.5787 36.4514 25.194 36.3994 25.922H33.1494C33.2187 24.2407 33.7994 22.9147 34.8914 21.944C36.0007 20.9733 37.4307 20.488 39.1814 20.488C40.4294 20.488 41.478 20.7133 42.3274 21.164C43.194 21.5973 43.844 22.178 44.2774 22.906C44.728 23.634 44.9534 24.44 44.9534 25.324C44.9534 26.3467 44.6674 27.2133 44.0954 27.924C43.5407 28.6173 42.8474 29.0853 42.0154 29.328C43.038 29.536 43.87 30.0387 44.5114 30.836C45.1527 31.616 45.4734 32.604 45.4734 33.8C45.4734 34.8053 45.2307 35.724 44.7454 36.556C44.26 37.388 43.5494 38.0553 42.6134 38.558C41.6947 39.0607 40.5594 39.312 39.2074 39.312Z" fill="#3B71FE"></path></svg>
                </span>
            </div>
              </div>
              <div className="step-content-wrapper col-9">
                <div className="step-content-title ">Get bookings</div>
                <div className="step-content">
                  Praesent dolor sagittis, rhoncus netus bibendum et. Dolor id
                  sed urna netus volutpat tortor.
                </div>
              </div>
          </div>
            </div>
          </div>
          <div className="register-btn-wrapper">
    <Button type="primary" className='register-btn'>Register  new</Button>
            
          </div>
        </div>
      </div>
      <div className="local-expert-meet-superhosts-sect">
        <div className="container">
          <h1>Meet the superhosts</h1>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            cons, adipisci velit, sed quia non numquam eius modi ullma tempora
            incidunt ut.
          </p>
        </div>
        <MeetOurTeam />
      </div>
      <FAQComponent />
    </section>
  );
};

export default BecomeLocalExpert;
