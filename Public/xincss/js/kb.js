var swffile = "/Public/moive_play/Uploader.swf";
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
		$("#address").html('');
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
		var default_address = return_data.address;
        $("#down_url").attr('href', return_data.file_url);
        $('#image_url').attr('src', '/' + image_url);
        $("#current_text").html(current_text);
		$("#danjia").html(danjia);
		$("#wangdian").html(wangdian);
        $("#single_price").val(single_price);
		$("#address").html(default_address);
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
    //是否错误标识
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
    var jiage_html = "" + current_price + "元 × " + addsum + "单 = 应付款：<b class=fc2>" + kuaidisum.toFixed(2) + "元</b><input type='hidden' value=" + kuaidisum.toFixed(2) + " name='kuaidipicle' id='kuaidipicle' /><input type='hidden' value='0' name='youyuer' id='youyuer'/>";
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