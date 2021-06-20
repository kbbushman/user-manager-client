import { SessionToken } from './../models/AuthenticationModel';
import { BaseController } from './BaseController';

export class DashboardController extends BaseController {
  private sessionToken: SessionToken | undefined;

  public setSessionToken(sessionToken: SessionToken) {
    this.sessionToken = sessionToken;
  }

  public createView(): HTMLDivElement {
    this.createElement('h2', 'Dashboard');

    if (this.sessionToken) {
      this.createElement('label', `Welcome ${this.sessionToken.username}`);
    } else {
      this.createElement('label', 'You can access public features of this app');
    }

    return this.container;
  }
}
