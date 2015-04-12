<?php

class Composer 
{
    function __construct() 
    {
        $path_composer_autoload = './vendor/autoload.php';
        
        if (file_exists($path_composer_autoload)) {
            include_once($path_composer_autoload);
        }
    }
}
