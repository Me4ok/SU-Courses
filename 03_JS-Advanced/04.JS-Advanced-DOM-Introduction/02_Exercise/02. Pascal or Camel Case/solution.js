function solve() {
   const inputTextEl = document.querySelector('#text');
   const conventionEl = document.querySelector('#naming-convention');
   const outputElement = document.querySelector('span#result');

   const converter = {
      'Camel Case': function (input) {
         let words = input.split(' ');
         words = words.map(word => word.toLowerCase()); // transform each word to lower case
         let result = [];

         words.forEach((word, i) => {
            if (i == 0) {
               result.push(word);
            } else {
               word = word.substring(0, 1).toUpperCase() + word.substring(1);
               result.push(word);
            }
         });

         return result.join('');
      },
      'Pascal Case': function (input) {
         let words = input.split(' ');
         words = words.map(word => word.toLowerCase()); // transform each word to lower case
         let result = [];

         words.forEach((word) => {
            word = word.substring(0, 1).toUpperCase() + word.substring(1);
            result.push(word);
         });

         return result.join('');
      },
   }

   
   if (converter.hasOwnProperty(conventionEl.value)) {
      const result = converter[conventionEl.value](inputTextEl.value);
      outputElement.textContent = result;
   } else {
      outputElement.textContent = 'Error!';
   }
}