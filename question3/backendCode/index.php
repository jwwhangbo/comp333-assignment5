<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Methods:GET,PATCH,POST,OPTIONS,DELETE');
header('Access-Control-Allow-Credentials:true');


require_once __DIR__ . '/src/Route.php';
require_once __DIR__ . '/routes.php';

