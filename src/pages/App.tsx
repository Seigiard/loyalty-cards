import { useStore } from '@nanostores/preact';
import { $router } from '../stores/router.js';
import { CardsPage } from './Cards';
import { CardPage } from './Card';
import { SettingsPage } from './Settings';
import { Layer } from '../components/Layer';
import { BackToListLink } from '../components/BackToListLink';
import { SettingsButton } from '../components/SettingsButton';

export const App = () => {
  // @ts-expect-error
  const { route, params } = useStore($router);

  return (
    <>
      <SettingsButtonRouter />
      <Layer>
        <CardsPage />
      </Layer>
      <Router />
    </>
  );
};

function SettingsButtonRouter() {
  // @ts-expect-error
  const { route, params } = useStore($router);

  switch (route) {
    case 'settings':
      return <></>;
    default:
      return <SettingsButton />;
  }
}

function Router() {
  // @ts-expect-error
  const { route, params } = useStore($router);

  switch (route) {
    case 'card':
      return (
        <Layer level={2}>
          <BackToListLink />
          <CardPage cardId={params.cardId} />
        </Layer>
      );
    case 'settings':
      return (
        <Layer level={2}>
          <BackToListLink />
          <SettingsPage />
        </Layer>
      );
    default:
      return <></>;
  }
}
