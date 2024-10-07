export class Template {
  name;
  type;
  wrapper;
  css;
  links;
  tableQueries;
  constructor({ type, wrapper, name, css, links, tableQueries }) {
    this.type = type;
    this.wrapper = wrapper;
    this.name = name;
    this.css = css;
    this.links = links;
    this.tableQueries = tableQueries;
  }
}
