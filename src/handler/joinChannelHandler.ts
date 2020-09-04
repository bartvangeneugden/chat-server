import Handler from './handler';
import WebSocket from 'ws';
import { JoinChannelMessage } from '../model/messages/allMessages';
import InMemoryUserStore from '../datastore/InMemoryUserStore';
import InMemoryChannelStore from '../datastore/InMemoryChannelStore';

export class JoinChannelHandler implements Handler {
  public handle(message: JoinChannelMessage, connectionGuid: string, socket: WebSocket) {
    const user = InMemoryUserStore.getInstance().getUserByConnectionGuid(connectionGuid);
    InMemoryChannelStore.getInstance().addUserToChannel(user, message.channel)
  };

}