
setTimeout(dothis, 5000);
function dothis() {
  setTimeout(dothis, 100);
  document.write('Это ваш будильник<br>')
}