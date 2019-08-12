(function() {
  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');

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
})();