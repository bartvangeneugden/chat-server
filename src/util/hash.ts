import crypto from 'crypto';

export default class Hash {
  static hash(input: string): string {
    const secret = 'abcdefg';
    return crypto.createHmac('sha256', secret)
                      .update(input)
                      .digest('hex');
  }
}