import React, { useState } from "react";
import Modal from "./Modal";

const LayoutOfMenu = ({ funcName, category }) => {
  const [show, setShow] = useState(false);
  const [modalItem, setModalItem] = useState();

  // GRAB ID SPECIIC ITEM, SEND TO THE MODAL
  const modal = (id) => {
    const findThatId = funcName.find((x) => x.id === id);
    setModalItem(findThatId);
    setShow(true);
  };

  return (
    <div className="lMenu">
      <h2 className={`goToMenus ${category}`} id="sduhdbu">
        {category}
      </h2>
      {funcName?.map((x) => {
        const { description, id, price, title, has_options } = x;
        return (
          <div key={id} className="lMenu_items">
            <div className="titdes " onClick={() => modal(id)}>
              <b>{title}</b>
              <small>{description}</small>
              <p className="price">£{price}</p>
            </div>
            {show && id === modalItem.id ? (
              <Modal
                modalItem={modalItem}
                show={show}
                setShow={setShow}
                category={category}
                has_options={has_options}
              />
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LayoutOfMenu;
