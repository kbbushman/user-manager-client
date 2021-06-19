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
      this.errorLabel.style.visibility = 'hidden';
    } else {
      this.errorLabel.innerText = 'Please enter your unsername and password';
      this.errorLabel.style.visibility = 'visible';
    }
  });

  public createView(): HTMLDivElement {
    this.usernameInput.setAttribute('type', 'text');
    this.usernameInput.setAttribute('name', 'username');
    this.passwordInput.setAttribute('type', 'password');
    this.passwordInput.setAttribute('name', 'password');
    this.errorLabel.style.color = 'red';
    this.errorLabel.style.visibility = 'hidden';

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
