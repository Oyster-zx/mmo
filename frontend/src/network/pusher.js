import Pusher from 'pusher-js';

const socket = new Pusher('fe302f7d2d8ed454824b', {
    cluster: 'eu',
    encrypted: true,
    authEndpoint: 'http://localhost:4000/pusher/auth'
});

export default socket;