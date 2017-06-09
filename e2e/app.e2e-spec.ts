import { AngularRedditPage } from './app.po';

describe('angular-reddit App', () => {
  let page: AngularRedditPage;

  beforeEach(() => {
    page = new AngularRedditPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
