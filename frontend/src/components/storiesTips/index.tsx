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
import "./../../assets/styles/gridSystem/grid.scss"

const StoriesTipsGuides = () => {



  return (
    <section className="stories-tips-guides">
      <div className="container">
        <h1>Stories, tips, and guides</h1>

        <div className="stories-sect">
          <Swiper
              breakpoints={{
                1366: {
                  width: 1366,
                  slidesPerView: 4,
                },
                640: {
                  width: 640,
                  slidesPerView: 2,
                },
              }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            style={{ padding: "90px 0px 70px 0px" }}
          >
            <SwiperSlide style={{marginRight:"20px",width:"310px"}}>
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
            <SwiperSlide style={{marginRight:"20px",width:"310px"}}>
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
            <SwiperSlide style={{marginRight:"20px",width:"310px"}}>
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
            <SwiperSlide style={{marginRight:"20px",width:"310px"}}>
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
            <SwiperSlide style={{marginRight:"20px",width:"310px"}}>
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
            <SwiperSlide style={{marginRight:"20px",width:"310px"}}>
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
            <SwiperSlide style={{marginRight:"20px",width:"310px"}}>
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
            <SwiperSlide style={{marginRight:"20px",width:"310px"}}>
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
      </div>
    </section>
  );
};

export default StoriesTipsGuides;
