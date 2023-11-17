import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

import TransactionItem from "./TransactionItem";

const TransactionsList = () => {
  // get transactions from context
  const { transactions, type, handleDelete } = useContext(ExpenseContext);

  // if type = all, display all transactions, it type = income, display only income transactions, if type = expense, display only expense transactions

  const filteredTransactions = transactions.filter((transaction) => {
    if (type === "all") {
      return transaction;
    } else if (type === "income") {
      return transaction.category === "income";
    } else if (type === "expense") {
      return transaction.category === "expense";
    }
  });

  return (
    <div className="p-5 border w-full mx-auto">
      <h2 className="font-semibold text-base mb-5 text-[#8b8787]">
        Your recent transactions
      </h2>
      <div className="w-full">
        <table className="table-auto w-full text-left">
          <thead className=" text-[#c17eff]">
            <tr className="">
              <th>Name</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="">
            {filteredTransactions && filteredTransactions.length > 0 ? (
              filteredTransactions.map((transaction) => {
                return (
                  <TransactionItem
                    key={transaction.id}
                    transaction={transaction}
                    handleDelete={handleDelete}
                  />
                );
              })
            ) : (
              <tr className="text-[#353333] border-b border-[#f5f2f7] my-1">
                {type === "all" ? (
                  <td className="text-sm py-3 text-[#e75e5e]" colSpan="4">
                    No transaction has been added yet.
                  </td>
                ) : (
                  <td colSpan="4" className="text-sm py-3 text-[#e75e5e]">
                    No {type} has been added yet.
                  </td>
                )}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsList;
