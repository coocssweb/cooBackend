import Base from "./base";
class Bestwishs extends Base {
  constructor() {
    super("bestwish");
  }

  fetch(param) {
    return this.request({});
  }

  fetchOne(id) {
    return this.request({ id });
  }

  create(param) {
    return this.request({ data: param, method: "post" });
  }

  edit(id, param) {
    return this.request({ id, data: param, method: "put" });
  }

  remove(id) {
    return this.request({ id, method: "delete" });
  }
}

export default new Bestwishs();
