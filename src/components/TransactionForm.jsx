import React from 'react'

const TransactionForm = () => {
  return (
    <div className="p-5 shadow mx-auto mb-5">
      <h2 className="font-semibold text-base mb-5 text-[#8b8787]">
        Add new transaction
      </h2>
      <form className='grid grid-cols-1 xs:grid-cols-3 gap-5 w-full'> 
        <div className='w-full'>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className='w-full'/>
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" className='w-full' />
        </div>
        
        <div>
          <label htmlFor="type">Type</label>
          <select id="type" className='w-full'>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div>
          <button className='shadow-sm px-4 py-1' type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}

export default TransactionForm