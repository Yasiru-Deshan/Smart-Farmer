import React from "react";
import "./objectives.css";
import Cards from "../Cards/cards";

const experianceCards = [
  {
    img: "https://cropaia.com/wp-content/uploads/Identification-of-pests.jpg",
    type: "Rooms & Suites",
    text: "Identify pests that can damage crops and suggest control methods.",
    description:
      "Exclusive Member Rate with Breakfast for Shangri-La Circle member.",
    price: "From LKR 65,734.20 Average Per Night",
  },
  {
    img: "https://www.thespruce.com/thmb/j85pQjF9NWIdFlw76conC8G56ik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Nutrient-Deficiency-58f655853df78ca159f4e787.jpg",
    type: "Rooms & Suites",
    text: "Identify deficiency of plants.",
    description:
      "Exclusive Member Rate with Breakfast for Shangri-La Circle member.",
    price: "From LKR 65,734.20 Average Per Night",
  },
  {
    img: "https://eos.com/wp-content/uploads/2021/12/septoria-leaf-spot-on-tomato.jpg",
    type: "Rooms & Suites",
    text: "Identify disease that can damage crops and suggest control methods.",
    description:
      "Exclusive Member Rate with Breakfast for Shangri-La Circle member.",
    price: "From LKR 65,734.20 Average Per Night",
  },
  {
    img: "https://www.frontiersin.org/image/researchtopic/37502",
    type: "Rooms & Suites",
    text: "Weed identification and control methods.",
    description:
      "Exclusive Member Rate with Breakfast for Shangri-La Circle member.",
    price: "From LKR 65,734.20 Average Per Night",
  },
];

const Objectives = () => {
  return (
    <div
      style={{
        margin: "auto",
        padding: "20px",
        paddingTop: "50px",
        height: "600px",
        backgroundColor: "#01bf71",
      }}
      id="scope"
    >
      <center>
        {" "}
        <h1 style={{ fontSize: "40px", color: "white" }}>Objectives</h1>
      </center>

      <div className="cardContainer" style={{ marginTop: "80px" }}>
        {experianceCards.map((card) => {
          return <Cards key={card.img} image={card.img} text={card.text} />;
        })}
      </div>
    </div>
  );
};

export default Objectives;
