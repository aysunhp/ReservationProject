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
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { useState } from "react";
import "./../../assets/styles/gridSystem/grid.scss"

const StoriesTipsGuides = () => {

  const [data, setData] = useState<{
    email: string;
    status: 'initial' | 'loading' | 'failure' | 'sent';
  }>({
    email: '',
    status: 'initial',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setData((current) => ({ ...current, status: 'loading' }));
    try {
      setTimeout(() => {
        setData({ email: 'xipiyevaaysun@gmail.com', status: 'sent' });
      }, 1500);
    } catch (error) {
      setData((current) => ({ ...current, status: 'failure' }));
    }
  };



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
      <div className="subscribe-sect">
        <div className="container row">
          <div className="subscribe-content-left-sect col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="img-wrapper">
            <img src="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Rectangle-7-min.png" alt="" />
            </div>
          </div>
          <div className="subscribe-content-right-sect col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <h1>Get special offers, and more from Traveler</h1>
            <p>
              Subscribe to see secret deals prices drop the moment you sign up!
            </p>
                <form onSubmit={handleSubmit} id="demo">
      <FormControl>
        <Input
          sx={{ '--Input-decoratorChildHeight': '45px' }}
          placeholder="Email Address"
          type="email"
          required
          value={data.email}
          onChange={(event) =>
            setData({ email: event.target.value, status: 'initial' })
          }
          error={data.status === 'failure'}
          endDecorator={
            <Button
              variant="solid"
              color="primary"
              loading={data.status === 'loading'}
              type="submit"
              sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            >
              Subscribe
            </Button>
          }
        />
        {data.status === 'failure' && (
          <FormHelperText
            sx={(theme) => ({ color: theme.vars.palette.danger[400] })}
          >
            Oops! something went wrong, please try again later.
          </FormHelperText>
        )}
        {data.status === 'sent' && (
          <FormHelperText
            sx={(theme) => ({ color: theme.vars.palette.primary[400] })}
          >
            You are all set!
          </FormHelperText>
        )}
      </FormControl>
    </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesTipsGuides;
