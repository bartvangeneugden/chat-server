import Message from '../message';

export class LoggedIn implements Message {
  constructor (public message: string, public messageType = "loggedIn", public sentTimestampUTC = Date.now()) {}

  public stringify() {
    return JSON.stringify(this);
  }
}