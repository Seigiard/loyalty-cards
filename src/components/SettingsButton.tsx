import { getBaseUrl } from '../helpers/getBaseUrl';
import './SettingsButton.css';

export function SettingsButton() {
  return (
    <a className='settingsButton' href={getBaseUrl('settings')}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        stroke='currectColor'
        viewBox='0 0 24 24'
      >
        <circle cx='12' cy='12' r='3' />
        <path d='M13.77 2.15C13.4 2 12.93 2 12 2s-1.4 0-1.77.15a2 2 0 0 0-1.08 1.08c-.09.23-.13.49-.14.87-.02.56-.3 1.07-.8 1.35-.47.28-1.06.27-1.56 0a2.46 2.46 0 0 0-.82-.3 2 2 0 0 0-1.48.4c-.31.24-.54.64-1.01 1.45-.47.8-.7 1.21-.75 1.6a2 2 0 0 0 .4 1.48c.14.2.35.36.67.56.47.3.78.8.78 1.36s-.3 1.06-.78 1.36A2 2 0 0 0 2.6 15.4c.05.4.28.8.75 1.61.47.8.7 1.21 1.01 1.45a2 2 0 0 0 1.48.4c.24-.03.49-.13.82-.3.5-.27 1.09-.28 1.57 0s.77.8.79 1.35c.01.38.05.64.14.87a2 2 0 0 0 1.08 1.08c.37.15.84.15 1.77.15s1.4 0 1.77-.15a2 2 0 0 0 1.08-1.08c.09-.23.13-.49.14-.87.02-.56.3-1.07.8-1.35a1.62 1.62 0 0 1 1.56 0c.33.17.58.27.82.3a2 2 0 0 0 1.48-.4c.31-.24.54-.64 1.01-1.45.47-.8.7-1.21.75-1.6a2 2 0 0 0-.4-1.48c-.14-.2-.35-.36-.67-.56-.47-.3-.78-.8-.78-1.36s.3-1.06.78-1.36A2 2 0 0 0 21.4 8.6c-.05-.4-.28-.8-.75-1.61-.47-.8-.7-1.21-1.01-1.45a2 2 0 0 0-1.48-.4c-.24.03-.49.13-.82.3-.5.27-1.09.28-1.57 0s-.77-.8-.79-1.35a2.46 2.46 0 0 0-.14-.87 2 2 0 0 0-1.08-1.08Z' />
      </svg>
    </a>
  );
}
