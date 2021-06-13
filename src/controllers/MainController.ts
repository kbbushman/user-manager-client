export class MainController {
  public createView(): HTMLDivElement {
    const container = document.createElement('div');

    const title = document.createElement('h2');
    title.innerText = 'Welcome to User Manager';

    const article = document.createElement('article');
    article.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aliquid nihil et, eius deserunt laboriosam. Dolores pariatur id fuga cupiditate sed tempore, repudiandae, qui vel quaerat corrupti, nihil necessitatibus aperiam esse omnis voluptatum ipsam blanditiis nostrum est velit! At illum optio deserunt dicta ipsa quas illo eius earum vero esse!';

    const button = document.createElement('button');
    button.innerText = 'Login';

    container.append(title, article, button);

    return container;
  }
}
