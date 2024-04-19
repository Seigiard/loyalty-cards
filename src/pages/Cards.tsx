import { useStore } from '@nanostores/preact';
import { $cards } from '../stores/cards';
import { Card } from '../components/Card';
import './Cards.css';

export function CardsPage() {
  const cards = useStore($cards);
  const cardList = cards.map((card) => (
    <Card key={card.uuid} card={card} isCompact isLink />
  ));

  return <div className='cards'>{cardList}</div>;
}
