$(document).ready(function(){
  $('.toggle_color').click(function () {
    $('html').toggleClass(function () {
      if ($(this).is('.dark')) {
        $(this).removeClass();
        return 'light green';
      } else {
        $(this).removeClass();
        return 'dark green';
      }
    });
  });
});