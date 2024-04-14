// @ts-expect-error
import { signal } from "reefjs";
import navaid from "navaid";
import { $cards, Card, cardColors } from "../stores/cards";
import { backToListLink } from "../components/backToListLink";
import { code } from "../components/code";

// Create a signal object
const $cardId: { value: Card["uuid"] | undefined } = signal({ value: undefined });

const router = navaid();

router
    .on("/", () => {
        $cardId.value = undefined;
    })
    .on("/:cardId", (params) => {
        $cardId.value = params?.cardId;
    });

router.listen();

export function card() {
    const card = $cards.value.find((card) => card.uuid === $cardId.value);

    if (!card) {
        return "";
    }

    return `
        ${backToListLink()}
        ${renderCard(card)}
    `;
}

export function renderCard(card: Card, { isCompact, isLink }: { isCompact?: boolean; isLink?: boolean } = {}) {
    const color = cardColors[card?.color ?? "GREY"];
    return `
        <div
            class="card ${isCompact ? "card_compact" : ""} cs-shadow"
            style="
                --bg-color: ${color.background}; --text-color: ${color.color};
            "
        >
            ${cardHeader(card, { isLink })}
            ${!isCompact ? cardDetails(card) : ""}
        </div>
    `;
}

function cardHeader(card: Card, { isLink }: { isLink?: boolean } = {}) {
    if (!isLink) {
        return `
            <h2 class="card_header">${card.description}</h2>
        `;
    }
    return `<h2 class="card_header"><a href="/${card.uuid}">${card.description}</a></h2>`;
}

function cardDetails(card: Card) {
    const details = Object.keys(card)
        .map((key) => {
            const value = card[key as keyof Card];
            if (!value) {
                return "";
            }
            return `<dt>${key}</dt><dd>${value}</dd>`;
        })
        .join("");

    return `
        <div class="card_code cs-inset cardCode">
            <div class="cardCode_svg">
                ${code(card.codeType, card.code)}
                </div>
            <h3>${card?.notes || card.code}</h3>
            ${card.notes ? `<p>${card.code}</p>` : ""}
        </div>
        <details class="card_details">
            <summary>Details</summary>
                <dl>${details}</dl>
        </details>
    `;
}
