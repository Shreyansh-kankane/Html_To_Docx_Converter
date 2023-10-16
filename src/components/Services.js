import React from "react";


const Services = () => {
  return (
    <div>
      <section className="services" id="services">
        <div className="heading">
          <span>Our Services</span>
          <h1>Countless Experiences</h1>
        </div>

        <div className="box-container">
          <div className="box" >
            <i className="fa-regular fa-lightbulb"></i>
            <h3>Quick Conversion Without Email</h3>
            <p>
            With just a simple drag and drop, convert a PDF to Microsoft Word format in seconds. Free to use—no watermarks and no email registration required.
            </p>
          </div>

          <div className="box" >
            <i className="fa-solid fa-shield"></i>
            <h3>Safe Document Processing</h3>
            <p>
            We care about file privacy. All files will be deleted from our servers after one hour. Learn more about the privacy of your documents here.
            </p>
          </div>

          <div className="box" >
            <i className="fa-regular fa-thumbs-up"></i>
            <h3>Convert on Any Operating System</h3>
            <p>
            Our PDF converter works on all computers and operating systems including Mac, Windows, and Linux.
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
