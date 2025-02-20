// add event listener for calculate button 
const calculateButton = document.getElementById('calculate').addEventListener('click',function(){
const income = parseFloat(document.getElementById('income').value);
const software = parseFloat(document.getElementById('software').value);
const courses = parseFloat(document.getElementById('courses').value);
const internet = parseFloat(document.getElementById('internet').value);

const totalExpenses = software + courses + internet;
const balance = income - totalExpenses;

const totalExpensesElement = document.getElementById('total-expenses');
totalExpensesElement.innerText = totalExpenses.toFixed(2);

const balanceElement = document.getElementById('balance');
balanceElement.innerText = balance.toFixed(2);

document.getElementById('results').classList.remove('hidden');
document.getElementById('history-section').classList.remove('hidden');

// History List style.......
const div = document.createElement('div');
div.className = 'bg-white border-l-2 rounded-md border-indigo-500 p-3';
div.innerHTML = `
<p class= "text-gray-500 text-xs">${new Date().toLocaleDateString()}</p>
<p class= "text-gray-500 text-xs font-bold">Income: $ ${income.toFixed(2)}</p>
<p class= "text-gray-500 text-xs font-bold">Total Expenses: $ ${totalExpenses.toFixed(2)}</p>
<p class= "text-gray-500 text-xs font-bold">Balance: $ ${balance.toFixed(2)}</p>
`;
const historycontainer = document.getElementById('history-list');
historycontainer.insertBefore(div,historycontainer.firstChild);
});

// add event listener for saving button 
const calculateSavingsButton = document.getElementById('calculate-savings').addEventListener('click',function(){
const income = parseFloat(document.getElementById('income').value);
const software = parseFloat(document.getElementById('software').value);
const courses = parseFloat(document.getElementById('courses').value);
const internet = parseFloat(document.getElementById('internet').value);
const savings = parseFloat(document.getElementById('savings').value);

const totalExpenses = software + courses + internet;
const balance = income - totalExpenses;
const savingsAmount = balance / 100 * savings;

const savingsAmountElement = document.getElementById('savings-amount');
savingsAmountElement.innerText = savingsAmount.toFixed(2);

const remaining = balance - savingsAmount;

const remainingBalanceElement = document.getElementById('remaining-balance');
remainingBalanceElement.innerText = remaining.toFixed(2);

document.getElementById('results').classList.remove('hidden');
document.getElementById('history-section').classList.remove('hidden');
});

// Assistant Button Toggle style 
const assistantButton = document.getElementById('assistant-tab');
const assistantSection = document.getElementById('assistant-section');
assistantButton.addEventListener('click',function(){
document.getElementById('history-section').classList.add('hidden');
document.getElementById('expense-form');
document.getElementById('expense-form').classList.remove('hidden');
document.getElementById('results').classList.add('hidden'); 
assistantButton.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600','font-samibold','rounded-md');
historyButton.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500','to-purple-600');
historyButton.classList.add('text-gray-600');
})

// History Button Toggle style 
const historyButton = document.getElementById('history-tab');
const historySection = document.getElementById('history-section');
const expenseForm = document.getElementById('expense-form');
historyButton.addEventListener('click', function() {  
historyButton.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600','font-samibold','rounded-md');
assistantButton.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
assistantButton.classList.add('text-gray-600')
historySection.classList.remove('hidden');
expenseForm.classList.add('hidden');
});

const getResultsValue = document.getElementById('results').addEventListener('click',function(){
  // const resultsValue = document.getElementById('results');
  // const addedHistorySection = document.getElementById('history-section').innerText = resultsValue;

  // const div = document.createElement('div');
  // div.innerHTML = `<h6>Income:${income}</h6> <br> <p>Expenses: ${totalExpenses}</p> <br> <p>Balance:${balance}</p>
  // `;
  // document.getElementById('history-section').append(div);
})