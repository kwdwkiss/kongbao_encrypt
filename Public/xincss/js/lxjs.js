function mibao_submit()
{  
var xincaption="";
	var mibao_daan = $("#mibao_daan");
	var mibao_daan_old = $("#mibao_daan_old");
	var mibao_daan_repass = $("#mibao_daan_repass");
	if(old_mibao_display!="none"){
		xincaption="新";
	 if ($("#mibao_name_old").val()==""){ //没有再次输入密码的时候
        alert('请选择旧安全问题！');
        return false;
      }
     if (mibao_daan_old.val()==""){ //没有再次输入密码的时候
        alert('请输入旧保密答案！');
        return false;
      }
	}
	if ($("#mibao_name").val()==""){ //没有再次输入密码的时候
        alert('请选择'+xincaption+'安全问题！');
        return false;
      }
  if (mibao_daan.val()==""){ //没有再次输入密码的时候
        alert(xincaption+'保密答案不能为空！');
        return false;
      }
    if (mibao_daan_repass.val()==""){ //没有再次输入密码的时候
        alert('请再输入'+xincaption+'保密答案！');
        return false;
      }     
  if(mibao_daan_repass.val()!=mibao_daan.val()){   //再次输入密码不正确的时候
  	  alert('两次输入的保密答案不一致！');
      return false;
     }    
}
function zhaohui_submit()
{var mibao_daan=$("#mibao_daan");var mibao_email=$("#mibao_email");if($("#mibao_name").val()==""){alert('请选择提问！');return false;}
if(mibao_daan.val()==""){alert('请输入提问答案！');return false;}
if(mibao_email.val()==""){alert('请输入你当时注册的邮箱！');return false;}}

function fahuodi_email()
 {
    var email = $("#email").val();
    if (email == "") {
        alert('您还没有填写邮箱地址！');
        return false;
    }
   
}
function emailpwd_submit()
 {
	var user_password = $("#user_password");
    var reuser_password = $("#reuser_password");
	if (user_password.val() == "") {
        alert('您还没有输入密码！');
        return false;
    }
    if (reuser_password.val() == "") {
        alert('请再输入密码！');
        return false;
    }
   if (reuser_password.val() != user_password.val()) {
        alert('两次输入的密码不一致！');
        return false;
    }
}