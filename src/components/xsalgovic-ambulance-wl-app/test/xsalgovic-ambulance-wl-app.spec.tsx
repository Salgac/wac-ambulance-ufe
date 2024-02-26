import { newSpecPage } from "@stencil/core/testing";
import { XsalgovicAmbulanceWlApp } from "../xsalgovic-ambulance-wl-app";

describe("xsalgovic-ambulance-wl-app", () => {
  it("renders editor", async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [XsalgovicAmbulanceWlApp],
      html: `<xsalgovic-ambulance-wl-app base-path="/"></xsalgovic-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual(
      "xsalgovic-ambulance-wl-editor"
    );
  });

  it("renders list", async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [XsalgovicAmbulanceWlApp],
      html: `<xsalgovic-ambulance-wl-app base-path="/ambulance-wl/"></xsalgovic-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual(
      "xsalgovic-ambulance-wl-list"
    );
  });
});
