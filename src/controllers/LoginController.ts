export class LoginController {
  public createView(): HTMLDivElement {
    const container = document.createElement('div');

    const title = document.createElement('h2');
    title.innerText = 'Please Login to Continue';

    const username = document.createElement('label');
    username.innerText = 'Username';

    const usernameInput = document.createElement('input');
    usernameInput.setAttribute('type', 'text');
    usernameInput.setAttribute('name', 'username');

    const password = document.createElement('label');
    password.innerText = 'Password';

    const passwordInput = document.createElement('input');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('name', 'password');

    const loginButton = document.createElement('button');
    loginButton.innerText = 'Login';

    container.append(
      title,
      username,
      usernameInput,
      password,
      passwordInput,
      loginButton
    );

    return container;
  }
}
