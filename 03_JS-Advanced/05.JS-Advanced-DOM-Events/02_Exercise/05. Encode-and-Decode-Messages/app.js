function encodeAndDecodeMessages() {
    let inputMsgEl = document.querySelector('#main div:nth-of-type(1) textarea');
    let outputMsgEl = document.querySelector('#main div:nth-of-type(2) textarea');
    const encodeBtn = document.querySelector('#main div:nth-of-type(1) button');
    const decodeBtn = document.querySelector('#main div:nth-of-type(2) button');
    
    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);

    function encode(e) {
        let result = '';
        inputMsgEl.value.split('').forEach(letter => {
            const letterAsASCIINum = letter.charCodeAt();
            const encodedLetter = String.fromCharCode(letterAsASCIINum + 1);
            result+= encodedLetter;            
        });
        outputMsgEl.value = result;
        inputMsgEl.value = '';
    }

    function decode(e) {
        let result = '';
        outputMsgEl.value.split('').forEach(letter => {
            const letterAsASCIINum = letter.charCodeAt();
            const decodedLetter = String.fromCharCode(letterAsASCIINum - 1);
            result+= decodedLetter;            
        });  
        
        outputMsgEl.value = result;
    }    
}