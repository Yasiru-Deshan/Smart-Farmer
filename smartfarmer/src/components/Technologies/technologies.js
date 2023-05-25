import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PlanetOne from "./../../images/snakes_318-368381.avif";
import PlanetThree from "./../../images/tensorflow_logo_icon_168671.png";
import PlanetTwo from "./../../images/React-icon.svg.png";
import PlanetFour from "./../../images/opencv-icon-414x512-d2gfjzmg.png";

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #13131;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    height: 160vh;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 110vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  margintop: -70px;

  width: 100%;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: -25vh;
    height: 180vh;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem 1rem;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
    color: white;
  }
  @media screen and (max-width: 768px) {
    height: 100vh;
    padding: 1rem 1rem;
  }

  ${
    "" /* p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  } */
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: #fff;
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;

  @media screen and (max-width: 768px) {
    margin-top: -40vh;
  }

  ${Image}:nth-child(1) {
    top: 10px;
    left: 10px;
  }

  ${Image}:nth-child(2) {
    top: 170px;
    right: 10px;
  }

  ${Image}:nth-child(3) {
    top: 350px;
    left: 50px;
  }

  ${Image}:nth-child(4) {
    bottom: 100px;
    right: 75px;
  }
`;

const Technology = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div style={{ backgroundColor: "#01bf71", paddingTop: "50px" }}>
      <center>
        <h1 style={{ fontSize: "50px", color: "white" }}>Technologies</h1>
      </center>

      <Section>
        <Container>
          <ColumnLeft data-aos="fade-up">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ fontSize: "30px", textAlign: "center" }}
            >
              Here are the technologies we used to develop the system.
            </motion.h1>
            {/* <motion.p
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
            >
              Here are the technologies we used to develop the system.
            </motion.p> */}

            <div
              style={{
                height: "100px",
                width: "100%",
                // border: "1px solid #01BF71",
                //border:"1px solid blueViolet",
                borderRadius: "5px",

                color: "black",
                //boxShadow: "0 60px 60px rgba(56, 125, 255, 0.17)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                  color: "white",
                  fontSize: "30px",
                }}
              >
                <p>○ React Native</p>
                <p>○ Tensorflow</p>
                <p>○ Python</p>
                <p>○ Google Colab</p>
                <p>○ Firebase</p>
                <p>○ Jupyter Notebook</p>
              </div>
              {/* <p style={{ color: "#01BF" }}>Hi, my name is</p>
            <p
              style={{
                marginTop: "10px",
                fontWeight: "600",
                color: "blueViolet",
                fontSize: "35px",
              }}
            >
              W M YASIRU DESHAN
            </p>
            <p style={{ marginTop: "5px", fontWeight: "400", color: "black" }}>
              I am a Final Year Undergraduate at SLIIT🎓
            </p> */}
              {/* <p style={{ marginTop: "5px", fontWeight: "400", color: "black" }}>
              GitHub: https://github.com/Yasiru-Deshan
            </p> */}
              {/* <FontAwesomeIcon icon="fa-brands fa-github" /> */}
            </div>
            {/* <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{
              scale: 0.95,
              backgroundColor: "#67F6E7",
              border: "none",
              color: "#000",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
          >
            Get Started
          </Button> */}
          </ColumnLeft>
          <ColumnRight data-aos="fade-up">
            <Image
              src={PlanetOne}
              alt="planet"
              whileTap={{ scale: 0.9 }}
              drag={true}
              dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 10 } }}
            />
            <Image
              src={PlanetTwo}
              alt="planet"
              whileTap={{ scale: 0.6 }}
              drag={true}
              dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 10 } }}
            />
            <Image
              src={PlanetThree}
              alt="planet"
              whileTap={{ scale: 0.8 }}
              drag={true}
              dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 10 } }}
            />
            <Image
              src={PlanetFour}
              alt="planet"
              whileTap={{ scale: 0.9 }}
              drag={true}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 10 } }}
            />
          </ColumnRight>
        </Container>
      </Section>
    </div>
  );
};

export default Technology;
