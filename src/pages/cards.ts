import { layer } from '../components/layer';
import { $cards, Card } from '../stores/cards';
import { renderCard } from './card';
import './cards.css';

export function cards() {
  return layer(`
    <div class="cards"><div class="stack">
        ${$cards.value.map(cards_card).join('')}
    </div></div>
  `);
}

function cards_card(card: Card) {
  return renderCard(card, { isCompact: true, isLink: true });
}
