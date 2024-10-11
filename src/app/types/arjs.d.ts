declare module '@ar-js-org/ar.js' {
    export function start(): void;
    export function stop(): void;
    // Добавьте другие функции и типы, если они вам нужны
  }
  
  declare module '@ar-js-org/ar.js/aframe/build/aframe-ar.js' {
    const aframeAr: any;
    export default aframeAr;
  }
  