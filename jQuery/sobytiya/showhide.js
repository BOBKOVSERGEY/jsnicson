$(function () {
  $('#hide').on('click', function () {
    $('#text').hide('slow', 'linear');
  })
  $('#show').on('click', function () {
    $('#text').show('slow', 'linear');
  })
})