// stores/router.ts
import { createRouter } from '@nanostores/router';
import { getBaseUrl } from '../helpers/getBaseUrl';

export const $router = createRouter({
  home: getBaseUrl('/'),
  settings: getBaseUrl('/settings'),
  card: getBaseUrl('/:cardId'),
});
