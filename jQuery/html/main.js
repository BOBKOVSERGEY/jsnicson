  $(function () {
    $("[href^='http']").append("<img src='link.png'>");
    $('code').before('<hr>').after('<hr>');
    $('#delete').on('click', function () {
      $('#ball').remove();
    })
    $('#clean').on('click', function () {
      $('#quote').empty()
    })

    var elWidth = $('.block-size').width();
    var elWidthcss = $('.block-size').css('width');
    console.log(elWidth);
    console.log(elWidthcss);
  });