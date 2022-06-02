// function search() { 
//    let towns = Array.from(document.querySelectorAll('li'));
//    let pattern = document.getElementById('searchText').value;
//    let matches = 0;

//    for (const el of towns) {

//       if(el.textContent.includes(pattern)){
//          el.innerHTML = '<b><u>' + el.textContent + '</u></b>' ;
//          matches++;
//       } else {
//          el.innerHTML = el.innerHTML.replace('<b><u>','');
//          el.innerHTML = el.innerHTML.replace('</u></b>','');
//       }
      
//       document.getElementById('result').textContent = `${matches} matches found`;
//    }

// }

function search() { 
   let towns = Array.from(document.querySelectorAll('li'));
   let pattern = document.getElementById('searchText').value;
   let matches = 0;

   for (const el of towns) {

      if(el.textContent.includes(pattern)){
         el.style.fontWeight = 'bold';
         el.style.textDecoration = 'underline';
         matches++;
      } else {
         el.style.fontWeight = 'normal';
         el.style.textDecoration = 'none';
      }
      
      document.getElementById('result').textContent = `${matches} matches found`;
   }

}