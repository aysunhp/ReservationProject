import { useState } from 'react';
import Checkbox from '@mui/joy/Checkbox';
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import Box from '@mui/material/Box';
import "./signIn.scss"



const SignIN = () => {
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
      };

    const handleCancel = () => {
        setOpen(false);
      };
  
 

  return (
    <div className="sign-in-section">
        <div className="containerr">
<form action="">
    <h1>Sign in to your account
</h1>
<Input size="large" placeholder="Email or Username" className='inp'/>
<Input.Password   
size="large"
        placeholder="Password"
        className='inp'
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />
    <Button type="primary" className='login-btn'>Log in </Button>

    <div className="login-footer">
    <Checkbox label="Remember me" className='login-checkbox'/>
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
    <Button type="primary" className='login-btn'> Send Reset Link</Button>
  <span className='back-btn'>Back to Login</span>
  </Box>
      </Modal>
</div>
        </div>
    </div>
  )
}

export default SignIN