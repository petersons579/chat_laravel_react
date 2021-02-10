import Echo from 'laravel-echo';
import * as socketio from 'socket.io-client';

const echo = new Echo({
    host: 'http://localhost:6001',
    broadcaster: 'socket.io',
    client: socketio
});
  
export function echoNotification() {
    echo
    .channel('chats.1')
    .listen('ChatMessageCreated', ev => console.log(ev.message));
}