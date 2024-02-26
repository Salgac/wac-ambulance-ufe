import { newE2EPage } from '@stencil/core/testing';

describe('xsalgovic-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xsalgovic-ambulance-wl-app></xsalgovic-ambulance-wl-app>');

    const element = await page.find('xsalgovic-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
