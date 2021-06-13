import { MainController } from "./controllers/MainController";

export class Router {
  private mainElement = document.getElementById('root');

  public handleRequest() {
    console.log('Handling request...');

    switch (this.getRoute()) {

      default:
        if (this.mainElement) {
          const mainController: MainController = new MainController();
          this.mainElement.append(mainController.createView());
        }
    }
  }

  private getRoute():string {
    return window.location.pathname;
  }
}
