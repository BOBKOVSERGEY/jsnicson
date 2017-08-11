$(function () {

 $('#push').on('click', function () {
   bounce();
 })

  $('#stop').on('click', function () {
    $('#ball').finish();
  })


  function bounce() {
    'use strict';
    $('#ball')
      .animate({
      left: '270px',
      top: '380px'
      }, 'slow', 'linear')
      .animate({
        left: '540px',
        top: '190px'
      }, 'slow', 'linear')
      .animate({
        left: '270px',
        top: '0px'
      }, 'slow', 'linear')
      .animate({
        left: '0px',
        top: '100px'
      }, 'slow', 'linear', bounce)
  }
})