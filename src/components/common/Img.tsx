import React, { useRef, useEffect, ComponentProps, FC } from "react";
import "styled-components/macro";

const Img: FC<ComponentProps<"img"> & { background?: boolean }> = ({
  background,
  ...props
}) => {
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const img = ref.current;
    const imgWrapper = img?.parentElement;
    const updateImageSize = () => {
      if (img && imgWrapper)
        if (Math.round((imgWrapper!.offsetWidth / img.offsetWidth) * 10) > 10) {
          img.style.removeProperty("max-width");
          img.style.maxHeight = "none";
        } else if (
          Math.round((imgWrapper!.offsetHeight / img.offsetHeight) * 10) > 10
        ) {
          img.style.removeProperty("max-height");
          img.style.maxWidth = "none";
        }
    };
    img?.addEventListener("load", updateImageSize);
    window.addEventListener("resize", updateImageSize);
    window.addEventListener("orientationchange", updateImageSize);
    return () => {
      img?.removeEventListener("load", updateImageSize);
      window.removeEventListener("resize", updateImageSize);
      window.removeEventListener("orientationchange", updateImageSize);
    };
  }, []);
  return (
    <div
      css={`
        position: ${background ? "absolute" : "relative"};
        ${background && "z-index: -1;"}
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
      `}
    >
      <img
        ref={ref}
        {...props}
        css={`
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          height: auto;
          width: auto;
          max-height: 100%;
          max-width: 100%;
        `}
      />
    </div>
  );
};

export default Img;
