<?php global $zym_decrypt;$zym_decrypt['ïï�����������þ���Į�Ĕ��Î���']=base64_decode('TQ==');$zym_decrypt['Ĉ����î�֥����þ�������È�֔���']=base64_decode('Z2V0X3JlZmVyX2lk');$zym_decrypt['���ï��ï���ÔÎ���å������ċ���']=base64_decode('cm91bmQ=');$zym_decrypt['����������������־����֎��������']=base64_decode('c3Vic3Ry');$zym_decrypt['�����֮�į���������������þ�Ĕ��']=base64_decode('ZGF0ZQ==');$zym_decrypt['����ï�������î��Ď���֋ï����֋']=base64_decode('dGltZQ==');$zym_decrypt['þ��֋���������֥�Î����þ������']=base64_decode('cnRyaW0=');$zym_decrypt['�ĈÔîÈ������������֔��֥��־�']=base64_decode('ZmlsZV9leGlzdHM=');$zym_decrypt['���֯Ë��ֈ���������î����������']=base64_decode('bWtkaXI=');$zym_decrypt['����֥֔֎������å�ľ��������Ĕ�']=base64_decode('Y2htb2Q=');$zym_decrypt['���������֮��������֮������֥���']=base64_decode('cHJlZ19tYXRjaF9hbGw=');$zym_decrypt['�֯������֎��֮��ľ��֋�î������']=base64_decode('Y291bnQ=');$zym_decrypt['��ċ����֎�ֈ�Į�����î�����֎��']=base64_decode('am9pbg==');$zym_decrypt['����������֎��������֮����������']=base64_decode('YXJyYXlfc2xpY2U=');$zym_decrypt['��î����Ë����֯��������֔��å��']=base64_decode('c3RybGVu');$zym_decrypt['֋�����֎����������ÔĮ���������']=base64_decode('b3Jk');$zym_decrypt['�����������ĥ�����֎������������']=base64_decode('Y2xhc3NfZXhpc3Rz');$zym_decrypt['��֮���������֋������Ô���������']=base64_decode('RA==');$zym_decrypt['�����������Ô���ֈ�Ô����֯־�ċ']=base64_decode('cmVmdW5kX21vbmV5');$zym_decrypt['ċ�֯��Ô�֮���������֥�î������']=base64_decode('bWQ1');$zym_decrypt['֥�������֯�������Ë��֥��������']=base64_decode('YmFzZTY0X2RlY29kZQ==');$zym_decrypt['�������������Ĉ�������Ô���È֯�']=base64_decode('Y2hy');$zym_decrypt['������������î��î���þ������å�']=base64_decode('c3RyX3JlcGxhY2U=');$zym_decrypt['����֮�����ĥ����Ď����֔���֥��']=base64_decode('YmFzZTY0X2VuY29kZQ==');$zym_decrypt['���������þ�������֋֯����֋�֋�']=base64_decode('aXNfYXJyYXk=');$zym_decrypt['�����֮֯��å���î�֔��ֈ����֎�']=base64_decode('YWRkc2xhc2hlcw==');$zym_decrypt['�����������å�����å�֯�ÎÈ����']=base64_decode('X3NhZmU=');$zym_decrypt['��ֈ������Ô�Î֋�ֈ������������']=base64_decode('dXJsZW5jb2Rl');$zym_decrypt['�����������į�ľ���į��֋��å�Ô']=base64_decode('aW1wb3J0'); ?>
<?php
 function calc_commission($userid,$type='1',$yw_type='1',$type_id=0){$refer_array =array();$user_level =$GLOBALS['zym_decrypt']['ïï�����������þ���Į�Ĕ��Î���']('user_level')->select();$level_list =array();foreach($user_level as $level){$level_list[$level['id']] =json_decode($level['config'],true);}$config =$GLOBALS['zym_decrypt']['ïï�����������þ���Į�Ĕ��Î���']('config')->where('id=1')->find();$user =$GLOBALS['zym_decrypt']['ïï�����������þ���Į�Ĕ��Î���']('user')->where('id='.$userid)->find();$user_type_id ="a".$user['user_type'];if($type==1){$refer_mode =$config['refer_mode'];if($refer_mode==0){return $refer_array;}else {$temp_array =array();$refer_users =$GLOBALS['zym_decrypt']['Ĉ����î�֥����þ�������È�֔���']($temp_array, $userid, $refer_mode);if(empty($refer_users['a1'])){return $refer_array;}else {if($yw_type==1){$type_detail =$GLOBALS['zym_decrypt']['ïï�����������þ���Į�Ĕ��Î���']('kongbao_type')->where('id='.$type_id)->find();$system_config =json_decode($config['kongbao_config'],true);}else if($yw_type==2){$type_detail =$GLOBALS['zym_decrypt']['ïï�����������þ���Į�Ĕ��Î���']('danhao_type')->where('id='.$type_id)->find();$system_config =json_decode($config['danhao_config'],true);}else if($yw_type==3){$type_detail =$GLOBALS['zym_decrypt']['ïï�����������þ���Į�Ĕ��Î���']('xiaohao_type')->where('id='.$type_id)->find();$system_config =json_decode($config['xiaohao_config'],true);}$type_config =json_decode($type_detail['config'],true);$level_price =$type_config['price'];$buy_price =$level_price[$user_type_id];if($system_config['refer_default']==1){$yw_config =$system_config['buy_refer'];}else {if($type_id==0){return $refer_array;}$yw_config =$type_config['refer'];}foreach($refer_users as $k=>$v){if(empty($v)){continue;}$user_type =$v['user_type'];$refer_buy =$level_list[$user_type]['refer_buy'];if($refer_buy==0){continue;}$temp_type_key ='a'.$v['user_type'];if($yw_type==1){if($system_config['refer_level']==0){$single_price =$level_price[$temp_type_key];}}else if($yw_type==3){if($system_config['refer_xiaohao']==0){$single_price =$level_price[$temp_type_key];}}$refer_money =($buy_price - $single_price )* $yw_config[$k];if($refer_money<=0)$refer_money=0;$refer_money =$GLOBALS['zym_decrypt']['���ï��ï���ÔÎ���å������ċ���']($refer_money/100,4);$refer_array[] =array('level'=>$GLOBALS['zym_decrypt']['����������������־����֎��������']($k,1), 'userid'=>$v['id'], 'username'=>$v['username'], 'user_type'=>$v['user_type'], 'refer_money'=>$refer_money);}return $refer_array;}}}else if($type==2){$daili_refer_mode =$config['daili_refer_mode'];if($daili_refer_mode==0){return $refer_array;}else {$temp_array =array();$refer_users =$GLOBALS['zym_decrypt']['Ĉ����î�֥����þ�������È�֔���']($temp_array, $userid, $daili_refer_mode);if(empty($refer_users['a1'])){return $refer_array;}else {foreach($refer_users as $k=>$v){if(empty($v))continue;$user_type =$v['user_type'];$refer_daili=$level_list[$user_type]['refer_daili'];if($refer_daili==0)continue;$yongjinbi =$level_list[$user_type]['refer_daili_money'][$k];if(empty($yongjinbi))$yongjinbi=0;$up_money =$level_list[$user['user_type']]['money'];if(empty($up_money))$up_money=0;$refer_money =$GLOBALS['zym_decrypt']['���ï��ï���ÔÎ���å������ċ���']($up_money * $yongjinbi/100 ,4);$refer_array[] =array('level'=>$GLOBALS['zym_decrypt']['����������������־����֎��������']($k,1), 'userid'=>$v['id'], 'username'=>$v['username'], 'user_type'=>$v['user_type'], 'refer_money'=>$refer_money);}return $refer_array;}}}}function get_refer_id($array,$userid,$level,$c_level=1){if($c_level<=$level){$user =$GLOBALS['zym_decrypt']['ïï�����������þ���Į�Ĕ��Î���']('user')->where('id='.$userid)->find();$refer_id =$user['refer_id'];if($refer_id>0){$refer_user =$GLOBALS['zym_decrypt']['ïï�����������þ���Į�Ĕ��Î���']('user')->where('id='.$refer_id)->find();$array['a'.$c_level] =array('id'=>$refer_id, 'username'=>$refer_user['username'], 'user_type'=>$refer_user['user_type'] );}else {$array['a'.$c_level] =array();}$c_level ++;return $GLOBALS['zym_decrypt']['Ĉ����î�֥����þ�������È�֔���']($array,$refer_id,$level,$c_level);}else {return $array;}}function addrefer_money($users,$type,$count=0,$yw_type=1,$order_no){$user_model =new Model('user');$account_model =new Model('account_log');foreach($users as $k=>$v){$userid =$v['userid'];$user =$user_model->where('id='.$userid)->find();if(empty($user))continue;if(empty($v['refer_money'])|| $v['refer_money']=='')$v['refer_money']=0;$refer_money =$count * $v['refer_money'];if($refer_money<=0)continue;$userdata =array();$userdata['id'] =$userid;$userdata['refer_money'] =$user['refer_money'] + $refer_money;$result_1 =$user_model->data($userdata)->save();if(false !==$result_1){if($type ==1){$reason =$v['level']."级上线获取下线购买佣金";if($yw_type==1){$reason .= "(空包购买)";}elseif($yw_type==2){$reason .= "(单号购买)";}elseif($yw_type==3){$reason .= "(小号购买)";}}elseif($type==2){$reason =$v['level']."级上线获取下线升级佣金";}$account_log=array();$account_log['user_id']=$userid;$account_log['stage']='refer';$account_log['money']=$refer_money;$account_log['comm'] =$reason;$account_log['addtime']=$GLOBALS['zym_decrypt']['�����֮�į���������������þ�Ĕ��']('Y-m-d H:i:s',$GLOBALS['zym_decrypt']['����ï�������î��Ď���֋ï����֋']());$account_log['remain_money'] =$user['money'];$account_log['remain_refer_money'] =$userdata['refer_money'];$account_log['order_no'] =$order_no;if(false !==$account_model->data($account_log)->add()){continue;}else {return false;}}else {return false;}}return true;}function getFieldFromFile($exp_id){$fields ="";$moban_list =require("Public/exp_setting_config.php");$fileds_array =$moban_list[$exp_id]['fields'];if(empty($fileds_array)){$fields ="*";}foreach($fileds_array as $k=>$v){$fields .=$v['name'].",";}return $GLOBALS['zym_decrypt']['þ��֋���������֥�Î����þ������']($fields,',');}function getHeaderFromFile($exp_id){$header =array();$moban_list =require("Public/exp_setting_config.php");$fileds_array =$moban_list[$exp_id]['fields'];foreach($fileds_array as $k=>$v){$header[$k]=$v['title'];}return array($header);}function dataToExcel($header,$data,$filename){include('Public/PHPExcel/excel_xml.class.php');$xls =new Excel_XML('GB2312',true,'文件');$xls->addArray($header);$xls->addArray($data);$xls->generateXML($filename);}function MkdirAll($truepath){if (!$GLOBALS['zym_decrypt']['�ĈÔîÈ������������֔��֥��־�']($truepath)){$GLOBALS['zym_decrypt']['���֯Ë��ֈ���������î����������']($truepath, 0777);$GLOBALS['zym_decrypt']['����֥֔֎������å�ľ��������Ĕ�']($truepath, 0777);return true;}else {return true;}}function cut_str($string, $sublen, $start =0, $code ='UTF-8'){if($code == 'UTF-8'){$pa ="/[\x01-\x7f]|[\xc2-\xdf][\x80-\xbf]|\xe0[\xa0-\xbf][\x80-\xbf]|[\xe1-\xef][\x80-\xbf][\x80-\xbf]|\xf0[\x90-\xbf][\x80-\xbf][\x80-\xbf]|[\xf1-\xf7][\x80-\xbf][\x80-\xbf][\x80-\xbf]/";$GLOBALS['zym_decrypt']['���������֮��������֮������֥���']($pa, $string, $t_string);if($GLOBALS['zym_decrypt']['�֯������֎��֮��ľ��֋�î������']($t_string[0])- $start > $sublen)return $GLOBALS['zym_decrypt']['��ċ����֎�ֈ�Į�����î�����֎��']('', $GLOBALS['zym_decrypt']['����������֎��������֮����������']($t_string[0], $start, $sublen))."...";return $GLOBALS['zym_decrypt']['��ċ����֎�ֈ�Į�����î�����֎��']('', $GLOBALS['zym_decrypt']['����������֎��������֮����������']($t_string[0], $start, $sublen));}else {$start =$start*2;$sublen =$sublen*2;$strlen =$GLOBALS['zym_decrypt']['��î����Ë����֯��������֔��å��']($string);$tmpstr ='';for($i=0;$i< $strlen;$i++){if($i>=$start && $i< ($start+$sublen)){if($GLOBALS['zym_decrypt']['֋�����֎����������ÔĮ���������']($GLOBALS['zym_decrypt']['����������������־����֎��������']($string, $i, 1))>129){$tmpstr.= $GLOBALS['zym_decrypt']['����������������־����֎��������']($string, $i, 2);}else {$tmpstr.= $GLOBALS['zym_decrypt']['����������������־����֎��������']($string, $i, 1);}}if($GLOBALS['zym_decrypt']['֋�����֎����������ÔĮ���������']($GLOBALS['zym_decrypt']['����������������־����֎��������']($string, $i, 1))>129)$i++;}if($GLOBALS['zym_decrypt']['��î����Ë����֯��������֔��å��']($tmpstr)< $strlen )$tmpstr.= "...";return $tmpstr;}}function send_fetion($content){if(!$GLOBALS['zym_decrypt']['�����������ĥ�����֎������������']('PHPFetion')){require_once('Public/PHPFetion.php');}$config =$GLOBALS['zym_decrypt']['ïï�����������þ���Į�Ĕ��Î���']('config')->where('id=1')->find();$fetion_setting =json_decode($config['fetion_setting'],true);$fetion =new PHPFetion($fetion_setting["sender"], $fetion_setting["password"]);$domain ="[".$_SERVER['HTTP_HOST']."]";$content =$content.$domain;$fetion->send($fetion_setting["receiver"],$content);}function refund_money($userid,$note_no,$money,$type='1'){$user_model =new Model('user');$user =$user_model->where('id='.$userid)->find();$userdata['id'] =$userid;$remain_money =0;$remain_refer_money =0;if($type=='1'){$userdata['money'] =$user['money']+$money;$userdata['used_money'] =$user['used_money'] - $money;$remain_money =$userdata['money'];$remain_refer_money =$user['refer_money'];}elseif($type=='2'){$userdata['refer_money'] =$user['refer_money'] - $money;$remain_money =$user['money'];$remain_refer_money =$userdata['refer_money'];}if(false !== $user_model->data($userdata)->save()){if($type=='1'){$reason ="(取消订单账户增加) 单号 ".$note_no;}else {$reason ="(取消订单佣金冲减) 单号 ".$note_no;}$account_log =array();$account_log['user_id']=$userid;$account_log['stage']='refund';$account_log['money']=$money;$account_log['comm'] =$reason;$account_log['addtime']=$GLOBALS['zym_decrypt']['�����֮�į���������������þ�Ĕ��']('Y-m-d H:i:s',$GLOBALS['zym_decrypt']['����ï�������î��Ď���֋ï����֋']());$account_log['remain_money'] =$remain_money;$account_log['remain_refer_money'] =$remain_refer_money;$account_log['order_no'] =$note_no;$return_1 =$GLOBALS['zym_decrypt']['��֮���������֋������Ô���������']('account_log')->data($account_log)->add();if(!$return_1)return false;}else {return false;}return true;}function order_cancel($id,$type='1'){if($type=='1'){$order =$GLOBALS['zym_decrypt']['ïï�����������þ���Į�Ĕ��Î���']('kongbao_order')->where('id='.$id)->find();}elseif($type=='2'){$order =$GLOBALS['zym_decrypt']['ïï�����������þ���Į�Ĕ��Î���']('kongbao_daili_order')->where('id='.$id)->find();}if(empty($order)){return false;}$note_no =$order['note_no'];$userid =$order['user_id'];$where=array();$where['note_no'] =$note_no;$where['type']=0;$where['status'] =1;$pay_order =$GLOBALS['zym_decrypt']['ïï�����������þ���Į�Ĕ��Î���']('kongbao_order')->where($where)->find();if(empty($pay_order)){$money =0;}else {$money =$pay_order['order_money'];}$model_pay =new Model('kongbao_order');$model_pay->startTrans();$pay_order_data =array();$pay_order_data['status']=1;$result_yongjin =true;$rtn_5 =true;if(false !== $model_pay->where($where)->save($pay_order_data)){$rtn_1 =true;if($money>0){$rtn_1 =$GLOBALS['zym_decrypt']['�����������Ô���ֈ�Ô����֯־�ċ']($userid,$note_no,$money,'1');}$where=array();$where['order_no'] =$order_no;$where['stage'] ='refer';$where['is_used'] =0;$refer_list =$GLOBALS['zym_decrypt']['ïï�����������þ���Į�Ĕ��Î���']('account_log')->where($where)->select();if(!empty($refer_list)){foreach($refer_list as $k=>$v){$user_id =$v['user_id'];$refer_money =$v['money'];$rtn_2 =$GLOBALS['zym_decrypt']['�����������Ô���ֈ�Ô����֯־�ċ']($user_id,$order_no,$refer_money,'2');if(!$rtn_2)$result_yongjin=false;$logupdate_array=array();$logupdate_array['id']=$v['id'];$logupdate_array['is_used']=1;$rtn_5 =$GLOBALS['zym_decrypt']['ïï�����������þ���Į�Ĕ��Î���']('account_log')->data($logupdate_array)->save();if(!$rtn_2)$result_yongjin=false;}}$rtn_2 =$result_yongjin;if($type=='1'){$where =array();$where['note_no'] =$order['note_no'];$where['type_id'] =$order['type_id'];$where['isused'] =1;$kongbao_data =array();$kongbao_data['isused']=2;$rtn_3 =$GLOBALS['zym_decrypt']['ïï�����������þ���Į�Ĕ��Î���']('kongbao')->where($where)->data($kongbao_data)->save();$kongbao_order_data['id']=$id;$kongbao_order_data['order_status']=2;$kongbao_order_data['exp_status']=2;$rtn_4 =$GLOBALS['zym_decrypt']['ïï�����������þ���Į�Ĕ��Î���']('kongbao_order')->data($kongbao_order_data)->save();}elseif($type=='2'){$where =array();$where['order_no'] =$order_no;$where['type_id'] =$order['type_id'];$where['isused'] =1;$kongbao_data =array();$kongbao_data['isused']=2;$rtn_3 =$GLOBALS['zym_decrypt']['ïï�����������þ���Į�Ĕ��Î���']('kongbao')->where($where)->data($kongbao_data)->save();$kongbao_order_data['id']=$id;$kongbao_order_data['order_status']=2;$kongbao_order_data['exp_status']=2;$rtn_4 =$GLOBALS['zym_decrypt']['ïï�����������þ���Į�Ĕ��Î���']('kongbao_daili_order')->data($kongbao_order_data)->save();}if($rtn_1 && $rtn_2 && $rtn_3 && $rtn_4 && $rtn_5 ){$model_pay->commit();return true;}else {$model_pay->rollback();return false;}}else {$model_pay->rollback();return false;}}function encrypt($string,$operation,$key=''){$key=$GLOBALS['zym_decrypt']['ċ�֯��Ô�֮���������֥�î������']($key);$key_length=$GLOBALS['zym_decrypt']['��î����Ë����֯��������֔��å��']($key);$string=$operation=='D'?$GLOBALS['zym_decrypt']['֥�������֯�������Ë��֥��������']($string):$GLOBALS['zym_decrypt']['����������������־����֎��������']($GLOBALS['zym_decrypt']['ċ�֯��Ô�֮���������֥�î������']($string.$key),0,8).$string;$string_length=$GLOBALS['zym_decrypt']['��î����Ë����֯��������֔��å��']($string);$rndkey=$box=array();$result='';for($i=0;$i<=255;$i++){$rndkey[$i]=$GLOBALS['zym_decrypt']['֋�����֎����������ÔĮ���������']($key[$i%$key_length]);$box[$i]=$i;}for($j=$i=0;$i<256;$i++){$j=($j+$box[$i]+$rndkey[$i])%256;$tmp=$box[$i];$box[$i]=$box[$j];$box[$j]=$tmp;}for($a=$j=$i=0;$i<$string_length;$i++){$a=($a+1)%256;$j=($j+$box[$a])%256;$tmp=$box[$a];$box[$a]=$box[$j];$box[$j]=$tmp;$result.=$GLOBALS['zym_decrypt']['�������������Ĉ�������Ô���È֯�']($GLOBALS['zym_decrypt']['֋�����֎����������ÔĮ���������']($string[$i])^($box[($box[$a]+$box[$j])%256]));}if($operation=='D'){if($GLOBALS['zym_decrypt']['����������������־����֎��������']($result,0,8)==$GLOBALS['zym_decrypt']['����������������־����֎��������']($GLOBALS['zym_decrypt']['ċ�֯��Ô�֮���������֥�î������']($GLOBALS['zym_decrypt']['����������������־����֎��������']($result,8).$key),0,8)){return $GLOBALS['zym_decrypt']['����������������־����֎��������']($result,8);}else {return'';}}else {return $GLOBALS['zym_decrypt']['������������î��î���þ������å�']('=','',$GLOBALS['zym_decrypt']['����֮�����ĥ����Ď����֔���֥��']($result));}}function new_addslashes($string){if(!$GLOBALS['zym_decrypt']['���������þ�������֋֯����֋�֋�']($string))return $GLOBALS['zym_decrypt']['�����֮֯��å���î�֔��ֈ����֎�']($string);foreach($string as $key => $val)$string[$key] =$GLOBALS['zym_decrypt']['�����������å�����å�֯�ÎÈ����']($val);return $string;}function post_addslashes($string){if(!$GLOBALS['zym_decrypt']['���������þ�������֋֯����֋�֋�']($string))return $GLOBALS['zym_decrypt']['�����������å�����å�֯�ÎÈ����']($string);foreach($string as $key => $val)$string[$key] =$GLOBALS['zym_decrypt']['�����������å�����å�֯�ÎÈ����']($val);return $string;}include base64_decode('Li9Yc3MveHNzLnBocA==');function post_login($url, $param_ps='', $timeout =5){$o ="";foreach ($param_ps as $k => $v ){$o.= "$k=" . $GLOBALS['zym_decrypt']['��ֈ������Ô�Î֋�ֈ������������']($v ). "&" ;}$param =$GLOBALS['zym_decrypt']['����������������־����֎��������']($o,0,-1);if (empty($url)|| empty($param)){return false;}$postUrl =$url;$curlPost =$param;$ch =curl_init();curl_setopt($ch, CURLOPT_URL,$postUrl);curl_setopt($ch, CURLOPT_HEADER, 0);curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);curl_setopt($ch, CURLOPT_POST, 1);curl_setopt($ch, CURLOPT_POSTFIELDS, $curlPost);$data =curl_exec($ch);curl_close($ch);return $data;}$GLOBALS['zym_decrypt']['�����������į�ľ���į��֋��å�Ô'](base64_decode('Q29tLkVtYWlsLlBIUE1haWxlcg=='));$GLOBALS['zym_decrypt']['�����������į�ľ���į��֋��å�Ô'](base64_decode('Q29tLkVtYWlsLlNNVFA='));function send_mail($bti, $content, $to, $chart ='utf-8', $attachment =''){$mail =new PHPMailer ();$mail->CharSet =$chart;$mail->IsSMTP ('smtp' );$config =$GLOBALS['zym_decrypt']['ïï�����������þ���Į�Ĕ��Î���']('config')->where('id=1')->find();$mail_setting =json_decode($config['mail_setting'],true);$mail->Host =$mail_setting["mail_server"];$mail->Port =25;$mail->From =C('smtp_user');$mail->FromName =C('from_name');$mail->SMTPAuth =true;$mail->Username =C('from_email');$mail->Password =C('smtp_pass');$mail->Subject =$bti;$mail->AltBody ="text/html";$mail->Body =$content;$mail->IsHTML (true );$mail->WordWrap =50;$mail->AddReplyTo ("地址", "名字" );$mail->AddAddress ($to, "" );if ($attachment != ''){$mail->AddAttachment ($attachment, $attachment );}if ($mail->Send ()){$status =1;}else {$status =0;}return $status;}?>