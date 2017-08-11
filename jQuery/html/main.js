  $(function () {
    $("[href^='http']").append("<img src='link.png'>");
    $('code').before('<hr>').after('<hr>');
    $('#delete').on('click', function () {
      $('#ball').remove();
    })
    $('#clean').on('click', function () {
      $('#quote').empty()
    })
  });