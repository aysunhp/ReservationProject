import { useEffect, useState } from "react";
import Checkbox from "@mui/joy/Checkbox";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button } from "antd";
import Typography from "@mui/joy/Typography";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import "./signUp.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/hotelStore";
import { fetchData, postData } from "../../redux/slice/userSlice";
import {User} from  "../../redux/slice/userSlice"

const SignUp = () => {
  const [parterValue, setPartnerValue] = useState(false);
  const [acceptValue, setAcceptValue] = useState(false);
  const [error, setError] = useState("");
  const [disp,setDisp]=useState(false);
  const [userData, setUserData] = useState<User>({userName:"",email:"", fullName:"",password:"", isPartner:false,userImage:"",userInfo:"",phone:"",paypayEmail:"",location:{
    homeAirport:"",state:"",address:"",zipCode:"",city:"",country:"",wishlist:[],
  }});

  const users = useSelector((state: RootState) => state.user.users);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const onChange = (e: RadioChangeEvent) => {
    setPartnerValue(e.target.value);
  };

  const handleInputChange = (fieldName: string, value: string) => {
    setUserData((prevState) => ({
      ...prevState,
      [fieldName]: value,
      isPartner: parterValue,
    }));
  };



  const handleRegisterUser = () => {
    const foundU=users.find((item) =>
    item.userName == userData.userName);

    const foundE=users.find((item) =>
    item.email == userData.email)

    if (!foundE && !foundU && acceptValue) {
      console.log("registr", userData);
      dispatch(postData(userData))
      setDisp(true)
      setTimeout(() => {
        setDisp(false);
      }, 3800);
    } else {
      setError(foundU?"userName":foundE?"email":"error");
      setTimeout(() => {
        setError("");
      }, 3800);
    }
  };

  return (
    <div className="sign-up-section">
      <div className="containerr">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1>Create an account</h1>
          <Input
            size="large"
            placeholder="Username*"
            className="inp"
            onChange={(e) => handleInputChange("userName", e.target.value)}
            required
          />
          <Input
            size="large"
            placeholder="FullName"
            className="inp"
            onChange={(e) => handleInputChange("fullName", e.target.value)}
            required
          />
          <Input
            size="large"
            type="email"
            placeholder="Email"
            className="inp"
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
          />
          <Input.Password
            size="large"
            placeholder="Password*"
            className="inp"
            autoComplete="off"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            onChange={(e) => handleInputChange("password", e.target.value)}
            required
          />
          <Radio.Group onChange={onChange} value={parterValue}>
            <Radio value={false} className="inp-label">
              Normal User
            </Radio>
            <Radio value={true} className="inp-label">
              Partner User
            </Radio>
          </Radio.Group>
          <Button
            type="primary"
            className="login-btn"
            onClick={handleRegisterUser}
          >
            Register{" "}
          </Button>
          <div className="login-footer">
            <Checkbox
              className="login-checkbox"
              label={
                <>
                  I confirm that I have read and accepted the{" "}
                  <Typography fontWeight="md">privacy policy</Typography>.
                </>
              }
              checked={acceptValue}
              onChange={(e) => setAcceptValue(e.target.checked)}
            />
          </div>

          <div
            className="sign-up-error"
            style={{ display: ( error!=="") ? "block" : "none" }}
          >
            {error === "error" ? (
              <p> Terms and conditions field is required</p>
            ) :error === "userName" ?(
              <p>Sorry, that username already exists!</p>
            ):error === "email" ?(
              <p>Email is already exists!</p>
            ):null}
          </div>
          <div
            className="sign-up-succes"
            style={{ display: disp ? "block" : "none" }}
          >
            <p>Signup in Succesfully!</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
