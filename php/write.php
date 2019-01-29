<?php 

$file = isset($_POST['file']) ? $_POST['file'] : false;
if(false === $file)
	die('file is a required field');

$data = isset($_POST['data']) ? $_POST['data'] : false;
if(false === $data)
	die('data is a required field');

$file = getcwd().'/../files/'.$file;

$result = file_put_contents($file, $data);

if(false === $result) {
	die('An error occured writing the file');
}else{
	die('The file was created successfully');
}