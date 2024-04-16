// @ts-expect-error
import { component } from 'reefjs';
import { cards } from './pages/cards';
import { card } from './pages/card';
import './style.css';

component('#cards', cards);
component('#card', card);

const shadowBox = document.body;
trackDeviceOrientationWithMouseFallback((baseX, baseY) => {
  shadowBox.style.setProperty('--point-x', baseX);
  shadowBox.style.setProperty('--point-y', baseY);
});

function trackDeviceOrientationWithMouseFallback(
  cb,
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

function getProportion(base, x) {
  return Math.round((base * 100) / x, 0);
}

function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}
