'use strict';

// список констант
var CLOUD_WIDTH = 420; // ширина белого и черного облака
var CLOUD_HEIGHT = 270; // высота белого и черного облака
var CLOUD_X = 100; // x-координата белого облака
var CLOUD_Y = 10; // y-координата белого облака
var BAR_Y = 100;
var GAP = 10; // расстояние
var BAR = 50; // расстояние между колонками гистограммы
var BAR_WIDTH = 40; // ширина колонки гистограммы

// список переменных величин
var barHeight = 150; // высота колонки гистограммы (изменяется в процессе игры)

// функция для отрисовки облаков
var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// функция для поиска максимального времени
var getMaxElement = function(times) {
  var maxElement = times[0];

  for (var i = 1; i < times.length; i++) {
    if (times[i] > maxElement) {
      maxElement = times[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {

  // список массивов для дальнейшей работы (вывел в консоль для наглядности, можно удалить)
  console.log(times);
  console.log(players);

  // нарисовал облака
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  // вывел надпись, добавил функцию для рассчета случаного числа (для оттенка синего цвета колонки)
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 220, 20);
  ctx.fillText('Список результатов:', 220, 40);
  var randColor = function() {
    return Math.random();
  };

  // передал в переменную maxTime рассчитаное в функции максимальное время
  var maxTime = getMaxElement(times);

  // с помощью цикла отрисовал колонки гистограммы
  for (var i = 0; i < players.length; i++) {

    // вывел надписи Имя игрока + его время (для надписей задал цвет - черный);
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + BAR + (BAR + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + BAR + (BAR + BAR_WIDTH) * i, BAR_Y + barHeight - (barHeight * times[i] / maxTime) - GAP * 2);

    // добавил проверку своей колонки гистограммы (если игрок "Вы" - цвет красный, иначе синий с рандомным оттенком)
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba( 0, 0, 255,' + randColor() + ')';
      console.log(randColor());
    }

    // по очереди отрисовал колонку гистограммы для каждого игрока
    ctx.fillRect(CLOUD_X + BAR + (BAR + BAR_WIDTH) * i, BAR_Y + barHeight - (barHeight * times[i] / maxTime), BAR_WIDTH, barHeight * times[i] / maxTime);
  }
};