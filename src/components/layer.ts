import './layer.css';

export function layer(
  children: string,
  { level }: { level?: 0 | 1 | 2 } = { level: 0 }
) {
  return `
        <div class="layer layer__${level}">
            ${children}
        </div>
    `;
}
