import React, { useState } from 'react';

function BudgetCalculator() {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);

  const calculateSavings = () => {
    return income - expenses;
  };

  return (
    <div className="calculator">
      <h2>Budget Calculator</h2>
      <label htmlFor="income">Income:</label>
      <input type="number" id="income" value={income} onChange={(e) => setIncome(e.target.value)} />
      <label htmlFor="expenses">Expenses:</label>
      <input type="number" id="expenses" value={expenses} onChange={(e) => setExpenses(e.target.value)} />
      <button onClick={calculateSavings}>Calculate Savings</button>
      <p>Your Savings: {calculateSavings()}</p>
    </div>
  );
}

export default BudgetCalculator;