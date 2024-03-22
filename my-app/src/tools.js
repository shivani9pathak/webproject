let totalIncome = 0;
let totalExpenses = 0;

function addIncome() {
    const incomeList = document.getElementById("incomeList");
    
    const incomeItem = document.createElement("li");
    incomeItem.innerHTML = `
        <input type="text" placeholder="Enter Income Source">  <input type="number" placeholder="Amount" onchange="updateTotalIncome(this)">
    `;
    
    incomeList.appendChild(incomeItem);
}

function addExpense() {
    const expenseList = document.getElementById("expenseList");
    
    const expenseItem = document.createElement("li");
    expenseItem.innerHTML = `
        <input type="text" placeholder="Enter Expense Category"> <input type="number" placeholder="Amount" onchange="updateTotalExpenses(this)">
    `;
    
    expenseList.appendChild(expenseItem);
}

function updateTotalIncome(inputElement) {
    const amount = parseFloat(inputElement.value);
    
    if (!isNaN(amount)) {
        totalIncome += amount;
        document.getElementById("incomeValue").textContent = totalIncome.toFixed(2);
        updateBalance();
    }
}

function updateTotalExpenses(inputElement) {
    const amount = parseFloat(inputElement.value);
    
    if (!isNaN(amount)) {
        totalExpenses += amount;
        document.getElementById("expenseValue").textContent = totalExpenses.toFixed(2);
        updateBalance();
    }
}

function updateBalance() {
    const balance = totalIncome - totalExpenses;
    document.getElementById("balanceValue").textContent = balance.toFixed(2);
}