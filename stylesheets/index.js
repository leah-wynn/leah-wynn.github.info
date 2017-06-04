$(document).ready(function(){
  $('.toggle_color').click(function () {
    $('html').toggleClass(function () {
      if ($(this).is('.light')) {
        $(this).removeClass();
        return 'dark green';
      } else {
        $(this).removeClass();
        return 'light green';
      }
    });
  });
});