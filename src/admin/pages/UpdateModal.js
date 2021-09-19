import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../redux/actions/productActions";

const UpdateModal = ({ ...infoo }) => {
  const { setShow1, id, products } = infoo;
  const filteredProduct = products?.products?.find((x) => x.id === id);
  const [state, setState] = useState({
    restaurant_id: 4,
    category_id: "",
    title: "",
    description: "",
    price: "",
  });
  const selectedProduct = {
    restaurant_id: 4,
    product_id: filteredProduct?.id,
    category_id: state?.category_id,
    title: state?.title,
    description: state?.description,
    price: state?.price,
  };
  console.log(selectedProduct);
  const dispatch = useDispatch();

  const makeProduct = (e) => {
    e.preventDefault();
    dispatch(updateProduct(selectedProduct));
    setTimeout(() => {
      alert("do you want to update?");
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
    setShow1(false);
  };

  return (
    <div className="jagdcvkagdck">
      <div className="LLASDVUH">
        <div className="kjshdcdsh" onClick={deffalse}>
          x
        </div>
        <form onSubmit={makeProduct}>
          <h2>update product</h2>
          <input
            type="text"
            name="category_id"
            value={state.category_id}
            placeholder={`Product Category Id ${filteredProduct?.category_id}`}
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
          <button>update product</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
