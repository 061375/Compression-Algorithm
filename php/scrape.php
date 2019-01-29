<?php 

$url = isset($_POST['url']) ? $_POST['url'] : false;
if(false === $url)
	die('url is a required field');

if(strpos($url,'http://') === false AND strpos($url,'https://') === false) {
	$url = getcwd().'/../files/'.$url;
	if(!file_exists($url))
		die('Error: the specified file does not exist');
}

$result = file_get_contents($url);

if(false === $result) {
	echo "An Error occured \n";
	echo $url."\n";
	var_dump($http_response_header);
	die();
}

die($result);

