function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const inputEl = document.querySelector('#searchField');
      const tableElements = document.querySelectorAll('tbody tr');
      
      tableElements.forEach(el => {
         if (el.textContent.includes(inputEl.value)) {
            el.classList.add('select');
         } else {
            el.classList.remove('select');
         }
      });      
      
      inputEl.value = '';
   }
}