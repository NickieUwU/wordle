const loadWord = async () => {
    const resp = await fetch('/words.json');
    const data = await resp.json();
    const randomWord = data.words[Math.floor(Math.random() * data.words.length)];
    return randomWord;
};

const validate = async () => {
    
};

export default loadWord;