import { OnlineRetailStorePage } from './app.po';

describe('online-retail-store App', () => {
  let page: OnlineRetailStorePage;

  beforeEach(() => {
    page = new OnlineRetailStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
