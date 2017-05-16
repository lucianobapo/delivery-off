import { DeliveryOffPage } from './app.po';

describe('delivery-off App', () => {
  let page: DeliveryOffPage;

  beforeEach(() => {
    page = new DeliveryOffPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
