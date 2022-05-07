import { useContext } from "react";
import { SliderContext } from "./SliderProvider";

const useSlider = () => useContext(SliderContext);

export default useSlider;
