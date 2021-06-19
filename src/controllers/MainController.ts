import { BaseController } from './BaseController';

export class MainController extends BaseController {
  public createView(): HTMLDivElement {
    const title = this.createElement('h2', 'Welcome to User Manager');

    const article = this.createElement(
      'article',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aliquid nihil et, eius deserunt laboriosam. Dolores pariatur id fuga cupiditate sed tempore, repudiandae, qui vel quaerat corrupti, nihil necessitatibus aperiam esse omnis voluptatum ipsam blanditiis nostrum est velit! At illum optio deserunt dicta ipsa quas illo eius earum vero esse!'
    );

    const button = this.createElement('button', 'Login', () => {
      this.router.switchToLoginView();
    });

    return this.container;
  }
}
