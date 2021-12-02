const buttonsOpen = document.querySelectorAll('.question');
const responses = document.querySelectorAll('.response');

function closeQuestion(questionElement){
  questionElement.classList.remove('active');

  const responseElement = questionElement.nextElementSibling;
  responseElement.classList.remove('show');

  responseElement.style.maxHeight = 0;
}

function openQuestion(questionElement){
  const questionsIsOpen = document.querySelectorAll('.active'); 
  questionsIsOpen.forEach(questionIsOpen => closeQuestion(questionIsOpen));

  questionElement.classList.add('active');

  const responseElement = questionElement.nextElementSibling;
  responseElement.classList.add('show');

  responseElement.style.maxHeight = responseElement.scrollHeight + "px";
}

function handlerFaq(event){
  const questionElement = event.target;
  const isOpenQuestion = questionElement.classList.contains('active');
/*   const responseElement = questionElement.nextElementSibling;
  const isOpenResponse = classList.contains('show'); */

  isOpenQuestion ? closeQuestion(questionElement) : openQuestion(questionElement);
}

function init(){
  buttonsOpen.forEach(button => {
    button.addEventListener('click', handlerFaq);
  });
}

init();