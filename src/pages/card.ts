// @ts-expect-error
import { signal } from 'reefjs';
import { $cards, Card, cardColors } from '../stores/cards';
import { backToListLink } from '../components/backToListLink';
import { code } from '../components/code';
import { layer } from '../components/layer';
import { $cardId } from '../stores/cardId';
import { getBaseUrl } from '../helpers/getBaseUrl';
import './card.css';

export function card() {
  const card = $cards.value.find((card) => card.uuid === $cardId.value);

  if (!card) {
    return '';
  }

  return layer(
    `
        ${backToListLink()}
        ${renderCard(card)}
    `,
    { level: 1 }
  );
}

export function renderCard(
  card: Card,
  { isCompact, isLink }: { isCompact?: boolean; isLink?: boolean } = {}
) {
  const color = cardColors[card?.color ?? 'GREY'];
  return `
        <div
            class="card ${isCompact ? 'card__compact' : ''}"
            style="
                --bg-color: ${color.background}; --text-color: ${color.color};
            "
        >
            ${cardHeader(card, { isLink })}
            ${!isCompact ? cardDetails(card) : ''}
        </div>
    `;
}

function cardHeader(card: Card, { isLink }: { isLink?: boolean } = {}) {
  if (!isLink) {
    return `
            <h2 class="card_header">${card.description}</h2>
        `;
  }
  return `<h2 class="card_header"><a href="${getBaseUrl(card.uuid)}">${
    card.description
  }</a></h2>`;
}

function cardDetails(card: Card) {
  const details = Object.keys(card)
    .map((key) => {
      const value = card[key as keyof Card];
      if (!value) {
        return '';
      }
      return `<dt>${key}</dt><dd>${value}</dd>`;
    })
    .join('');

  return `
        <div class="card_code cardCode">
            <div class="cardCode_svg">
                ${code(card.codeType, card.code)}
                </div>
            <h3>${card?.notes || card.code}</h3>
            ${
              card?.notes && card?.notes !== card.code
                ? `<p>${card.code}</p>`
                : ''
            }
        </div>
        <details class="card_details">
            <summary>Details</summary>
                <dl>${details}</dl>
        </details>
    `;
}
