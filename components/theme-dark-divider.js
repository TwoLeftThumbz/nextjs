import { useMemo } from "react";

const ThemeDarkDivider = ({
  imageId,
  themeDarkDividerIconPosition,
  themeDarkDividerIconMaxWidth,
  themeDarkDividerIconOverflow,
  themeDarkDividerIconFlexShrink,
  themeDarkDividerIconAlignSelf,
  themeDarkDividerIconWidth,
}) => {
  const themeDarkDividerIconStyle = useMemo(() => {
    return {
      position: themeDarkDividerIconPosition,
      maxWidth: themeDarkDividerIconMaxWidth,
      overflow: themeDarkDividerIconOverflow,
      flexShrink: themeDarkDividerIconFlexShrink,
      alignSelf: themeDarkDividerIconAlignSelf,
      width: themeDarkDividerIconWidth,
    };
  }, [
    themeDarkDividerIconPosition,
    themeDarkDividerIconMaxWidth,
    themeDarkDividerIconOverflow,
    themeDarkDividerIconFlexShrink,
    themeDarkDividerIconAlignSelf,
    themeDarkDividerIconWidth,
  ]);

  return (
    <img
      className="h-px self-stretch"
      alt=""
      src={imageId}
      style={themeDarkDividerIconStyle}
    />
  );
};

export default ThemeDarkDivider;
