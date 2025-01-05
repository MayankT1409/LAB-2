const { addExpense,fetchExpenseReport,filterByDateRange, totalExpenses} = require("./task2");

addExpense("Lunch",500,new Date('2025-01-01'))
addExpense("Dinner",1500,new Date('2025-01-02'))
addExpense("Groceries",150,new Date('2024-12-31'))


console.log("Total Expense : ",totalExpenses())

const filteredExpenses = filterByDateRange(new Date('2024-12-31'), new Date('2025-01-02'));
console.log('Filtered Expenses:', filteredExpenses);


fetchExpenseReport()
.then(console.log)
.catch(console.error)