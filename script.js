const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

// Function to check if the input text is a palindrome
const checkPalindrome = () => {
    const text = textInput.value.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    const reversedText = text.split('').reverse().join('');
    return text === reversedText;
}

const showResult = () => {
    const inputText = textInput.value;

    // Check if the input is empty or just whitespace
    if (!inputText.trim()) { 
        return window.alert("Please input a value");
    }

    if (checkPalindrome(inputText)) {
        result.textContent = `"${inputText}" is a palindrome`;
    } else {
        result.textContent = `"${inputText}" is not a palindrome`;
    }
}

checkButton.addEventListener('click', showResult);