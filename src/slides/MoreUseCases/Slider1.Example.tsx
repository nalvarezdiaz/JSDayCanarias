import { useMemo, useState } from "react";
import Slider from "../../slidesComponents/Slider/Slider";
import SliderThumb from "../../slidesComponents/Slider/SliderThumb";

const Slider1Example = () => {
  const [thumb1, setThumb1] = useState(2);
  const [thumb2, setThumb2] = useState(23);
  const [thumb3, setThumb3] = useState(55);
  const [thumb4, setThumb4] = useState(67);
  const [thumb5, setThumb5] = useState(95);

  const ranges = useMemo(() => {
    const values = [thumb1, thumb2, thumb3, thumb4, thumb5].sort((a, b) =>
      a < b ? -1 : 1
    );

    return values;
  }, [thumb1, thumb2, thumb3, thumb4, thumb5]);

  return (
    <div>
      <div>Values: {ranges.join(" - ")}</div>

      <h2>Can 1?</h2>
      <Slider min={0} max={100}>
        <SliderThumb id={"thumb1"} value={thumb1} onChange={setThumb1} />
      </Slider>

      <h2>Maybe... 2?</h2>
      <Slider min={0} max={100}>
        <SliderThumb id={"thumb1"} value={thumb1} onChange={setThumb1} />
        <SliderThumb id={"thumb2"} value={thumb2} onChange={setThumb2} />
      </Slider>

      <h2>Maybe it can support 3?</h2>
      <Slider min={0} max={100}>
        <SliderThumb id={"thumb1"} value={thumb1} onChange={setThumb1} />
        <SliderThumb id={"thumb2"} value={thumb2} onChange={setThumb2} />
        <SliderThumb id={"thumb3"} value={thumb3} onChange={setThumb3} />
      </Slider>

      <h2>Does it make sense to have 5?</h2>
      <h3>Anyway, this one supports it!</h3>
      <Slider min={0} max={100}>
        <SliderThumb id={"thumb1"} value={thumb1} onChange={setThumb1} />
        <SliderThumb id={"thumb2"} value={thumb2} onChange={setThumb2} />
        <SliderThumb id={"thumb3"} value={thumb3} onChange={setThumb3} />
        <SliderThumb id={"thumb4"} value={thumb4} onChange={setThumb4} />
        <SliderThumb id={"thumb5"} value={thumb5} onChange={setThumb5} />
      </Slider>
    </div>
  );
};

export default Slider1Example;
