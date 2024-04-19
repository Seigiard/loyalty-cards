import { $cards } from '../stores/cards';
import type { CardType } from '../stores/cards';
import { Card } from '../components/Card';
import './Card.css';

export function CardPage({ cardId }: { cardId: CardType['uuid'] | undefined }) {
  const card = $cards.get().find((card) => card.uuid === cardId);

  if (!card) {
    return <></>;
  }

  return <Card className={'card__open'} card={card} />;
}
