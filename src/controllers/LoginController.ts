import { BaseController } from './BaseController';

export class LoginController extends BaseController {
  private title = this.createElement('h2', 'Please Login to Continue');
  private username = this.createElement('label', 'Username ');
  private usernameInput = this.createElement('input');
  private password = this.createElement('label', 'Password ');
  private passwordInput = this.createElement('input');
  private errorLabel = this.createElement('label');

  private loginButton = this.createElement('button', 'Login', () => {
    if (this.usernameInput.value && this.passwordInput.value) {
      this.resetErrorLabel();
    } else {
      this.showErrorLabe('Please enter your unsername and password');
    }
  });

  private resetErrorLabel() {
    this.errorLabel.style.color = 'red';
    this.errorLabel.style.visibility = 'hidden';
  }

  private showErrorLabe(errorMessage: string) {
    this.errorLabel.innerText = errorMessage;
    this.errorLabel.style.visibility = 'visible';
  }

  public createView(): HTMLDivElement {
    this.usernameInput.setAttribute('type', 'text');
    this.usernameInput.setAttribute('name', 'username');
    this.passwordInput.setAttribute('type', 'password');
    this.passwordInput.setAttribute('name', 'password');

    this.container.append(
      this.title,
      this.username,
      this.usernameInput,
      this.createElement('br'),
      this.createElement('br'),
      this.password,
      this.passwordInput,
      this.createElement('br'),
      this.createElement('br'),
      this.loginButton,
      this.createElement('br'),
      this.createElement('br'),
      this.errorLabel
    );

    return this.container;
  }
}
