import { useMemo } from "react";

const StyledarkSizemediumState1 = ({
  iconId,
  propTop,
  propLeft,
  propBackgroundColor,
  propPadding,
  propOpacity,
  propBackground,
  propBorder,
  propColor,
}) => {
  const styledarkSizemediumState1Style = useMemo(() => {
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

  const label1Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className="absolute top-[440px] left-[1012px] rounded-71xl bg-neutrals-8 flex flex-row items-center justify-center py-4 px-6 gap-[12px] opacity-[0.5] text-left text-base text-neutrals-2 font-button-1"
      style={styledarkSizemediumState1Style}
    >
      <img
        className="relative w-4 h-4 overflow-hidden shrink-0"
        alt=""
        src={iconId}
      />
      <b className="relative leading-[16px]" style={label1Style}>
        Button
      </b>
    </div>
  );
};

export default StyledarkSizemediumState1;
