import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { booktable } from "../../redux/actions/productActions";
const Bookmodal = ({ ...arg }) => {
  const { setModal } = arg;
  const [state, setState] = useState({
    restaurant_id: 4,
    name: "",
    number_of_guests: "",
    requested_time: "",
    requested_date: "",
    special_requirements: "",
    phone: "",
    email: "",
  });
  console.log(state);
  const dispatch = useDispatch();

  const makeProduct = (e) => {
    e.preventDefault();
    dispatch(booktable(state));
  };
  const handleChage = (e) => {
    const { value, name } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const deffalse = () => {
    setModal(false);
  };

  return (
    <div className="sdvsdvsb">
      <div className="airrij">
        <div className="closeajas" onClick={deffalse}>
          x
        </div>
        <form onSubmit={makeProduct}>
          <h2>Reservation</h2>
          <input
            type="text"
            name="name"
            value={state.name}
            placeholder="Name"
            onChange={handleChage}
            required
          />
          <input
            type="number"
            name="number_of_guests"
            value={state.number_of_guests}
            placeholder="Number of guest"
            onChange={handleChage}
            required
          />
          <input
            type="time"
            name="requested_time"
            value={state.requested_time}
            placeholder="Requested Time"
            onChange={handleChage}
            required
          />
          <input
            type="date"
            name="requested_date"
            value={state.requested_date}
            placeholder="Requested Time"
            onChange={handleChage}
            required
          />
          <input
            type="text"
            name="special_requirements"
            value={state.special_requirements}
            placeholder="Special Requirements"
            onChange={handleChage}
          />
          <input
            type="text"
            name="phone"
            value={state.phone}
            placeholder="phone"
            onChange={handleChage}
            required
          />
          <input
            type="text"
            name="email"
            value={state.email}
            placeholder="email"
            onChange={handleChage}
            required
          />
          <button>Submit Reservation</button>
        </form>
      </div>
    </div>
  );
};

export default Bookmodal;
