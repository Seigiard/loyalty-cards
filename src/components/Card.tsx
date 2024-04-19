import { cx } from 'classix';
import { getBaseUrl } from '../helpers/getBaseUrl';
import type { CardType } from '../stores/cards';
import { cardColors } from '../stores/cards';
import { Code } from './Code';
import './Card.css';

export function Card({
  card,
  className,
  isCompact,
  isLink,
}: {
  card: CardType;
  className?: string;
  isCompact?: boolean;
  isLink?: boolean;
}) {
  const color = cardColors[card?.color ?? 'GREY'];
  const style = {
    '--bg-color': color.background,
    '--text-color': color.color,
  };

  return (
    <div
      className={cx('card', isCompact && 'card__compact', className)}
      style={style}
    >
      <CardHeader card={card} isLink={isLink} />
      {!isCompact && <CardCode card={card} />}
      {!isCompact && <CardDetails card={card} />}
    </div>
  );
}

function CardHeader({ card, isLink }: { card: CardType; isLink?: boolean }) {
  if (!isLink) {
    return <h2 className='card_header'>{card.description}</h2>;
  }
  return (
    <h2 className='card_header'>
      <a href={getBaseUrl(card.uuid)}>{card.description}</a>
    </h2>
  );
}

function CardCode({ card }: { card: CardType }) {
  return (
    <div className='card_code cardCode'>
      <Code type={card.codeType} code={card.code} className='cardCode_svg' />
      <h3>{card?.notes || card.code}</h3>
      {card?.notes && card?.notes !== card.code ? <p>{card.code}</p> : ''}
    </div>
  );
}

function CardDetails({ card }: { card: CardType }) {
  const details = Object.keys(card)
    .map((key) => {
      const value = card[key as keyof CardType];
      if (!value) {
        return '';
      }
      return `<dt>${key}</dt><dd>${value}</dd>`;
    })
    .join('');

  return (
    <details className='card_details'>
      <summary>Details</summary>
      <dl>{details}</dl>
    </details>
  );
}
