import { useMemo } from "react";

const TypeDefaultComponentTopBa = ({
  dimensionLabel,
  dimensionValue,
  dimensionText,
  typeDefaultComponentTopBaWidth,
  typeDefaultComponentTopBaPosition,
  typeDefaultComponentTopBaTop,
  typeDefaultComponentTopBaRight,
  typeDefaultComponentTopBaLeft,
  divColor,
}) => {
  const typeDefaultComponentTopBaStyle = useMemo(() => {
    return {
      width: typeDefaultComponentTopBaWidth,
      position: typeDefaultComponentTopBaPosition,
      top: typeDefaultComponentTopBaTop,
      right: typeDefaultComponentTopBaRight,
      left: typeDefaultComponentTopBaLeft,
    };
  }, [
    typeDefaultComponentTopBaWidth,
    typeDefaultComponentTopBaPosition,
    typeDefaultComponentTopBaTop,
    typeDefaultComponentTopBaRight,
    typeDefaultComponentTopBaLeft,
  ]);

  const divStyle = useMemo(() => {
    return {
      color: divColor,
    };
  }, [divColor]);

  return (
    <div
      className="w-[430px] h-11 text-left text-base text-others-black font-body-medium-medium"
      style={typeDefaultComponentTopBaStyle}
    >
      <div
        className="absolute top-[calc(50%_-_11px)] left-[23px] tracking-[0.2px] leading-[140%] font-semibold"
        style={divStyle}
      >
        9:41
      </div>
      <img
        className="absolute top-[calc(50%_-_4px)] right-[76px] w-[18px] h-2.5"
        alt=""
        src={dimensionLabel}
      />
      <img
        className="absolute top-[calc(50%_-_5px)] right-[55.7px] w-[15.3px] h-[11px]"
        alt=""
        src={dimensionValue}
      />
      <img
        className="absolute top-[calc(50%_-_6px)] right-[23px] w-[27px] h-[13px]"
        alt=""
        src={dimensionText}
      />
    </div>
  );
};

export default TypeDefaultComponentTopBa;
