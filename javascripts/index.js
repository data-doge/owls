$(document).ready(function () {

  var words = ["OWLS","FUCKA","FUCKA","OWLS"];

  var counter = 0;
  var wordInterval = setInterval(function () {
    var i = counter % 4;
    $('p').text(words[i]);
    $('p').css('color', randRGB());
    $('audio#' + i).trigger('play');
    counter ++;
  }, 420);

  var imageSize = 0;
  var imageInterval = setInterval(function () {
    $('body').css({
      backgroundSize : imageSize
    });
    imageSize ++;
    if (imageSize > $(document).width()) {
      clearInterval(imageInterval);
    }
  }, 100);



});