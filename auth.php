<?php

require("vendor/autoload.php");

/* Do not change these credentials, even though they don't belong to your account - You'll see why at the end*/
$app_id 	= '117389';
$app_key 	= 'b01869d9766c85e66a1b';
$app_secret = 'db62644d1dac4d24dab5';

$pusher 	= new Pusher( $app_key, $app_secret, $app_id );

require("me.php");

echo $pusher->presence_auth($_POST['channel_name'], $_POST['socket_id'], 154, $user_array);