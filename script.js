const buttonLogin = document.getElementById('button-login');
const inputEmailPhone = document.getElementById('user-email-phone');
const genderOptionOther = document.getElementById('other');
const genderOptionFemale = document.getElementById('female');
const genderOptionMale = document.getElementById('male');
const genderFather = document.getElementById('gender-area');
const buttonRegister = document.getElementById('facebook-register');
const getAllInputs = document.querySelectorAll('input');
const radioSelection = document.querySelectorAll('input[name="gender"]');
const rightContent = document.querySelector('.right-content');
const genderSelection = document.getElementById('genders');

genderOptionFemale.addEventListener('click', function () {
  genderFather.style.display = 'none';
});
genderOptionMale.addEventListener('click', function () {
  genderFather.style.display = 'none';
});
genderOptionOther.addEventListener('click', function () {
  genderFather.style.display = 'block';
});
buttonLogin.addEventListener('click', function () {
  alert(inputEmailPhone.value);
});
function checkAllInputs(inputs) {
  for (let i = 2; i < inputs.length - 4; i += 1) {
    if (inputs[i].value === '') {
      inputs[i].type = 'text';
      inputs[i].value = 'Campos inválidos';
      return false;
    }
  }
  return true;
}
function getTheGender() {
  for (let j = 0; j < radioSelection.length; j += 1) {
    if (radioSelection[j].checked) {
      return j;
    }
  }
  return true;
}
function getDivInformations(inputs) {
  while (rightContent.firstChild) {
    rightContent.removeChild(rightContent.firstChild);
  }
  const name = inputs[2].value;
  const lastname = inputs[3].value;
  const emailOrPhone = inputs[4].value;
  const birthDate = inputs[6].value;
  const genderChoice = inputs[getTheGender() + 7].value;
  const createNewDiv = document.createElement('div');
  createNewDiv.className = 'right-content';
  const textMessage = `Olá, ${name}  ${lastname} ,seu cadastro foi feito em: ${emailOrPhone} ,nasceu na data: ${birthDate} .Possui o gênero ${genderChoice}.`;
  createNewDiv.innerHTML = textMessage;
  rightContent.appendChild(createNewDiv);
}
function checkFirstCondition() {
  for (let x = 0; x < radioSelection.length - 1; x += 1) {
    if (radioSelection[x].checked) {
      return true;
    }
  }
  return false;
}
function checkSecondCondition() {
  if (genderFather.style.display !== 'none' && genderSelection.value !== '0') {
    return true;
  }
  return false;
}
function checkAllConditions() {
  return checkAllInputs(getAllInputs) && (checkFirstCondition() || checkSecondCondition());
}
buttonRegister.addEventListener('click', function (event) {
  event.preventDefault();
  if (checkAllConditions()) {
    getDivInformations(getAllInputs);
  }
});
