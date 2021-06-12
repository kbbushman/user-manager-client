export class Router {
  public handleRequest() {
    console.log('Handling request...');
  }

  private getRoute():string {
    return window.location.pathname;
  }
}
