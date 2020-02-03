var oddNumbers = 12

var evenNumbers = 12

var randomNumbers = 4

var countNumbers = 2

var sumOddEven = oddNumbers + evenNumbers;

var subRanCount = randomNumbers - countNumbers;

var finalResult = sumOddEven * subRanCount;

// Add your code here

let evenOddResult;

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${ finalResult }`;
para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`;
let para2 = document.createElement('p');
let evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd. Hrm.'
para2.textContent = evenOddResultCheck;

section.appendChild(para1);
section.appendChild(para2);