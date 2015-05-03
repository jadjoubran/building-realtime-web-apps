/* Do not change this key, even though it doesn't belong to your account - You'll see why at the end*/
var pusher = new Pusher('c0f9e245836dad65984b');

var channel = pusher.subscribe('private-chat-room-dpc');
channel.bind('chat_message', function(data) {
	alert(data.message);
});