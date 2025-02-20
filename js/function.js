// function getInputFieldById(id){
//   const inputValue = document.getElementById(id).value;
//   const inputValueParseFloat = parseFloat(inputValue);
//   return inputValueParseFloat;
// }
// function getSpanSectionById(id){
//   const spanValue = document.getElementById(id).innerText;
//   const spanValueParseFloat = parseFloat(spanValue);
//   return spanValueParseFloat;
// }
// function getShowSectionFieldById (id){
// const showResults = document.getElementById(id).classList.remove('hidden');
// return showResults;
// }
// function getHideSectionFieldById (id){
// const hideValue = document.getElementById(id).classList.add('hidden');
// return hideValue;
// }

// document.getElementById('assistant-tab').addEventListener('click',function(){
//   console.log('Assistant button clicked');
// })
// document.getElementById('history-tab').addEventListener('click',function(){
// })

// document.getElementById('results').addEventListener('click',function(){
  
// })

// // Calculate amount.............
// document.getElementById('calculate').addEventListener('click',function(){
//   const incomeValue = getInputFieldById('income');
//   const softwareValue = getInputFieldById('software');
//   const coursesValue = getInputFieldById('courses');
//   const internetValue = getInputFieldById('internet');
//   const totalExpenses = softwareValue + coursesValue + internetValue;
//   const calculateValue = incomeValue - totalExpenses;
//   const showResults = getShowSectionFieldById('results');
//   const hideValue = getHideSectionFieldById('total-expenses');
//   console.log(hideValue);
//   document.getElementById('total-expenses').innerHTML = showResults;
//   const removeDfualtValueinSpan = getSpanSectionById("total-expenses");
//   console.log(removeDfualtValueinSpan);
//   console.log(typeof removeDfualtValueinSpan);
//   // const spanValue = getSpanSectionById('total-expenses');
//   // console.log(spanValue);
//   // document.getElementById('total-expenses').append(totalExpenses)
//   // console.log(showResults);
//   console.log(calculateValue);
// })

// // Calculate  percentage...........
// document.getElementById('calculate-savings').addEventListener('click',function(){
//   const incomeValue = getInputFieldById('income');
//   const softwareValue = getInputFieldById('software');
//   const coursesValue = getInputFieldById('courses');
//   const internetValue = getInputFieldById('internet');
//   const totalExpenses = softwareValue + coursesValue + internetValue;
//   const savingsValue = getInputFieldById('savings')
//   const remaining = incomeValue - totalExpenses;
//   const savings = (remaining * savingsValue) / 100;
//   console.log(savings);
// })
// // document.getElementById('calculate-savings').addEventListener('click',function(){
//   // const savingsValue = getInputFieldById('savings')
//   // const savingsValue2 = calculateValue / savingsValue;
//   // const finalSavingsValue = savingsValue2 * 10;
//   // console.log(finalSavingsValue);
//   // console.log('Calculate savings button clicked');
// // })

// // document.getElementById('calculate').addEventListener('click',function(){
// //   const softwareValue = getInputFieldById('software');
// //   console.log(softwareValue);
// // })
// // document.getElementById('calculate').addEventListener('click',function(){
// //   const coursesValue = getInputFieldById('courses')
// //   console.log(coursesValue);
// // })
// // document.getElementById('calculate').addEventListener('click',function(){
// //   const internetValue = getInputFieldById('internet');
// //   console.log(internetValue);
// // })

// // // document.getElementById('calculate-savings').addEventListener('click',function(){
// // //   const calculateValue = getInputFieldById('software' + 'courses' + 'internet');
// // //   console.log(calculateValue);
// // // })

function getInputFieldValueById (id){
  return parseFloat(document.getElementById(id).value);
};
function showError(id){
  document.getElementById(id).classList.remove('hidden');
};

const calculateButton = document.getElementById('calculate').addEventListener('click',function(){
  const income = getInputFieldValueById('income');
  const software = getInputFieldValueById('software');
  const courses = getInputFieldValueById('courses');
  const internet = getInputFieldValueById('internet');
  // console.table({income,software,courses,internet})

  if(income <= 0 || isNaN(income)){
    showError('income-error');
    return;
  };
  if(software <= 0 || isNaN(software)){
    showError('software-error');
    return;
  };
  if(courses <= 0 || isNaN(courses)){
    showError('courses-error');
    return;
  };
  if(internet <= 0 || isNaN(internet)){
    showError('internet-error');
    return;
  };

  const totalExpenses = software + courses + internet;
  const balance = income - totalExpenses;

  const totalExpensesElement = document.getElementById('total-expenses');
  totalExpensesElement.innerText = totalExpenses.toFixed(2);
  
  const balanceElement = document.getElementById('balance');
  balanceElement.innerText = balance.toFixed(2);
  
  document.getElementById('results').classList.remove('hidden');

  if(totalExpenses > income){
    showError('logic-error')
    return;
  };
});


const calculateSavingsButton = document.getElementById('calculate').addEventListener('click',function(){
  const savings = getInputFieldValueById('savings');
  const totalExpenses = software + courses + internet;
  const balance = income - totalExpenses;
  const savingsAmount = balance / 100 * savings;
  const savingsAmountElement = document.getElementById('savings-amount');
  savingsAmountElement.innerText = savingsAmount.toFixed(2);
  const remaining = balance - savingsAmount;
  const remainingBalanceElement = document.getElementById('remaining-balance');
  remainingBalanceElement.innerText = remaining.toFixed(2);
  
  document.getElementById('results').classList.remove('hidden');
  document.getElementById('history-section').classList.add('hidden');
  if(savings <= 0 || isNaN(savings)){
    showError('savings-error');
    return;
  };
})








// function getInputFieldValueById (id){
//   return parseFloat(document.getElementById(id).value);
// };
// const income = getInputFieldValueById('income');
// console.log(income);
