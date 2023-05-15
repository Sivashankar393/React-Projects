import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destiations</h1>
      <p>Tours give you the oppurtunity to see a lot, within a time frame</p>

      <DestinationData
      className="first-des"
      heading="Taal volcano, Batangas"
      text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil inventore eligendi dolorum soluta temporibus labore blanditiis cumque atque repellendus aperiam? Ipsam modi ullam rem numquam cupiditate animi cum aliquam sed.lorem
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, nostrum? Assumenda nam non molestiae magni nulla in architecto unde eius blanditiis explicabo, exercitationem animi corporis? Unde quae alias adipisci aspernatur.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio consequatur beatae, expedita ab sed eos? A, recusandae! Neque temporibus eligendi ut eveniet aliquid dicta velit. Vitae ipsa molestiae ipsum."
      
      img1={Mountain1}
      img2={Mountain2}

      />

      <DestinationData
      className="first-des-reverse"
      heading="Bali, Indonesia"
      text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil inventore eligendi dolorum soluta temporibus labore blanditiis cumque atque repellendus aperiam? Ipsam modi ullam rem numquam cupiditate animi cum aliquam sed.lorem
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, nostrum? Assumenda nam non molestiae magni nulla in architecto unde eius blanditiis explicabo, exercitationem animi corporis? Unde quae alias adipisci aspernatur.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio consequatur beatae, expedita ab sed eos? A, recusandae! Neque temporibus eligendi ut eveniet aliquid dicta velit. Vitae ipsa molestiae ipsum."
      
      img1={Mountain3}
      img2={Mountain4}
      />

    </div>
  );
};

export default Destination;