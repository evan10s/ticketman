import { TicketmanPage } from './app.po';

describe('ticketman App', () => {
  let page: TicketmanPage;

  beforeEach(() => {
    page = new TicketmanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
