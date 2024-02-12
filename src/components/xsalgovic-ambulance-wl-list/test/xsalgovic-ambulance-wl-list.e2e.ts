import { newE2EPage } from '@stencil/core/testing';

describe('xsalgovic-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xsalgovic-ambulance-wl-list></xsalgovic-ambulance-wl-list>');

    const element = await page.find('xsalgovic-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
