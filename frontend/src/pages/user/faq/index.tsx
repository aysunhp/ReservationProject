import "./faq.scss";
import "./../../../assets/styles/gridSystem/grid.scss";
import React from "react";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import FAQComponent from "../../../components/faqComponent";

const FAQ = () => {
    
    const [data, setData] = React.useState<{
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
    <section className="faq-sect">
      <div className="faq-hero">
        <div className="container ">
          <h1>FAQ</h1>
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
     <FAQComponent/>
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

export default FAQ;
