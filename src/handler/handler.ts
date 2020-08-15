import Message from '../model/messages/message';
import WebSocket from 'ws';

export default interface Handler {
  handle: (message: Message, connectionGuid: string, socket: WebSocket) => void // ASync handler of a message. Can send messages to the socket if it wants
}