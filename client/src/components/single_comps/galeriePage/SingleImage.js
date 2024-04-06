import React from "react";
import { useInView, animated } from "@react-spring/web";

function SingleImage({
  classDiv,
  classImg,
  duration,
  image,
  showCaroussel,
  indx,
  rootMargin,
}) {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        scale: 0,
      },
      to: {
        opacity: 1,
        scale: 1,
      },
      config: { duration: duration },
    }),
    { once: true, rootMargin: rootMargin }
  );
  return (
    <animated.div ref={ref} style={springs} className={classDiv}>
      <img
        src={image}
        alt={"image" + indx}
        className={classImg}
        onClick={() => showCaroussel(true, indx)}
      />
    </animated.div>
  );
}

export default SingleImage;
