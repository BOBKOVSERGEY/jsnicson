$(function () {
  $('#clickme').on('click', function () {
    $('#result').html('You clicked the button');
  });


  $('input').on('focus', function () {
    $(this).css('background', '#ff0');
  });
  $('input').on('blur', function () {
    $(this).css('background', '#aaa');
  })

  $('.myclass').on('click', function () {
    $(this).slideUp();
  })
  $('.myclass').on('dblclick', function () {
    $(this).hide();
  })

  $(document).keypress(function (event) {
    var key = String.fromCharCode(event.which);
    if (key >= 'a' && key <= 'z' ||
        key >= 'A' && key <= 'Z' ||
        key >= 'а' && key <= 'я' ||
        key >= 'А' && key <= 'Я' ||
        key >= '0' && key <= '9'
    ) {
      $('#push').html('Вы нажали: ' + key);

      event.preventDefault();
    }
  })
})