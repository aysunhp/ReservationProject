import { Link } from "react-router-dom";
import "./noPage.scss";
import { Button} from 'antd';


const NoPage = () => {
  return (
 <div className="no-page">
  <div className="no-page-sect">

<div className="container">
<div className="no-page-item">
  <img src="https://modmixmap.travelerwp.com/wp-content/themes/traveler/v3/images/404.png" alt="" />
</div>
<h1>Oops! Look like you're lost</h1>
<p>Either something went wrong or the page doesn't exist anymore.</p>
<Link to="/">
<Button type="primary"  size="large" className="go-home-btn">
          Go to Home
        </Button>
</Link>
</div>
</div>
 </div>
  )
}

export default NoPage