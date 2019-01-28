<?php 
$url = isset($_POST['url']) ? $_POST['url'] : false;
if(false === $url)
	die('url is a required field');
$result =  file_get_contents($url);
if(false === $result) {
	var_dump($http_response_header);
	die();
}

die($result);