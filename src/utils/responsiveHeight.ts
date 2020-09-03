import { MAIN_CONTAINER } from "./constant";

const findMainContainerChild = (
  item: HTMLElement | null
): HTMLElement | null => {
  if (!item?.parentElement) return null;
  if (item?.parentElement?.classList.contains(MAIN_CONTAINER)) return item;
  return findMainContainerChild(item.parentElement);
};

const responsiveHeight = (element: HTMLElement | null) => {
  console.log("e-height");
  const updateSliderHeight = () => {
    console.log("height");
    if (element) {
      const parent = findMainContainerChild(element.parentElement);
      const restElementsHeight = (Array.from(
        parent?.parentElement?.children || []
      ) as HTMLElement[]).reduce(
        (sum, curr) =>
          curr !== parent &&
          curr.tagName !== "CANVAS" &&
          curr.offsetLeft === parent?.offsetLeft
            ? sum + curr.offsetHeight
            : sum,
        0
      );
      if (restElementsHeight)
        element.style.maxHeight = `${
          parent!.parentElement!.parentElement!.offsetHeight -
          restElementsHeight
        }px`;
      else element.removeAttribute("style");
    }
  };
  if (document.readyState !== "loading") updateSliderHeight();
  else window.addEventListener("load", updateSliderHeight);
  window.addEventListener("resize", updateSliderHeight);
  window.addEventListener("orientationchange", updateSliderHeight);
  return () => {
    window.removeEventListener("load", updateSliderHeight);
    window.removeEventListener("resize", updateSliderHeight);
    window.removeEventListener("orientationchange", updateSliderHeight);
  };
};

export default responsiveHeight;
