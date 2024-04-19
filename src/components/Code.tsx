// @ts-expect-error
import { qrcode, ean13, code128, drawingSVG } from 'bwip-js';
import { CardCodeType } from '../stores/cards';

export function Code({
  type,
  code,
  className,
}: {
  type: CardCodeType;
  code: string;
  className?: string;
}) {
  const svg = getSvgCode(type, code);
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: svg }} />
  );
}

function getSvgCode(type: CardCodeType, code: string) {
  switch (type) {
    case 'EAN13':
      return ean13({ text: code, scaleX: 2, scaleY: 1.2 }, drawingSVG());
    case 'CODE128':
      return code128({ text: code, scaleX: 2, scaleY: 1.2 }, drawingSVG());
    case 'QR':
      return qrcode({ text: code, scaleX: 2, scaleY: 2 }, drawingSVG());
    default:
      return '';
  }
}
