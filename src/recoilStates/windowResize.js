import { useEffect } from 'react';
import { atom, selectorFamily, useSetRecoilState } from 'recoil';
export const windowSizeState = atom({
  key: 'windowSizeState',
  default: null,
});

export const windowSizeHandler = selectorFamily({
  key: 'windowSizeHandler',
  get:
    () =>
    ({ get }) => {
      return get(windowSizeState);
    },
  set:
    () =>
    ({ set }, windowSize) => {
      return set(windowSizeState, {
        width: windowSize.width,
        height: windowSize.height,
      });
    },
});
export const WindowHookComp = () => {
  const resizeWindowState = useSetRecoilState(windowSizeHandler());
  useEffect(() => {
    function handleResize() {
      resizeWindowState({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return <></>;
};
