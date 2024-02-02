import "./storiesTips.scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import {  Input } from 'antd';
import { Button,  } from 'antd';

const StoriesTipsGuides = () => {
  return (
    <section className="stories-tips-guides">
      <div className="containerr">
        <h1>Stories, tips, and guides</h1>

        <div className="stories-sect">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            style={{ padding: "90px 0px 70px 0px" }}
          >
            <SwiperSlide>
              <Card sx={{ width: "100%" }} style={{ borderRadius: "15px" }}>
                <CardActionArea className="card-action-area">
                  <div className="hover-scale-image-container">
                    <CardMedia
                      component="img"
                      height="280"
                      image="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/California.jpg"
                      alt="hotel"
                      className="hover-scale-image"
                    />
                  </div>

                  <CardContent>
                    <div className="hotel-img-content">
                      <div className="type">
                        <ul>
                          <li>Travel</li>
                        </ul>
                      </div>
                      <h2>Meet the Stewe Jobs of the Travel Industry</h2>
                      <p>
                        Vulputate amet magna bibendum et nibh at. Pretium
                        tincidunt non…{" "}
                      </p>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Card sx={{ width: "100%" }} style={{ borderRadius: "15px" }}>
                <CardActionArea className="card-action-area">
                  <div className="hover-scale-image-container">
                    <CardMedia
                      component="img"
                      height="280"
                      image="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/California.jpg"
                      alt="hotel"
                      className="hover-scale-image"
                    />
                  </div>

                  <CardContent>
                    <div className="hotel-img-content">
                      <div className="type">
                        <ul>
                          <li>Travel</li>
                        </ul>
                      </div>
                      <h2>Meet the Stewe Jobs of the Travel Industry</h2>
                      <p>
                        Vulputate amet magna bibendum et nibh at. Pretium
                        tincidunt non…{" "}
                      </p>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card sx={{ width: "100%" }} style={{ borderRadius: "15px" }}>
                <CardActionArea className="card-action-area">
                  <div className="hover-scale-image-container">
                    <CardMedia
                      component="img"
                      height="280"
                      image="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/California.jpg"
                      alt="hotel"
                      className="hover-scale-image"
                    />
                  </div>

                  <CardContent>
                    <div className="hotel-img-content">
                      <div className="type">
                        <ul>
                          <li>Travel</li>
                        </ul>
                      </div>
                      <h2>Meet the Stewe Jobs of the Travel Industry</h2>
                      <p>
                        Vulputate amet magna bibendum et nibh at. Pretium
                        tincidunt non…{" "}
                      </p>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Card sx={{ width: "100%" }} style={{ borderRadius: "15px" }}>
                <CardActionArea className="card-action-area">
                  <div className="hover-scale-image-container">
                    <CardMedia
                      component="img"
                      height="280"
                      image="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/California.jpg"
                      alt="hotel"
                      className="hover-scale-image"
                    />
                  </div>

                  <CardContent>
                    <div className="hotel-img-content">
                      <div className="type">
                        <ul>
                          <li>Travel</li>
                        </ul>
                      </div>
                      <h2>Meet the Stewe Jobs of the Travel Industry</h2>
                      <p>
                        Vulputate amet magna bibendum et nibh at. Pretium
                        tincidunt non…{" "}
                      </p>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card sx={{ width: "100%" }} style={{ borderRadius: "15px" }}>
                <CardActionArea className="card-action-area">
                  <div className="hover-scale-image-container">
                    <CardMedia
                      component="img"
                      height="280"
                      image="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/California.jpg"
                      alt="hotel"
                      className="hover-scale-image"
                    />
                  </div>

                  <CardContent>
                    <div className="hotel-img-content">
                      <div className="type">
                        <ul>
                          <li>Travel</li>
                        </ul>
                      </div>
                      <h2>Meet the Stewe Jobs of the Travel Industry</h2>
                      <p>
                        Vulputate amet magna bibendum et nibh at. Pretium
                        tincidunt non…{" "}
                      </p>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Card sx={{ width: "100%" }} style={{ borderRadius: "15px" }}>
                <CardActionArea className="card-action-area">
                  <div className="hover-scale-image-container">
                    <CardMedia
                      component="img"
                      height="280"
                      image="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/California.jpg"
                      alt="hotel"
                      className="hover-scale-image"
                    />
                  </div>

                  <CardContent>
                    <div className="hotel-img-content">
                      <div className="type">
                        <ul>
                          <li>Travel</li>
                        </ul>
                      </div>
                      <h2>Meet the Stewe Jobs of the Travel Industry</h2>
                      <p>
                        Vulputate amet magna bibendum et nibh at. Pretium
                        tincidunt non…{" "}
                      </p>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card sx={{ width: "100%" }} style={{ borderRadius: "15px" }}>
                <CardActionArea className="card-action-area">
                  <div className="hover-scale-image-container">
                    <CardMedia
                      component="img"
                      height="280"
                      image="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/California.jpg"
                      alt="hotel"
                      className="hover-scale-image"
                    />
                  </div>

                  <CardContent>
                    <div className="hotel-img-content">
                      <div className="type">
                        <ul>
                          <li>Travel</li>
                        </ul>
                      </div>
                      <h2>Meet the Stewe Jobs of the Travel Industry</h2>
                      <p>
                        Vulputate amet magna bibendum et nibh at. Pretium
                        tincidunt non…{" "}
                      </p>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Card sx={{ width: "100%" }} style={{ borderRadius: "15px" }}>
                <CardActionArea className="card-action-area">
                  <div className="hover-scale-image-container">
                    <CardMedia
                      component="img"
                      height="280"
                      image="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/California.jpg"
                      alt="hotel"
                      className="hover-scale-image"
                    />
                  </div>

                  <CardContent>
                    <div className="hotel-img-content">
                      <div className="type">
                        <ul>
                          <li>Travel</li>
                        </ul>
                      </div>
                      <h2>Meet the Stewe Jobs of the Travel Industry</h2>
                      <p>
                        Vulputate amet magna bibendum et nibh at. Pretium
                        tincidunt non…{" "}
                      </p>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="special-offer">    
            <div className="offer-card">
            <div className="offer-img-wrapper">
                <img src="https://modmixmap.travelerwp.com/wp-content/uploads/2022/06/Rectangle-7-min.png" alt="" />
            </div>

            <div className="offer-content">
                <h1>Get special offers, and more from Traveler</h1>
                <p>Subscribe to see secret deals prices drop the moment you sign up!</p>
                <Input placeholder="Email Addres" className="search-sect" style={{width:"100%", height:"60px", padding:"20px", fontSize:"18px", borderRadius:"40px"}}/>
                <Button  type="primary" shape="round"  className="send-btn"  style={{width:"100px", height:"50px", padding:"10px", fontSize:"18px", fontWeight:"600"}} >Subscribe</Button>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesTipsGuides;
