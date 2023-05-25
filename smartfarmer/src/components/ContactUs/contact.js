import React from "react";
import './contact.css';
import { Button } from "../ButtonElements";

const Contact = () =>{
    return (
      <div data-aos="fade-up" id="contact" style={{ marginBottom: "50px" }}>
        <center>
          <h1
            style={{ fontSize: "40px", marginBottom: "50px", padding: "20px" }}
          >
            Contact Us
          </h1>
          <div class="container">
            <div class="content">
              <div class="left-side">
                <div class="address details">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="topic">Address</div>
                  <div class="text-one">
                    No. 40, New Kandy Road, Malabe, Sri Lanka
                  </div>
                </div>
                <div class="phone details">
                  <i class="fas fa-phone-alt"></i>
                  <div class="topic">Phone</div>
                  <div class="text-one">+941234567</div>
                  <div class="text-two">+0096 3434 5678</div>
                </div>
                <div class="email details">
                  <i class="fas fa-envelope"></i>
                  <div class="topic">Email</div>
                  <div class="text-one">abcd@gmail.com</div>
                
                </div>
              </div>
              <div class="right-side">
                <div class="topic-text">
                  Hey there, Let's talk about Our project
                </div>
                {/* <p>
                  If you have any work from me or any types of quries related to
                  my tutorial, you can send me message from here. It's my
                  pleasure to help you.
                </p> */}
                <form action="#">
                  <div class="input-box">
                    <input type="text" placeholder="Enter your name" />
                  </div>
                  <div class="input-box">
                    <input type="text" placeholder="Enter your email" />
                  </div>
                  <div class="input-box message-box">
                    <input type="text" placeholder="Enter your Message" />
                  </div>
                  <div class="button">
                    {/* <input type="button" value="Send Now" /> */}
                    <Button>Send Now</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </center>
      </div>
    );
}

export default Contact;