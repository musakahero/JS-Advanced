function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let cells = Array.from(document.querySelectorAll('tbody tr td'));

      cells.forEach(el => el.parentElement.classList.remove('select'));

      let pattern = document.getElementById('searchField').value;
      document.getElementById('searchField').value = '';
      if (pattern == '') {
         return;
      } else {
         for (let cell of cells) {
            if (cell.textContent.includes(pattern)) {
               cell.parentElement.classList.add('select');
            }
         }
      }
   }
}