import { useMemo } from "react";

const StatusDefaultTypeNormalS = ({
  additionalIcons,
  iconlyBoldProfile,
  label,
  additionalIcons1,
  iconlyBoldArrowDown2,
  showIconlyBoldProfile,
  labelColor,
  labelFontWeight,
  labelColor1,
}) => {
  const label1Style = useMemo(() => {
    return {
      color: labelColor,
      fontWeight: labelFontWeight,
    };
  }, [labelColor, labelFontWeight]);

  const label2Style = useMemo(() => {
    return {
      color: labelColor1,
    };
  }, [labelColor1]);

  return (
    <div className="rounded-2xl bg-gray-100 shadow-[1px_1px_5px_1px_rgba(0,_0,_0,_0.15)_inset] h-14 flex flex-row items-center justify-start p-5 box-border gap-[12px] text-left text-base text-greyscale-600 font-body-medium-medium self-stretch">
      <img
        className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
        alt=""
        src={additionalIcons}
      />
      {showIconlyBoldProfile && (
        <img className="relative w-5 h-5" alt="" src={iconlyBoldProfile} />
      )}
      <div
        className="flex-1 relative tracking-[0.2px] leading-[140%]"
        style={label1Style}
      >
        {label}
      </div>
      <div
        className="relative text-sm tracking-[0.2px] leading-[140%] font-semibold text-greyscale-500 text-right hidden"
        style={label2Style}
      >
        kg
      </div>
      <img
        className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
        alt=""
        src={additionalIcons1}
      />
      <img className="relative w-5 h-5" alt="" src={iconlyBoldArrowDown2} />
    </div>
  );
};

export default StatusDefaultTypeNormalS;
