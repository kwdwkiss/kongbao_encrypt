/*
----------------
----个人主页----
----------------
**/
$(function(){ 
        $('#copybtn').zclip({ 
            path: '/Public/moive_play/fzjs/ZeroClipboard.swf', 
            copy: function(){
                return $('#tuijianlianjie').val(); 
            }, 
            afterCopy: function(){
                alert("复制成功");
            } 
        }); 
    }); 
$(function(){ 
        $('#copybtnpaysm').zclip({ 
            path: '/Public/moive_play/fzjs/ZeroClipboard.swf', 
            copy: function(){
				return $('#paysm').val(); 
				
            }, 
            afterCopy: function(){
                alert("复制成功");
            } 
        }); 
    }); 
$(function(){ 
        $('#copybtnpaytitle').zclip({ 
            path: '/Public/moive_play/fzjs/ZeroClipboard.swf', 
            copy: function(){
				return $('#paytitle').val(); 
            }, 
            afterCopy: function(){
                alert("复制成功");
            } 
        }); 
    }); 

