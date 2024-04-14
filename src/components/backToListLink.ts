import { getBaseUrl } from '../helpers/getBaseUrl';

export function backToListLink() {
  return `
        <a class="link-back-to-list" href="${getBaseUrl()}" aria-label="Back to list"></a>
    `;
}
