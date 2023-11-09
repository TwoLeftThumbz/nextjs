import { useMemo } from "react";

const ThemeDarkComponentButtomB = ({
  buttonText,
  addPaymentButtonText,
  showTypeButtonType2Secondary,
  showAutoLayoutHorizontal,
  themeDarkComponentButtomBWidth,
  themeDarkComponentButtomBPosition,
  themeDarkComponentButtomBRight,
  themeDarkComponentButtomBBottom,
  themeDarkComponentButtomBLeft,
  themeDarkComponentButtomBCursor,
  themeDarkComponentButtomBMarginTop,
  typeButtonType2PrimaryTBoxShadow,
  buttonDisplay,
  buttonColor,
  buttonAlignItems,
  buttonJustifyContent,
  buttonWidth,
  buttonFlexShrink,
  buttonFlex,
  onThemeDarkComponentButtomBClick,
}) => {
  const themeDarkComponentButtomBStyle = useMemo(() => {
    return {
      width: themeDarkComponentButtomBWidth,
      position: themeDarkComponentButtomBPosition,
      right: themeDarkComponentButtomBRight,
      bottom: themeDarkComponentButtomBBottom,
      left: themeDarkComponentButtomBLeft,
      cursor: themeDarkComponentButtomBCursor,
      marginTop: themeDarkComponentButtomBMarginTop,
    };
  }, [
    themeDarkComponentButtomBWidth,
    themeDarkComponentButtomBPosition,
    themeDarkComponentButtomBRight,
    themeDarkComponentButtomBBottom,
    themeDarkComponentButtomBLeft,
    themeDarkComponentButtomBCursor,
    themeDarkComponentButtomBMarginTop,
  ]);

  const typeButtonType2PrimaryTStyle = useMemo(() => {
    return {
      boxShadow: typeButtonType2PrimaryTBoxShadow,
    };
  }, [typeButtonType2PrimaryTBoxShadow]);

  const buttonStyle = useMemo(() => {
    return {
      display: buttonDisplay,
      color: buttonColor,
      alignItems: buttonAlignItems,
      justifyContent: buttonJustifyContent,
      width: buttonWidth,
      flexShrink: buttonFlexShrink,
      flex: buttonFlex,
    };
  }, [
    buttonDisplay,
    buttonColor,
    buttonAlignItems,
    buttonJustifyContent,
    buttonWidth,
    buttonFlexShrink,
    buttonFlex,
  ]);

  return (
    <div
      className="bg-dark-dark-1 box-border w-[430px] flex flex-col items-start justify-start pt-6 px-6 pb-9 gap-[24px] text-center text-base text-text-2 font-body-medium-medium border-t-[1px] border-solid border-dark-dark-3"
      style={themeDarkComponentButtomBStyle}
      onClick={onThemeDarkComponentButtomBClick}
    >
      <div
        className="self-stretch rounded-81xl bg-royalblue shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-[58px] flex flex-row items-center justify-center py-0 px-4 box-border"
        style={typeButtonType2PrimaryTStyle}
      >
        <b
          className="relative tracking-[0.2px] leading-[140%] flex items-center justify-center w-[350px] shrink-0"
          style={buttonStyle}
        >
          {buttonText}
        </b>
      </div>
      {showTypeButtonType2Secondary && (
        <div className="rounded-81xl bg-gray-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[382px] h-[58px] flex flex-row items-center justify-center py-0 px-4 box-border">
          <b className="flex-1 relative tracking-[0.2px] leading-[140%]">
            Button
          </b>
        </div>
      )}
      {showAutoLayoutHorizontal && (
        <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start gap-[16px]">
          <div className="flex-1 rounded-81xl bg-dark-dark-3 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center py-[18px] px-4">
            <b className="flex-1 relative tracking-[0.2px] leading-[140%]">
              Button
            </b>
          </div>
          <div className="flex-1 rounded-81xl bg-royalblue shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-[58px] flex flex-row items-center justify-center py-0 px-4 box-border">
            <b className="relative tracking-[0.2px] leading-[140%] flex items-center justify-center w-[350px] shrink-0">
              {addPaymentButtonText}
            </b>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeDarkComponentButtomB;
