const ListBanksCardsThemeDark = ({
  typeLogoDefaultComponentL,
  frame,
  frame1,
  frame2,
  bankName,
  bankNumber,
  iconcheckComponentAdditio,
  showFrameIcon,
  frameIcon,
  frameIcon1,
  showIconcheckComponentAdditio,
}) => {
  return (
    <div className="overflow-hidden flex flex-col items-start justify-center text-left text-xl text-others-white font-body-medium-medium self-stretch">
      <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
        <div className="flex-1 flex flex-row items-center justify-start gap-[20px]">
          <img
            className="relative rounded-981xl w-[60px] h-[60px] hidden"
            alt=""
            src={typeLogoDefaultComponentL}
          />
          {showFrameIcon && (
            <img
              className="relative w-[60px] h-[60px] overflow-hidden shrink-0"
              alt=""
              src={frame}
            />
          )}
          {!frameIcon && (
            <img
              className="relative w-[60px] h-[60px] overflow-hidden shrink-0 hidden"
              alt=""
              src={frame1}
            />
          )}
          {!frameIcon1 && (
            <img
              className="relative w-[60px] h-[60px] overflow-hidden shrink-0 hidden"
              alt=""
              src={frame2}
            />
          )}
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
            <b className="self-stretch relative leading-[140%]">{bankName}</b>
            <div className="self-stretch relative text-lg tracking-[0.2px] leading-[140%] font-medium text-greyscale-300">
              {bankNumber}
            </div>
          </div>
        </div>
        {showIconcheckComponentAdditio && (
          <img
            className="relative w-7 h-7 overflow-hidden shrink-0"
            alt=""
            src={iconcheckComponentAdditio}
          />
        )}
      </div>
    </div>
  );
};

export default ListBanksCardsThemeDark;
