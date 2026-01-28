
const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');
const wordCount = document.getElementById('wordCount');

textInput.addEventListener('input', () => {
    const text = textInput.value;

   
    charCount.textContent = text.length;

    
    const words = text.trim().split(/\s+/);
    const totalWords = text.trim() === "" ? 0 : words.length;
    
    wordCount.textContent = totalWords;
});
