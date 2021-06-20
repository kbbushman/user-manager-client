import { SessionToken } from './../models/AuthenticationModel';
export class LoginService {
  public async login(
    username: string,
    password: string
  ): Promise<SessionToken | undefined> {
    if (username === 'user' && password === '1234') {
      return {
        username: 'Some Username',
      } as any;
    } else {
      return undefined;
    }
  }
}
