function getInputFieldById(id){
  const inputValue = document.getElementById(id).value;
  const inputValueParseFloat = parseFloat(inputValue);
  return inputValueParseFloat;
}
function getSpanSectionById(id){
  const spanValue = document.getElementById(id).innerText;
  const spanValueParseFloat = parseFloat(spanValue);
  return spanValueParseFloat;
}
function getShowSectionFieldById (id){
const showResults = document.getElementById(id).classList.remove('hidden');
return showResults;
}
function getHideSectionFieldById (id){
const hideValue = document.getElementById(id).classList.add('hidden');
return hideValue;
}

document.getElementById('assistant-tab').addEventListener('click',function(){
  console.log('Assistant button clicked');
})
document.getElementById('history-tab').addEventListener('click',function(){
})

document.getElementById('results').addEventListener('click',function(){
  
})

// Calculate amount.............
document.getElementById('calculate').addEventListener('click',function(){
  const incomeValue = getInputFieldById('income');
  const softwareValue = getInputFieldById('software');
  const coursesValue = getInputFieldById('courses');
  const internetValue = getInputFieldById('internet');
  const totalExpenses = softwareValue + coursesValue + internetValue;
  const calculateValue = incomeValue - totalExpenses;
  const showResults = getShowSectionFieldById('results');
  const hideValue = getHideSectionFieldById('total-expenses');
  console.log(hideValue);
  document.getElementById('total-expenses').innerHTML = showResults;
  const removeDfualtValueinSpan = getSpanSectionById("total-expenses");
  console.log(removeDfualtValueinSpan);
  console.log(typeof removeDfualtValueinSpan);
  // const spanValue = getSpanSectionById('total-expenses');
  // console.log(spanValue);
  // document.getElementById('total-expenses').append(totalExpenses)
  // console.log(showResults);
  console.log(calculateValue);
})

// Calculate  percentage...........
document.getElementById('calculate-savings').addEventListener('click',function(){
  const incomeValue = getInputFieldById('income');
  const softwareValue = getInputFieldById('software');
  const coursesValue = getInputFieldById('courses');
  const internetValue = getInputFieldById('internet');
  const totalExpenses = softwareValue + coursesValue + internetValue;
  const savingsValue = getInputFieldById('savings')
  const remaining = incomeValue - totalExpenses;
  const savings = (remaining * savingsValue) / 100;
  console.log(savings);
})
// document.getElementById('calculate-savings').addEventListener('click',function(){
  // const savingsValue = getInputFieldById('savings')
  // const savingsValue2 = calculateValue / savingsValue;
  // const finalSavingsValue = savingsValue2 * 10;
  // console.log(finalSavingsValue);
  // console.log('Calculate savings button clicked');
// })

// document.getElementById('calculate').addEventListener('click',function(){
//   const softwareValue = getInputFieldById('software');
//   console.log(softwareValue);
// })
// document.getElementById('calculate').addEventListener('click',function(){
//   const coursesValue = getInputFieldById('courses')
//   console.log(coursesValue);
// })
// document.getElementById('calculate').addEventListener('click',function(){
//   const internetValue = getInputFieldById('internet');
//   console.log(internetValue);
// })

// // document.getElementById('calculate-savings').addEventListener('click',function(){
// //   const calculateValue = getInputFieldById('software' + 'courses' + 'internet');
// //   console.log(calculateValue);
// // })

