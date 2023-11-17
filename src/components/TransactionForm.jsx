import React, { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { useNavigate } from "react-router-dom";

const TransactionForm = () => {
  const navigate = useNavigate();
  const { addTransaction, transactions } = useContext(ExpenseContext);

  const [name, setName] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [type, setType] = React.useState("income");

  //handle validation errors
  const [formErrors, setFormErrors] = useState({});
  const validate = (name, amount) => {
    let errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
      if (!amount) {
      errors.amount = "Amount is required";
    }
   

    setFormErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(name, amount);
    if (name && amount) {
      const transaction = {
        id: transactions.length + 1,
        name,
        amount,
        category: type,
      };

      addTransaction(transaction);
      navigate("/");
    }
  };

  return (
    <div className="p-5 shadow mx-auto mb-5">
      <h2 className="font-semibold text-base mb-5 text-[#8b8787]">
        Add new transaction
      </h2>
      {
        // Display errors
        Object.keys(formErrors).map((error, index) => (
          <div key={index} className="text-red-500">
            {formErrors[error]}
          </div>
        ))
      }
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 xs:grid-cols-3 gap-5 w-full text-[#353333]"
      >
        <div className="w-full">
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            className="w-full bg-[#a69eac] rounded py-1 bg-opacity-20 outline-none px-3 text-[#7f7291]"
            
          />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            onChange={(e) => setAmount(+e.target.value)}
            type="number"
            id="amount"
            className="w-full bg-[#a69eac] rounded py-1 bg-opacity-20 outline-none px-3 text-[#7f7291]"
            min='1'

          />
        </div>

        <div>
          <label htmlFor="type">Type</label>
          <select
            onChange={(e) => setType(e.target.value)}
            id="type"
            className="w-full bg-[#a69eac] rounded py-1 bg-opacity-20 outline-none px-3 text-[#7f7291]"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div>
          <button
            className="shadow-sm px-4 py-1 bg-[#ab45ff] text-white rounded"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
