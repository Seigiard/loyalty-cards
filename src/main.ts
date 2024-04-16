import navaid from 'navaid';
// @ts-expect-error
import { component } from 'reefjs';
import { cards } from './pages/cards';
import { card } from './pages/card';
import { settings } from './pages/settings';
import { $cardId } from './stores/cardId';
import { $settingsModal } from './stores/settingsModal';
import { getBaseUrl } from './helpers/getBaseUrl';
import './style.css';

const router = navaid();

router
  .on(getBaseUrl('/'), () => {
    $cardId.value = undefined;
    $settingsModal.value = false;
  })
  .on(getBaseUrl('/settings'), () => {
    $cardId.value = undefined;
    $settingsModal.value = true;
  })
  .on(getBaseUrl('/:cardId'), (params) => {
    $cardId.value = params?.cardId;
    $settingsModal.value = false;
  });

router.listen();

component('#cards', cards);
component('#card', card);
component('#settings', settings);
