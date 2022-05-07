import type { PropsWithChildren } from "react";

import { useEffect, useMemo } from "react";
import styles from "./Slider.styles";
import useSlider from "./useSlider";

const SliderContent = ({ children }: PropsWithChildren<{}>) => {
  const { rootRef, scale, onReady, min, max, thumbsValues } = useSlider();

  useEffect(() => {
    onReady();
  }, []);

  const sortedValues = useMemo(
    () => Object.values(thumbsValues).sort((a, b) => (a < b ? -1 : 1)),
    [thumbsValues]
  );

  return (
    <div ref={rootRef} css={styles.sliderContent()}>
      <div className={"track"}>
        {sortedValues.map((value, index, values) => {
          const firstAndOne = values.length === 1 && index === 0;
          const lastAndOdd =
            values.length % 2 !== 0 && index + 1 > values.length - 1;
          if (firstAndOne || lastAndOdd) {
            return (
              <div
                key={value}
                className={"active-track"}
                style={{
                  left: scale(value),
                  width: scale(max - value),
                }}
              />
            );
          }

          if (index % 2 === 0) {
            return (
              <div
                key={value}
                className={"active-track"}
                style={{
                  left: scale(value),
                  width: scale(values[index + 1] - value),
                }}
              />
            );
          }
        })}
      </div>
      <div className={"thumbs"}>{children}</div>
    </div>
  );
};

export default SliderContent;
