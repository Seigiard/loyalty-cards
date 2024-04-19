import { atom, map } from 'nanostores';
import data from '../data/vouchervault.json';

export type CardColor =
  | 'GREY'
  | 'BLUE'
  | 'GREEN'
  | 'ORANGE'
  | 'PURPLE'
  | 'RED'
  | 'YELLOW';
export type CardCodeType = 'EAN13' | 'CODE128' | 'QR';
export type Card = {
  uuid: string;
  description: string;
  code: string;
  codeType: CardCodeType;
  notes: string;
  color?: CardColor;
};

export const $cards = map<Card[]>(data as Card[]);

export const $activeCardId = atom<Card['uuid'] | undefined>(undefined);

export const cardColors: {
  [key in CardColor]: {
    color: string;
    background: string;
  };
} = {
  GREY: {
    color: '#fff',
    background: '#616161',
  },
  BLUE: {
    color: '#fff',
    background: '#2396F3',
  },
  GREEN: {
    color: '#fff',
    background: '#44A047',
  },
  ORANGE: {
    color: '#fff',
    background: '#F06C00',
  },
  PURPLE: {
    color: '#fff',
    background: '#9C27B1',
  },
  RED: {
    color: '#fff',
    background: '#D12D30',
  },
  YELLOW: {
    color: '#000',
    background: '#F5BC2B',
  },
};
