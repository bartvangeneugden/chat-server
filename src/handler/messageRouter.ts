import { MessageEvent } from '@types/ws';
import { ErrorMessage, LoginMessage } from '../model/messages/allMessages';
import { ErrorCode } from '../model/errorCode';
import { LoginHandler } from './allHandlers';

export default class MessageRouter {

  public execute(message: MessageEvent, connectionGuid: string): void {
    if (typeof message.data === "string") {
      const messageData = JSON.parse(message.data);
      switch(messageData.type) {
        case "login": {
          const login: LoginMessage = messageData
          new LoginHandler().handle(login, connectionGuid, message.target);
          break;
        }
      }
    } else {
      message.target.send(JSON.stringify(new ErrorMessage("Invalid message (not a string)", ErrorCode.InvalidRequest)))
    }
  }

}