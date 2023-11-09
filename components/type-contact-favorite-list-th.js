import { useMemo } from "react";

const TypeContactFavoriteListTh = ({
  imageDimensions,
  personName,
  contactInfo,
  productImageDimensions,
  showIconlyLightOutlineStar,
  iconlyLightOutlineStarOverflow,
  iconlyLightOutlineStarFlexShrink,
}) => {
  const iconlyLightOutlineStarStyle = useMemo(() => {
    return {
      overflow: iconlyLightOutlineStarOverflow,
      flexShrink: iconlyLightOutlineStarFlexShrink,
    };
  }, [iconlyLightOutlineStarOverflow, iconlyLightOutlineStarFlexShrink]);

  return (
    <div className="flex flex-row items-center justify-start gap-[12px] text-left text-lg text-others-white font-body-medium-medium self-stretch">
      <div className="flex-1 flex flex-row items-center justify-start gap-[20px]">
        <img
          className="relative w-[60px] h-[60px]"
          alt=""
          src={imageDimensions}
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
          <b className="self-stretch relative leading-[140%]">{personName}</b>
          <div className="self-stretch relative text-sm tracking-[0.2px] leading-[140%] font-medium text-greyscale-300">
            {contactInfo}
          </div>
        </div>
      </div>
      <div className="relative tracking-[0.2px] leading-[140%] font-semibold text-right hidden">
        Lorem
      </div>
      {showIconlyLightOutlineStar && (
        <img
          className="relative w-7 h-7 overflow-hidden shrink-0"
          alt=""
          src={productImageDimensions}
          style={iconlyLightOutlineStarStyle}
        />
      )}
    </div>
  );
};

export default TypeContactFavoriteListTh;
