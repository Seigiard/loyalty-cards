import { $cards, Card } from "../stores/cards";
import { renderCard } from "./card";

export function cards() {
    return $cards.value.map(cards_card).join("");
}

function cards_card(card: Card) {
    return renderCard(card, { isCompact: true, isLink: true });
}
