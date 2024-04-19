import { ComponentChildren } from 'preact';
import { cx } from 'classix';
import './Layer.css';

export function Layer({
  children,
  level,
}: {
  children: ComponentChildren;
  level?: 0 | 1 | 2;
}) {
  return <div className={cx('layer', `layer__${level ?? 0}`)}>{children}</div>;
}
