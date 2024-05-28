// Javascript for modal 1
const numberInput = document.getElementById('numberInput');
const summaryDiv = document.getElementById('summary');

// Add event listener to the input field
numberInput.addEventListener('input', function() {
  const enteredNumber = this.value;

  const result = enteredNumber * 500;

  // Update the summary div with the entered number
  if (enteredNumber) {
    summaryDiv.textContent = `Great! Order of ${enteredNumber} items is received, total price is $${result}`;
  } else {
    summaryDiv.textContent = '';
  }
});

// Javascript for modal 2
const numberInput2 = document.getElementById('numberInputtwo');
const summaryDiv2 = document.getElementById('summarytwo');

// Add event listener to the input field
numberInput2.addEventListener('input', function() {
  const enteredNumber2 = this.value;

  const result2 = enteredNumber2 * 10000;

  // Update the summary div with the entered number
  if (enteredNumber2) {
    summaryDiv2.textContent = `Great! Order of ${enteredNumber2} items is received, total price is $${result2}`;
  } else {
    summaryDiv2.textContent = '';
  }
});

// Javascript for modal 3
const numberInput3 = document.getElementById('numberInputthree');
const summaryDiv3 = document.getElementById('summarythree');

// Add event listener to the input field
numberInput3.addEventListener('input', function() {
  const enteredNumber3 = this.value;

  const result3 = enteredNumber3 * 1000;

  // Update the summary div with the entered number
  if (enteredNumber3) {
    summaryDiv3.textContent = `Great! Order of ${enteredNumber3} items is received, total price is $${result3}`;
  } else {
    summaryDiv3.textContent = '';
  }
});


