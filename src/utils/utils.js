import { imagePopup } from "../pages/index.js";

export const handleCardClick = (elementImage) => {
  elementImage.addEventListener('click', () => {
    imagePopup.open(elementImage);
  });
};
