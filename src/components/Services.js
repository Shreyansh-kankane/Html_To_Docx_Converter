import React from "react";


const Services = () => {
  return (
    <div>
      <p>&emsp; </p>
      <p>&emsp; </p>
      <p>&emsp; </p>
      <section className="services" id="services">
        <div className="heading">
          <span>Our Services</span>
          <h1>Countless Experiences</h1>
        </div>

        <div className="box-container">
          <div className="box" >
            <i className="fas fa-globe"></i>
            <h3>Worldwide</h3>
            <p>
              Our company believes that access to our services should know no
              bounds. That's why we take immense pride in offering worldwide
              availability.
            </p>
          </div>

          <div className="box" >
            <i className="fas fa-hiking"></i>
            <h3>Adventures</h3>
            <p>
              We believe that life is meant to be lived to the fullest, and
              we'll help you embrace the spirit of exploration and embark on
              thrilling journeys
            </p>
          </div>

          <div className="box" >
            <i className="fas fa-utensils"></i>
            <h3>Food & Drinks</h3>
            <p>
              We understand exceptional food and drinks and create a memorable
              experience, and we take great pride in curating culinary delights.
            </p>
          </div>

        </div>
      </section>
      <p>&emsp; </p>
      <p>&emsp; </p>
      <p>&emsp; </p>
    </div>
  );
};

export default Services;
