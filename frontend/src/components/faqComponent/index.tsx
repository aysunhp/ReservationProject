import "./faqComponent.scss";
import "./../../assets/styles/gridSystem/grid.scss"
import { PlusOutlined } from "@ant-design/icons";
import type { CSSProperties } from "react";
import type { CollapseProps } from "antd";
import { Collapse, theme } from "antd";

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

const FAQComponent = () => {

    const { token } = theme.useToken();

    const panelStyle: React.CSSProperties = {
      marginBottom: 24,
      background: "white",
      borderRadius: token.borderRadiusLG,
      border: "none",
      boxShadow: "0px 1px 12px 0px rgba(0, 0, 0, 0.08)",
    };

  return (
    <div>
      <div className="faq-page-content">
        <div className="container">
          <h1>Frequently asked questions</h1>
          <div className="faq-wrapper row">
            <div className="faq-content-left-sect col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="active-icon"></div>
              <Collapse
                bordered={false}
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
    </div>
  )
}

export default FAQComponent