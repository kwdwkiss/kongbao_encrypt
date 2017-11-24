<?php
//$title=iconv('utf-8','gbk',WEBNICK);
$Shortcut = "[InternetShortcut]
URL=http://www.pinguocms.com
IDList=
[{000214A0-0000-0000-C000-000000000046}]
Prop3=19,2";
Header("Content-type: application/octet-stream");
header("Content-Disposition: attachment; filename=安全空包网.url;");
//TITLE等于标题
echo $Shortcut;
?>