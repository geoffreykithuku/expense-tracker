import { createContext, useState } from "react";

const initialTransactions = [
];


export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [type, setType] = useState("all");


  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const handleDelete = (id) => {
    const newTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
      
    setTransactions(newTransactions);
  };

  //calculate income using category === income
  const incomeAmounts = transactions
    .filter((transaction) => transaction.category === "income")
    .map((transaction) => transaction.amount);
  const income =
    incomeAmounts.length > 0
      ? incomeAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
      : "0.00";

  //calculate expenses using category === expense
  const expenseAmounts = transactions
    .filter((transaction) => transaction.category === "expense")
    .map((transaction) => transaction.amount);
  const expense =
    expenseAmounts.length > 0
      ? expenseAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
      : "0.00";
  //calculate total
  const total = Number(income - expense).toFixed(2);

  return (
    <ExpenseContext.Provider
      value={{
        transactions,
        setTransactions,
        type,
        setType,
        handleDelete,
        addTransaction,

        expense,
        income,
        total,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
