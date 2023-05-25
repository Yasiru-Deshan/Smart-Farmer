import React from "react";
import "./objectives.css";
import ObjectiveCards from "./ObjectiveCards";
import madam from "./../../images/madam.jpg";
import sir from "./../../images/Picture4.jpg";
import dinuka from "./../../images/dinuka.jpg";
import dulantha from "./../../images/dulantha.jpg";
import chathurika from "./../../images/chathurika.jpg";
import sadani from "./../../images/sadani.png";
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
              src={madam}
            ></img>
            <p></p>
            <h3 className="offerTitle">MS. SURIYAA KUMARI</h3>
            <div style={{ padding: "20px" }}>
              <TopLine>Supervisor</TopLine>
            </div>
            <p className="offerDescription">✉ suriyaa.k@sliit.lk</p>
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
              src={sir}
            ></img>
            <p></p>
            <h3 className="offerTitle">MR. SUPUNYA SWARNAKANTHA</h3>
            <div style={{ padding: "20px" }}>
              <TopLine>Co-Supervisor</TopLine>
            </div>
            <p className="offerDescription">✉ ravi.s@sliit.lk</p>
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
            <img className="offerImg" alt="" src={dinuka}></img>
            <p></p>
            <h3 className="offerTitle">M D SWarnasooriya</h3>
            <div style={{ padding: "20px" }}>
              <TopLine>Group Leader</TopLine>
            </div>
            <p className="offerDescription">✉ it19214412@my.sliit.lk</p>
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
              src={dulantha}
            ></img>
            <p></p>
            <h3 className="offerTitle">G D M Godahewage</h3>
            <div style={{ padding: "20px" }}>
              <TopLine>Group Member</TopLine>
            </div>
            <p className="offerDescription">✉ it19106816@my.sliit.lk</p>
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
              src={chathurika}
            ></img>
            <p></p>
            <h3 className="offerTitle">B V C Bhashini</h3>
            <div style={{ padding: "20px" }}>
              <TopLine>Group Member</TopLine>
            </div>
            <p className="offerDescription">✉ it19166452@my.sliit.lk</p>
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
              src={sadani}
            ></img>
            <p></p>
            <h3 className="offerTitle">Manukalpani G S</h3>
            <div style={{ padding: "20px" }}>
              <TopLine>Group Member</TopLine>
            </div>
            <p className="offerDescription">✉ it19111698@my.sliit.lk</p>
            <p className="offerPrice"></p>
            {/* <button className="offerButton">View Details</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
