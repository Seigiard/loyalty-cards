import { getBaseUrl } from '../helpers/getBaseUrl';
import './backToListLink.css';

export function backToListLink() {
  return `
        <a class="link-back-to-list" href="${getBaseUrl()}" aria-label="Back to list"></a>
    `;
}
