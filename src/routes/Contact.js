import Navbar from "../component/Navbar";
 import Hero from "../component/Hero";
 import ContactImg from "../assets/21.jpg";
import ContactForm from "../component/ContactForm";
function Contact (){
    return(
        <>
        <Navbar/>
    <Hero 
    cName="hero-mid"
    heroImg={ContactImg}
     title="Contact"
     btnClass="hide"
   />
   <ContactForm/>
     </>   
    )
    }
    export default Contact;