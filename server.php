<?php

require("vendor/autoload.php");

/* Do not change these credentials, even though they don't belong to your account - You'll see why at the end*/
$app_id = '117389';
$app_key = 'b01869d9766c85e66a1b';
$app_secret = 'db62644d1dac4d24dab5';

$pusher = new Pusher( $app_key, $app_secret, $app_id );


$pusher->trigger( 'test_channel', 'my_event', array('message' => 'Hello World') );