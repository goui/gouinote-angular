import { GouinoteAngularPage } from './app.po';

describe('gouinote-angular App', function() {
  let page: GouinoteAngularPage;

  beforeEach(() => {
    page = new GouinoteAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
