(function() {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  // Массив имен
  var WIZARD_NAMES = ['Иван', 'Хуан Себестьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

  // Массив фамилий
  var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  // Массив цветов мантии
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43,107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

  // Массив цвета глаз
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  // Массив цвета файербола
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  // Дефолтное положение попапа при открытии;
  var LEFT_COORD = 50;
  var TOP_COORD = 80;

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var userNameInput = setup.querySelector('.setup-user-name');
  var wizardCoat = document.querySelector('.setup-wizard').querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard').querySelector('.wizard-eyes');
  var fireballColor = document.querySelector('.setup-fireball-wrap');

  var inputCoatColor = document.querySelector('input[name="coat-color"]');
  var inputEyesColor = document.querySelector('input[name="eyes-color"]');
  var inputFireballColor = document.querySelector('input[name="fireball-color"]');

  var isFocus = false;

  var onPopupEscPress = function(evt) {
    if (evt.keyCode === ESC_KEYCODE && !isFocus) {
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

    window.setupDialogElement.style.top = TOP_COORD + 'px';
    window.setupDialogElement.style.left = LEFT_COORD + '%';
  };

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

  var coatCount = 1;
  var eyesCount = 1;
  var fireballCount = 1;

  // Изменение цвета плаща
  var coatColorHandler = function() {
    wizardCoat.style.fill = COAT_COLORS[coatCount];
    inputCoatColor.value = COAT_COLORS[coatCount];

    if (coatCount == EYES_COLORS.length - 1) {
      coatCount = 0;
    } else {
      coatCount = coatCount + 1;
    };
  }

  // Изменение цвета глаз
  var eyesColorHandler = function() {
    wizardEyes.style.fill = EYES_COLORS[eyesCount];
    inputEyesColor.value = EYES_COLORS[eyesCount];

    if (eyesCount == EYES_COLORS.length - 1) {
      eyesCount = 0;
    } else {
      eyesCount = eyesCount + 1;
    };
  }

  // Изменение цвета файербола
  var fireballColorHandler = function() {
    fireballColor.style.backgroundColor = FIREBALL_COLORS[fireballCount];
    inputFireballColor.value = FIREBALL_COLORS[fireballCount];

    if (fireballCount == EYES_COLORS.length - 1) {
      fireballCount = 0;
    } else {
      fireballCount = fireballCount + 1;
    };
  }

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

  userNameInput.addEventListener('focus', function(e) {
    isFocus = true;
    console.log('isFocus = true');
  });

  userNameInput.addEventListener('focusout', function(e) {
    isFocus = false;
    console.log('isFocus = false');
  });
})();