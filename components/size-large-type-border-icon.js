import { useMemo } from "react";

const SizeLargeTypeBorderIcon = ({
  iconlyBoldStar,
  chips,
  sizeLargeTypeBorderIconBoxSizing,
  sizeLargeTypeBorderIconCursor,
  sizeLargeTypeBorderIconBackgroundColor,
  sizeLargeTypeBorderIconAlignSelf,
  iconlyBoldStarOverflow,
  iconlyBoldStarFlexShrink,
  chipsDisplay,
}) => {
  const sizeLargeTypeBorderIconStyle = useMemo(() => {
    return {
      boxSizing: sizeLargeTypeBorderIconBoxSizing,
      cursor: sizeLargeTypeBorderIconCursor,
      backgroundColor: sizeLargeTypeBorderIconBackgroundColor,
      alignSelf: sizeLargeTypeBorderIconAlignSelf,
    };
  }, [
    sizeLargeTypeBorderIconBoxSizing,
    sizeLargeTypeBorderIconCursor,
    sizeLargeTypeBorderIconBackgroundColor,
    sizeLargeTypeBorderIconAlignSelf,
  ]);

  const iconlyBoldStarStyle = useMemo(() => {
    return {
      overflow: iconlyBoldStarOverflow,
      flexShrink: iconlyBoldStarFlexShrink,
    };
  }, [iconlyBoldStarOverflow, iconlyBoldStarFlexShrink]);

  const chipsStyle = useMemo(() => {
    return {
      display: chipsDisplay,
    };
  }, [chipsDisplay]);

  return (
    <div
      className="rounded-81xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center py-2.5 px-6 gap-[8px] text-center text-lg text-primary-500 font-body-medium-medium border-[2px] border-solid border-primary-500"
      style={sizeLargeTypeBorderIconStyle}
    >
      <img
        className="relative w-5 h-5"
        alt=""
        src={iconlyBoldStar}
        style={iconlyBoldStarStyle}
      />
      <b
        className="relative tracking-[0.2px] leading-[140%]"
        style={chipsStyle}
      >
        {chips}
      </b>
    </div>
  );
};

export default SizeLargeTypeBorderIcon;
