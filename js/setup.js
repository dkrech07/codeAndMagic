(function() {
  var userDialog = document.querySelector('.setup');
  // userDialog.classList.remove('hidden');

  var similarListElement = document.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderWizard = function(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;

    return wizardElement;
  };

  var successHandler = function(wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');

    var form = userDialog.querySelector('.setup-wizard-form');
    form.addEventListener('submit', function(evt) {
      window.backend.save(new FormData(form),
        function(response) {
          userDialog.classList.add('hidden');
        });
      evt.preventDefault();
    });
  };

  var errorHandler = function(errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-aling: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fintSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successHandler, errorHandler);

})();