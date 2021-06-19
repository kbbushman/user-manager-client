export abstract class BaseController {
  protected container = this.createElement('div');

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
