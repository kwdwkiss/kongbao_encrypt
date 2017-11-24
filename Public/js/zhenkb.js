//******************w*w*w.p*i*n*g*u*o*c*m*s.c*o*m******************//
//******************w*w*w.p*i*n*g*u*o*c*m*s.c*o*m******************//
//******************w*w*w.p*i*n*g*u*o*c*m*s.c*o*m******************//
//******************w*w*w.p*i*n*g*u*o*c*m*s.c*o*m******************//
//******************w*w*w.p*i*n*g*u*o*c*m*s.c*o*m******************//
//**********************Q*Q*2*3*3*8*0*6*5*0*9*3********************//
var is_enabled=-1;var checkSubmitFlg=false;function chk_submit()
{if(!checkSubmitFlg)
{checkSubmitFlg=true;}else{alert("双击无效，不能重复提交");return false;}
if(is_enabled==-1)
{alert('请先对数据进行校验!');checkSubmitFlg=false;$('#btn_check').focus();return false;}
if(is_enabled!=1)
{alert('有错误数据，请调整后再提交!');checkSubmitFlg=false;return false;}
var send_name=$("#send_name").val();if(send_name=='')
{alert('请填写发货人姓名！');checkSubmitFlg=false;$("#send_name").focus();return false;}
var send_phone=$("#send_phone").val();var send_shouji=$("#send_shouji").val();if(send_phone==''&&send_shouji=='')
{alert('发货人手机号或者联系电话可任选其一填写！');checkSubmitFlg=false;$("#send_shouji").focus();return false;}}
function itemchange(obj)
{$("#detail").text('');$("#current_text").html('');$("#single_price").val('');var type_id=obj.val();if(type_id==''||type_id==0)
{$("#detail").text('');$("#current_text").html('');$("#single_price").val('');$("#address").html('');}
$.post("/index.php/Order/getDetail.html",{id:type_id},function(data,status)
{var return_data=data.data;var detail=return_data.detail.replace(/\|/gm,"\r\n")
$("#detail").text(detail);var current_text=return_data.current;var single_price=return_data.price;var default_address=return_data.address;$("#current_text").html(current_text);$("#single_price").val(single_price);$("#address").html(default_address);},'json');$('#cheisnos').html('');$('#cheisnos').css('display','none');$('#addinputarrs').html('');$("#order_nums").val('0');$("#order_money").val('0');$('#postscript').val('');is_enabled=-1;}
function checkisnos(){var type_id=$("#type_id").val();if(type_id==""){alert("请选择快递！");$("#type_id").focus();return false;}
var address_id=$("#address_id").val();if(address_id==""){alert("请选择发货地址！");$("#address_id").focus();return false;}
addtext=$('#postscript').val();if(addtext==""){alert("请您填写收货地址！");$("#postscript").focus();return false;}
var current_price=parseFloat($('#single_price').val());if(current_price<=0){alert("你选择的快递单价出错！");return false;}
isno=1;var addtextarr=new Array();var adddan=new Array();addtextarr=addtext.split("\n");addstr="";addinputarr="";addsum=0;if(addtextarr.length<=100){for(i=0;i<addtextarr.length;i++){if(addtextarr[i]&&trim(addtextarr[i])!=''){addtextarr[i]=addtextarr[i].replace(/\'/g,"");addtextarr[i]=addtextarr[i].replace(/\,/g,"，");addinputarr+="<input type='hidden' name='addinputarr["+addsum+"]' value='"+addtextarr[i]+"' >";adddan=trim(addtextarr[i]).split("，");addsum+=1;if(adddan.length!=5&&adddan.length!=4){alert("第"+addsum+"行收货地址格式有错误，请仔细检查！");isno=0;}
if(adddan.length==5)
{var shouhuodizhi=adddan[3];}else if(adddan.length==4)
{var shouhuodizhi=adddan[2];}
var shdz_array=trim(shouhuodizhi).split(" ");if(shdz_array.length<4)
{alert("第"+addsum+"行收货地址格式中省、市、县之间应该用空格隔开，请仔细检查！");isno=0;}
if(exists_multispace(trim(shouhuodizhi)))
{alert("第"+addsum+"行收货地址格式中省、市、县之间只能用一个空格隔开，请仔细检查！");isno=0;}
addstr+="<tr height='25'><td class='addyes'>第"+addsum+"行</td>";for(j=0;j<adddan.length;j++){if(adddan.length!=5&&adddan.length!=4){if(adddan[j]){addstr+="<td  class='c_fenhong'>"+adddan[j]+"</td>";}
else{addstr+="<td  class='c_3'>"+"</td>";}}else
{if(adddan.length==4&&j==2)
{addstr+="<td class='c_3'></td>";}
if(isno==0)
{addstr+="<td class='c_fenhong'>"+adddan[j]+"</td>";}else{addstr+="<td>"+adddan[j]+"</td>";}}}
addstr+="</tr>";}}}
else{alert("亲，一次最多只能批量下100单，请减少收货地址！");isno=0;}
kuaidisum=addsum*current_price;$("#order_nums").val(addsum);$("#order_money").val(kuaidisum);var table_html="<table style='text-align:center;vertical-align:middle;' cellpadding='5' width='700px' cellspacing='1'><tr height='25'><td width='6%'><b>行</b></td><td width='10%'><b>名字</b></td><td width='15%''><b>手机</b></td><td width='15%'><b>电话</b></td><td  width='44%'><b>地址</b></td><td  width='10%'><b>邮编</b></td></tr>"+addstr+"</table>";var jiage_html="<p>"+current_price+"元 × "+addsum+"单 = 应付款：<i class=color_or>"+kuaidisum.toFixed(2)+"元</i><input type='hidden' value="+kuaidisum.toFixed(2)+" name='kuaidipicle' id='kuaidipicle' /><input type='hidden' value='0' name='youyuer' id='youyuer'/>";$('#cheisnos').html(table_html);$('#jiage').html(jiage_html);$('#cheisnos').css('display','block');$('#addinputarrs').html(addinputarr);is_enabled=isno;return(isno);}
function trim(str){str=str.replace(/^(\s|\u00A0)+/,'');for(var i=str.length-1;i>=0;i--){if(/\S/.test(str.charAt(i))){str=str.substring(0,i+1);break;}}
return str;}
function exists_multispace(str)
{var rtn_result=false;var str_length_old=str.length;str=str.replace(/\  /g," ");var str_length=str.length;if(str_length_old!=str_length)
{rtn_result=true;}
return rtn_result;}
//
