<?php
// +----------------------------------------------------------------------
// | Driving school management system [ DSMS ]
// +----------------------------------------------------------------------
// | Copyright (c) 2012 MarkDream.com All rights reserved.
// +----------------------------------------------------------------------
// | Link ( http://www.markdream.com )
// +----------------------------------------------------------------------
// | Author: Jxcent <jxcent@gmail.com>
// +----------------------------------------------------------------------
// $Id: QQHelper.class.php	 2012-9-2 下午04:43:22Z	Jxcent $


/**
 * 此类QQ互联类，负责获取用户的openid 和 访问令牌
 * openid 相当于QQ号  一个QQ号对应唯一一个openid
 * 访问令牌 +获取当前应用+openid来实现某种操作 例如分享、发说说、传图……具体可以参考
 * http://wiki.opensns.qq.com/wiki/%E3%80%90QQ%E7%99%BB%E5%BD%95%E3%80%91%E6%96%87%E6%A1%A3%E8%B5%84%E6%BA%90
 * @author Jxcent
 *
 */
class QQHelper {
	//QQ登录
	function login($appid, $scope, $callback) {
		$qq_state= md5 ( uniqid ( rand (), true ) ); //CSRF protection
		$_SESSION['qq_state']=$qq_state;
		$login_url = "https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=" . $appid . "&redirect_uri=" . urlencode ( $callback ) . "&state=" . $qq_state . "&scope=" . $scope;
		header ( "Location:$login_url" );
	}
	//登录成功回调函数 目的就是获取访问令牌
	function callback($app_id,$app_key,$path){
		$result_array= array();
		$result_array['result']='ok'; 
		if ($_REQUEST ['state'] == $_SESSION ['qq_state']) 
		{
			$token_url = "https://graph.qq.com/oauth2.0/token?grant_type=authorization_code&client_id=".$app_id."&redirect_uri=".urlencode ( $path )."&client_secret=".$app_key."&code=".$_REQUEST["code"];
 			$response =  $this->get_url_contents($token_url); 
			
			if (strpos ( $response, "callback" ) !== false) {
				$lpos = strpos ( $response, "(" );
				$rpos = strrpos ( $response, ")" );
				$response = substr ( $response, $lpos + 1, $rpos - $lpos - 1 );
				$msg = json_decode ( $response );
				if (isset ( $msg->error )) {
					$result_array['result']='no'; 
					$result_array['msg'] = "错误代码:" . $msg->error.",信息：". $msg->error_description; 
					return $result_array;
				}
			}  
			$params = array ();
			parse_str ( $response, $params );
			$result_array['msg']=$params['access_token'];
			return $result_array ; 
		} else {
			$result_array['result']='no'; 
			$result_array['msg']="The state does not match. You may be a victim of CSRF.";  
			return $result_array;
		}
	}
	//获取该QQ用户的openid
	function get_openid($access_token) {
		$result_array= array();
		$result_array['result']='ok'; 
		$graph_url = "https://graph.qq.com/oauth2.0/me?access_token=" . $access_token;
 		$str = $this->get_url_contents ( $graph_url );
		if (strpos ( $str, "callback" ) !== false) {
			$lpos = strpos ( $str, "(" );
			$rpos = strrpos ( $str, ")" );
			$str = substr ( $str, $lpos + 1, $rpos - $lpos - 1 );
		} 
		$user = json_decode ( $str );
		if (isset ( $user->error )) {
			$result_array['result']='no'; 
			$result_array['msg'] = "错误代码:" . $user->error.",信息：". $user->error_description; 
			return $result_array;  
		}
		$result_array['msg']= $user->openid;
	    return $result_array ;  
	} 
	//获取用户信息
	function get_user_info($app_id,$openid,$access_token) {
		$get_user_info = "https://graph.qq.com/user/get_user_info?" . "access_token=" . $access_token . "&oauth_consumer_key=" . $app_id . "&openid=" . $openid . "&format=json";
  		return $this->get_url_contents ( $get_user_info );
	}
	private function get_url_contents($url)
	{ 
 			$ch = curl_init (); 
			curl_setopt ( $ch, CURLOPT_URL, $url );
    		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);//禁止直接显示获取的内容 重要
    		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); //不验证证书下同
    		curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false); //			
			$result = curl_exec ( $ch );
			curl_close ( $ch ); 
			return $result;
     }
}

