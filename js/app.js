/* Do not change this key, even though it doesn't belong to your account - You'll see why at the end*/
var pusher = new Pusher('b01869d9766c85e66a1b');

var channel = pusher.subscribe('chat-room-dpc');
channel.bind('chat_message', function(data) {
	alert(data.message);
});