const input = document.getElementById('number');
const submit = document.getElementById('submit');

function validate(event) {
  event.preventDefault();
  if(input.value !== '1111 1111 1111 1111') { // или какие тут должны быть условия
    console.log('enter correct number');
    return;
  } else {
    console.log('submitted');
    // form.submit(); если нужно сабмитить форму
  }
}

submit.addEventListener('click', validate);