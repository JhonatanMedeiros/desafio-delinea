import { DesafioDelineaPage } from './app.po';

describe('desafio-delinea App', () => {
  let page: DesafioDelineaPage;

  beforeEach(() => {
    page = new DesafioDelineaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
