// JavaScript Document

$(function(){
	
	var JPlaceHolder = {
    	//检测
		_check : function(){
			return 'placeholder' in document.createElement('input');
		},
		//初始化
		init : function(){
			if(!this._check()){
				this.fix();
			}
		},
		//修复
		fix : function(){
			jQuery(':input[placeholder]').each(function(index, element) {
				var self = $(this), txt = self.attr('placeholder');
				self.wrap($('<div></div>').css({position:'relative', zoom:'1', border:'none', background:'none', padding:'none', margin:'none'}));
				var pos = self.position(), h = self.outerHeight(true), paddingleft = self.css('padding-left');
				var holder = $('<span></span>').text(txt).css({position:'absolute', left:pos.left, top:pos.top, height:h, lienHeight:h, paddingLeft:paddingleft, color:'#aaa'}).appendTo(self.parent());
				self.focusin(function(e) {
					holder.hide();
				}).focusout(function(e) {
					if(!self.val()){
						holder.show();
					}
				});
				holder.click(function(e) {
					holder.hide();
					self.focus();
				});
			});
		}
	};
	//执行
	jQuery(function(){
		JPlaceHolder.init();    
	});

	
	
	$("input[type='text'] , select, input[type='password']").mouseover(function(){
		$(this).css("border","1px solid #999");
	}).mouseout(function(){
		$(this).css("border","1px solid #ddd");
	});
	


	
	//点击切换按钮效果
	$(".contenter .resize .right_cont .table_box .tab_nav > a , .contenter .resize .right_cont .table_box .exp_nav > a").click(function(){
		var num = $(this).index();
		$(this).addClass("curr");
		$(this).siblings("a").removeClass("curr");
		$(this).parents(".table_box").find(".tab_cont").hide();
		$(this).parents(".table_box").find(".tab_cont").eq(num).show();
	});
	
	//触摸表格的问号图标
	$(".contenter .resize .right_cont .table_box .tab_obj tr th .question").mouseover(function(){
		$(this).find(".intro_con").show();
	}).mouseleave(function(){
		$(this).find(".intro_con").hide();
	});
	
	$(".index1 dl dd").click(function(){
		var _this = $(this);
		_this.addClass("curr").siblings("dd").removeClass("curr");
		var num = _this.index();
		_this.parent("dl").prev("ul").find("li").eq(num).fadeIn().siblings("li").fadeOut();
		$(".slider-bg li").eq(num).fadeIn().siblings("li").fadeOut();
		var _cla = _this.attr("data-class");
		$("#J-home-topbar-menu").removeClass().addClass(_cla);
		$("#ann").removeClass().addClass(_cla);
	})
	/**
	* fn banner图自动滚动
	*/
	var auto_scroll_mien1 = setInterval(function(){
		scroll_();
	},5000);
	$(".banner").mouseover(function(){
		clearInterval(auto_scroll_mien1);
	}).mouseleave(function(){
		auto_scroll_mien1 = setInterval(function(){
			scroll_();
		},5000);
	});
	/**
	* fn banner图自动滚动
	*/
	function scroll_(){
		var num = parseInt($(".index1 dl dd.curr").index(".index1 dl dd"));
		if(num < $(".index1 dl dd").length-1){
			var _cla = $(".index1 dl dd.curr").next("dd").attr("data-class");
			$("#J-home-topbar-menu").removeClass().addClass(_cla);
			$("#ann").removeClass().addClass(_cla);
			$(".index1 dl dd.curr").next("dd").addClass("curr").siblings("dd").removeClass("curr");
			$(".index1 dl dd.curr").parent("dl").prev("ul").find("li").eq(num+1).fadeIn().siblings("li").fadeOut();
			$(".slider-bg li").eq(num+1).fadeIn().siblings("li").fadeOut();
		}else{
			var _cla = $(".index1 dl dd").eq(0).attr("data-class");
			$("#J-home-topbar-menu").removeClass().addClass(_cla);
			$("#ann").removeClass().addClass(_cla);
			$(".index1 dl dd").eq(0).addClass("curr").siblings("dd").removeClass("curr");
			$(".index1 dl dd.curr").parent("dl").prev("ul").find("li").eq(0).fadeIn().siblings("li").fadeOut();
			$(".slider-bg li").eq(0).fadeIn().siblings("li").fadeOut();
		}
		
		
	}
	
	//点击登录输入框的效果
	$(".re_pwd li .cont_in .text_in , .login_cont .login_list dd input").focus(function(){
		$(this).addClass("check");
	}).blur(function(){
		$(this).removeClass("check");
	});
	
	//点击快递选择效果
	$(".order_list li .in_cont .express_list a").click(function(){
		$(this).addClass("curr").siblings("a").removeClass("curr");
	});
	
	//日期控件
	var logic = function( currentDateTime ){
	if( currentDateTime.getDay()==6 ){
		this.setOptions({
			minTime:'11:00'
		});
	}else
		this.setOptions({
			minTime:'8:00'
		});
	};
	if($('input.time').length>0){
        $('input.time').datetimepicker({
            onChangeDateTime:logic,
            onShow:logic
        });
    }

	
	
	
})



$(document).ready(function () {
	/*banner carousel*/
	var btn = $("#slider-btn li");
	var sliderImg = $("#slider-back p");
	var $bannerTxt = $(".banner-txt");
	var $sliderTxt = $(".slider-txt");
	var $sliderLinkBtn = $(".banner-txt a");
	var iNow = 0;
	btn.each(function (index) {
		$(this).mouseover(function () {
			slide(index);
		});


		$(this).data("index");
	});

	function slide(index) {
		iNow = index;
		btn.eq(index).addClass("slider-active").siblings().removeClass();
		var bannerTxtActive = $bannerTxt.eq(index);
		var slideElements = bannerTxtActive.children();
		bannerTxtActive.siblings(".banner-txt").stop(true).fadeOut(100);
		//初始化
		bannerTxtActive.show();
		slideElements.each(function(){
			var $_self = $(this);
			$_self.css({
				opacity: 0,
				top: $_self.data("start_top")||0,
				left: $_self.data("start_left")||0
			});
			$_self.stop(true).delay(400).animate({
				opacity: 1,
				top: $_self.data("to_top"),
				left: $_self.data("to_left")
			}, 1200);
			if($_self.data("class")!==undefined){
				$_self.removeClass($_self.data("class"));
				setTimeout(function(){
					$_self.addClass($_self.data("class"));
				},0);
			}
		});

		sliderImg.eq(index).siblings().stop().animate({opacity: 0}, 600);
		sliderImg.eq(index).stop().animate({opacity: 1}, 600);

	}

	function autoRun() {
		iNow++;
		if (iNow == btn.length) {
			iNow = 0;
		}
		slide(iNow);
	}

	var timer = setInterval(autoRun, 5000);
	btn.hover(function () {
			clearInterval(timer);
		}, function () {
			timer = setInterval(autoRun, 6000);
		}
	);
	//banner初始化
	slide(0);
	//新闻切换
	var newsParent = $(".news-list");
	var news = newsParent.children("p");
	//news--current
	news.first().css({
		opacity: 1,
		top: 0
	}).siblings().css({
		opacity: 0,
		top: -37
	});

	var newsDown = function () {
		var newsCurrent = newsParent.children(".news--current");
		var nextItem = newsCurrent.next();
		if (nextItem.length == 0) {
			nextItem = newsParent.children().first();
		}

		nextItem.css({
			opacity: 0,
			top: -37
		});


		nextItem.animate({opacity: 1, top: 0}, 300, function () {
			nextItem.addClass("news--current");
		});
		newsCurrent.animate({opacity: 0, top: 25}, 300, function () {
			newsCurrent.removeClass("news--current");
		});
	};
	var newsUp = function () {
		var newsCurrent = newsParent.children(".news--current");
		var nextItem = newsCurrent.prev();
		if (nextItem.length == 0) {
			nextItem = newsParent.children().last();
		}

		nextItem.css({
			opacity: 0,
			top: 25
		});

		nextItem.animate({opacity: 1, top: 0}, 300, function () {
			nextItem.addClass("news--current");
		});
		newsCurrent.animate({opacity: 0, top: -37}, 300, function () {
			newsCurrent.removeClass("news--current");
		});
	};

	var newsIntervalId = null;
	function newsAuto() {
		clearInterval(newsIntervalId);
		newsIntervalId = setInterval(newsDown, 8000);
	}
	newsAuto();
	$(".news-left").hover(function(){
		clearInterval(newsIntervalId);
	},function() {
		newsAuto();
	});

	$("#prev-news").click(function () {
		newsUp();
	}).hover(function(){
		clearInterval(newsIntervalId);
	},function() {
		newsAuto();
	});

	$("#next-news").click(function () {
		newsDown();
	}).hover(function(){
			clearInterval(newsIntervalId);
	},function() {
			newsAuto();
	});


	//解决方案cover进入动画
	$(".solution-block").hover(function () {
		$(this).children(".covers").stop(true, true).delay(300).animate({"z-index": 10}, 10).animate({
			"top": 0,
			opacity: 1
		}, 300);
	}, function () {
		$(this).children(".covers").stop(true, true).animate({
			"top": 279,
		}, 400).animate({"z-index": -5}, 10);
	});

	//页面滚动到视频链接位置时 banner出现动画
	$(function () {
		$(window).scroll(function () {
			var videoBanner = $(".video-link");
			var videoBannerShowPosition = videoBanner.prev().offset().top - window.innerHeight + 200;
			if ($(window).scrollTop() > videoBannerShowPosition) {
				videoBanner.slideDown(300);
				$(".video-text").animate({
					opacity: 1,
					top: 20
				},1000);
				$(".v-btn").animate({
					opacity:1,
					top:100
				},1200);
			}
		});

	});
});


































