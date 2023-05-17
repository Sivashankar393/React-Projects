import Hero from "../components/Hero"
import Navbar from"../components/Navbar"
import AboutImg from"../assets/imag3.jpg"   
import Footer from"../components/Footer";
import AboutUs from"../components/AboutUs";

function About(){
    return (
        <>
        <h1>About page</h1>
        <Hero 
        cName=".hero-mid"
        heroImg={AboutImg}

        title="About"
        btnClass="hide"


        />
        <AboutUs/>
        </>
    );
}
export default About;