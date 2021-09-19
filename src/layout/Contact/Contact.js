import React from "react";
import Map from "./Map";
import { FaPhoneAlt } from "react-icons/fa";
import Form from "./Form";

const Contact = () => {
  return (
    <div className="contact_wrapperr">
      <div className="contact_content">
        <div className="visit_content">
          <h1 className="contact_h1">Visit US</h1>
          <p className="contact_pnum">
            <FaPhoneAlt className="faphnalt" /> 01418813870
          </p>
          <p className="contact_ploc">
            {" "}
            232A Main St, Barrhead
            <br />
            <br />
            Glasgow G78 1SN, UK
          </p>
        </div>
        <div className="opening_content">
          <h1 className="opening_content_h1">opening</h1>
          <h3 className="opening_content_h3">Tuesday - sunday</h3>
          <small className="opening_content_small">4.00pm - 10.00pm</small>
          <h3 className="opening_content_h3">Monday</h3>
          <small className="opening_content_small">Closed</small>
        </div>
      </div>
      <Form />
      <Map />
    </div>
  );
};

export default Contact;
