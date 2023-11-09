import { useMemo } from "react";

const StyledarkSizemediumState = ({
  iconId,
  propTop,
  propLeft,
  propBackgroundColor,
  propPadding,
  propOpacity,
  propBackground,
  propBorder,
  propColor,
  propTextAlign,
}) => {
  const styledarkSizemediumState2Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      backgroundColor: propBackgroundColor,
      padding: propPadding,
      opacity: propOpacity,
      background: propBackground,
      border: propBorder,
    };
  }, [
    propTop,
    propLeft,
    propBackgroundColor,
    propPadding,
    propOpacity,
    propBackground,
    propBorder,
  ]);

  const label2Style = useMemo(() => {
    return {
      color: propColor,
      textAlign: propTextAlign,
    };
  }, [propColor, propTextAlign]);

  return (
    <div
      className="absolute top-[440px] left-[1154px] rounded-71xl bg-neutrals-8 flex flex-row items-center justify-center py-4 px-6 gap-[12px] opacity-[0.5] text-right text-base text-neutrals-2 font-button-1"
      style={styledarkSizemediumState2Style}
    >
      <b className="relative leading-[16px]" style={label2Style}>
        Button
      </b>
      <img
        className="relative w-4 h-4 overflow-hidden shrink-0"
        alt=""
        src={iconId}
      />
    </div>
  );
};

export default StyledarkSizemediumState;
