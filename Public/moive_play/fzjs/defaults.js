/*
----------------
----个人主页----
----------------
**/
function $(id) { return document.getElementById(id); }  
    function toClipboard(copy_id,input_id) {  
        var clip = new ZeroClipboard.Client();  
        clip.setHandCursor(true);  
        clip.setText($(input_id).value);          
        clip.addEventListener('complete', function (client) {  
            alert("复制成功！");  
        });  
        clip.glue(copy_id);  
    }
	