$(document).ready(function(){
// $(".toggle_color").mouseover(function(){
// 	$('body').append("<div id='toggleTool' style='position:fixed;'></div>");
// 	$("#toggleTool").html("Click Me!");
// 	   $('#toggleTool').css({
//         "top" : $(this).offset().top + 1,
//         "left" : $(this).offset().right
//     });
// });
// $('.toggle_color').mouseleave(function(){
//     $('#toggleTool').remove();
// })


	$('.toggle_color').click(function(e) {
		 e.preventDefault();
		$('html').removeClass().addClass('light');
	})



	// $('.toggle_color').click(function(e){
	// 	e.preventDefault();
	// 	$('html').removeClass().addClass('dark green');

	// })

})