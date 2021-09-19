import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../redux/actions/productActions";

const CreateModal = ({ ...infoo }) => {
  const { setShow } = infoo;
  const [state, setState] = useState({
    restaurant_id: 4,
    category_id: "",
    title: "",
    description: "",
    price: "",
  });
  const dispatch = useDispatch();

  const makeProduct = (e) => {
    e.preventDefault();
    dispatch(createProduct(state));
    setTimeout(() => {
      alert("do you want to create?");
      window.location.reload();
    });
  };
  const handleChage = (e) => {
    const { value, name } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const deffalse = () => {
    setShow(false);
  };

  return (
    <div className="sdvsdvsb">
      <div className="airrij">
        <div className="closeajas" onClick={deffalse}>
          x
        </div>
        <form onSubmit={makeProduct}>
          <h2>Create product</h2>
          <input
            type="text"
            name="category_id"
            value={state.category_id}
            placeholder="Product Category Id"
            onChange={handleChage}
          />
          <input
            type="text"
            name="title"
            value={state.title}
            placeholder="Product Title"
            onChange={handleChage}
          />
          <input
            type="text"
            name="description"
            value={state.description}
            placeholder="Product Description"
            onChange={handleChage}
          />
          <input
            type="text"
            name="price"
            value={state.price}
            placeholder="Product Price"
            onChange={handleChage}
          />
          <button>Create product</button>
        </form>
      </div>
    </div>
  );
};

export default CreateModal;
