import WebSocket from 'ws';
import Console from 'console'

const port = 3030;
const wss = new WebSocket.Server({ port });

wss.on('connection', function connection(ws: WebSocket) {
  ws.on('message', function incoming() {
    // Do nothing for now
  });

  ws.send('something');
});

Console.log('Server started on port ' + port);