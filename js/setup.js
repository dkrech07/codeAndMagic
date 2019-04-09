// var userDialog = document.querySelector('.setup');
// userDialog.classList.remove('hidden');

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');

setupOpen.addEventListener('click', function() {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      setup.classList.add('hidden');
    }
  });
});

setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 13) {
    setup.classList.remove('hidden');
  }
});

setupClose.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 13) {
    setup.classList.add('hidden');
  }
});

setupClose.addEventListener('click', function() {
  setup.classList.add('hidden');
});

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

// Массив имен
var WIZARD_NAMES = ['Иван', 'Хуан Себестьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

// Массив фамилий
var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

// Массив цветов мантии
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43,107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

// Массив цвета глаз
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];


// Генерация случайных данных
function wizardRandom(feature) {
  var x = Math.floor(feature.length * Math.random());
  return feature[x];
}

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