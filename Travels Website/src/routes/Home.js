import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Home() {
  return (
    <>
    <Navbar/>
    <Hero
    cName="hero"
    heroImg="https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    title="Make Your Journey Joyful"
    text="Choose Your Favourite Destination."
    buttonText="Make My Trip"
    url="/"
    btnClass="show"
    />
    <Destination/>
    <Trip/>

    </>
  );
}

export default Home;