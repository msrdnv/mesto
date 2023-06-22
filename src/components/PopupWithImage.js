import { Popup } from './Popup.js';
import { fullImage, imageCaption } from '../utils/constants.js';

export class PopupWithImage extends Popup {
  open(elementImage) {
    super.open();
    fullImage.src = elementImage.src;
    fullImage.alt = elementImage.alt;
    imageCaption.textContent = elementImage.nextElementSibling.textContent;
  }
}
