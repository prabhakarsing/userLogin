import { UserLoginPage } from './app.po';

describe('user-login App', function() {
  let page: UserLoginPage;

  beforeEach(() => {
    page = new UserLoginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
