import type { PropsWithChildren, RefObject } from "react";
import { createContext, useRef, useState } from "react";
import genScale from "./genScale";
import { SliderProps } from "./Slider";
import SliderContent from "./SliderContent";

export type ISliderContext = {
  min: number;
  max: number;
  isReady: boolean;
  onReady(): void;
  rootRef: RefObject<HTMLDivElement>;
  scale(value: number): number;
  inverseScale(value: number): number;
  thumbsValues: Record<string, number>;
  onThumbValueChange(id: string, value: number): void;
};

export const SliderContext = createContext<ISliderContext>(undefined!);

const SliderProvider = ({
  children,
  min,
  max,
}: PropsWithChildren<SliderProps>) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [isReady, setReady] = useState(false);
  const [thumbsValues, setThumbsValues] = useState<Record<string, number>>({});

  const rootWidth = rootRef.current?.getBoundingClientRect().width || 100;
  const scale = genScale([min, max], [0, rootWidth]);
  const inverseScale = genScale([0, rootWidth], [min, max]);

  return (
    <SliderContext.Provider
      value={{
        min,
        max,
        isReady,
        onReady() {
          setReady(true);
        },
        rootRef,
        scale,
        inverseScale,
        thumbsValues,
        onThumbValueChange(id: string, value: number) {
          setThumbsValues(prevState => ({
            ...prevState,
            [id]: value,
          }));
        },
      }}
    >
      <SliderContent>{children}</SliderContent>
    </SliderContext.Provider>
  );
};

export default SliderProvider;
