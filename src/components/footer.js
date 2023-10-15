import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="footer" id="footer">
        <div className="box-container">
          <div className="box">
            <i className="fas fa-paper-plane"></i>Travel With AI
            <p>
              Clean, fast and secure
            </p>
            <div className="share">
              <a
                href="https://www.facebook.com/rishabh.bhargava.9404?mibextid=ZbWKwL"
                target="_blank"
                className="fab fa-facebook-f"
              ></a>
              <a
                href="https://twitter.com/bhargava_great"
                target="_blank"
                className="fab fa-twitter"
              ></a>
              <a
                href="https://www.instagram.com/reel/CuC1p3TNYi3/?igshid=MzRlODBiNWFlZA=="
                target="_blank"
                className="fab fa-instagram"
              ></a>
              <a
                href="www.linkedin.com/in/rishabh-bhargava-790b871a0"
                target="_blank"
                className="fab fa-linkedin"
              ></a>
            </div>
          </div>

          <div className="box">
            <h3>Contact Info</h3>
            <p>
              <i className="fas fa-map"></i> Chandigarh, India{" "}
            </p>
            <p>
              <i className="fas fa-phone"></i> 630-680-3637{" "}
            </p>
            <p>
              <i className="fas fa-envelope"></i>{" "}
              rishabhbhargava072002@gmail.com{" "}
            </p>
            <p>
              <i className="fas fa-clock"></i> 10:00am - 5:00pm{" "}
            </p>
          </div>

          <div className="box">
            <h3>Newsletters</h3>
            <p>Subscribe for latest updates</p>
            <form action="">
              <input
                type="email"
                name=""
                placeholder="Enter your email"
                className="email"
                id=""
              />
              <input type="submit" value="Subscribe" className="btn" />
            </form>
          </div>
        </div>
      </section>

      <div className="credit">
        Created By <span>Rishabh Bhargava</span> | All rights reserved!
      </div>
    </div>
  );
};

export default Footer;
