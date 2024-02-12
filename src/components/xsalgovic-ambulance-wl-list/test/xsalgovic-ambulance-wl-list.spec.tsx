import { newSpecPage } from '@stencil/core/testing';
import { XsalgovicAmbulanceWlList } from '../xsalgovic-ambulance-wl-list';

describe('xsalgovic-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XsalgovicAmbulanceWlList],
      html: `<xsalgovic-ambulance-wl-list></xsalgovic-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <xsalgovic-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xsalgovic-ambulance-wl-list>
    `);
  });
});
