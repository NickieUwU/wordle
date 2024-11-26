const loadWord = async () => {
    const resp = await fetch('/words.json');
    const data = await resp.json();
    const randomWord = data.words[Math.floor(Math.random() * data.words.length)];
    return randomWord;
};

const validate = async (guess, word, words) => {
    if(!words.includes(word) || !word)
    {
        return "This word is not valid";
    }
    else if(guess === word)
    {
        alert('You won');
    }
};

export default {loadWord, validate};