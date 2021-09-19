import React from "react";
import LayoutOfMenu from "../LayoutOfMenu";
const Vegetar = ({ funcName, category }) => {
  return (
    <div>
      <LayoutOfMenu funcName={funcName} category={category} />
    </div>
  );
};

export default Vegetar;
