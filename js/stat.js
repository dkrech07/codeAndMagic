'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var BAR_Y = 100;
var GAP = 10;
var BAR = 40;
var BAR_WIDTH = 50;
var BAR_HEIGHT = 150;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(times) {
  var maxElement = times[0];
  for (var i = 1; i < times.length; i++) {
    if (times[i] > maxElement) {
      maxElement = times[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 220, 20);
  ctx.fillText('Список результатов:', 220, 40);
  var randColor = function() {
    return Math.random();
  };

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR) * i, CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR) * i, BAR_Y + BAR_HEIGHT - (BAR_HEIGHT * times[i] / maxTime) - GAP * 2);

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba( 0, 0, 255,' + randColor() + ')';
    }

    ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR) * i, BAR_Y + BAR_HEIGHT - (BAR_HEIGHT * times[i] / maxTime), BAR, BAR_HEIGHT * times[i] / maxTime);
  }
};