import React, { useState } from "react";
import bookImage from "../../components/Images/bookImage.jpg";
import onlineOrder from "../../components/Images/onlineOrder.jpg";
import { useHistory } from "react-router-dom";
import himalayanLogo from "../../components/Images/himalayanLogo.png";
import Bookmodal from "./Bookmodal";

const HomeSection = () => {
  const [modal, setModal] = useState(false);
  const history = useHistory();
  const goToMenu = () => {
    history.push("/menu");
  };

  return (
    <div className="homeSec_wrapper">
      <div className="himalayanLogo">
        <img src={himalayanLogo} alt="himalayan" />
        <p>Authentic Nepalese</p>
        <p>&</p>
        <p>Indian Cuisine</p>
      </div>

      {/* card */}
      <div className="card_wrapper">
        <div className="card">
          <div className="info">
            <img src={bookImage} alt="booktable" />
            <div className="bookatable_content">
              <h2>Book A Table</h2>
              <p>
                Make sure not to miss some of our amazing dishes, we prepare our
                food with fresh and tasty ingredients that you don’t want to
                miss.
              </p>
              <button
                className="home_btn_design"
                onClick={() => setModal(true)}
              >
                Book Now
              </button>
              {modal && <Bookmodal setModal={setModal} />}
            </div>
          </div>
        </div>
        {/*  */}
        {/* card2 */}
        <div className="card">
          <div className="gradient2"></div>
          <div className="info">
            <img src={onlineOrder} alt="booktable" />
            <div className="bookatable_content">
              <h2>The Art Of Cooking</h2>
              <p>
                Make sure not to miss some of our amazing dishes, we prepare our
                food with fresh and tasty ingredients that you don’t want to
                miss.
              </p>
              <button onClick={goToMenu} className="home_btn_design1">
                Order online now
              </button>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default HomeSection;
