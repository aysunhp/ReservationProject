import { useState, useEffect } from 'react';
import Checkbox from '@mui/joy/Checkbox';
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import Box from '@mui/material/Box';
import "./signIn.scss"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/hotelStore";
import { fetchData , login} from "../../redux/slice/userSlice";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const SignIN = () => {



    const [open, setOpen] = useState(false);
    const [user, setUser] = useState({userName:"", password:""});
  const [disp,setDisp]=useState(false);
  const [display,setDisplay]=useState(false);

    const [rememberMe, setRememberMe]=useState(false)
      const users = useSelector((state: RootState) => state.user.users);
      const dispatch = useDispatch<AppDispatch>();
      const navigate=useNavigate()

      const showModal = () => {
        setOpen(true);
      };
    const handleCancel = () => {
        setOpen(false);
      };
      useEffect(() => {
        dispatch(fetchData());
      }, [dispatch]);
      console.log(users)


      const handleInputChange = (fieldName: string, value: string) => {
        setUser((prevState) => ({
          ...prevState,
          [fieldName]: value,
        }));
      };

      const handleSubmit = () => {
        const found=users.find(item=>item.userName==user.userName && item.password==user.password)
       if(found){
        console.log(found)
        axios.post("http://localhost:8000/login/", user).then((res) => {
          console.log(res.data);
         localStorage.setItem("user",JSON.stringify(found))
          localStorage.setItem("token", JSON.stringify(res.data));
          dispatch(login(true));
          setDisplay(true);
          setTimeout(() => {
            setDisplay(false);
          }, 3800);
          navigate("/")
        });

       }else{
        setDisp(true);
        setTimeout(() => {
          setDisp(false);
        }, 3800);
       }
      };
    
  return (
    <div className="sign-in-section">
        <div className="containerr">
<form action="" onSubmit={(e)=>e.preventDefault()}>
    <h1>Sign in to your account
</h1>
<Input size="large" placeholder="Email or Username" className='inp' 
  onChange={(e) => handleInputChange("userName", e.target.value)}/>
<Input.Password   
size="large"
        placeholder="Password"
        autoComplete='on'
        className='inp'
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        onChange={(e) => handleInputChange("password", e.target.value)}
     />
    <Button type="primary" className='login-btn' onClick={handleSubmit}>Log in </Button>
    <div
            className="sign-in-error"
            style={{ display: disp ? "block" : "none" }}
          >
           <p><span>Error:</span>  The username or password you entered is incorrect. </p>
          </div>

          <div
            className="sign-up-succes"
            style={{ display: display ? "block" : "none" }}
          >
            <p>Logged in Succesfully!</p>
          </div>
    <div className="login-footer">
    <Checkbox label="Remember me" className='login-checkbox'  checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}/>
    <p onClick={showModal}>Forgot Password?</p>
    </div>


   
</form>
<div className="modal-wrapper">
<Modal
        open={open}
        title=""
        onCancel={handleCancel}
        footer={[]}
      >
 <Box className="forgot-pass-modal">
  
    <h1>Reset Password</h1>
    <p>Enter the e-mail address associated with the account.
We'll e-mail a link to reset your password.</p>
   
  
    <Input size="large" placeholder="Email " className='inp'/>
    <Button type="primary" className='login-btn' > Send Reset Link</Button>
  <span className='back-btn'>Back to Login</span>
  </Box>
      </Modal>
</div>
        </div>
    </div>
  )
}

export default SignIN