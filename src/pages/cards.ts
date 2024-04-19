import { layer } from '../components/layer';
import { Card } from '../stores/cards';
import { renderCard } from './card';
import './cards.css';

export function cards(cards: readonly Card[]) {
  return layer(`
    <div class="cards">
        ${cards.map(cards_card).join('')}
    </div>
  `);
}

function cards_card(card: Card) {
  return renderCard(card, { isCompact: true, isLink: true });
}
