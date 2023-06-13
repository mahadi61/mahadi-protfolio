import About from "../about/About";
import Banner from "../banner/Banner";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Project from "../project/Project";

const Home = () => {
  return (
    <div className="bg-[url('/public/bullseye-gradient.png')] max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Project></Project>
      <Footer></Footer>
    </div>
  );
};

export default Home;
