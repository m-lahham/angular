import { Ng4CompleteGuidPage } from './app.po';

describe('ng4-complete-guid App', () => {
  let page: Ng4CompleteGuidPage;

  beforeEach(() => {
    page = new Ng4CompleteGuidPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
