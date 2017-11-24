/**
 * Created by Administrator on 2015/5/15.
 */
var pjw=function(){

};
pjw={
    sub:function(opt){
        option = {
            success: function (data) {
                if (data.status == 0) {
                    pjw.alert(data.info,2);
                    //layer.msg(data.info,{icon:2});
                }else{
                    //alert(data.info);
                    if(data.info==''){
                        location.href = data.url;
                    }else{
                        if (data.url != '') {
                            if(data.info==''){
                                location.href = data.url
                            }else{
                                if(data.url=='1'){
                                    pjw.alert(data.info,1);
                                    setTimeout(function(){
                                        location.reload();
                                    },500)
                                }else{
                                    pjw.alert(data.info,1);
                                    setTimeout(function(){
                                        location.href = data.url
                                    },500)
                                }
                            }
                        } else {
                            pjw.alert(data.info,1);
                        }
                    }
                }
            },
            url:''
        }
        var _form;
        if (opt) {
            if (opt.success) {
                option.success = opt.success;
            }
            if(opt.id){
                _form=$(opt.id);
            }
            if(opt.form){
                _form=$(opt.form).parents('form').eq(0);
            }
            if (opt.url) {
                _form.attr('action',opt.url);
                //option.url = opt.url;
            }
        }
        if(opt.alert){
            layer.confirm("确定？", {icon: 3}, function(){
                _form.ajaxSubmit({
                    success: option.success
                });
            });
        }else{
            if(_form.data('amui.validator')!=undefined){
                if(_form.data('amui.validator').isFormValid()){
                    _form.ajaxSubmit({
                        success: option.success
                    });
                }
            }else{
                _form.ajaxSubmit({
                    success: option.success
                });
            }
        }

    },
    alert:function(text,icon){
        var Content='<i style="float:left;height: 40px;width: 40px;display: inline-block;margin-top: 10px;margin-left: 10px;" class="layui-layer-ico layui-layer-ico'+icon+'"></i><div style="padding: 20px 20px 10px 60px;font-size: 14px;font-family: Microsoft Yahei, 微软雅黑, Arial, STHeiti, Tahoma, Helvetica">'+text+'</div>';
        if(icon==0){
            Content='<div style="padding: 20px 20px 10px 20px;font-size: 14px;font-family: Microsoft Yahei, 微软雅黑, Arial, STHeiti, Tahoma, Helvetica">'+text+'</div>'
        }
        layer.open({
            type:1,
            content:Content,
            title: false,
            area: ['auto', 'auto'],
            shadeClose: true
        });
    },
    confirm:function(opt){
        option={
            obj:        opt.obj,
            text:       opt.text?opt.text:'确定？',
            icon:       opt.icon?opt.icon:3,
            close:      layer.close(),
            ok:         opt.ok
        }
        if($(option.obj).attr('url')!=undefined){
            option.ok=function(){
                $.ajax({
                    "url":$(option.obj).attr('url'),
                    "type":"post",
                    "dataType":"json",
                    success:function (data, textStatus) {
                        if (data.status == 0) {
                            pjw.alert(data.info,2);
                            //layer.msg(data.info,{icon:2});
                        }else{
                            if (data.url != '') {
                                if(data.info==''){
                                    location.href = data.url
                                }else{
                                    if(data.url=='1'){
                                        pjw.alert(data.info,1);
                                        //layer.msg(data.info,{icon: 1});
                                        setTimeout(function(){
                                            location.reload();
                                        },500)
                                    }else{
                                        pjw.alert(data.info,1);
                                        //layer.msg(data.info,{icon: 1});
                                        setTimeout(function(){
                                            location.href = data.url
                                        },500)
                                    }
                                }
                            } else {
                                pjw.alert(data.info,1);
                                //layer.msg(data.info,{icon: 1});
                            }
                        }
                    }
                });
            }
        }
        layer.confirm(option.text, {icon: option.icon}, option.ok,option.close);
    }
}