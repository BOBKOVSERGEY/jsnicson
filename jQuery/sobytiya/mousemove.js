$(function () {
  var canvas = $('#pad')[0];
  var context = canvas.getContext("2d");
  var pendown = false;

  $('#pad').mousemove(function (event) {
    var xpos = event.pageX - canvas.offsetLeft;
    var ypos = event.pageY - canvas.offsetTop;

    if(pendown) context.lineTo(xpos, ypos)
    else context.moveTo(xpos, ypos)

    context.stroke();
  })

  $('#pad').mousedown(function () {
    pendown = true;
  })
  $('#pad').mouseup(function () {
    pendown = false;
  })
})