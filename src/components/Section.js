export class Section {
  constructor ({renderer}, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  };

  renderItems(data) {
    for (let i in data) {
      this._renderer(data[data.length-i-1]);
    };
  };

  addItem(element) {
    this._container.prepend(element);
  };
}
