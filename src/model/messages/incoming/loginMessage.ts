import Message from '../message'

export class LoginMessage implements Message {
  constructor (public username: string = "", public password: string = "", public messageType = "login", public sentTimestampUTC = Date.now()) {}

  public stringify() {
    return JSON.stringify(this);
  }
}