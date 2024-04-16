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
  { sensitivity } = { sensitivity: 15 }
) {
  const tCb = throttle(cb, 50);
  !!window?.DeviceOrientationEvent &&
    window.addEventListener('deviceorientation', function (e) {
      var baseX = e.gamma ?? 0 / sensitivity;
      var baseY = e.beta ?? 0 / sensitivity;
      tCb(baseX, baseY);
    });

  window.addEventListener('mousemove', function (e) {
    var baseX = getProportion(
      (e.x - window.innerWidth / 2) * -1,
      window.innerWidth / 2
    );
    var baseY = getProportion(
      (e.y - window.innerHeight / 2) * -1,
      window.innerHeight / 2
    );
    tCb(baseX, baseY);
  });
}

function getProportion(base: number, x: number) {
  return Math.round((base * 100) / x);
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
