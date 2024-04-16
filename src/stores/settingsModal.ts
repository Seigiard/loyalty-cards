// @ts-expect-error
import { signal } from 'reefjs';

// Create a signal object
export const $settingsModal: { value: boolean } = signal({
  value: false,
});
