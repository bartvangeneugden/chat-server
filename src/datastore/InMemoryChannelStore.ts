import { User } from "../model/types/user";
import { Channel } from "../model/types/channel";

export default class InMemoryChannelStore {

  private channelStore: Channel[]
  private static instance: InMemoryChannelStore;

  public static getInstance(): InMemoryChannelStore {
    if (!InMemoryChannelStore.instance) {
      InMemoryChannelStore.instance = new InMemoryChannelStore();
    }
    return InMemoryChannelStore.instance;
  }

  private constructor() {}

  addUserToChannel(user: User, channelName: string) {
    this.createChannelIfNonExisting(channelName)
    this.channelStore.find(ch => ch.name == channelName).members.push(user)
  }

  private createChannelIfNonExisting(channelName: string) {
    const channelFromStore = this.channelStore.find(ch => ch.name == channelName)
    if (channelFromStore === undefined) {
      const newChannel = { name: channelName, members: [] as User[] };
      this.channelStore.push( newChannel );
      return newChannel
    }
  }

}