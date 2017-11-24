// JavaScript Document

//hover延迟事件
(function($){
	$.fn.hoverDelay = function(options){
		var defaults = {
			hoverDuring: 200,          //hover延迟时间
			outDuring: 200,				
			hoverEvent: function(){
				$.noop();
			},
			outEvent: function(){
				$.noop();    
			}
		};
		var sets = $.extend(defaults,options || {});
		var hoverTimer, outTimer, that = this;
		return $(this).each(function(){
			$(this).hover(function(){
				clearTimeout(outTimer);
				hoverTimer = setTimeout(function(){sets.hoverEvent.apply(that)}, sets.hoverDuring);
			},function(){
				clearTimeout(hoverTimer);
				outTimer = setTimeout(function(){sets.outEvent.apply(that)}, sets.outDuring);
			});    
		});
	}      
})(jQuery);

//007通用幻灯片函数，wzh_ty_Slideshow(fBigUl,fSmallUl),fBigUl为大的幻灯片列表，fSmallUl为小的幻灯片列表,fTime为间隔时间
function wzh_ty_Slideshow(fBigUl,fSmallUl,fTime){
	var oSlideBigUl=$(fBigUl);   						//幻灯片图片列表
	var oSlideBigLi=oSlideBigUl.children("li");			//幻灯片图片列表项
	var oSlideSmallUl=$(fSmallUl);						//幻灯片按钮列表	
	var oSlide_Size=oSlideBigLi.size();                 //幻灯片按钮数量
	var i=0;
	for(i=0;i<oSlide_Size;i++)							//生成按钮列表项
	{
		oSlideSmallUl.append("<li></li>");
		
	};
	var oSlideSmallLi=oSlideSmallUl.children("li");				//幻灯片按钮列表项
	oSlideSmallLi.first().addClass("active");			
	var oSlideSmallLi_width=oSlideSmallLi.width();
	var oSlideSmallUl_width=oSlideSmallLi_width*oSlide_Size;
	var c=0;											  	  	//模拟点击索引值
	oSlideSmallUl.css({"marginLeft":-oSlideSmallUl_width/2});      
	oSlideSmallLi.click(function(){								//点击小按钮切换大图片
		var oIndex=$(this).index();
		oSlideBigLi.eq(oIndex).addClass("active").fadeIn("slow");
		oSlideSmallLi.removeClass("active").eq(oIndex).addClass("active");
		var n=0;
		for(n=0;n<oSlide_Size;n++)
		{
			if(n!=oIndex)
			{
				oSlideBigLi.eq(n).removeClass("active").fadeOut("slow");	
			};	
		};
		c=oIndex;
	});
	var oTimer=setInterval(function(){                    //每隔一段时间模拟点击下一个按钮
		c=c+1;
		if(c>=oSlide_Size)
		{
			c=0;	
		};	
		oSlideSmallLi.eq(c).trigger("click");
	},fTime);
};


$(document).ready(function(){
	//登陆注册表单聚焦效果
	var oBox=$(".login_form .tbox");
	var oText=$(".login_form .tbox i");
	var oInput=$(".login_form .tbox input");
	
	oText.click(function(){
		$(this).hide();
		$(this).siblings("input").focus();
	});
	oInput.focus(function(){
		$(this).siblings("i").hide();		
	});
	oInput.blur(function(){
		if($(this).val()=='')
		{
			$(this).siblings("i").show();	
		};	
	});

	
	
	//登陆注册tab表单效果
	$(".login_form .f_cont .lbox").eq(0).show();
	$(".login_form .f_tit ul li a").click(function(){
		$(".login_form .f_tit ul li a").removeClass("cur");
		$(this).addClass("cur");
		var oIndex=$(this).parent("li").index();
		$(this).parents(".login_form").find(".lbox").hide().eq(oIndex).show();
	});		
	
	//内页表单效果
	//$(".tabBox").find(".tabLi").eq(0).addClass("cur");
	/*$(".tabBox .tab_btn a").click(function(){
		var oIndex=$(this).index();
		$(this).parent().children().removeClass("cur");
		$(this).addClass("cur");
		$(this).parents(".tabBox").find(".tabLi").hide().eq(oIndex).show();
	});*/
	
	//左侧菜单点击效果
	$(".c_leftBox dl dt").click(function(){
		//$(this).parents(".c_leftBox").find("dl").children("dt").removeClass("cur");
       $(this).siblings("dd").slideToggle();
	   $(this).children("a").toggleClass("curr");
		//$(this).addClass("cur");

	});
	var oDl_size=$(".c_leftBox dl").size();
	for(var a=0;a<oDl_size;a++)
	{
		$(".c_leftBox dl").eq(a).children("dd").eq(0).addClass("dd1");			
	};
	
	//开设分站滚动效果
	var oScrollMenu=$(".subTit");
	if(oScrollMenu.size()>0)
	{
		var oLi=$(".subBox .subTit ul li")
		var oLiSize=oLi.size();
		var oLiWidth=960/oLiSize-3;
		oLi.width(oLiWidth)
		oLi.click(function(){
			$(".subBox .subTit ul li").removeClass("curr");
			var oIndex=$(this).index();
			$(this).addClass("curr");
			$(this).parents(".subBox").find(".sTab").hide().eq(oIndex).show();
		});
		/*var oMenu_top=oScrollMenu.offset().top;
		$(window).scroll(function(){
			if($(window).scrollTop()>oMenu_top)
			{
				oScrollMenu.css({"position":"fixed","top":"0px"});
			}
			else
			{
				oScrollMenu.css({"position":"relative"});	
			};
		});
		$(".subBox .subTit ul li").click(function(){
			var oIndex=$(this).index();
			$(this).parent().children().removeClass("curr");
			$(this).addClass("curr");	
			var oDl=$(this).parents(".subTit").siblings(".subCont").find("dl").eq(oIndex);
			var oDl_offset=oDl.offset().top;
			$("html,body").animate({"scrollTop":oDl_offset},600);
		});*/
		
		
	};
	
	
	//空包下单
	$(".mn_select").click(function(){
		$(this).next(".mn_select_list").show();
	});
	
	$(".label_select").mouseleave(function(){
		$(this).find(".mn_select_list").hide();	
	});
	$(".mn_select_list ul li a").click(function(){
		var thetext = $(this).text();
		var theValue = $(this).attr("value");
		if(theValue!=""){ 	
			$(this).parents(".label_select").find(".Select_kuaidi").val(theValue);
			$(this).parents(".label_select").children(".mn_select").find("a").eq(0).empty().text(thetext);	 
			$(this).parents(".mn_select_list").hide();
		}
	});
	
	//充值页面触碰tip效果
	$(".recharge .c_form .tip").hover(function(){
		$(this).siblings(".tip_mes").show();	
	},function(){
		$(this).siblings(".tip_mes").hide();	
	});
	
	//充值页面下拉选择框效果
/*	var oInput = $(".recharge .Select_kuaidi")
	oInput.keyup(function (){
		this.value = isNaN(parseInt(this.value))?"":parseInt(this.value);
	});*/
	
	//三级联动效果
	var oProvince=$("#s_province");   
	var oCity=$("#s_city");		
	var oCounty=$("#s_county");
	var oProvince_val=oProvince.val();
	var oCity_val=oCity.val();
	var oCounty_val=oCounty.val();
	var oProvince_option_size=oProvince.children("option").size();
	var oCity_option_size=oCity.children("option").size();
	var oCounty_option_size=oCounty.children("option").size();
	$(".cProvince .mn_select a").eq(0).text(oProvince_val);
	$(".cCity .mn_select a").eq(0).text(oCity_val);
	$(".cCounty .mn_select a").eq(0).text(oCounty_val);
	for(var a=1;a<oProvince_option_size;a++)
	{
		var oPtion=	oProvince.children("option").eq(a).text();
		var oLi='<li><a href="javascript:void(0)" >'+oPtion+'</a></li>';
		$(".cProvince .mn_select_list ul").append(oLi);
	};
	
	
	//全局问号提示效果
	var wzh_TxDiv ='<span class="wzh_ts"></span>'
	if($(".icon_ye").size()>0)
	{
		$(".icon_ye").hover(function(){
			var oTop=$(this).offset().top-30;
			var oLeft=$(this).offset().left;
			var oText=$(this).attr("wzh_ts");
			if(oText!='')
			{
				$("body").append(wzh_TxDiv);
				$(".wzh_ts").css({"left":oLeft,"top":oTop});
				$(".wzh_ts").text(oText)
				$(".wzh_ts").animate({"opacity":1,"top":oTop-5});
			};
			
		},function(){
			$(".wzh_ts").remove();
			$(".wzh_ts").hide();
		});
		
		
	}
   	
	//移动到头像提示更改头像
	$(".user_info dt").hover(function(){
		$(this).append("<div class='change_img' onclick='wzh_trigger(this)'>更改头像</div>");
	},function(){
		$(".change_img").remove();
	});	
	
	//触碰头部Home菜单下拉效果
	$("li.home").hoverDelay({
		hoverEvent : function(){
			$(".nav_2").slideDown(100);
			$("li.home .bg").fadeIn(400);
		},
		outEvent : function(){
			$(".nav_2").slideUp(100);
			$("li.home .bg").fadeOut(400);
		}	
	});
	
	//首页轮播图片效果调用
	wzh_ty_Slideshow(".slidebox .slide-img",".slidebox .slide-num",5000);
	
	//
	var oInput = $(".recharge .cz_ul input")
	oInput.keyup(function (){
		this.value = isNaN(parseInt(this.value))?"":parseInt(this.value);
	});
	$(".cz_ul li").click(function(){
		$(".cz_ul li").removeClass("select");
		$(this).addClass("select");
		var oIndex=$(this).index();
		if(oIndex!=0)
		{
			var oMoney=parseInt($(this).text());
			$(".cz_ul li").eq(0).find("input").val(oMoney);
/*			$(".cz_ul li").eq(0).find("input").attr("disabled","disabled");	*/
		}
		else
		{
			$(".cz_ul li").eq(0).find("input").val("最低充值5元");
			
			/*$(".cz_ul li").eq(0).find("input").removeAttr("disabled");	*/	
			$(".cz_ul li").eq(0).find("input").focus();
		};
	});
	
	//会员升级页面快递tip点击效果
	if($(".subBox ul li").size()>0)
	{
		var oLi=$(".subBox ul li");
		var oTip=$(".subBox .tip");
		oLi.click(function(){
			var oIndex=$(this).index();
			if(oIndex==0)
			{
				oTip.css({"left":"670px"});	
			}
			else
			{
				oTip.css({"left":"175px"});	
			};	
		});
		setInterval(function(){
			oTip.animate({"top":"5px"},600,function(){
				oTip.animate({"top":"0px"},300)	
			});	
		},3000);
	}
	
	//会员升级图标添加样式
	if($(".dl_djys .vip").size()>0)
	{
		var oSize=$(".dl_djys table").size();
		for(var a=0; a<oSize; a++)
		{
			var b=$(".dl_djys table").eq(a).find(".vip").size();
			for(var c=0;c<b;c++)
			{
				var oVip="vip"+c
				$(".dl_djys table").eq(a).find(".vip").eq(c).addClass(oVip);	
			};
		};	
	}
	
	//公告自动滚动效果
	if($(".ann ul li ").size()>0)
	{
		var oLi=$(".ann ul li");
		var oLi_size=oLi.size();
		var oLi_height=oLi.height();
		var a=0;
		setInterval(function(){
			if(a<oLi_size-1)
			{
				a=a+1;	
			}
			else
			{
				a=0;	
			}
			
			$(".ann ul").animate({"marginTop":-a*oLi_height})	
		},5000);
	};
	
	//点击下单详情说明下拉
	$(".xqsm").click(function(){
		$(".xq_cont").slideToggle();	
	});
	
	//首页新闻点击切换效果
	$(".index_text .ind_tit a").click(function(){
		var oIndex=$(this).index();
		$(".index_text .ind_tit a").removeClass("curr");
		$(this).addClass("curr");
		$(".index_text .ind_cont .news_tab").removeClass("curr").eq(oIndex).addClass("curr");
	});
	
	//空包下单页点击添加按钮下拉选择地址
	$(".btn_tj").click(function(){
		$(".addBox").slideToggle();	
	});
	//空包下载点击提交发货地址选中
		var oLi=$(".mr_address .mn_select_list");
		if(oLi.find(".curr").size()>0)
		{
			var oText=oLi.find(".curr").eq(0).text();
			$("#add_ress").text(oText);
		};
		
	//首页新闻图片切换效果
	if($(".news_tab .slide_box").size()>0)
	{
		var oSrc1=$(".slide_box .s_nav").find("li").eq(0).children("img").attr("src");
		$(".slide_box .s_bigimg").find("img").eq(0).attr("src",oSrc1);
		$(".slide_box .s_nav").find("li").eq(0).addClass("cur");
		$(".index_text .ind_cont .news_tab .slide_box .s_nav ul li").click(function(){
			var oSrc=$(this).children("img").attr("src");
			$(".slide_box .s_bigimg img").eq(0).attr("src",oSrc);
			$(".index_text .ind_cont .news_tab .slide_box .s_nav ul li").removeClass("cur");
			$(this).addClass("cur");
		});
		var oLi=$(".s_nav ul li");
		var oLi_width=oLi.width()+4;
		var oLi_size=oLi.size();
		oLi.parent("ul").width(oLi_width*oLi_size);
		//点击下面左右按钮
		var a=0;
		$(".s_nav .b_left").click(function(){
			if(a>=-oLi_size+5)
			{
				a=a-1
			}
			else
			{
				a=0;	
			};
			$(".s_nav ul").stop().animate({"left":oLi_width*a});	
		});
		$(".s_nav .b_right").click(function(){
			if(a<0)
			{
				a=a+1
			}
			else
			{
				a=-oLi_size+5;
			};
			$(".s_nav ul").stop().animate({"left":oLi_width*a});	
		});
		//点击上面左右切换按钮
		var b=0;
		$(".s_bigimg .b_right").click(function(){
			if(b<oLi_size-1)
			{
				b=b+1;
				$(".s_nav ul li").eq(b).trigger("click");	
			}else
			{
				b=0;
				$(".s_nav ul li").eq(b).trigger("click");	
			};
		});
		$(".s_bigimg .b_left").click(function(){
			if(b>0)
			{
				b=b-1;
				$(".s_nav ul li").eq(b).trigger("click");	
			}else
			{
				b=oLi_size-1;
				$(".s_nav ul li").eq(b).trigger("click");	
			};
		});
	};
	
	//首页背景更换成白色
	if($(".login_bg").size()>0)
	{
		$("body").css({"background":"#fff"});	
	};
	
	//点击注册判断密码是否为空，是的话显示提示。
	$(".login_form ul li").eq(1).click(function(){
		var oPas=$(".register .l_password");
		var oPas_size=oPas.size();
		for(var a=0; a<oPas_size;a++)
		{
			if($(".register .l_password").eq(a).children("input").val()=='')
			{
				$(".register .l_password").eq(a).children("i").show();	
			}else
			{
				$(".register .l_password").eq(a).children("i").hide();	
			};
		};
	});
	
	//升级会员判断TAB列表数量，如果为一的时候就不要显示TIP提示
	if($(".subTit ul li").size()<=1)
	{
		$(".subTit .tip").hide();	
	};
	
	
	
});

//充值页面点击查看流程下拉
function jy_xl(){
	$(".jy_lc").slideDown();
	//var oTop = $(".jy_lc").offset().top;
	//$("html,body").animate({"scrollTop":oTop});
};

//判断页面是否加载完成，加载完成的时获取登陆页面浏览器保存的input值
/*document.onreadystatechange = subSomething;//当页面加载状态改变的时候执行这个方法. 
function subSomething() 
{ 
	if(document.readyState == "complete") //当页面加载状态 
	{
		var oInput=$(".lbox .l_name");
		var oInput_size=oInput.size();
		for(var a=0; a<oInput_size;a++)
		{
			var oVal=oInput.eq(a).children("input").val();
			if(oVal!='')
			{
				oInput.eq(a).children("i").hide();	
				$(".lbox .l_password").children("i").hide();
			}
			else
			{
				oInput.eq(a).children("i").show();
				$(".lbox .l_password").children("i").show();
			}
			
		}
	}
} 
*/
function wzh_trigger(obj){
	$(obj).siblings("img").trigger("click");
};


function copyToClipBoard(){ 
		window.clipboardData.setData("Text",$("#copy_text").text());     
		alert("复制成功！");     
		$("#copy_text").css({"text-decoration":"underline"});
}


	