import Nav from "../components/navbar";
import Main from "../components/main";
import Footer from "../components/footer";
import Tile from "../components/tile"
import Features from "../components/features";

const Home = () => {
  return (
    <div>
      <Nav/>
      <Main/>
      <Tile/>
      <Features/>
      <Footer/>
    </div>
  )
  
}

export default Home;