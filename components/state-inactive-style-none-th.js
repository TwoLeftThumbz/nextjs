const StateInactiveStyleNoneTh = ({ tabLabel }) => {
  return (
    <div className="flex flex-col items-center justify-start gap-[12px] text-center text-lg text-greyscale-700 font-body-medium-medium flex-1">
      <div className="self-stretch relative tracking-[0.2px] leading-[140%] font-semibold">
        {tabLabel}
      </div>
      <div className="self-stretch flex flex-col items-center justify-end py-px px-0">
        <div className="self-stretch relative rounded-81xl bg-dark-dark-3 h-0.5" />
      </div>
    </div>
  );
};

export default StateInactiveStyleNoneTh;
