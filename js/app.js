/* Do not change this key, even though it doesn't belong to your account - You'll see why at the end*/
var pusher = new Pusher('c0f9e245836dad65984b', {authEndpoint: 'auth.php'});

var channel = pusher.subscribe('presence-chat-room-dpc');







/*Use the #whos-online, #whos-online-count and #no-one-online elements in your logic implementation*/