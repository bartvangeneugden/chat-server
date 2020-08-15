import { User } from '../model/types/user';
import Hash from '../util/hash';

export default class InMemoryUserStore {

  private static instance: InMemoryUserStore;

  public static getInstance(): InMemoryUserStore {
    if (!InMemoryUserStore.instance) {
      InMemoryUserStore.instance = new InMemoryUserStore();
    }
    return InMemoryUserStore.instance;
  }

  private constructor() {}

  private userDatabase: [ User ] = [
    { username: 'bart', passwordhash: Hash.hash("abc123"), connectionGuid: null }
  ]

  login(username: string, passwordHash: string, connectionGuid: string): User {
    const user = this.userDatabase.find(user => user.username == username && user.passwordhash == passwordHash)
    if (user !== undefined) {
      user.connectionGuid = connectionGuid;
    }
    return user;
  }

}