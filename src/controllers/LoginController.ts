import { BaseController } from './BaseController';

export class LoginController extends BaseController {
  public createView(): HTMLDivElement {
    const title = this.createElement('h2', 'Please Login to Continue');
    const username = this.createElement('label', 'Username');

    const usernameInput = this.createElement('input');
    usernameInput.setAttribute('type', 'text');
    usernameInput.setAttribute('name', 'username');

    const password = this.createElement('label', 'Password');

    const passwordInput = this.createElement('input');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('name', 'password');

    const loginButton = this.createElement('button', 'Login');

    this.container.append(
      title,
      username,
      usernameInput,
      password,
      passwordInput,
      loginButton
    );

    return this.container;
  }
}
