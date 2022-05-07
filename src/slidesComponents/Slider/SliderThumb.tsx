import type { PropsWithChildren } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { MdDragIndicator } from "react-icons/md";
import styles from "./Slider.styles";
import useSlider from "./useSlider";

export type SliderThumbProps = {
  id: string;
  value: number;
  onChange(value: number): void;
};

const SliderThumb = ({
  id,
  children,
  value,
  onChange,
}: PropsWithChildren<SliderThumbProps>) => {
  const { rootRef, scale, inverseScale, onThumbValueChange } = useSlider();
  const lastSeen = useRef(0);
  const thumbRef = useRef<HTMLDivElement | null>(null);
  const [isThumbDragging, setThumbDragging] = useState(false);

  useEffect(() => {
    onThumbValueChange(id, value);
  }, [value]);

  useEffect(() => {
    if (!rootRef.current || !thumbRef.current) {
      return;
    }

    lastSeen.current = Math.floor(scale(value));
    thumbRef.current.style.left = lastSeen.current + "px";
  }, [scale, value, id]);

  const onDragStart = useCallback(
    (left: number) => {
      if (!rootRef.current) {
        return;
      }

      lastSeen.current = Math.floor(
        left +
          rootRef.current.scrollLeft -
          rootRef.current.getBoundingClientRect().left
      );
      setThumbDragging(true);
    },
    [rootRef]
  );

  const onThumbDragging = useCallback(
    (left: number) => {
      if (!isThumbDragging || !rootRef.current || !thumbRef.current) {
        return;
      }

      const rootRect = rootRef.current.getBoundingClientRect();
      const thumbRect = thumbRef.current.getBoundingClientRect();
      const leftCandidate = Math.floor(
        left + rootRef.current.scrollLeft - rootRect.left - thumbRect.width / 2
      );

      if (left >= rootRect.left && left <= rootRect.left + rootRect.width) {
        lastSeen.current = leftCandidate;
      }

      thumbRef.current.style.left = lastSeen.current + "px";
    },
    [isThumbDragging, rootRef]
  );

  // on drag end change the left pinned columns
  const onThumbDragEnd = useCallback(() => {
    if (!rootRef.current || !thumbRef.current) {
      return;
    }

    setThumbDragging(false);
    const currentValue = Number(inverseScale(lastSeen.current).toFixed(2));
    onChange(currentValue);
    onThumbValueChange(id, currentValue);
  }, [rootRef, inverseScale]);

  useEffect(() => {
    if (!isThumbDragging) {
      return;
    }

    const onPointerMove = (e: PointerEvent) => {
      e.preventDefault();
      e.stopPropagation();
      e.cancelBubble = true;
      onThumbDragging(e.clientX);
    };
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();
      e.cancelBubble = true;
      onThumbDragging(e.touches[0].clientX);
    };
    const onPointerUp = (e: PointerEvent) => {
      onThumbDragEnd();
    };
    const onTouchEnd = (e: TouchEvent) => {
      onThumbDragEnd();
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [isThumbDragging, onThumbDragEnd, onThumbDragging]);

  return (
    <div
      ref={thumbRef}
      css={styles.sliderThumb()}
      onMouseDown={e => {
        onDragStart(e.clientX);
      }}
      onTouchStart={e => {
        onDragStart(e.touches[0].clientX);
      }}
    >
      <div className={"indicator"}>{children || <MdDragIndicator />}</div>
    </div>
  );
};

export default SliderThumb;
