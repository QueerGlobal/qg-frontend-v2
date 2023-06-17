import { useState, useRef, useCallback, useEffect } from "react";
import { LooperInnerlist, LooperListInstance, Looper } from "./Carousel.css";

interface CarouselProps {
    speed: number;
    direction: 'right' | 'left',
    children: React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, react/prop-types
const Carousel: React.FC<CarouselProps> = ({speed, direction, children}) => {
    const [looperInstances, setLooperInstances] = useState(1);
    const outerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    const setupInstances = useCallback(() => {
        if (!innerRef?.current || !outerRef?.current) return;

        const { width } = innerRef.current.getBoundingClientRect();

        const { width: parentWidth } = outerRef.current.getBoundingClientRect();

        const instanceWidth = width / innerRef.current.children.length;

        if (width < parentWidth + instanceWidth) {
            setLooperInstances(looperInstances + Math.ceil(parentWidth / width));
        }
  }, [looperInstances]);

    useEffect(() => {
        setupInstances();
    }, []);

    return (
      <Looper ref={outerRef}>
        <LooperInnerlist ref={innerRef}>
          {[1,2,3,4,5,6,7,8,9].map((_, ind) => (
            <LooperListInstance
              key={ind}
              style={{
                animationDuration: `${speed}s`,
                animationDirection: direction === "right" ? "reverse" : "normal",
              }}
            >
              {children}
            </LooperListInstance>
          ))}
        </LooperInnerlist>
      </Looper>
    );
  return (
    <div>Carousel</div>
  )
}

export default Carousel