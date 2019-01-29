<?php 

$file = isset($_POST['file']) ? $_POST['file'] : false;
if(false === $file)
	die('file is a required field');

$file = getcwd().'/../files/'.$file;

if(!file_exists($file))
	die('Error: the specified file does not exist');

$result = file_get_contents($file);

if(false === $result) {
	echo "An Error occured \n";
	echo $file."\n";
	die();
}

die($result);