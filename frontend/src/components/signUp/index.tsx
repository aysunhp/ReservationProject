import Checkbox from '@mui/joy/Checkbox';
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button } from 'antd';
import Typography from '@mui/joy/Typography';
import "./signUp.scss"

const SignUp = () => {
  return (
    <div className="sign-up-section">
    <div className="containerr">
<form action="">
<h1>Create an account
</h1>
<Input size="large" placeholder="Username*" className='inp'/>
<Input size="large" placeholder="FullName" className='inp'/>
<Input size="large" placeholder="Email" className='inp'/>
<Input.Password   
size="large"
    placeholder="Password*"
    className='inp'
    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
  />
<Button type="primary" className='login-btn'>Register </Button>

<div className="login-footer">
<Checkbox
className='login-checkbox'
    label={
      <>
        I confirm that I have read and accepted the{' '}
        <Typography fontWeight="md">privacy policy</Typography>.
      </>
    }
  />

</div>
</form>

    </div>
</div>
  )
}

export default SignUp