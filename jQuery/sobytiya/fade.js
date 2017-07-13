$(function () {
  $('#fadeOut').on('click', function () {
    $('#text').fadeOut('slow');
  })

  $('#fadeIn').on('click', function () {
    $('#text').fadeIn('slow');
  })
  $('#fadeToggle').on('click', function () {
    $('#text').fadeToggle('slow');
  })

  $('#fadeTo').on('click', function () {
    $('#text').fadeTo('slow', .5);
  })
})