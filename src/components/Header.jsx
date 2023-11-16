import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full mx-auto gap-5  my-10  p-2 border font-semibold rounded bg-[#ab45ff] text-white bg-opacity-70">
      <h1 className="flex-shrink-0">ExpenseTracker</h1>

      <ul className="flex flex-col xs:flex-row gap-5 justify-between items-center w-full max-w-[350px] px-5 ">
        <li>Income</li>
        <li>Expenses</li>
        <li>New</li>
      </ul>
    </div>
  );
}

export default Header