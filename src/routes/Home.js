 import Navbar from "../component/Navbar";
 import Hero from "../component/Hero";
import Destination from "../component/Destination";
import Trip from "../component/Trip";
 function Home (){
return(
    <>
    <Navbar/>
    <Hero 
    cName="hero"
    heroImg="https://images.unsplash.com/photo-1545066192-ef2d4a2bbe17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
     title="Your Journey Your Story"
     text="Choose Your Favourite Destination."
     buttonText=" Travel Plan"
     url="/"
     btnClass="show"
   />
   <Destination/>
    <Trip/>
    </>
)
}
export default Home;