//******************w*w*w.p*i*n*g*u*o*c*m*s.c*o*m******************//
//**********************Q*Q*2*3*3*8*0*6*5*0*9*3********************//
function pay_submit()
 {
    var account = $('#account').val();
    var account_name = $('#account_name').val();
    var valid_account = $("#valid_account").val();
    if (account == '')
    {
        alert('请填写支付宝账号!');
        return false;
    }
    if (account_name == '')
    {
        alert('请填写支付宝名称!');
        return false;
    }
}
function change_submit()
 {
    var num = /^[0-9]+(.[0-9]{1,2})?$/;
    var money = $('#money').val();
    var valid_money = $("#valid_money").val();
    if (money == '')
    {
        alert('请填写转换金额!');
        return false;
    }
    if (!money.match(num))
    {
        alert('转换金额格式不对!(XXX.XX)');
        $('#money').focus();
        return false;
    }
    if (money <= 0)
    {
        alert('转换金额必须大于0');
        return false;
    }
    if (money % 1 != 0)
    {
        alert('转换金额必须为整数');
        return false;
    }
    if (parseFloat(money) > parseFloat(valid_money))
    {
        alert('转换金额不能大于账户可用金额！');
        return false;
    }
}

function mibao_submit()
 {
    var xincaption = "";
    var mibao_daan = $("#mibao_daan");
    var mibao_daan_old = $("#mibao_daan_old");
    var mibao_daan_repass = $("#mibao_daan_repass");
    if (old_mibao_display != "none") {
        xincaption = "新";
        if ($("#mibao_name_old").val() == "") {
            alert('请选择旧安全问题！');
            return false;
        }
        if (mibao_daan_old.val() == "") {
            alert('请输入旧保密答案！');
            return false;
        }
    }
    if ($("#mibao_name").val() == "") {
        alert('请选择' + xincaption + '安全问题！');
        return false;
    }
    if (mibao_daan.val() == "") {
        alert(xincaption + '保密答案不能为空！');
        return false;
    }
    if (mibao_daan_repass.val() == "") {
        alert('请再输入' + xincaption + '保密答案！');
        return false;
    }
    if (mibao_daan_repass.val() != mibao_daan.val()) {
        alert('两次输入的保密答案不一致！');
        return false;
    }
}
function check_fields() {
    var title = $("[name='title']").val();
    var content = $("[name='content']").val();
    if ($.trim(title) == "") {
        alert("标题不能为空");
        return false;
    }
    if ($.trim(content) == "") {
        alert("内容不能为空");
        return false;
    }
    return true;
}
function mycheck() {
    if ($("#mibao_name").val() == "") {
        alert("请选择保密问题");
        return false
    }
    if ($("#mibao_daan").val() == "") {
        alert("请输入保密答案");
        return false
    }
    return true;
}
//
pos = 0;
function fahuodi_submit()
 {
    var name = $("#name").val();
    var shouji = $("#shouji").val();
    var pr1 = $("#pr1").val();
    var ci1 = $("#ci1").val();
    var co1 = $("#co1").val();
    if (name == "") {
        alert('发货姓名不能为空！');
        return false;
    }
    if (shouji == "") {
        alert('发货电话不能为空！');
        return false;
    }
    if (pr1 == "") {
        alert('发货省份不能为空！');
        return false;
    }
    if (ci1 == "") {
        alert('发货城市不能为空！');
        return false;
    }
    if (co1 == "") {
        alert('发货地区不能为空！');
        return false;
    }
}
function set_default(id)
 {
    if (confirm('确认将此地址信息为默认发货地址吗?'))
    {
        $.post("/index.php/User/address_default.html", {
            id: id
        },
        function(data, status)
        {
            if (data.status == 1)
            {
                document.location.reload();
            }
            else
            {
                alert(data.info);
            }
        },
        'json');
    }
    else
    {
        return false;
    }
}
 (function($) {
    $.fn.citySelect = function(options) {
        var defaults = {
            setId: ['#Province', '#City', '#Area'],
            stval: ['请选择省份', '请选择城市', '请选择地区'],
            czemt: 'i',
            inpvt: 'input[name^="cho"]',
            intva: true
        },
        opts = $.extend(defaults, options),
        _setId = opts.setId,
        _stval = opts.stval,
        _czemt = opts.czemt,
        _inpnt = opts.inpvt,
        len = _setId.length;
        $.fn.removelist = function(options) {
            var removdefa = {
                removeAll: false,
                thisindex: 0
            },
            optremove = $.extend(removdefa, options);
            var $_removebox = $(this),
            $_listall = $('ul li', $_removebox),
            $_listfirst = $('ul li:first', $_removebox),
            $_listsib = $('ul li:gt(0)', $_removebox),
            $_vala = $(_czemt, $_removebox),
            $_valb = $(_inpnt, $_removebox);
            if (optremove.removeAll) {
                $_listall.remove();
            } else {
                $_listsib.remove();
            }
            $_vala.text(_stval[optremove.thisindex]);
            $_valb.val(_stval[optremove.thisindex]);
            return this;
        };
        $.fn.appendlist = function(options) {
            var appdefa = {
                theindex: '0'
            },
            optapp = $.extend(appdefa, options);
            var $_appendbox = $(this),
            $_listbox = $('ul', $_appendbox),
            appendArray = dsy.Items[optapp.theindex],
            appList = '';
            if (typeof(appendArray) == "undefined") return false;
            for (var i = 0; i < appendArray.length; i++) {
                appList += '<li><a href="javascript:void(0)" alt="' + appendArray[i] + '">' + appendArray[i] + '</a></li>';
            }
            $_listbox.append(appList);
            appList = '';
        };
        function slide(str) {
            var oID = $(str),
            oClass = 'active',
            oList = $('ul', oID),
            closed;
            oID.click(function() {
                $(this).toggleClass(oClass);
                oList.stop(true, true).toggle();
            });
            closed = function() {
                oID.removeClass(oClass);
                oList.stop(true, true).hide()
            }
            $("body").click(function(e) {
                if (!$(e.target).is(str + " *")) {
                    closed();
                }
            });
        };
        $.fn.liClick = function() {
            var $_liA = $('li', _setId[0]),
            $_liB = $('li', _setId[1]),
            $_liC = $('li', _setId[2]),
            indA,
            indB,
            indC;
            $('li', _setId[0]).on('click', 
            function() {
                indA = $('li', _setId[0]).index(this) - 1;
                var _valA = $('a', this).attr('alt'),
                _emeltA = $(_czemt, _setId[0]),
                _inputA = $(_inpnt, _setId[0]);
                _emeltA.text(_valA);
                _inputA.val(_valA);
                $(_setId[1]).removelist({
                    thisindex: 1
                });
                $(_setId[1]).appendlist({
                    theindex: '0_' + indA
                });
                $(_setId[2]).removelist({
                    thisindex: 2
                });
                $('li', _setId[1]).on('click', 
                function() {
                    indB = $('li', _setId[1]).index(this) - 1;
                    var _valB = $('a', this).attr('alt'),
                    _emeltB = $(_czemt, _setId[1]),
                    _inputB = $(_inpnt, _setId[1]);
                    _emeltB.text(_valB);
                    _inputB.val(_valB);
                    $(_setId[2]).removelist({
                        thisindex: 2
                    });
                    $(_setId[2]).appendlist({
                        theindex: '0_' + indA + '_' + indB
                    });
                    $('li', _setId[2]).on('click', 
                    function() {
                        indC = $('li', _setId[2]).index(this);
                        var _valC = $('a', this).attr('alt'),
                        _emeltC = $(_czemt, _setId[2]),
                        _inputC = $(_inpnt, _setId[2]);
                        _emeltC.text(_valC);
                        _inputC.val(_valC);
                        return indC;
                    });
                });
            });
        };
        function show(obj) {
            $(obj).toggleClass('active').find('ul').slideToggle();
        }
        if (opts.intva) {
            for (var i = 0; i < len; i++) {
                $(_setId[i]).removelist({
                    thisindex: i
                });
                slide(_setId[i]);
            };
        }
        $(_setId[0]).appendlist({
            theindex: '0'
        });
        $.fn.liClick();
    };
})(jQuery);
$(function() {
    $(".click_btn.yqts").click(function() {
        $(".kongbao_list.xq_cont").stop().slideToggle();
    })
})
 function show_czlc(o) {
    var the_type = $("#show_czlc").attr("type");
    if (the_type != '_re') {
        $("#czlc_img").remove();
        $("#show_czlc").find("textarea").css("height", "182px");
        $("#show_czlc").attr("type", "_re");
    } else {
        $("#show_czlc").css("position", "relative").find("textarea").css("height", "405px");
        var cont = '';
        cont += '<div id="czlc_img" style=" position:absolute; top:2px; left:2px;">' + '<span class="close" style=""><img src="/Public/images/czlc1.png" width="685" height="400"></span>' + '</div>';
        $("body").on("click", "#czlc_img .close", 
        function() {
            $("#czlc_img").remove();
            $("#show_czlc").find("textarea").css("height", "182px");
            $("#show_czlc").attr("type", "_re");
        })
        $("#show_czlc").append(cont).attr("type", "");
    }
}
function show_jiaocheng() {
    art.dialog({
        content: '<div id="jiaocheng" style="overflow-x: hidden; width:961px; margin:0 auto;height: 600px;overflow-y: scroll">' + '<img src="/Public/images/scwj_01.jpg" width="961" height="615"/> ' + '<img src="/Public/images/scwj_02.jpg" width="961" height="385"/> ' + '<img src="/Public/images/scwj_03.jpg" width="961" height="397"/> ' + '<img src="/Public/images/scwj_04.jpg" width="961" height="400"/> ' + '<img src="/Public/images/scwj_05.jpg" width="961" height="737"/></div>'
    })
}
var is_enabled = -1;
var checkSubmitFlg = false;
function chk_submit()
 {
    if (!checkSubmitFlg)
    {
        checkSubmitFlg = true;
    } else {
        alert("双击无效，不能重复提交");
        return false;
    }
    if (is_enabled == -1)
    {
        alert('请先检测地址!');
        checkSubmitFlg = false;
        $("#btn_check").focus();
        return false;
    }
    if (is_enabled != 1)
    {
        alert('有错误数据，请调整后再提交!详细格式请看友情提示!');
        checkSubmitFlg = false;
        return false;
    }
}
function itemchange(obj)
 {
    $("#detail").html('');
    $("#current_text").html('');
	$("#danjia").html('');
	$("#wangdian").html('');
    $("#single_price").val('');
    var type_id = obj.val();
    if (type_id == '' || type_id == 0)
    {
        $("#detail").html('');
        $("#current_text").html('');
		$("#danjia").html('');
		$("#wangdian").html('');
        $("#single_price").val('');
    }
    $('#cheisnos').html('');
    $('#cheisnos').css('display', 'none');
    $('#addinputarrs').html('');
    $("#order_nums").val('0');
    $("#order_money").val('0');
    $('#postscript').val('');
    is_enabled = -1;
    $.post("/index.php/Order/getDetail.html", {
        id: type_id
    },
    function(data, status)
    {
        var return_data = data.data;
        var detail = return_data.detail.replace(/\|/gm, "\r\n")
        $("#detail").html(detail);
        var current_text = return_data.current;
		var danjia = return_data.danjia;
		var wangdian = return_data.wangdian;
        var single_price = return_data.price;
        var image_url = return_data.image_url;
        $("#down_url").attr('href', return_data.file_url);
        $('#image_url').attr('src', '/' + image_url);
        $("#current_text").html(current_text);
		$("#danjia").html(danjia);
		$("#wangdian").html(wangdian);
        $("#single_price").val(single_price);
    },
    'json');
}
function checkisnos() {
    var type_id = $("#type_id").val();
    if (type_id == "") {
        alert("请选择快递！");
        $("#type_id").focus();
        return false;
    }
    var address_id = $("#address_id").val();
    if (address_id == "") {
        alert("请选择发货地址！");
        $("#address_id").focus();
        return false;
    }
    addtext = $('#postscript').val();
    if (addtext == "") {
        alert("请您填写收货地址！");
        $("#postscript").focus();
        return false;
    }
	//pinguocms 2015.11.5
	if ($("#goods_name").val() == "") {
		alert("请填写商品名称");
		return false
	}
	if ($("#zhongliang").val() == "") {
		alert("请输入商品重量");
		return false
	}
	if ($("#send_netdot").val() == "") {
		alert("请输入服务网点地址");
		return false
	}
    var current_price = parseFloat($('#single_price').val());
    if (current_price <= 0) {
        alert("你选择的快递单价出错！");
        return false;
    }
      isno=1;
		 	  var addtextarr= new Array(); 
			  var adddan=new Array();
			  addtextarr=addtext.split("\n");
			  addstr="";
			  addinputarr="";
			  addsum=0;
			  //最多一次只能提交200个
			  if(addtextarr.length<=200){
			  for(i=0;i<addtextarr.length;i++){ 
				if(addtextarr[i]  && trim(addtextarr[i])!=''){
				 addtextarr[i] = addtextarr[i].replace(/\'/g, "");
				 addtextarr[i] = addtextarr[i].replace(/\,/g, "，");
				 addinputarr+="<input type='hidden' name='addinputarr["+addsum+"]' value='"+addtextarr[i]+"' >";  
				 adddan=trim(addtextarr[i]).split("，");
				 addsum+=1;
				//保存表单数据方便提交
				 if(adddan.length!=5 && adddan.length!=4){alert("第"+addsum +"行收货地址格式有错误，请仔细检查！");  isno=0;}
				 if(adddan.length==5)
				 {
				 	 var shouhuodizhi = adddan[3];//获取收件地址  
				 }else if(adddan.length==4)
				 {
				 	  var shouhuodizhi = adddan[2];//获取收件地址 
				 } 
				 var shdz_array =trim(shouhuodizhi).split(" ");
				 if(shdz_array.length<4)
				 {

				 	     alert("第"+addsum +"行收货地址格式中省、市、县之间应该用空格隔开，请仔细检查！");  isno=0;

     			 }
     			 //判断地址之间空格是否是多个
     			 if(exists_multispace(trim(shouhuodizhi)))
     			 {
     			 	 alert("第"+addsum +"行收货地址格式中省、市、县之间只能用一个空格隔开，请仔细检查！");  isno=0;
     			 }
				 addstr+="<tr height='25'><td class='addyes'>第"+addsum+"行</td>"; 
				 for(j=0;j<adddan.length;j++){
					 //如果不是四个淘宝的逗号格式提示错误
					 if(adddan.length!=5 && adddan.length!=4 ){
						 //如果有数据就显示 ，没有显示空
						 if(adddan[j]){
								addstr+="<td  class='c_fenhong'>" +adddan[j]+"</td>";
						 }
						 else{
									addstr+="<td  class='c_3'>" +"</td>"; 
							 }
					 }else
					 {
					 	if(adddan.length==4 && j==2)
					 	{
					 		addstr+="<td class='c_3'></td>";	
					 	} 
						 if(isno==0)
					 	  {
					 	  	addstr+="<td class='c_fenhong'>" +adddan[j]+"</td>";	 
					 	  }else{
					 	  	addstr+="<td>" +adddan[j]+"</td>";	 
					 	  } 
					 }
					 }
				  addstr+="</tr>";
				  } 
				  }
			  }
			  else{
				  alert("亲，一次最多只能批量下200单，请减少收货地址！");  isno=0;
				  } 
    kuaidisum = addsum * current_price;
    $("#order_nums").val(addsum);
    $("#order_money").val(kuaidisum);
    var table_html = "<table style='text-align:center;vertical-align:middle;' cellpadding='5' width='940px' cellspacing='1' ><tr height='25'><th width='10%'><b>行</b></th><th width='10%'><b>名字</b></th><th width='15%''><b>手机</b></th><th width='15%'><b>电话</b></th><th  width='40%'><b>地址</b></th><th  width='10%'><b>邮编</b></th></tr>" + addstr + "</table>";
	
    var jiage_html = "" + current_price + "元 × " + addsum + "单 = 应付款：<i class=color_or>" + kuaidisum.toFixed(2) + "元</i><input type='hidden' value=" + kuaidisum.toFixed(2) + " name='kuaidipicle' id='kuaidipicle' /><input type='hidden' value='0' name='youyuer' id='youyuer'/>";
    $('#cheisnos').html(table_html);
    $('#jiage').html(jiage_html);
    $('#cheisnos').css('display', 'block');
    $('#addinputarrs').html(addinputarr);
    is_enabled = isno;
    return (isno);
}
function trim(str) {
    str = str.replace(/^(\s|\u00A0)+/, '');
    for (var i = str.length - 1; i >= 0; i--) {
        if (/\S/.test(str.charAt(i))) {
            str = str.substring(0, i + 1);
            break;
        }
    }
    return str;
}
function exists_multispace(str)
 {
    var rtn_result = false;
    var str_length_old = str.length;
    str = str.replace(/\  /g, " ");
    var str_length = str.length;
    if (str_length_old != str_length)
    {
        rtn_result = true;
    }
    return rtn_result;
}
var swffile = "/Public/moive_play/Uploader.swf";
function xhbuy(id, money)
 {
    if (confirm('确定要购买这个小号？'))
    {
        $.post("/index.php/Order/buyxh.html", {
            id: id,
            money: money
        },
        function(data, status)
        {
            if (status == 'success')
            {
                if (data.status == 1)
                {
                    alert("小号购买成功,请到小号购买记录处查看!");
                }
                else
                {
                    alert(data.info);
                }
                window.location.href = data.data;
            }
            else
            {
                alert('小号购买失败!请联系网站客服');
            }
        },
        'json');
    }
    else
    {
        return false;
    }
}
function change(obj)
 {
    var file_path = obj.val();
    var fullFileName = file_path.match(/([^\\^\/^\:^\?^\|^\<^\>^\|])*(\.)(.{1,8})$/)[0];
    var fileName = fullFileName.match(/[^\.]+/)[0];
    var type = file_path.match(/^(.*)(\.)(.{1,8})$/)[3];
    if (type != 'xls')
    {
        alert('选择文件必须为xls表格文件');
        return false;
    }
    $('#textfield').val(file_path);
    $('#filename').val(fileName);
}
function biao_submit()
 {
    var type_id = $("#type_id").val();
    if (type_id == '')
    {
        alert('请选择快递类型!');
        return false;
    }
    var filename = $("#filename").val();
    if (filename == '')
    {
        alert('请上传表格文件!');
        return false;
    }
}
function file_del(file_id)
 {
    $.post("/index.php/Order/file_del", {
        id: file_id
    },
    function(data, status)
    {
        if (status == 'success')
        {
            alert(data.info);
            document.location.href = "/index.php/Order/daili_upload.html";
        }
        else
        {
            alert('删除失败!');
        }
    },
    'json');
}
function zhaohui_submit()
 {
    var mibao_daan = $("#mibao_daan");
    var mibao_email = $("#mibao_email");
    if ($("#mibao_name").val() == "") {
        alert('请选择提问！');
        return false;
    }
    if (mibao_daan.val() == "") {
        alert('请输入提问答案！');
        return false;
    }
    if (mibao_email.val() == "") {
        alert('请输入你当时注册的邮箱！');
        return false;
    }
}
function tixian_submit()
 {
    var num = /^[0-9]+(.[0-9]{1,2})?$/;
    var money = $('#money').val();
    var valid_money = $("#valid_money").val();
    if (money == '')
    {
        alert('请填写提现金额!');
        return false;
    }
    if (!money.match(num))
    {
        alert('提现金额格式不对!(XXX.XX)');
        $('#money').focus();
        return false;
    }
    if (money <= 0)
    {
        alert('提现金额必须大于0');
        return false;
    }
    if (parseFloat(money) > parseFloat(valid_money))
    {
        alert('提现金额不能大于账户可用金额！');
        return false;
    }
}

function copyUrl2()
 {
    var Url2 = document.getElementById("biao1");
    Url2.select();
    document.execCommand("Copy");
    alert("已复制");

}
//******************w*w*w.p*i*n*g*u*o*c*m*s.c*o*m******************//

//******************w*w*w.p*i*n*g*u*o*c*m*s.c*o*m******************//
