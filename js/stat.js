'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var barHeight = 150;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx, players, times) {

  console.log(players);
  console.log(times);

  console.log(Math.floor(times[0]));
  console.log(times[1]);
  console.log(times[2]);
  console.log(times[3]);

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 140, 40);
  ctx.fillText('Список, результатов:', 140, 60);

  ctx.fillStyle = '#000';
  ctx.fillText('Вы', CLOUD_X + 40, CLOUD_Y + 70);
  ctx.fillStyle = 'rgba(255, 0, 1, 1)';
  ctx.fillRect(CLOUD_X + 40, CLOUD_Y + 80, BAR_WIDTH, Math.floor(times[0])/100);

  ctx.fillStyle = '#000';
  ctx.fillText('Кекс', CLOUD_X + 130, CLOUD_Y + 70);
  ctx.fillStyle = 'rgba(0, 0, 255, 0.1)';
  ctx.fillRect(CLOUD_X + 130, CLOUD_Y + 80, BAR_WIDTH, Math.floor(times[1])/100);

  ctx.fillStyle = '#000';
  ctx.fillText('Катя', CLOUD_X + 220, CLOUD_Y + 70);
  ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
  ctx.fillRect(CLOUD_X + 220, CLOUD_Y + 80, BAR_WIDTH, Math.floor(times[2])/100);

  ctx.fillStyle = '#000';
  ctx.fillText('Игорь', CLOUD_X + 310, CLOUD_Y + 70);
  ctx.fillStyle = 'rgba(0, 0, 255, 0.3)';
  ctx.fillRect(CLOUD_X + 310, CLOUD_Y + 80, BAR_WIDTH, Math.floor(times[3])/100);
};
