import StatusDefaultTypeNormalS from "./status-default-type-normal-s";

const CurrencyForm = ({ showIconlyBoldProfile }) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-left text-xl text-others-white font-body-medium-medium">
      <b className="self-stretch relative leading-[140%]">Select Currency</b>
      <StatusDefaultTypeNormalS
        additionalIcons="/additional-icons.svg"
        iconlyBoldProfile="/iconlyboldprofile.svg"
        label="Select Currency"
        additionalIcons1="/additional-icons1.svg"
        iconlyBoldArrowDown2="/iconlyboldarrow--down-2.svg"
        showIconlyBoldProfile={false}
        labelColor="#757575"
        labelFontWeight="unset"
        labelColor1="rgba(158, 158, 158, 0.6)"
      />
    </div>
  );
};

export default CurrencyForm;
