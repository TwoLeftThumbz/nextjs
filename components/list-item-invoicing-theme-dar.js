const ListItemInvoicingThemeDar = ({ itemName, prop, prop1, prop2 }) => {
  return (
    <div className="overflow-hidden flex flex-col items-start justify-start gap-[8px] text-right text-lg text-others-white font-body-medium-medium self-stretch">
      <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
        <b className="flex-1 relative text-xl leading-[140%] inline-block text-left h-[25px]">
          {itemName}
        </b>
        <b className="relative leading-[140%] hidden text-alerts-status-success">
          + $000
        </b>
        <b className="relative leading-[140%] hidden text-alerts-status-error">
          - $000
        </b>
        <b className="relative leading-[140%] inline-block w-20 shrink-0">
          {prop}
        </b>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/iconlycurvededit.svg"
        />
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-left text-sm text-greyscale-300">
        <div className="relative tracking-[0.2px] leading-[140%] font-medium">
          {prop1}
        </div>
        <div className="relative tracking-[0.2px] leading-[140%] font-medium text-center">
          x
        </div>
        <div className="relative tracking-[0.2px] leading-[140%] font-medium">
          {prop2}
        </div>
      </div>
    </div>
  );
};

export default ListItemInvoicingThemeDar;
