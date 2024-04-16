// @ts-expect-error
import { signal } from 'reefjs';
import { Card } from './cards';

// Create a signal object
export const $cardId: { value: Card['uuid'] | undefined } = signal({
  value: undefined,
});
