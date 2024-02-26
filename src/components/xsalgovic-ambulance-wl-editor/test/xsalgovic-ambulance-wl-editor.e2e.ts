import { newE2EPage } from '@stencil/core/testing';

describe('xsalgovic-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xsalgovic-ambulance-wl-editor></xsalgovic-ambulance-wl-editor>');

    const element = await page.find('xsalgovic-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
