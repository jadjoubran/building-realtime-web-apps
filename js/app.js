/* Do not change this key, even though it doesn't belong to your account - You'll see why at the end*/
var pusher = new Pusher('c0f9e245836dad65984b', {authEndpoint: 'auth.php'});

var channel = pusher.subscribe('presence-chat-room-dpc');







/*You can use the #whos-online and #whos-online in your logic implementation*/