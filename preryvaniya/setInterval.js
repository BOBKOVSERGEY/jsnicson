var elTime = document.getElementById('time');
function showtime(object) {
  var date = new Date();
  object.innerHTML = date.toTimeString().substr(0,8);
}

var handle = setInterval("showtime(elTime)", 1000);

setTimeout("clearInterval(handle)", 10000);