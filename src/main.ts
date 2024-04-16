// @ts-expect-error
import { component } from 'reefjs';
import { cards } from './pages/cards';
import { card } from './pages/card';
import './style.css';

component('#cards', cards);
component('#card', card);

const shadowBox = document.body;
trackDeviceOrientationWithMouseFallback((baseX: number, baseY: number) => {
  shadowBox.style.setProperty('--point-x', baseX.toString());
  shadowBox.style.setProperty('--point-y', baseY.toString());
});

function trackDeviceOrientationWithMouseFallback(
  cb: (baseX: number, baseY: number) => void,
  { sensitivity } = { sensitivity: 0.5 }
) {
  const tCb = throttle(cb, 50);
  !!window?.DeviceOrientationEvent &&
    window.addEventListener('deviceorientation', function (e) {
      var baseX = e.gamma ?? 0;
      var baseY = e.beta ?? 0;
      tCb(baseX * sensitivity, baseY * sensitivity);
    });

  window.addEventListener('mousemove', function (e) {
    var baseX = getCoordinatedBasedOnCursor(window.innerWidth, e.x);
    var baseY = getCoordinatedBasedOnCursor(window.innerHeight, e.y);
    console.log(baseX, baseY);

    tCb(baseX * sensitivity, baseY * sensitivity);
  });
}

function getCoordinatedBasedOnCursor(axis: number, point: number) {
  const halfAxis = axis / 2;
  return Math.round(((point - halfAxis) * -90) / halfAxis);
}

function throttle<T>(func: T, limit: number) {
  let lastFunc: NodeJS.Timeout;
  let lastRan: number;
  return function () {
    // @ts-ignore
    const context = this;
    const args = arguments;
    if (!lastRan) {
      // @ts-ignore
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          // @ts-ignore
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  } as T;
}
