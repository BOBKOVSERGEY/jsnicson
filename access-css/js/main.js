S('object').border = 'solid 1px red';
S('object').width = '100px';
S('object').height = '100px';
S('object').background = '#eee';
S('object').color = 'blue';
S('object').fontSize = '30px';
S('object').textAlign = 'center';
S('object').lineHeight = '100px';

O('object2').onmouseover = function () {
  this.src = 'orange.png';
}
O('object2').onmouseout = function () {
  this.src = 'apple.png';
}