import Base from "./base";
class Medias extends Base {
  constructor() {
    super("media");
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

export default new Medias();
