import { api, confirmationPopup } from "../pages/index.js";

export const handleDeleteCard = (cardId, element) => {
  confirmationPopup.close();
  api.deleteCard(cardId)
  .then((res) => {
    return res;
  })
  .then(() => {
    element.remove();
    element = null;
  })
  .catch((err) => {
    console.log(err);
  });
};
