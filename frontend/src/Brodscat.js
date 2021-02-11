import Echo from 'laravel-echo';
import * as socketio from 'socket.io-client';

export const echo = new Echo({
    host: 'http://localhost:6001',
    broadcaster: 'socket.io',
    client: socketio
});