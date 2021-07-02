import { LoginService } from './../services/LoginService';
import { BaseController } from './BaseController';
import { LinkTextValue } from './Decorators';

export class LoginController extends BaseController {
  private loginService = new LoginService();

  private title = this.createElement('h2', 'Please Login to Continue');
  private username = this.createElement('label', 'Username ');
  private usernameInput = this.createElement('input');
  private break1 = this.createElement('br');
  private password = this.createElement('label', 'Password ');
  private passwordInput = this.createElement('input');
  private break2 = this.createElement('br');

  private loginButton = this.createElement('button', 'Login', async () => {
    if (this.usernameInput.value && this.passwordInput.value) {
      this.errorLabelText = '';

      const result = await this.loginService.login(
        this.usernameInput.value,
        this.passwordInput.value
      );

      if (result) {
        this.router.switchToDashboardView(result);
      } else {
        this.errorLabelText =
          'Username or password is incorrect. Please try again.';
      }
    } else {
      this.errorLabelText = 'Please enter your unsername and password';
    }
  });

  private break3 = this.createElement('br');
  private errorLabel = this.createElement('label');

  @LinkTextValue('errorLabel')
  private errorLabelText: string = '';

  public createView(): HTMLDivElement {
    this.errorLabel.id = 'errorLabel';
    this.errorLabel.style.color = 'red';
    this.usernameInput.setAttribute('type', 'text');
    this.usernameInput.setAttribute('name', 'username');
    this.passwordInput.setAttribute('type', 'password');
    this.passwordInput.setAttribute('name', 'password');

    return this.container;
  }
}
