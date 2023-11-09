import { useMemo } from "react";

const StateEnabledThemeDefault = ({
  stateEnabledThemeDefaultBackgroundColor,
  stateEnabledThemeDefaultPosition,
  stateEnabledThemeDefaultFlexShrink,
  frameLeft,
  frameBorder,
}) => {
  const stateEnabledThemeDefaultStyle = useMemo(() => {
    return {
      backgroundColor: stateEnabledThemeDefaultBackgroundColor,
      position: stateEnabledThemeDefaultPosition,
      flexShrink: stateEnabledThemeDefaultFlexShrink,
    };
  }, [
    stateEnabledThemeDefaultBackgroundColor,
    stateEnabledThemeDefaultPosition,
    stateEnabledThemeDefaultFlexShrink,
  ]);

  const frameStyle = useMemo(() => {
    return {
      left: frameLeft,
      border: frameBorder,
    };
  }, [frameLeft, frameBorder]);

  return (
    <div
      className="rounded-981xl bg-alerts-status-button-disabled w-11 h-6 overflow-hidden"
      style={stateEnabledThemeDefaultStyle}
    >
      <div
        className="absolute top-[0px] left-[20px] rounded-981xl bg-others-white box-border w-6 h-6 overflow-hidden border-[2px] border-solid border-primary-500"
        style={frameStyle}
      />
    </div>
  );
};

export default StateEnabledThemeDefault;
