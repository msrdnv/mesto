import { api, confirmationPopup } from "../pages/index.js";

export const handleDeleteCard = (card) => {
  api.deleteCard(card.getCardId())
  .then(() => {
    confirmationPopup.close();
    card.deleteCard();
  })
  .catch(console.error)
};
