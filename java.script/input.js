const inputField :HTMLElement = document.getElementById('userInput');
const submitButton: HTMLElement = document.getElementById('btnSubmit');
const displayText: HTMLElement  = document.getElementById('displayText');

submitButton.addEventListener('click', listener: (): void => { new*)
const inputValue = inputField.value;

displayText.textContent = `You entered: ${inputValue}`;

console.log(`User Input: ${inputValue}`)
