<?php 
$url = isset($_POST['url']) ? $_POST['url'] : false;
if(false === $url)
	die('url is a required field');
echo file_get_contents($url);
die();