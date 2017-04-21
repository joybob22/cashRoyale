import { CashRoyalePage } from './app.po';

describe('cash-royale App', () => {
  let page: CashRoyalePage;

  beforeEach(() => {
    page = new CashRoyalePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
