import { newSpecPage } from "@stencil/core/testing";
import { XsalgovicAmbulanceWlList } from "../xsalgovic-ambulance-wl-list";

describe("xsalgovic-ambulance-wl-list", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [XsalgovicAmbulanceWlList],
      html: `<xsalgovic-ambulance-wl-list></xsalgovic-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as XsalgovicAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length;

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
