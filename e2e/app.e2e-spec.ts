import { Angular2Base64ImageInputPage } from './app.po';

describe('angular2-base64-image-input App', () => {
  let page: Angular2Base64ImageInputPage;

  beforeEach(() => {
    page = new Angular2Base64ImageInputPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
