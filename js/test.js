// function getInputFieldById(id) {
//   const element = document.getElementById(id);

//   if (element) {
//     // Check if element exist
//     if (element.tagName === 'INPUT'){
//         return element.value; // Get the value if it's an input
//     }else{
//         console.error(`Element with id '${id}' is not an input`)
//         return null;
//     }
//   } else {
//     console.error(`Element with id '${id}' not found`);
//     return null;
//   }
// }

// document.getElementById('assistant-tab').addEventListener('click', function () {
//   console.log('Assistant button clicked');
// });

// document.getElementById('history-tab').addEventListener('click', function () {
//   console.log('History button clicked');
// });

// //Event Listeners for buttons
// document.querySelectorAll('button').forEach(button => {
//   if(button.id !== 'assistant-tab' && button.id !== 'history-tab'){
//       button.addEventListener('click', () =>{
//           const inputId = button.id;
//           const inputValue = getInputFieldById(inputId)
//           console.log(inputValue);
//       })
//   }
// })



function getInputFieldById(id) {
  const element = document.getElementById(id);
  if (element) {
    return element.value;
  } else {
    console.error(`Element with id "${id}" not found.`);
    return null; // Or you can throw an error if it's critical
  }
}

document.getElementById('assistant-tab').addEventListener('click', function () {
  console.log('Assistant button clicked');
});

document.getElementById('history-tab').addEventListener('click', function () {
  console.log('History button clicked');
});

document.getElementById('calculate').addEventListener('click', function () {
    const incomeValue = getInputFieldById('income');
    const softwareValue = getInputFieldById('software');
    const coursesValue = getInputFieldById('courses');
    const internetValue = getInputFieldById('internet');

    console.log("Income:", incomeValue);
    console.log("Software:", softwareValue);
    console.log("Courses:", coursesValue);
    console.log("Internet:", internetValue);
});