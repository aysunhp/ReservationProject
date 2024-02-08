import Hero from "../../../components/hero"
import TopDestinations from "../../../components/topDestination"
import RecomendedForYou from "../../../components/recomendedForYou"
import StoriesTipsGuides from "../../../components/storiesTips"
import "./home.scss"
import SubscribeComponent from "../../../components/subscribeComponent"
const Home = () => {
  return (
    <>
<main>

<Hero/>
<TopDestinations/>
<div className="recomended-title">
        <div className="container">
          <h1> Recomended for You</h1>
        </div>
      </div>
<RecomendedForYou/>
<StoriesTipsGuides/>
<SubscribeComponent/>
</main>
    </>
  )
}

export default Home