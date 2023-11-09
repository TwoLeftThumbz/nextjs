const StateActiveStyleNoneThem = ({ tabTitle }) => {
  return (
    <div className="flex flex-col items-center justify-start gap-[12px] text-center text-lg text-primary-500 font-body-medium-medium flex-1">
      <div className="self-stretch relative tracking-[0.2px] leading-[140%] font-semibold">
        {tabTitle}
      </div>
      <div className="self-stretch relative rounded-81xl bg-primary-500 h-1" />
    </div>
  );
};

export default StateActiveStyleNoneThem;
