$(function () {
  $('#form').submit(function () {
    if ($('#fname').val() == '' || $('#lname').val() == '') {
      $('.result').html('<p>Пожалуйста введите имя и фамилию</p>');
      return false;
    }
  });
})