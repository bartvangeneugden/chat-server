import Message from '../message';
import { ErrorCode } from '../../errorCode';

export class  ErrorMessage implements Message {
  constructor (public errorMessage: string, public errorCode: ErrorCode, public messageType = "error", public sentTimestampUTC = Date.now()) {}

  public stringify() {
    return JSON.stringify(this);
  }
}