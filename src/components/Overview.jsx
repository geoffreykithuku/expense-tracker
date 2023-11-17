import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
const Overview = () => {
  const { total, expense, income } = useContext(ExpenseContext);
  return (
    <div className="mx-auto grid xs:grid-cols-3 grid-cols-2 my-5  gap-5 ">
      <span className="shadow px-5 py-3">
        <h3 className="text-lg">Balance:</h3>
        <h4 className="font-semibold text-base text-[#6114a0]">Ksh. {total}</h4>
      </span>

      <span className="shadow px-5 py-3 ">
        <h3>Income:</h3>
        <h4 className="font-semibold text-base text-[#6114a0]">Ksh. {income}</h4>
      </span>
      <span className="shadow px-5 py-3 ">
        <h3>Expenses:</h3>
        <h4 className="font-semibold text-base text-[#6114a0]">Ksh. {expense}</h4>
      </span>
    </div>
  );
};

export default Overview;
