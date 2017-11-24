//******************w*w*w.p*i*n*g*u*o*c*m*s.c*o*m******************//
//******************w*w*w.p*i*n*g*u*o*c*m*s.c*o*m******************//
//******************w*w*w.p*i*n*g*u*o*c*m*s.c*o*m******************//
//******************w*w*w.p*i*n*g*u*o*c*m*s.c*o*m******************//
//******************w*w*w.p*i*n*g*u*o*c*m*s.c*o*m******************//
//**********************Q*Q*2*3*3*8*0*6*5*0*9*3********************//
//注册表单提示
$('.tip').poshytip({
	className: 'tip-yellowsimple',
	showOn: 'focus',
	alignTo: 'target',
	alignX: 'center',
	alignY: 'top',
	offsetX: 0,
	offsetY: 5,
	allowTipHover: false
}); 

$(function(){$("#KinSlideshow").KinSlideshow();jQuery.validator.addMethod("lettersonly",function(value,element){return this.optional(element)||/^[^:%,'\*\"\s\<\>\&]+$/i.test(value);},"Letters only please");jQuery.validator.addMethod("lettersmin",function(value,element){return this.optional(element)||($.trim(value.replace(/[^\u0000-\u00ff]/g,"aa")).length>=3);},"Letters min please");jQuery.validator.addMethod("lettersmax",function(value,element){return this.optional(element)||($.trim(value.replace(/[^\u0000-\u00ff]/g,"aa")).length<=15);},"Letters max please");$("#register_form").validate({errorPlacement:function(error,element){var error_td=element.parent('td');error_td.find('label').hide();error_td.append(error);},submitHandler:function(form){ajaxpost('register_form','','','onerror');},rules:{user_name:{required:true,lettersmin:true,lettersmax:true,lettersonly:true,remote:{url:"/index.php/User/checkUser.html",type:'get',data:{username:function(){return $('#user_name').val();}}}},pwd:{required:true,minlength:6,maxlength:16},password_confirm:{required:true,equalTo:'#pwd'},email:{required:true,email:true,remote:{url:"/index.php/User/checkEmail.html",type:'get',data:{email:function(){return $('#email').val();}}}},captcha:{required:true,remote:{url:"/index.php/User/checkVerifyCode.html",type:'get',data:{captcha:function(){return $('#captcha').val();}}}},telphone:{required:true,number:true,remote:{url:"/index.php/User/checkTelphone.html",type:'get',data:{telphone:function(){return $('#telphone').val();}}}},user_qq:{required:true,number:true,remote:{url:"/index.php/User/checkUserqq.html",type:'get',data:{user_qq:function(){return $('#user_qq').val();}}}}},messages:{user_name:{required:'<font color="#00a2ca"><i class="icon iconfont">&#xe60c;</i>&nbsp;用户名不能为空</font>',lettersmin:'<font color="#f68300"><i class="icon iconfont">&#xe60c;</i>&nbsp;用户名必须在3-15个字符之间</font>',lettersmax:'<font color="#f68300"><i class="icon iconfont">&#xe60c;</i>&nbsp;用户名必须在3-15个字符之间</font>',lettersonly:'<font color="#f68300"><i class="icon iconfont">&#xe60c;</i>&nbsp;用户名不能包含敏感字符</font>',remote:'<font color="#f68300"><i class="icon iconfont">&#xe60c;</i>&nbsp;该用户名已经存在</font>'},pwd:{required:'<font color="#00a2ca"><i class="icon iconfont">&#xe60c;</i>&nbsp;密码不能为空</font>',minlength:'<font color="#f68300"><i class="icon iconfont">&#xe60c;</i>&nbsp;密码长度应在6-16个字符之间</font>',maxlength:'<font color="#f68300"><i class="icon iconfont">&#xe60c;</i>&nbsp;密码长度应在6-16个字符之间</font>'},password_confirm:{required:'<font color="#00a2ca"><i class="icon iconfont">&#xe60c;</i>&nbsp;请再次输入您的密码</font>',equalTo:'<font color="#f68300"><i class="icon iconfont">&#xe60c;</i>&nbsp;两次输入的密码不一致</font>'},email:{required:'<font color="#00a2ca"><i class="icon iconfont">&#xe60c;</i>&nbsp;电子邮箱不能为空</font>',email:'<font color="#f68300"><i class="icon iconfont">&#xe60c;</i>&nbsp;这不是一个有效的电子邮箱</font>',remote:'<font color="#f68300"><i class="icon iconfont">&#xe60c;</i>&nbsp;该电子邮箱已经存在</font>'},telphone:{required:'<font color="#00a2ca"><i class="icon iconfont">&#xe60c;</i>&nbsp;手机号不能为空</font>',number:'<font color="#f68300"><i class="icon iconfont">&#xe60c;</i>&nbsp;手机号码为11位数字</font>',remote:'<font color="#f68300"><i class="icon iconfont">&#xe60c;</i>&nbsp;该手机号已经存在</font>'},captcha:{required:'<font color="#00a2ca"><i class="icon iconfont">&#xe60c;</i>&nbsp;请输入验证码</font>',remote:'<font color="#f68300"><i class="icon iconfont">&#xe60c;</i>&nbsp;验证码不正确</font>'},user_qq:{required:'<font color="#00a2ca"><i class="icon iconfont">&#xe60c;</i>&nbsp;请输入常用QQ号码</font>',number:'<font color="#f68300"><i class="icon iconfont">&#xe60c;</i>&nbsp;QQ号码不正确</font>',remote:'<font color="#f68300"><i class="icon iconfont">&#xe60c;</i>&nbsp;该QQ号码已经注册</font>'}}});});function bind_account()
{var username=$("#bind_username").val();if(username=='')
{alert('请输入要绑定的网站用户名！');return false;}
var password=$("#bind_password").val();if(password=='')
{alert('请输入密码！');return false;}
$.post("/index.php/Qlogin/bind_account.html",{uname:username,upass:password},function(data,status)
{if(status=='success')
{if(data.status==1)
{alert('绑定成功！');window.location.href=data.data;}else
{alert('绑定失败：'+data.info);return false;}}else
{alert('绑定失败！');return false;}},'json');}