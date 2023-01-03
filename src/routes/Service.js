import Navbar from "../component/Navbar";
 import Hero from "../component/Hero";
 import ServiceImg from "../assets/19.jpg";
import Trip from "../component/Trip";
function Service (){
    return(
        <>
        <Navbar/>
    <Hero 
    cName="hero-mid"
    heroImg={ServiceImg}
     title="Service"
     
    
     btnClass="hide"
   />
   <Trip/>
     </>   
    )
    }
    export default Service;