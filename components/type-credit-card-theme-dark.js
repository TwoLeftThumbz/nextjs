import { useMemo } from "react";

const TypeCreditCardThemeDark = ({
  logosmastercard,
  prop,
  styleNoneThemeDefaultStat,
  change,
  showStyleNoneThemeDefaultSta,
  change1,
  logosmastercardIconWidth,
}) => {
  const logosmastercardIconStyle = useMemo(() => {
    return {
      width: logosmastercardIconWidth,
    };
  }, [logosmastercardIconWidth]);

  return (
    <div className="rounded-81xl bg-dark-dark-2 flex flex-row items-center justify-start p-6 box-border gap-[16px] text-justify text-lg text-others-white font-body-medium-medium self-stretch">
      <img
        className="relative w-[41.2px] h-8 overflow-hidden shrink-0"
        alt=""
        src={logosmastercard}
        style={logosmastercardIconStyle}
      />
      <b className="flex-1 relative leading-[140%]">{prop}</b>
      {showStyleNoneThemeDefaultSta && (
        <img
          className="relative w-5 h-5"
          alt=""
          src={styleNoneThemeDefaultStat}
        />
      )}
      {!change1 && (
        <b className="relative text-base tracking-[0.2px] leading-[140%] hidden text-primary-500 text-center">
          {change}
        </b>
      )}
    </div>
  );
};

export default TypeCreditCardThemeDark;
