var elTime = document.getElementById('time');
function showtime(object) {
  var date = new Date();
  object.innerHTML = date.toTimeString().substr(0,8)
}

setInterval("showtime(elTime)", 1000);