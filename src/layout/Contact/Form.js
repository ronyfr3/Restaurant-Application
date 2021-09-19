import React, { useState } from "react";
const Form = () => {
  const [inV, setInv] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInv({
      ...inV,
      [name]: value,
    });
  };
  return (
    <div className="form_wrapper">
      <h1 className="form_header_h1">What can i do for you?</h1>
      <form className="form">
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={inV.name}
        />
        <br />
        <label htmlFor="phone">Phone</label>
        <br />
        <input
          type="text"
          name="phone"
          onChange={handleChange}
          value={inV.phone}
        />
        <br />
        <label htmlFor="message">Message</label>
        <br />
        <input
          type="textarea"
          name="message"
          onChange={handleChange}
          value={inV.message}
        />
        <br />
        <button className="form_btn">Send Us</button>
      </form>
    </div>
  );
};

export default Form;
