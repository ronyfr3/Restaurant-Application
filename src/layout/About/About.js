import React from "react";
import welcome from "../../components/Images/welcome.png";

const About = () => {
  return (
    <div className="about_section">
      <img src={welcome} alt="welcome" />
      <div className="about_info_text">
        <div className="info_paragraph">
          <p>We aim you to provide an exceptional dining experience</p>
          <p>And taste from the Himalayan Region of Nepal</p>
        </div>
        <div className="info_paragraph">
          <p>We pride on the quality and authenticity of our</p>
          <p>Food and Services</p>
        </div>
        <div className="info_paragraph">
          <p>
            We offer various authentic cuisine from the Region of Mount Everest,
          </p>
          <p>Pokhara,Kathmandu.</p>
          <p>As well as mouth watering dishes</p>
          <p>From India that suits all taste of our valued customes</p>
        </div>
        <div className="info_paragraph">
          <p>Our food is prepared to order therefore please</p>
          <p>Let us know if you want any deviation</p>
        </div>
        <div className="info_paragraph">
          <p>Himalayan Dine Nepalese & Indian Restaurent</p>
          <p>Thank You Himalayan Dine Team</p>
        </div>
      </div>
      <div className="info_bottom_paragraph">
        <h2>NOTE:</h2>
        <h3>FOOD ALLERGIES AND INTOLERANCES</h3>
        <small>
          Please speak to the manager about the ingredient in your food when
          placing your order
        </small>
        <p className="thanks">Thank You</p>
      </div>
    </div>
  );
};

export default About;
