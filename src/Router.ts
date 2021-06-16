import { LoginController } from './controllers/LoginController';
import { MainController } from './controllers/MainController';

export class Router {
  private mainElement = document.getElementById('root');

  public handleRequest() {
    console.log('Handling request...');

    switch (this.getRoute()) {
      case '/login':
        if (this.mainElement) {
          this.mainElement.innerHTML = '';
          const loginController = new LoginController();
          this.mainElement.append(loginController.createView());
        }
        return;
      default:
        if (this.mainElement) {
          const mainController: MainController = new MainController();
          this.mainElement.append(mainController.createView());
        }
        return;
    }
  }

  private getRoute(): string {
    return window.location.pathname;
  }
}
