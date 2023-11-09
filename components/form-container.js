import ThemeDarkDivider from "./theme-dark-divider";

const FormContainer = () => {
  return (
    <div className="self-stretch rounded-3xl bg-dark-dark-2 flex flex-col items-center justify-start p-6 gap-[24px] text-left text-base text-greyscale-300 font-body-medium-medium border-[1px] border-solid border-dark-dark-3">
      <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
        <div className="flex-1 relative tracking-[0.2px] leading-[140%] font-medium">
          Subtotal
        </div>
        <b className="relative text-lg leading-[140%] text-others-white text-right">
          $0.00
        </b>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
        <div className="flex-1 relative tracking-[0.2px] leading-[140%] font-medium">
          Discount
        </div>
        <img
          className="relative w-5 h-5 overflow-hidden shrink-0"
          alt=""
          src="/iconlycurvededit2.svg"
        />
        <b className="relative text-lg leading-[140%] text-others-white text-right">
          $0.00
        </b>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
        <div className="flex-1 relative tracking-[0.2px] leading-[140%] font-medium">{`Shipping & Handling`}</div>
        <img
          className="relative w-5 h-5 overflow-hidden shrink-0"
          alt=""
          src="/iconlycurvededit2.svg"
        />
        <b className="relative text-lg leading-[140%] text-others-white text-right">
          $0.00
        </b>
      </div>
      <ThemeDarkDivider
        imageId="/themedark-divider1.svg"
        themeDarkDividerIconPosition="relative"
        themeDarkDividerIconMaxWidth="100%"
        themeDarkDividerIconOverflow="hidden"
        themeDarkDividerIconFlexShrink="0"
        themeDarkDividerIconAlignSelf="stretch"
        themeDarkDividerIconWidth="unset"
      />
      <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
        <div className="flex-1 relative tracking-[0.2px] leading-[140%] font-medium">
          Total
        </div>
        <b className="relative text-lg leading-[140%] text-others-white text-right">
          $0.00
        </b>
      </div>
    </div>
  );
};

export default FormContainer;
