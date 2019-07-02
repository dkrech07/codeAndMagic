// Нажатие на элемент .setup-open удаляет класс hidden
// у блока setup. Нажатие на элемент .setup-close, расположенный
//внутри блока setup возвращает ему класс hidden.

var setupDialogElement = document.querySelector('.setup');
var dialogHandler = setupDialogElement.querySelector('.upload');

dialogHandler.addEventListener('mousedown', function(evt) {
  evt.preventDefault();

  var startCoodrs = {
    x: evt.clientX,
    y: evt.clientY
  };

  var dragged = false;

  var onMouseMove = function(moveEvt) {
    moveEvt.preventDefault();
    dragged = true;

    var shift = {
      x: startCoodrs.x - moveEvt.clientX,
      y: startCoodrs.y - moveEvt.clientY
    };

    var startCoodrs = {
      x: evt.clientX,
      y: evt.clientY
    };

    setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
    setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';

  };

  var onMouseUp = function(upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    if (dragged) {
      var onClickPreventDefault = function(evt) {
        evt.preventDefault();
        dialogHandler.removeEventListener('click', onClickPreventDefault)
      };
      dialogHandler.addEventListener('click', onClickPreventDefault);
    }

  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});









startCoodrs = {
  x: moveEvt.clientX,
  y: moveEvt.clientY
};