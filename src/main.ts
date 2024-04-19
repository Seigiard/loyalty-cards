// @ts-expect-error
import { render, component } from 'reefjs';
import { $router } from './stores/router';
import { $activeCardId, $cards } from './stores/cards';
import { $settingsModal } from './stores/settingsModal';
import { cards } from './pages/cards';
import { card } from './pages/card';
import { settings } from './pages/settings';
import './style.css';

$router.subscribe((data) => {
  // @ts-expect-error
  const { params, route } = data;
  switch (route) {
    case 'settings':
      $activeCardId.set(undefined);
      $settingsModal.set(true);
      break;
    case 'card':
      $activeCardId.set(params?.cardId);
      $settingsModal.set(false);
      break;
    case 'home':
    default:
      $activeCardId.set(undefined);
      $settingsModal.set(false);
      break;
  }
});

$cards.subscribe((data) => {
  render('#cards', cards(data));
});
$activeCardId.subscribe((cardId) => {
  render('#card', card(cardId));
});
$settingsModal.subscribe((showModal) => {
  render('#settings', settings(showModal));
});
