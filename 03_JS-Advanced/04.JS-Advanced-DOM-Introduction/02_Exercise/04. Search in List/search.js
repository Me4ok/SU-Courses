function search() {
   const listItems = document.querySelectorAll('#towns li');
   const searchFldElement = document.querySelector('#searchText');
   let matchesQty = 0;

   for (let item of listItems) {
      if (item.textContent.includes(searchFldElement.value)) {
         item.style.fontWeight = 'bold';
         item.style.textDecoration = 'underline';
         // item.setAttribute('style', 'font-weight: bold; text-decoration: underline');
         matchesQty++;
      } else {
         if (item.hasAttribute('style')) {
            item.removeAttribute('style');
         }
      }
   }

   const resultElement = document.querySelector('#result');
   resultElement.textContent = `${matchesQty} matches found`;
}