import React from "react";

const TransactionsList = () => {
  return (
    <div className="p-5 border w-full mx-auto">
      <h2 className="font-semibold text-base mb-5 text-[#8b8787]">Your recent transactions</h2>
      <div className="w-full">
        <table className="table-auto w-full text-left">
          <thead className=" text-[#ab45ff]">
            <tr className="">
              <th>Name</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Salary</td>
              <td>$5000</td>
              <td>12-12-2000</td>
              <td>Income</td>
              <td>Delete</td>
            </tr>
            <tr>
              <td>Water Bill</td>
              <td>$50</td>
              <td>12-12-2000</td>
              <td>Expense</td>
              <td>Delete</td>
            </tr>
            <tr>
              <td>Electricity Bill</td>
              <td>$100</td>
              <td>12-12-2000</td>
              <td>Expense</td>
              <td>Delete</td>
            </tr>
            <tr>
              <td>Internet Bill</td>
              <td>$50</td>
              <td>12-12-2000</td>
              <td>Expense</td>
              <td>Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsList;
