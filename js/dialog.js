// 'use strict'
(function() {

  var setupDialogElement = document.querySelector('.setup'); // Отлавливаю всплывающее окно;
  var dialogHandler = setupDialogElement.querySelector('.upload'); // Отлавливаю элемент, за который буду перетаскивать окно;

  dialogHandler.addEventListener('mousedown', function(evt) {
    evt.preventDefault(); // Отменяю действие по умолчанию;

    // Узнаю стартовые координаты;
    var startCoodrs = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    // Вычисляю координаты после смещения;
    var onMouseMove = function(moveEvt) {
      moveEvt.preventDefault(); // Отменяю действие по умолчанию;
      dragged = true;

      // Обявляю переменную, в котору записываю зарницу между стартовыми и конечными коодинатами; 
      var shift = {
        x: startCoodrs.x - moveEvt.clientX,
        y: startCoodrs.y - moveEvt.clientY
      };

      startCoodrs = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
      setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';

    };

    document.addEventListener('mousemove', onMouseMove);
  });

})();


//

//
//   var onMouseUp = function(upEvt) {
//     upEvt.preventDefault();
//
//     document.removeEventListener('mousemove', onMouseMove);
//     document.removeEventListener('mouseup', onMouseUp);
//
//     if (dragged) {
//       var onClickPreventDefault = function(evt) {
//         evt.preventDefault();
//         dialogHandler.removeEventListener('click', onClickPreventDefault)
//       };
//       dialogHandler.addEventListener('click', onClickPreventDefault);
//     }
//
//   };
//
//   document.addEventListener('mousemove', onMouseMove);
//   document.addEventListener('mouseup', onMouseUp);