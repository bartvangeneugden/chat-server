import Message from '../message'

export class JoinChannelMessage implements Message {
  constructor (public channel: string, public messageType = "joinChannel", public sentTimestampUTC = Date.now()) {}

  public stringify() {
    return JSON.stringify(this);
  }
}