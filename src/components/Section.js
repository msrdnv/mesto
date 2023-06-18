export class Section {
  constructor ({items, renderer}, containerSelector) {
    this._initialData = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  };

  renderItems() {
    this._initialData.forEach((item) => {
      this._renderer(item);
    });

  };

  addItem(element) {
    this._container.append(element);
  };
}
