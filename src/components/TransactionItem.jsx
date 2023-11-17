import React from 'react'
import { XCircle } from "lucide-react";

const TransactionItem = ({transaction , handleDelete}) => {
  return (
    <tr key={transaction.id} className="text-[#353333] border-b border-[#f5f2f7] my-1">
      <td>{transaction.name}</td>
      <td>{transaction.amount} /=</td>

      <td>{transaction.category}</td>
      <td className="flex items-center px-4 ">
        <XCircle
          onClick={() => handleDelete(transaction.id)}
          className="cursor-pointer"
          size={20}
        />
      </td>
    </tr>
  );
}

export default TransactionItem