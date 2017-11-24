
	

$(document).ready(function(){
	
	//点击快递下拉列表内容改变
	$(".overbook1_23 li").click(function(){
		var text_li=$(this).find("a").text();
		$(".overbook1_3 em").text(text_li);
		$(".overbook1_3").toggleClass("overbook1_28");
		$(".overbook1_24").hide();
	});
	
	$(".tariff1_1 tr th > span > span").click(function(){
		$(this).toggleClass("tariff1_5");
		$(".tariff1_4").toggle();
	});
	
	$(".tariff1_4 ul li").click(function(){
		var text_li=$(this).text();
		$(".tariff1_1 tr th > span > span em").text(text_li);
		$(".tariff1_1 tr th > span > span").toggleClass("tariff1_5");
		$(".tariff1_4").hide();
	});
	
	$(".index1_8 > input").focus(function(){
		$(this).addClass("index1_30");
	});
	$(".index1_8 > input").blur(function(){
		$(this).removeClass("index1_30");
	});
	
	//导航点击二级菜单效果
	$("#menu li .tit").click(function(){
		$(this).parents("#menu").find(".tit").removeClass("curr");
		$(this).parents("#menu").find("li").children(".menu_click").stop().slideUp(100);
		$(this).toggleClass("curr").siblings(".menu_click").stop().slideToggle(100);
	});
})
