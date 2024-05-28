import React from "react";
import "./Contact.css";
import Facebook from "../../components/footer/facebook.png";

function contact() {
  return (
    <section className="contact">
      <div className="contactList">
        <h2 className="contactTitle">Contact Us</h2>
        <div className="infoLinks">
          <h3 className="infoHeader">Redex Agro Vet</h3>
          <span className="infoDetails">+8801*****7869</span>
          <span className="infoDetails"> 123 street, Azimpur, Uttara. </span>
          <span className="infoDetails"> Dhaka, Bangladesh</span>
          <a
            className="fblogo"
            href="www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Facebook} alt="Facebook" class="fbLink" />
          </a>
        </div>
        <p className="contactDesc">
          Fill out the form below to discuss any work opportunities.
        </p>
        {/* <form className="contactForm" ref={form} onSubmit={sendEmail}> */}
        <form className="contactForm">
          <input
            type="text"
            className="name"
            placeholder="Your name"
            name="from_name"
            // onChange={handleInputChange}
          />
          <input
            type="email"
            className="email"
            placeholder="Your email"
            name="your_email"
            // onChange={handleInputChange}
          />
          <textarea
            name="message"
            className="msg"
            rows="4"
            placeholder="Your message"
            // onChange={handleInputChange}
          />
          {/* <button
            type="submit"
            value="Send"
            className="submitBtn"
            // disabled={!isFormValid}
          >
            SUBMIT
          </button> */}
        </form>
        <button
          type="submit"
          value="Send"
          className="submitBtn"
          // disabled={!isFormValid}
        >
          SUBMIT
        </button>
      </div>
      <div className="mapLocation">
        <iframe
          title="Redex Agro Vet Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12632.532384378095!2d90.39852855341887!3d23.862742012290862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c428a8551d1d%3A0xd999099c31b9b1e!2sSector%204%2C%20Dhaka%201230!5e0!3m2!1sen!2sbd!4v1716903085357!5m2!1sen!2sbd"
          width="500"
          height="480"
          // style="border:0;"
          // allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default contact;
