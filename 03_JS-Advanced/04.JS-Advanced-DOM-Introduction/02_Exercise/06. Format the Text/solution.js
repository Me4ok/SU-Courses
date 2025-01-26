function solve() {
	const inputTextElement = document.querySelector('#input');
    const resultDivEl = document.querySelector('div#output');
    const sentences = inputTextElement.value.split('. ');
    let counter = 0;
    let result = [];
    console.log(resultDivEl);
    
    for (let i = 0; i < sentences.length; i++) {
        const sentence = sentences[i];
        result.push(sentence);
        counter++;

        if (counter == 3 || i == sentences.length - 1) {
            console.log(result.join('. ') + '.');
            let toAdd = '';

            if (i == sentences.length - 1) {
                toAdd = `<p>${result.join('. ')}</p>`;                
            } else {
                toAdd = `<p>${result.join('. ')}.</p>`;
            }
            resultDivEl.innerHTML += toAdd;
            counter = 0;
            result = [];
        }
    }
}