import Navbar from "../component/Navbar";
 import Hero from "../component/Hero";
 import AboutImg from "../assets/19.jpg";
import AboutUs from "../component/AboutUs";

function About (){
    return(
        <>
        <Navbar/>
    <Hero 
    cName="hero-mid"
    heroImg={AboutImg}
     title="About"
     
    
     btnClass="hide"
   />
   <AboutUs/>
     </>   
    )
    }
    export default About;