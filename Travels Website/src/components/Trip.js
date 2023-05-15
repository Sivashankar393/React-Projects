import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Popular Places</h1>
      <p>You can go with google maps</p>
      <div className="tripcard">
        <TripData
        img={Trip1}
        />
      </div>
    </div>
  );
} 

export default Trip;