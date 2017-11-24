<?php
$result = null;
$shellCommand = "cat /usr/local/nginx/logs/www.9ikongbao.cn.log | awk '{print $2}' | sort | uniq -c | sort -rn | head -20";
exec($shellCommand, $result);
foreach($result as $ip) {
	echo $ip . '</br>';
}
