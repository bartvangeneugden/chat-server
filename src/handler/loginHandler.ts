import Handler from './handler';
import WebSocket from 'ws';
import { LoginMessage, ErrorMessage, LoggedIn } from '../model/messages/allMessages';
import InMemoryUserStore from '../datastore/InMemoryUserStore'
import { ErrorCode } from '../model/errorCode'

export class LoginHandler implements Handler {
  public handle(message: LoginMessage, connectionGuid: string, socket: WebSocket) {
    const user = InMemoryUserStore.getInstance().login(message.username, message.password, connectionGuid);
    
    if (user !== undefined) {
      socket.send(new ErrorMessage("Incorrect credentials. Couldn't log you in", ErrorCode.InvalidLogin).stringify)
    } else {
      socket.send(new LoggedIn("Welcome, we logged you in").stringify)
    }
  }
}