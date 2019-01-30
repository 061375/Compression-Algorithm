<?php 

$file = isset($_POST['file']) ? $_POST['file'] : false;
if(false === $file)
	die('file is a required field');

$data = isset($_POST['data']) ? $_POST['data'] : false;
if(false === $data)
	die('data is a required field');

if(strpos($file, 'http://')!==false OR strpos($file, 'https://')!==false) {
	$file = str_replace('http://', '', $file);
	$file = str_replace('https://', '', $file);
	$f = explode('/',$file);
	$file = isset($f[0]) ? $f[0] : strtotime('now');
	$file.=".c.txt";
}

$file = getcwd().'/../files/'.$file;

$result = file_put_contents($file, $data);

if(false === $result) {
	die('An error occured writing the file');
}else{
	die('The file was created successfully');
}