// Массив имен
var WIZARD_NAMES = ['Иван', 'Хуан Себестьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

// Массив фамилий
var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

// Массив цветов мантии
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43,107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

// Массив цвета глаз
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

// Массив цвета файерболов
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');
var wizardCoat = document.querySelector('.setup-wizard').querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard').querySelector('.wizard-eyes');
var fireballColor = document.querySelector('.setup-fireball-wrap');

// Генерация случайных данных
function wizardRandom(feature) {
  var x = Math.floor(feature.length * Math.random());
  return feature[x];
}

var onPopupEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var coatColorHandler = function() {
  return wizardCoat.style.fill = wizardRandom(COAT_COLORS);
}

var eyesColorHandler = function() {
  return wizardEyes.style.fill = wizardRandom(EYES_COLORS);
}

var fireballColorHandler = function() {
  fireballColor.style = 'background-color: ' + wizardRandom(FIREBALL_COLORS);
}

setupOpen.addEventListener('click', function() {
  openPopup();
});

setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function() {
  closePopup();
});

setupClose.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

wizardCoat.addEventListener('click', coatColorHandler);

wizardEyes.addEventListener('click', eyesColorHandler);

fireballColor.addEventListener('click', fireballColorHandler);

userNameInput.addEventListener('invalid', function(evt) {
  if (userNameInput.validiti.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validiti.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validiti.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function(evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// Список магов
var wizards = [];

function wizardsList(quantity) {
  for (var i = 0; i < quantity; i++) {
    var wizard = {
      name: wizardRandom(WIZARD_NAMES) + ' ' + wizardRandom(WIZARD_SECOND_NAMES),
      coatColor: wizardRandom(COAT_COLORS),
      eyesColor: wizardRandom(EYES_COLORS)
    };
    wizards[i] = wizard;
  }
  return wizards;
}

// Количество магов - 4, задаем 4 массива
wizardsList(4);

for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  similarListElement.appendChild(wizardElement);
}