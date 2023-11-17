import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ExpenseContext } from "../context/ExpenseContext";
const Header = () => {
  const navigate = useNavigate();
  const { setType } = useContext(ExpenseContext);
  const handleIncome = () => {
    navigate("/");
    setType("income");
  };

  const handleExpense = () => {
    navigate("/");
    setType("expense");
  };

  const handleAll = () => {
    navigate("/");
    setType("all");
  };

  return (
    <div className="flex flex-col xs:flex-row justify-between items-center w-full mx-auto gap-5  my-10  p-2 border font-semibold rounded bg-[#ab45ff] text-white bg-opacity-70">
      <Link to="/" className="flex-shrink-0">
        ExpenseTracker
      </Link>

      <ul className="flex flex-col xs:flex-row gap-5 justify-between items-center w-full max-w-[350px] px-5 flex-wrap ">
        <li onClick={handleAll} className="cursor-pointer ">
          All
        </li>
        <li onClick={handleIncome} className="cursor-pointer ">
          Income
        </li>
        <li onClick={handleExpense} className="cursor-pointer ">
          Expenses
        </li>
        <li className="cursor-pointer ">
          <Link to="/transactions/new">Add</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
