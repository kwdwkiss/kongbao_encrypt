<?php
  if (!defined('THINK_PATH')) exit();
    $custom_config = require('config.ini.php');
    $db_config = require('db.ini.php');
    $config =  array(  
	//'配置项'=>'配置值'
	'APP_GROUP_LIST' =>'Index,Admin',
	'DEFAULT_GROUP' =>'Index', 
	//配置网站相关参数
	'SITENAME' =>'珑翔网站管理系统',
	'COMPANY'=>'珑翔网站管理系统',
	'SHOUQUANMA'  =>'123',//后台登陆授权码
	'CAOZUOMA'  =>'12',//操作密码
	'AUTH_KEY'  =>'www.pinguocms.com',//密码随机串
	/* 加载自定义配置文件 */
	'LOAD_EXT_CONFIG'       =>'site_setting,site_mail,config_diy',
	'TMPL_EXCEPTION_FILE'=>'./ThinkPHP/Tpl/error.tpl', // 定义公共错误模板
	 //默认错误跳转对应的模板文件
    'TMPL_ACTION_ERROR' => THINK_PATH . 'Tpl/dispatch_jump.tpl',
    //默认成功跳转对应的模板文件
    'TMPL_ACTION_SUCCESS' => THINK_PATH . 'Tpl/dispatch_jump.tpl',
	//'VAR_FILTERS'=>'stripslashes,htmlspecialchars,strip_tags,htmlentities',
	//'REQUEST_VARS_FILTER'=>true,
	//日志记载 
    //'URL_MODEL'=>1,
	'LOG_RECORD'			=>	false,  // 进行日志记录
    'LOG_EXCEPTION_RECORD'  => 	false,    // 是否记录异常信息日志
    'DB_SQL_LOG'			=>	false, // 记录SQL信息
    'APP_FILE_CASE'  		=>  false, // 是否检查文件的大小写 对Windows平台有效 
    'SHOW_ERROR_MSG'        => 	false,    // 显示错误信息 
); 
  return array_merge($config,$custom_config,$db_config);
?>
