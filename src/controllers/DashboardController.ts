import { User } from './../models/DataModels';
import { DataService } from './../services/DataService';
import { SessionToken, AccessRight } from './../models/AuthenticationModel';
import { BaseController } from './BaseController';

export class DashboardController extends BaseController {
  private sessionToken: SessionToken | undefined;
  private searchArea: HTMLInputElement | undefined;
  private searchResultArea: HTMLDivElement | undefined;
  private dataService: DataService = new DataService();
  private selectedUser: User | undefined;

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
    switch (access) {
      case AccessRight.READ:
        this.searchResultArea!.innerHTML = '';
        const users = await this.dataService.getUsers(
          this.sessionToken!.tokenId,
          this.searchArea!.value
        );
        console.log(users);

        for (const user of users) {
          const label = this.createElement('label', JSON.stringify(user));
          label.onclick = () => {
            label.classList.toggle('selected-label');
            this.selectedUser = user;
          };
          this.searchResultArea!.append(label);
          this.searchResultArea?.append(document.createElement('br'));
        }
        break;
      case AccessRight.DELETE:
        if (this.selectedUser) {
          await this.dataService.deleteUser(
            this.sessionToken!.tokenId,
            this.selectedUser
          );
        }
        break;
      default:
        break;
    }
  }

  protected insertBreak() {
    this.createElement('br');
  }
}
