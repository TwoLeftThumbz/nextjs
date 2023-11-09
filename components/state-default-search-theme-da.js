const StateDefaultSearchThemeDa = ({ searchPlaceholder, searchIconUrl }) => {
  return (
    <div className="rounded-2xl bg-dark-dark-2 h-14 flex flex-row items-center justify-start p-5 box-border gap-[12px] text-left text-base text-greyscale-600 font-body-medium-medium self-stretch">
      <img className="relative w-5 h-5" alt="" src="/iconlylightsearch.svg" />
      <div className="flex-1 relative tracking-[0.2px] leading-[140%]">
        {searchPlaceholder}
      </div>
      <img className="relative w-5 h-5" alt="" src={searchIconUrl} />
    </div>
  );
};

export default StateDefaultSearchThemeDa;
