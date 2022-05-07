import type { PropsWithChildren } from "react";

import SliderProvider from "./SliderProvider";

export type SliderProps = {
  min: number;
  max: number;
};

const Slider = ({ children, ...props }: PropsWithChildren<SliderProps>) => {
  return <SliderProvider {...props}>{children}</SliderProvider>;
};

export default Slider;
