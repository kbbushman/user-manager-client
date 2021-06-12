import { Router } from "./Router";

export class Main {
  private router: Router = new Router();

  public constructor () {
    console.log('New Client Instance Created');
  }
  
}

new Main();
