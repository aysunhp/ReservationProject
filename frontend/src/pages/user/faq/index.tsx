import "./faq.scss";
import "./../../../assets/styles/gridSystem/grid.scss";
import React from "react";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import { PlusOutlined } from "@ant-design/icons";
import type { CSSProperties } from "react";
import type { CollapseProps } from "antd";
import { Collapse, theme } from "antd";
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis velit enim vulputate tempor. Cras sit ultricies malesuada sagittis venenatis arcu enim. Nec tempus turpis lacus, vitae nunc.
`;

const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
  panelStyle
) => [
  {
    key: "1",
    label: "How will I receive my payment?",
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: "2",
    label: "How to extend the support?",
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: "3",
    label: "How to using widget in Elementor",
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: "4",
    label: "How Can I Config Twitter Key API?",
    children: <p>{text}</p>,
    style: panelStyle,
  },
];
const getItemsRight: (panelStyle: CSSProperties) => CollapseProps["items"] = (
  panelStyle
) => [
  {
    key: "1",
    label: "How to import demo Traveler",
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: "2",
    label: "Internal Server Error ?",
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: "3",
    label: "How to Reset to Default Color ?",
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: "4",
    label: "How to increase the PHP Time Limit",
    children: <p>{text}</p>,
    style: panelStyle,
  },
];

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
    
  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: "white",
    borderRadius: token.borderRadiusLG,
    border: "none",
    boxShadow: "0px 1px 12px 0px rgba(0, 0, 0, 0.08)",
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
      <div className="faq-page-content">
        <div className="container">
          <h1>Frequently asked questions</h1>
          <div className="faq-wrapper row">
            <div className="faq-content-left-sect col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="active-icon"></div>
              <Collapse
                bordered={false}
                defaultActiveKey={["1"]}
                expandIcon={({ isActive }) => (
                  <PlusOutlined
                    rotate={isActive ? 360 : 0}
                    style={{
                      color: isActive ? "white" : "black",
                      backgroundColor: isActive ? "#3b71fe" : "white",
                      borderRadius: "50%",
                      padding: isActive ? "6px" : "0px",
                    }}
                  />
                )}
                expandIconPosition="end"
                style={{ background: token.colorBgContainer }}
                items={getItems(panelStyle)}
              />
            </div>
            <div className="faq-content-right-sect col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <Collapse
                bordered={false}
                defaultActiveKey={["1"]}
                expandIcon={({ isActive }) => (
                  <PlusOutlined
                    rotate={isActive ? 360 : 0}
                    style={{
                      color: isActive ? "white" : "black",
                      backgroundColor: isActive ? "#3b71fe" : "white",
                      borderRadius: "50%",
                      padding: isActive ? "6px" : "0px",
                    }}
                  />
                )}
                expandIconPosition="end"
                style={{ background: token.colorBgContainer }}
                items={getItemsRight(panelStyle)}
              />
            </div>
          </div>
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

export default FAQ;
