import { useMemo } from "react";

const StyledarkSizemediumState2 = ({
  propTop,
  propLeft,
  propBackgroundColor,
  propPadding,
  propOpacity,
  propBackground,
  propBorder,
  propColor,
  label = "white",
}) => {
  const styledarkSizemediumStateStyle = useMemo(() => {
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

  const labelStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className="absolute top-[440px] left-[898px] rounded-71xl bg-neutrals-8 flex flex-row items-center justify-center py-4 px-6 opacity-[0.5] text-center text-base text-neutrals-2 font-button-1"
      style={styledarkSizemediumStateStyle}
    >
      <b className="relative leading-[16px]" style={labelStyle}>
        {"Label" + "Type" || label}
      </b>
    </div>
  );
};

export default StyledarkSizemediumState2;
