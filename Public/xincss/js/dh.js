   function itemchange(obj)
     {
     	var type_id = obj.val();
     	if(type_id=='' || type_id==0)
     	{
     		$("#detail").text('');
     		$("#current_text").html('');   
     		$("#single_price").val('');   
     		$("#total_item_1").html('');
     		$("#qty_item_1").val('1');
     		$("#total_price").val('');
			$("#danjia").html('');
     	} 
     	$.post("{:U('getDetail')}",{id:type_id,type:'dh'},function(data,status)
     	{
     		var return_data = data.data; 
     		var detail = return_data.detail.replace(/\|/gm,     "\r\n")
     		$("#detail").text(detail);
      		var current_text = return_data.current;
      		var single_price = return_data.price; 
     		$("#current_text").html(current_text);    		
     		$("#single_price").val(single_price); 
			var danjia = return_data.danjia;
			$("#danjia").html(danjia);   	 
     		var total_item_1 = parseFloat(single_price).toFixed(2);
     		$("#total_item_1").html(total_item_1);
     		$("#total_price").val(total_item_1);
     		$("#qty_item_1").val('1');
     	},'json');  
     } 
 function trim(str){   
		 str = str.replace(/^(\s|\u00A0)+/,'');   
			for(var i=str.length-1; i>=0; i--){   
			  if(/\S/.test(str.charAt(i))){   
			    str = str.substring(0, i+1);   
 				  break;   
			 }   
		 }   
		 return str;   
	    } 