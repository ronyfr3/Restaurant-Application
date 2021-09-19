import React from "react";
import LayoutOfMenu from "../LayoutOfMenu";
const Starters = ({ funcName, category }) => {
  return (
    <div>
      <LayoutOfMenu funcName={funcName} category={category} />
    </div>
  );
};
export default Starters;
