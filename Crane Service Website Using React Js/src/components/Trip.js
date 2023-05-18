import "./TripStyles.css"
import TripData from "./TripData"
import Trip1 from "../assets/imag10.jpg"
import Trip2 from "../assets/imag11.jpg"
import Trip3 from "../assets/imag12.jpg"



function Trip ()  {
  return (
    <div className="trip">
        <h1>Karur Crane Service</h1>

        <p>
            you can discoverunique destination using google Maps
        </p>
        <div className="tripcard">
        <TripData 
        image={Trip1}
        heading ="Car hire at Bangalore is made easy with us. Discover very exciting van, bus rental offers and book online to travel like a king. - Siddeshwara Travels."
        />
        </div>
    </div>
  )
}
export default Trip;
