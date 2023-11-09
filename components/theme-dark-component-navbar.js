const ThemeDarkComponentNavbar = ({
  iconlyLightOutlineArrowLe,
  titleSection,
  iconlyCurvedNotification,
  iconlyCurvedNotification1,
  showAutoLayoutHorizontal,
  showIconlyCurvedNotification,
  iconlyCurvedNotification2,
}) => {
  return (
    <div className="h-12 flex flex-row items-center justify-start py-3 px-0 box-border gap-[16px] text-left text-5xl text-others-white font-body-medium-medium self-stretch">
      <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
        <img
          className="relative rounded-341xl w-7 h-7 hidden"
          alt=""
          src="/logo.svg"
        />
        <img
          className="relative w-7 h-7"
          alt=""
          src={iconlyLightOutlineArrowLe}
        />
        <b className="flex-1 relative leading-[140%]">{titleSection}</b>
      </div>
      {showAutoLayoutHorizontal && (
        <div className="flex flex-row items-center justify-end gap-[20px]">
          {showIconlyCurvedNotification && (
            <img
              className="relative w-7 h-7 overflow-hidden shrink-0"
              alt=""
              src={iconlyCurvedNotification}
            />
          )}
          {!iconlyCurvedNotification2 && (
            <img
              className="relative w-7 h-7 overflow-hidden shrink-0 hidden"
              alt=""
              src={iconlyCurvedNotification1}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ThemeDarkComponentNavbar;
