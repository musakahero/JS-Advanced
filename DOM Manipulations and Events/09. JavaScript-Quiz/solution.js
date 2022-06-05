function solve() {
  let rightAnswers = 0;
  let questionProgress = 0;
  let totalQuestions = document.querySelectorAll('section').length;
  console.log(totalQuestions);

  Array.from(document.querySelectorAll(`section li p`)).forEach(e => e.addEventListener('click', onSelect));


  function onSelect(ev) {
    questionProgress++;
    

    if (ev.target.textContent == 'onclick' 
    || ev.target.textContent == 'JSON.stringify()' 
    || ev.target.textContent == 'A programming API for HTML and XML documents') {
      rightAnswers++;
      console.log(rightAnswers);
    }

    document.querySelector(`section:nth-of-type(${questionProgress})`).style.display = 'none';

    //if there are more questions - reveal next question, else reveal results
    if(questionProgress != totalQuestions){
      document.querySelector(`section:nth-of-type(${questionProgress+1})`).style.display = 'block';
    } else {
      document.getElementById('results').style.display = 'block';

      if(rightAnswers == 3){
        document.querySelector('#results h1').textContent = 'You are recognized as top JavaScript fan!';
      } else {
        document.querySelector('#results h1').textContent = `You have ${rightAnswers} right answers`
      }
    }
    
  }
}
