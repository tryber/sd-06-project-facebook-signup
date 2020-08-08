const btn = document.querySelector('#button-login');

btn.addEventListener('click', function () {
  const valor = document.getElementById('user-email-phone').value;
  alert(valor);
});

function messageInvalid() {
  const messageError = document.querySelector('.divMessage');
  messageError.innerText = 'Campos inválidos';
}

function validate() {
  const inputs = document.querySelectorAll('input');
  let valido = true;
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].value === '') {
      valido = false;
    }
  }
  if (!valido) {
    messageInvalid();
  }
}

const botaoRegistro = document.querySelector('#facebook-register');
botaoRegistro.addEventListener('click', validate);

const perso = document.querySelector('#p');
const feminino = document.querySelector('#f');
const masculino = document.querySelector('#m');
const todos = document.querySelector('.generos');
let clickInCustomGender = 0;

// perso.addEventListener('click', function () {
//   let novoInput = document.createElement('input');
//   novoInput.type = 'text';
//   novoInput.name = 'gender';
//   novoInput.className = 'gender-custom'
//   novoInput.placeholder = 'Gênero (opcional)';
// });

feminino.addEventListener('click', function () {
  clickInCustomGender = 0;
  if (document.querySelector('#gender-custom')) {
    document.querySelector('#gender-custom').parentNode.removeChild(document.querySelector('#gender-custom'));
  }
});

masculino.addEventListener('click', function () {
  clickInCustomGender = 0;
  if (document.querySelector('#gender-custom')) {
    document.querySelector('#gender-custom').parentNode.removeChild(document.querySelector('#gender-custom'));
  }
});

perso.addEventListener('click', function () {
  clickInCustomGender += 1;
  if (clickInCustomGender === 1) {
    const customInput = document.createElement('input');
    customInput.name = 'gender';
    customInput.placeholder = 'Gênero (opcional)';
    customInput.id = 'gender-custom';
    customInput.className = 'input-form';
    todos.appendChild(customInput);
  }
});
