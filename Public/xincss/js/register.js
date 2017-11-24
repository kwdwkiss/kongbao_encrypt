//$(document).ready(function() { 

	$.formValidator.initConfig({formID:"register", theme:"ArrowSolidBox",debug:false,submitOnce:true, onSuccess:function(){
			$(".submit").attr("disabled", true);
			var tips = core.tips("正在注册，请稍后……", 60, "loading");
			$("#register").ajaxSubmit({
				success:function(data){

					tips.close();
					
					var json = eval('json = ' + data);
					if (json.result){
						window.location = '/register.html?a=success&id=' + json.id;
					}else{
						$.dialog.tips(json.text, 2, 'error', function(){
							$(".submit").attr("disabled", false);
						});
					}
				}
			});

		},
		submitAfterAjaxPrompt : '有数据正在异步验证，请稍等...'
	});


	$("#email").formValidator({onShow:"邮箱用于登录，激活账号、及密码找回",onFocus:"邮箱用于登录，激活账号、及密码找回",onCorrect:"填写正确"}).inputValidator({min:6,max:100,onError:"邮箱填写错误"}).regexValidator({regExp:"^[\\w\\.\\-]+@([\\w\\-]+\\.)+[a-z]{2,4}$",onError:"你输入的邮箱格式不正确"}).ajaxValidator({
		dataType : "html",
		async : true,
		url : "/register.html?a=ajaxcheckemail",
		success : function(data){
            if(data=='1'){
				return true;
			}else{
          		return false;
			}
			return false;
		},
		buttons: $("#button"),
		error: function(jqXHR, textStatus, errorThrown){alert("服务器没有返回数据！");},
		onError : "该邮箱不可用",
		onWait : "请稍候..."
	});


	$("#mobile").formValidator({onShow:"手机号码可用于登录、激活账号、密码找回",onFocus:"手机号码可用于登录、激活账号、密码找回",onCorrect:"填写正确"}).inputValidator({min:11,max:11,onError:"手机号码填写错误"}).regexValidator({regExp:"^1[34578][0-9]{9}$",onError:"你输入的手机号码不正确"}).ajaxValidator({
		dataType : "html",
		async : true,
		url : "/register.html?a=ajaxcheckmobile",
		success : function(data){
            if(data=='1'){
				$("#sendcode").attr("disabled", false);
				return true;
			}else{
				$("#sendcode").attr("disabled", true);
          		return false;
			}
			return false;
		},
		buttons: $(".submit"),
		error: function(jqXHR, textStatus, errorThrown){
			$.dialog({
				title:"错误提示",
				content:"服务器没有返回数据！",
				icon:"error"	
			});
		},
		onError : function(){
			$("#sendcode").attr("disabled", true);
			return "该手机号码不可用";
		},
		onWait : "请稍候..."
	});


	$("#password").formValidator({onShow:"密码由" + config.passwordMin + "-" + config.passwordMax + "个任意字符组成",onFocus:"密码由" + config.passwordMin + "-" + config.passwordMax + "个任意字符组成",onCorrect:"密码填写正确"}).inputValidator({min:config.passwordMin,max:config.passwordMax,onError:"密码填写错误"});


	$("#password2").formValidator({onShow:"输再次输入密码",onFocus:"输再次输入密码",onCorrect:"填写正确"}).inputValidator({min:1,onError:"请再次输入密码"}).compareValidator({desID:"password",operateor:"=",onError:"两次输入的密码不一致"});


	$("#mobilecode").formValidator({onShow:"请输入收到的6位短信效验码",onFocus:"请输入收到的6位短信效验码",onCorrect:"短信效验码填写正确"}).inputValidator({min:6,max:6,onError:"短信效验码填写错误"}).ajaxValidator({
		dataType : "html",
		async : true,
		url : "/register.html?a=ajaxcheckmobilecode",
		success : function(data){
            if(data=='1'){
				return true;
			}else{
          		return false;
			}
			return false;
		},
		buttons: $("#button"),
		error: function(jqXHR, textStatus, errorThrown){alert("服务器没有返回数据！");},
		onError : "短信效验码错误",
		onWait : "请稍候..."
	});


	$("#invitationcode").formValidator({onFocus:"请输入邀请码",onFocus:"请填写邀请码",onCorrect:"邀请码填写正确"}).inputValidator({min:1,onError:"请填写邀请码"}).regexValidator({regExp:"^([a-zA-Z0-9]+)$",onError:"邀请码填写错误"}).ajaxValidator({
		dataType : "html",
		async : true,
		url : "/register.html?a=ajaxcheckinvitationcode",
		success : function(data){
			if(data=="1"){
				return true;
			}else{
				return false;
			}
			return false;
		},
		buttons: $("#button"),
		error: function(jqXHR, textStatus, errorThrown){
			$.dialog({
				title:"错误提示",
				content:"服务器没有返回数据！",
				icon:"error"
			});
		},
		onError : "邀请码填写错误",
		onWait : "请稍候..."
	});



	$("#captcha").formValidator({onFocus:"请输入验证码",onFocus:"请填写验证码",onCorrect:"验证码填写正确"}).inputValidator({min:1,onError:"请填写验证码"}).regexValidator({regExp:"^([a-zA-Z0-9\\u4E00-\\u9FA5\\uF900-\\uFA2D]+)$",onError:"验证码填写错误"}).ajaxValidator({
		dataType : "html",
		async : true,
		url : "/?m=api&c=captcha&action=check",
		success : function(data){
			if(data=="1"){
				return true;
			}else{
				return false;
			}
			return false;
		},
		buttons: $("#button"),
		error: function(jqXHR, textStatus, errorThrown){
			$.dialog({
				title:"错误提示",
				content:"服务器没有返回数据！",
				icon:"error"
			});
		},
		onError : "验证码填写错误",
		onWait : "请稍候..."
	});







	var sendtime = $("#sendtime").val();
	var buttonval = $("#sendcode").val();


	$("#sendcode").ajaxsend({
		url:'/register.html?a=sendMobileCode',
		before:function(){
			if ($("#mobile").val().length<11){
				$.dialog.tips("请先填写手机号码", 1.5, 'error');
				return false;
			}else{
				return true;	
			}
		},
		data:function(){
			return {
				mobile:$("#mobile").val(),
				captcha:$("#captcha").val()
			}
		},
		time:60,
		restTime:sendtime,
		text:'再次发送效验码',
		success:function(json){
			$.dialog.tips(json.text, 2, (json.result ? 'success' : 'error'));
		},
		error:function(){
			alert('发送失败');
		}
	});


//});






