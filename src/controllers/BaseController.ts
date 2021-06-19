import { Router } from './../Router';
export abstract class BaseController {
  protected container = this.createElement('div');
  protected router: Router;

  public constructor(router: Router) {
    this.router = router;
  }

  public abstract createView(): HTMLDivElement;

  protected createElement<K extends keyof HTMLElementTagNameMap>(
    elementType: K,
    innerText?: string,
    action?: any
  ): HTMLElementTagNameMap[K] {
    const element = document.createElement(elementType);
    if (innerText) {
      element.innerText = innerText;
    }

    if (action) {
      element.onclick = action;
    }

    return element;
  }
}
