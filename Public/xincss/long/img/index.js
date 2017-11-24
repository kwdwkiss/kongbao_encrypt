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
	* @name 李春秀<lichunxiu@ruiec.cn>
	* @time 2016年2月29日 09:08:32
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
	* @name 李春秀<lichunxiu@ruiec.cn>
	* @time 2016年2月29日 09:08:32
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
	
	//banner图的自动滚动
	/*$(".index1 ul li").fadeOut(0).eq(0).fadeIn(0);
	var i = 0;
	var banner_roll=setInterval(function(){
		if($(".index1 ul li").length > (i+1)){
			$(".index1 ul li").eq(i).fadeOut(2000);
			$(".index1 ul li").eq(i).next("li").fadeIn(2000);
			i++;
			$(".index1 dl dd").removeClass("curr");
			$(".index1 dl dd").eq(i).addClass("curr");
		}
		else{
			$(".index1 ul li").eq(i).fadeOut(2000).siblings("li").eq(0).fadeIn(2000);
			$(".index1 dl dd").removeClass("curr");
			$(".index1 dl dd").eq(0).addClass("curr");
			i = 0;
		}
	},5000);
	//触摸时停止滚动
	$(".index1").mouseover(function(){ 
		clearInterval(banner_roll); 
	}).mouseout(function(){ 
		banner_roll = setInterval(function(){ 
			if($(".index1 ul li").length > (i+1)){
				$(".index1 ul li").eq(i).fadeOut(2000).next("li").fadeIn(2000);
				i++;
				$(".index1 dl dd").removeClass("curr");
				$(".index1 dl dd").eq(i).addClass("curr");
			}
			else{
				$(".index1 ul li").eq(i).fadeOut(2000).siblings("li").eq(0).fadeIn(2000);
				$(".index1 dl dd").removeClass("curr");
				$(".index1 dl dd").eq(0).addClass("curr");
				i = 0;
			}
		},5000); 
	});
	
	//banner图的点击效果
	$(".index1 dl dd").click(function(){
		i=$(this).index(".index1 dl dd");
		$(".index1 dl dd").removeClass("curr");
		$(this).addClass("curr");
		$(".index1 ul li").eq(i).fadeIn(2000);
		$(".index1 ul li").eq(i).css("z-index","10");
		$(".index1 ul li").eq(i).siblings().css("z-index","10").fadeOut(2000);
	});*/
		
		 
	//点击注册第二步输入框的效果
	var check_email = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;	//email正则表达式
	var check_phone = /^1[3|4|5|8][0-9]\d{4,8}$/;	//电话正则表达式
	var check_pswd = /^((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{6,16}$/;	//密码正则
	var check_qq = /^[1-9][0-9]{4,}$/;  //qq正则
	$(".r_step_2 .cont_list dd .user_name").focus(function(){
		$(this).addClass("check");
		$(this).parent("dd").find(".warm").show().css("color","#3e3e3e").find(".hint").show();
		$(this).parent("dd").find(".warm").find("span").text("请输入用户名");
		$(this).parent("dd").find(".warm").find(".err , .right").hide();
	}).blur(function(){
		if($(this).val() == ""){
			$(this).addClass("err_in");
			$(this).parent("dd").find(".warm").show().css("color","#ff400f").find(".err").show();
			$(this).parent("dd").find(".warm").find("span").text("请输入用户名");
			$(this).parent("dd").find(".warm").find(".hint , .right").hide();			
		}else{
			$(this).removeClass("err_in");
			$(this).parent("dd").find(".warm").show().find(".right").show();
			$(this).parent("dd").find(".warm").find("span").text("");
			$(this).parent("dd").find(".warm").find(".hint , .err").hide();	
			$(".r_step_2 .cont_list dd .user_pswd").removeClass("disabled").removeAttr("disabled").focus();
		}
		$(this).removeClass("check");
	});
	$(".r_step_2 .cont_list dd .user_pswd").focus(function(){
		$(this).addClass("check");
		$(this).parent("dd").find(".warm").show().css("color","#3e3e3e").find(".hint").show();
		$(this).parent("dd").find(".warm").find("span").text("请输入6到16位非纯数字密码");
		$(this).parent("dd").find(".warm").find(".err , .right").hide();
	}).blur(function(){
		if(!check_pswd.test($(this).val())){
			$(this).addClass("err_in");
			$(this).parent("dd").find(".warm").show().css("color","#ff400f").find(".err").show();
			$(this).parent("dd").find(".warm").find("span").text("请输入6到16位非纯数字密码");
			$(this).parent("dd").find(".warm").find(".hint , .right").hide();			
		}else{
			$(this).removeClass("err_in");
			$(this).parent("dd").find(".warm").show().find(".right").show();
			$(this).parent("dd").find(".warm").find("span").text("");
			$(this).parent("dd").find(".warm").find(".hint , .err").hide();	
			$(".r_step_2 .cont_list dd .rep_pswd").removeClass("disabled").removeAttr("disabled").focus();
		}
		$(this).removeClass("check");
	});
	$(".r_step_2 .cont_list dd .rep_pswd").focus(function(){
		$(this).addClass("check");
		$(this).parent("dd").find(".warm").show().css("color","#3e3e3e").find(".hint").show();
		$(this).parent("dd").find(".warm").find("span").text("请输入确认密码");
		$(this).parent("dd").find(".warm").find(".err , .right").hide();
	}).blur(function(){
		if($(this).val() != $(".r_step_2 .cont_list dd .user_pswd").val()){
			$(this).addClass("err_in");
			$(this).parent("dd").find(".warm").show().css("color","#ff400f").find(".err").show();
			$(this).parent("dd").find(".warm").find("span").text("密码与确认密码不一致");
			$(this).parent("dd").find(".warm").find(".hint , .right").hide();			
		}else{
			$(this).removeClass("err_in");
			$(this).parent("dd").find(".warm").show().find(".right").show();
			$(this).parent("dd").find(".warm").find("span").text("");
			$(this).parent("dd").find(".warm").find(".hint , .err").hide();	
			$(".r_step_2 .cont_list dd .email").removeClass("disabled").removeAttr("disabled").focus();
		}
		$(this).removeClass("check");
	});
	$(".r_step_2 .cont_list dd .email").focus(function(){
		$(this).addClass("check");
		$(this).parent("dd").find(".warm").show().css("color","#3e3e3e").find(".hint").show();
		$(this).parent("dd").find(".warm").find("span").text("请输入邮箱");
		$(this).parent("dd").find(".warm").find(".err , .right").hide();
	}).blur(function(){
		if(!check_email.test($(this).val())){
			$(this).addClass("err_in");
			$(this).parent("dd").find(".warm").show().css("color","#ff400f").find(".err").show();
			$(this).parent("dd").find(".warm").find("span").text("请输入合法的邮箱号");
			$(this).parent("dd").find(".warm").find(".hint , .right").hide();			
		}else{
			$(this).removeClass("err_in");
			$(this).parent("dd").find(".warm").show().find(".right").show();
			$(this).parent("dd").find(".warm").find("span").text("");
			$(this).parent("dd").find(".warm").find(".hint , .err").hide();	
			$(".r_step_2 .cont_list dd .code_in").removeClass("disabled").removeAttr("disabled").focus();
		}
		$(this).removeClass("check");
	});
	$(".r_step_2 .cont_list dd .code_in").focus(function(){
		$(this).addClass("check");
		$(this).parent("dd").find(".warm").show().css("color","#3e3e3e").find(".hint").show();
		$(this).parent("dd").find(".warm").find("span").text("请输入验证码");
		$(this).parent("dd").find(".warm").find(".err , .right").hide();
	}).blur(function(){
		if($(this).val() == ""){
			$(this).addClass("err_in");
			$(this).parent("dd").find(".warm").show().css("color","#ff400f").find(".err").show();
			$(this).parent("dd").find(".warm").find("span").text("请输入验证码");
			$(this).parent("dd").find(".warm").find(".hint , .right").hide();			
		}else{
			$(this).removeClass("err_in");
			$(this).parent("dd").find(".warm").show().find(".right").show();
			$(this).parent("dd").find(".warm").find("span").text("");
			$(this).parent("dd").find(".warm").find(".hint , .err").hide();	
		}
		$(this).removeClass("check");
	});
	
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





































