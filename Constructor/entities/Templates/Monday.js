export class Monday {
  name;
  type;
  background;
  wrapper;
  css;
  templatePartsConfig = {
    offerPart: "",
    intro: {},
    freebies: {},
    links: [],
    categories: [],
  };
  constructor({ name, type, background, wrapper, css, templatePartsConfig }) {
    this.templatePartsConfig = {
      offerPart,
    };
  }
}
