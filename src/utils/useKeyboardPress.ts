import { useEffect, useRef } from "react";

export type UseKeyboardPressOptions = {
  doublePress?: boolean;
  commandOrCtrl?: boolean;
  shift?: boolean;
};

const useKeyboardPress = (
  key: string,
  callback: () => void,
  options: UseKeyboardPressOptions = {}
) => {
  const keyPressRef = useRef(0);

  useEffect(() => {
    const fn = (event: KeyboardEvent) => {
      const commandOrCtrl = options.commandOrCtrl
        ? event.ctrlKey || event.metaKey
        : true;

      const shift = options.shift ? event.shiftKey : true;

      if (!options.doublePress && event.key === key && commandOrCtrl && shift) {
        callback();
        return;
      }

      if (!options.doublePress) {
        return;
      }

      if (event.key !== key || !commandOrCtrl || !shift) {
        keyPressRef.current = 0;
        return;
      }

      if (keyPressRef.current + 200 >= new Date().getTime()) {
        callback();
        keyPressRef.current = 0;
        return;
      }

      keyPressRef.current = new Date().getTime();
    };

    window.addEventListener("keydown", fn);
    return () => {
      window.removeEventListener("keydown", fn);
    };
  }, [
    key,
    callback,
    options.doublePress,
    options.commandOrCtrl,
    options.shift,
  ]);
};

export default useKeyboardPress;
