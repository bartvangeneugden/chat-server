import WebSocket from 'ws';
import { MessageEvent } from '@types/ws';
import Console from 'console'
import Guid from './util/guid'
import MessageRouter from './handler/messageRouter'

const port = 3030;
const wss = new WebSocket.Server({ port });
const router = new MessageRouter();

wss.on('connection', function connection(ws: WebSocket) {
  const connectionGuid = Guid.newGuid();
  
  ws.on('message', function incoming(message: MessageEvent) {
    router.execute(message, connectionGuid);
  });

  ws.send('something');
});

Console.log('Server started on port ' + port);