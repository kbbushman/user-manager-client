export abstract class BaseController {
  protected container = document.createElement('div');

  public abstract createView(): HTMLDivElement;

  protected createElement<K extends keyof HTMLElementTagNameMap>(
    elementType: K,
    innerText?: string
  ): HTMLElementTagNameMap[K] {
    const element = document.createElement(elementType);
    if (innerText) {
      element.innerText = innerText;
    }

    return element;
  }
}
