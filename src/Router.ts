import { DashboardController } from './controllers/DashboardController';
import { SessionToken } from './models/AuthenticationModel';
import { LoginController } from './controllers/LoginController';
import { MainController } from './controllers/MainController';

export class Router {
  private mainElement = document.getElementById('root');

  public handleRequest() {
    console.log('Handling request...');

    switch (this.getRoute()) {
      case '/login':
        this.switchToLoginView();
        return;
      case '/dashboard':
        this.switchToDashboardView(undefined);
        return;
      default:
        if (this.mainElement) {
          const mainController: MainController = new MainController(this);
          this.mainElement.append(mainController.createView());
        }
        return;
    }
  }

  public switchToLoginView() {
    if (this.mainElement) {
      this.mainElement.innerHTML = '';
      const loginController = new LoginController(this);
      this.mainElement.append(loginController.createView());
    }
  }

  public switchToDashboardView(sessionToken: SessionToken | undefined) {
    if (this.mainElement) {
      this.mainElement.innerHTML = '';

      const dashboardController: DashboardController = new DashboardController(
        this
      );

      if (sessionToken) {
        dashboardController.setSessionToken(sessionToken);
      }
      this.mainElement.append(dashboardController.createView());
    }
  }

  private getRoute(): string {
    return window.location.pathname;
  }
}
