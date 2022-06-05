function create(words) {
   for (const str of words) {
      let newDiv = document.createElement('div');
      let newP = document.createElement('p');
      newP.textContent = str;
      newP.style.display = 'none';
      newDiv.appendChild(newP);

      newDiv.addEventListener('click', onClick);

      function onClick(){
         newP.style.display = 'block';
      }
      
      document.getElementById('content').appendChild(newDiv);

   }
}