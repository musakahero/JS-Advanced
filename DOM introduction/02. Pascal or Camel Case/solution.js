function solve() {
  let words = document.getElementById('text').value.trim().split(' ');
  let namingConvention = document.getElementById('naming-convention').value;

  switch (namingConvention) {
    case 'Camel Case':
      words[0] = words[0].toLowerCase();
      for(let i = 1; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
      }
      break;
    case 'Pascal Case':
      for(let i = 0; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
      }
      break;
    default:
      words = ['Error!'];
  }
  //console.log(words.join(''));
  document.getElementById('result').textContent = words.join('');
}
