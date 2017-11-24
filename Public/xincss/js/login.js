$(function(){


	$("#username,#password,#captcha").keydown(function(e){ 
		var curKey = e.which; 
		if(curKey == 13){ 
			$(".ajaxSubmit").click(); 
			return false; 
		} 
	}); 


	$("#username").focus(function(){

		$(this).addClass("username_hover");

	}).blur(function(){

		$(this).removeClass("username_hover");

	});



	$("#password").focus(function(){

		$(this).addClass("password_hover");

	}).blur(function(){

		$(this).removeClass("password_hover");

	});


	
	$("#captcha").focus(function(){

		$(this).addClass("captcha_hover");

	}).blur(function(){

		$(this).removeClass("captcha_hover");

	});







	$(".ajaxSubmit").click(function(){

		var button = $(this);
		var form = button.parents("form");

		form.ajaxform({
			"button": button
		});

	});

});