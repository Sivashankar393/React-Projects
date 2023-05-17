import Mountain1 from "../assets/imag1.jpg";
import Mountain2 from "../assets/imag2.jpg";
import Mountain6 from "../assets/imag6.jpg";
import Mountain5 from "../assets/imag5.jpg";
import DestinationData from "./DestinationData";
import "./Destinationstyle.css";


const Destination = () =>{
    return(
        <div className="destination">
          <h1>Popular Destination</h1>
          <p>
            Tours give you the opportunity to see a lot,within a time frame
          </p>

   <DestinationData
   heading="Taal volvano,Batanges"
   text="Construction site with crane and building Word Template ... Add this service and get a template in your business colors within next 24 hours Service Cost ..."
   img1={Mountain1}
   img2={Mountain2}
   img6={Mountain6}
   img5={Mountain5}

   />
  <DestinationData
  className ="first-des-reverse"
  heading="Mt.daguldul,Batangas"
  text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  />
        </div>


    );
};

export default Destination;

