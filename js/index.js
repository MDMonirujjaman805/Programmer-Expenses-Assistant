// Global Variabel............
let count = 0;
const historyButton = document.getElementById('history-tab');
const historySection = document.getElementById('history-section');
const expenseForm = document.getElementById('expense-form');
const assistantButton = document.getElementById('assistant-tab');
const assistantSection = document.getElementById('assistant-section');

// add event listener for Calculate button 
const calculateButton = document.getElementById('calculate').addEventListener('click',function(){

  const income = parseFloat(document.getElementById('income').value);
  const software = parseFloat(document.getElementById('software').value);
  const courses = parseFloat(document.getElementById('courses').value);
  const internet = parseFloat(document.getElementById('internet').value);

  if(income <= 0 || isNaN(income)){
    document.getElementById('income-error').classList.remove('hidden');
    return;
  };
  if(software <= 0 || isNaN(software)){
    document.getElementById('software-error').classList.remove('hidden');
    return;
  };
  if(courses <= 0 || isNaN(courses)){
    document.getElementById('courses-error').classList.remove('hidden');
    return;
  };
  if(internet <= 0 || isNaN(internet)){
    document.getElementById('internet-error').classList.remove('hidden');
    return;
  };

  const totalExpenses = software + courses + internet;
  const balance = income - totalExpenses;

  if(totalExpenses > income){
    document.getElementById('logic-error').classList.remove('hidden');
    return;
  };
  
  const totalExpensesElement = document.getElementById('total-expenses');
  totalExpensesElement.innerText = totalExpenses.toFixed(2);
  
  const balanceElement = document.getElementById('balance');
  balanceElement.innerText = balance.toFixed(2);
  
  document.getElementById('results').classList.remove('hidden');
  
  // History List style.......
  count += 1;
  const div = document.createElement('div');
  div.className = 'bg-white border-l-2 rounded-md border-indigo-500 p-3';
  div.innerHTML = `
  <p class= "text-gray-500 text-xs">Sireal:${count}</p>
  <p class= "text-gray-500 text-xs">${new Date().toLocaleDateString()}</p>
  <p class= "text-gray-500 text-xs font-bold">Income: $ ${income.toFixed(2)}</p>
  <p class= "text-gray-500 text-xs font-bold">Total Expenses: $ ${totalExpenses.toFixed(2)}</p>
  <p class= "text-gray-500 text-xs font-bold">Balance: $ ${balance.toFixed(2)}</p>
  `;
  const historycontainer = document.getElementById('history-list');
  historycontainer.insertBefore(div,historycontainer.firstChild);
  historySection.classList.remove('hidden');
});

// add event listener for Calculate saving button 
const calculateSavingsButton = document.getElementById('calculate-savings').addEventListener('click',function(){
  const income = parseFloat(document.getElementById('income').value);
  const software = parseFloat(document.getElementById('software').value);
  const courses = parseFloat(document.getElementById('courses').value);
  const internet = parseFloat(document.getElementById('internet').value);
  const savings = parseFloat(document.getElementById('savings').value);

  if(savings <= 0 || isNaN(savings)){
    document.getElementById('savings-error').classList.remove('hidden')
    return;
  };
  
  const totalExpenses = software + courses + internet;
  const balance = income - totalExpenses;
  const savingsAmount = balance / 100 * savings;

  if(totalExpenses > income){
    document.getElementById('logic-error').classList.remove('hidden');
    return;
  };
  
  const savingsAmountElement = document.getElementById('savings-amount');
  savingsAmountElement.innerText = savingsAmount.toFixed(2);
  
  const remaining = balance - savingsAmount;
  
  const remainingBalanceElement = document.getElementById('remaining-balance');
  remainingBalanceElement.innerText = remaining.toFixed(2);
  
  document.getElementById('results').classList.remove('hidden');
  document.getElementById('history-section').classList.add('hidden');
});

// Assistant Button Toggle style 
assistantButton.addEventListener('click',function(){
  document.getElementById('history-section').classList.add('hidden');
  document.getElementById('expense-form');
  document.getElementById('expense-form').classList.remove('hidden');
  document.getElementById('results').classList.add('hidden'); 
  assistantButton.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600','font-samibold','rounded-md');
  historyButton.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500','to-purple-600');
  historyButton.classList.add('text-gray-600');
});

// History Button Toggle style 
historyButton.addEventListener('click', function() {  
  historyButton.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600','font-samibold','rounded-md');
  assistantButton.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
  assistantButton.classList.add('text-gray-600')
  expenseForm.classList.add('hidden');
});

// live Valadation system............ Its varey varey Important............
// document.getElementById('income').addEventListener('input',function(){
//   const inputValue = parseFloat(document.getElementById('income').value);
//   if(isNaN(inputValue) || income <= 0){
//     document.getElementById('income-error').classList.remove('hidden');
//     return;
//   }
//   console.log(inputValue);
// });