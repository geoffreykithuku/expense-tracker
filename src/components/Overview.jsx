import React from "react";

const Overview = () => {
  return (
    <div className="mx-auto grid xs:grid-cols-3 grid-cols-2 my-5  gap-5 ">
      <span className="shadow px-5 py-3">
        <h3>Balance:</h3>
        <h4>$0.00</h4>
      </span>

      <span className="shadow px-5 py-3 ">
        <h3>Income</h3>
        <h4>$0.00</h4>
      </span>
      <span className="shadow px-5 py-3 ">
        <h3>Expense</h3>
        <h4>$0.00</h4>
      </span>
    </div>
  );
};

export default Overview;
