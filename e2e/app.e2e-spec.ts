import { OcrImagePage } from './app.po';

describe('ocr-image App', function() {
  let page: OcrImagePage;

  beforeEach(() => {
    page = new OcrImagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
