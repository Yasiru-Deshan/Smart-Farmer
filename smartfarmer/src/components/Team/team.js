import React from "react";
import "./objectives.css";
import ObjectiveCards from "./ObjectiveCards";
import yasiru from './../../images/profile-pic (2).png';
import dinuka from './../../images/Ms_-Dinuka.jpg';
import mimi from './../../images/WhatsApp Image 2023-05-25 at 22.14.26.jpg';
import kavindya from './../../images/WhatsApp Image 2023-05-25 at 22.14.48.jpg'
import jenny from './../../images/received_1709833112455269.jpeg';
import gayan from './../../images/116440699_3279424272282680_3542454906818763166_n.jpg';
import { TopLine } from "../InfoSection/InfoElements";

const Team = () => {
  return (
    <div style={{ margin: "auto", padding: "3rem" }} id="about">
      <center>
        <h1 className="destTitle" style={{ fontSize: "50px" }}>
          Meet Our Team
        </h1>
      </center>

      <div
        className="offerCardContainer"
        style={{
          display: "grid",
          grid: "auto/ auto auto auto",

          padding: "10px",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div>
          <div
            data-aos="fade-up"
            className="offerCard"
            style={{ padding: "2px" }}
          >
            <img
              className="offerImg"
              alt=""
              style={{ height: "300px", objectFit: "cover" }}
              src={dinuka}
            ></img>
            <p></p>
            <h3 className="offerTitle">Mrs.Dinuka Wijendra</h3>
            <div style={{ padding: "20px" }}>
              <TopLine>Supervisor</TopLine>
            </div>
            <p className="offerDescription">✉ dinuka.w@sliit.lk</p>
            <p className="offerPrice"></p>
            {/* <button className="offerButton">View Details</button> */}
          </div>
        </div>
        <div>
          <div
            data-aos="fade-up"
            className="offerCard"
            style={{ padding: "2px" }}
          >
            <img
              className="offerImg"
              style={{ height: "300px", objectFit: "cover" }}
              alt=""
              src={jenny}
            ></img>
            <p></p>
            <h3 className="offerTitle">Ms. Jenny Krishara</h3>
            <div style={{ padding: "20px" }}>
              <TopLine>Co-Supervisor</TopLine>
            </div>
            <p className="offerDescription">✉ jenny.k@sliit.lk</p>
            <p className="offerPrice"></p>
            {/* <button className="offerButton">View Details</button> */}
          </div>
        </div>
      </div>

      <div
        className="offerCardContainer"
        style={{
          display: "grid",
          grid: "auto/ auto auto auto auto",

          padding: "10px",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div>
          <div data-aos="fade-up" className="offerCard">
            <img className="offerImg" alt="" src={yasiru}></img>
            <p></p>
            <h3 className="offerTitle">W M Y Deshan</h3>
            <div style={{ padding: "20px" }}>
              <TopLine>Group Leader</TopLine>
            </div>
            <p className="offerDescription">✉ it19251110@my.sliit.lk</p>
            <p className="offerPrice"></p>
            {/* <button className="offerButton">View Details</button> */}
          </div>
        </div>
        <div>
          <div data-aos="fade-up" className="offerCard">
            <img
              className="offerImg"
              alt=""
              style={{ height: "300px", objectFit: "cover" }}
              src={mimi}
            ></img>
            <p></p>
            <h3 className="offerTitle">G L M M Mendis</h3>
            <div style={{ padding: "20px" }}>
              <TopLine>Group Member</TopLine>
            </div>
            <p className="offerDescription">✉ it19986654@my.sliit.lk</p>
            <p className="offerPrice"></p>
            {/* <button className="offerButton">View Details</button> */}
          </div>
        </div>
        <div>
          <div data-aos="fade-up" className="offerCard">
            <img
              className="offerImg"
              alt=""
              style={{ height: "300px", objectFit: "cover" }}
              src={kavindya}
            ></img>
            <p></p>
            <h3 className="offerTitle">K C Gunathilake</h3>
            <div style={{ padding: "20px" }}>
              <TopLine>Group Member</TopLine>
            </div>
            <p className="offerDescription">✉ it19112442@my.sliit.lk</p>
            <p className="offerPrice"></p>
            {/* <button className="offerButton">View Details</button> */}
          </div>
        </div>
        <div>
          <div data-aos="fade-up" className="offerCard">
            <img
              className="offerImg"
              alt=""
              style={{ height: "300px", objectFit: "cover" }}
              src={gayan}
            ></img>
            <p></p>
            <h3 className="offerTitle">H M G M Bandara</h3>
            <div style={{ padding: "20px" }}>
              <TopLine>Group Member</TopLine>
            </div>
            <p className="offerDescription">✉ it19954738@my.sliit.lk</p>
            <p className="offerPrice"></p>
            {/* <button className="offerButton">View Details</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
