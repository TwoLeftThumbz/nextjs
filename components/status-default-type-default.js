import { useMemo } from "react";

const StatusDefaultTypeDefault = ({
  itemDescription,
  statusDefaultTypeDefaultBorder,
  statusDefaultTypeDefaultFontWeight,
  statusDefaultTypeDefaultFontFamily,
  statusDefaultTypeDefaultFontSize,
  statusDefaultTypeDefaultHeight,
  statusDefaultTypeDefaultAlignItems,
  labelColor,
  labelFontWeight,
}) => {
  const statusDefaultTypeDefaultStyle = useMemo(() => {
    return {
      border: statusDefaultTypeDefaultBorder,
      fontWeight: statusDefaultTypeDefaultFontWeight,
      fontFamily: statusDefaultTypeDefaultFontFamily,
      fontSize: statusDefaultTypeDefaultFontSize,
      height: statusDefaultTypeDefaultHeight,
      alignItems: statusDefaultTypeDefaultAlignItems,
    };
  }, [
    statusDefaultTypeDefaultBorder,
    statusDefaultTypeDefaultFontWeight,
    statusDefaultTypeDefaultFontFamily,
    statusDefaultTypeDefaultFontSize,
    statusDefaultTypeDefaultHeight,
    statusDefaultTypeDefaultAlignItems,
  ]);

  const labelStyle = useMemo(() => {
    return {
      color: labelColor,
      fontWeight: labelFontWeight,
    };
  }, [labelColor, labelFontWeight]);

  return (
    <div
      className="rounded-2xl bg-gray-100 shadow-[1px_1px_5px_1px_rgba(0,_0,_0,_0.15)_inset] h-14 flex flex-row items-center justify-start p-5 box-border text-left text-base text-greyscale-600 font-body-medium-medium self-stretch"
      style={statusDefaultTypeDefaultStyle}
    >
      <div
        className="flex-1 relative tracking-[0.2px] leading-[140%]"
        style={labelStyle}
      >
        {itemDescription}
      </div>
    </div>
  );
};

export default StatusDefaultTypeDefault;
