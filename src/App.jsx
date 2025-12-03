// import Learning from "./COMPONENTS/Learning"
import "./App.css";
// import About from "./COMPONENTS/About"
// import Footer from "./COMPONENTS/Footer"
// import Contact from "./COMPONENTS/Contact";
import Banner from "./COMPONENTS/Banner";

import Header from "./COMPONENTS/Header";
import Cards from "./COMPONENTS/Cards";
import Collage from "./COMPONENTS/Collage";
import Process from "./COMPONENTS/Process";
import Success from "./COMPONENTS/Success";
import Team from "./COMPONENTS/Team";
import Journey from "./COMPONENTS/Journey";
import Footsteps from "./COMPONENTS/Footsteps";
import Footer from "./COMPONENTS/Footer";
function App() {
  return (
    <>
      {/* <h1></h1> */}
      {/* <Learning></Learning>
      <About></About>
      <Footer></Footer>  */}
      {/* <div className="flex">
        {" "}
        <Contact />
        <Contact headChange="change" />
        <Contact className="login--form" headChange="change" none="none" />
      </div>
       */}
<div className="main">
   <Header/>
      <Banner/>
      <Cards/>
       <Collage/>
        <Process/>
         <Success/>
          <Team/>
           <Journey/>
           <Footsteps/>
           <Footer></Footer> 
</div>
      


    </>
  );
}
export default App;
