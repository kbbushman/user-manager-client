import { BaseController } from './BaseController';

export function LinkTextValue(element: HTMLInputElement) {
  return function (target: BaseController, key: string) {
    let property = (target as any)[key];

    const getter = () => {
      return property;
    };

    const setter = (newValue: any) => {
      property = newValue;
      element.innerText = newValue;
      if (!newValue) {
        element.style.visibility = 'visible';
      } else {
        element.style.visibility = 'hidden';
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      configurable: true,
      enumerable: true,
    });
  };
}
