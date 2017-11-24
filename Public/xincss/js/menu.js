$(function() {

	var tree = $("#tree");

	var li = tree.children("li");

	var defaultIndex = $.cookie("niaoyun_user_tree");

	li.each(function(i){
		if (defaultIndex==i){
			li.eq(i).children("ul").show();
		}else{
			li.eq(i).children("ul").hide();
		}
	});
	//if (!defaultIndex && defaultIndex!=0){
	//	li.eq(0).children("ul").show();
	//}
	li.children("span").click(function(i){

		var parent = $(this).parent();
		var index = parent.index();

		if(parent.children("ul").is(":hidden")){

			li.children("ul").hide(100);
			parent.children("ul").show(100);

			$.cookie("niaoyun_user_tree", index, {expires: 7, path: '/'});

		}else{

			li.children("ul").hide(100);
			$.cookie("niaoyun_user_tree", null, {expires: 7, path: '/'});
		}

	});

});

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
//

function radioclick(obj)
   {
   	   var id = obj.val();
   	    $.post("/index.php/Daili/getLevelDetail.html",{type_id:id},
   	    function(data,status)
   	    {
   	    	if(data.status==1)
   	    	{
   	    		$('#goumai').css('display','block');
   	    		$('#goumai').html(data.data); 
   	    	}
   	    	else
   	    	{
    	         $('#goumai').css('display','none');
   	    		$('#goumai').html('');  	
   	    	    		
   	    		alert(data.info);
   	    	}
   	    },'json');
   }