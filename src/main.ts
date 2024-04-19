// @ts-expect-error
import { component } from 'reefjs';
import { cards } from './pages/cards';
import { card } from './pages/card';
import { settings } from './pages/settings';
import { $cardId } from './stores/cardId';
import { $router } from './stores/router';
import { $settingsModal } from './stores/settingsModal';
import './style.css';

$router.subscribe(({ params, route }) => {
  switch (route) {
    case 'settings':
      $cardId.value = undefined;
      $settingsModal.value = true;
      break;
    case 'card':
      $cardId.value = params?.cardId;
      $settingsModal.value = false;
      break;
    case 'home':
    default:
      $cardId.value = undefined;
      $settingsModal.value = false;
      break;
  }
});

component('#cards', cards);
component('#card', card);
component('#settings', settings);
