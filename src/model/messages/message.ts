export default interface Message {
  messageType: string,
  sentTimestampUTC: number,
  stringify: () => string
}