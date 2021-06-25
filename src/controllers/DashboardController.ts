import { SessionToken, AccessRight } from './../models/AuthenticationModel';
import { BaseController } from './BaseController';

export class DashboardController extends BaseController {
  private sessionToken: SessionToken | undefined;
  private searchArea: HTMLInputElement | undefined;
  private searchResultArea: HTMLDivElement | undefined;

  public setSessionToken(sessionToken: SessionToken) {
    this.sessionToken = sessionToken;
  }

  public createView(): HTMLDivElement {
    this.createElement('h2', 'Dashboard');

    if (this.sessionToken) {
      this.createElement('label', `Welcome ${this.sessionToken.username}`);
      this.insertBreak();
      this.generateButtons();
    } else {
      this.createElement('label', 'You can access public features of this app');
    }

    return this.container;
  }

  private generateButtons() {
    if (this.sessionToken) {
      for (const access of this.sessionToken.accessRights) {
        this.createElement('button', AccessRight[access], async () => {
          this.triggerAction(access);
        });
      }

      if (this.sessionToken.accessRights.includes(AccessRight.READ)) {
        this.insertBreak();
        this.createElement('label', 'Search');
        this.searchArea = this.createElement('input');
        this.searchResultArea = this.createElement('div');
      }
    }
  }

  private async triggerAction(access: AccessRight) {
    console.log(`${access} button clicked...`);
  }

  protected insertBreak() {
    this.createElement('br');
  }
}
