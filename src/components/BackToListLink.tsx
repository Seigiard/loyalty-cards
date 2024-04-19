import { getBaseUrl } from '../helpers/getBaseUrl';
import './BackToListLink.css';

export function BackToListLink() {
  return (
    <a
      className='link-back-to-list'
      href={getBaseUrl()}
      aria-label='Back to list'
    ></a>
  );
}
