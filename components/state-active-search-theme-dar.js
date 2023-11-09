import { useMemo } from "react";
import styles from "./state-active-search-theme-dar.module.css";

const StateActiveSearchThemeDar = ({
  searchIcon,
  searchButtonLabel,
  propTop,
  propLeft,
  propBackgroundColor,
  propBorder,
  propFontWeight,
  propColor,
}) => {
  const stateActiveSearchThemeDarStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      backgroundColor: propBackgroundColor,
      border: propBorder,
    };
  }, [propTop, propLeft, propBackgroundColor, propBorder]);

  const searchStyle = useMemo(() => {
    return {
      fontWeight: propFontWeight,
      color: propColor,
    };
  }, [propFontWeight, propColor]);

  return (
    <div
      className={styles.stateactiveSearchThemedar}
      style={stateActiveSearchThemeDarStyle}
    >
      <img className={styles.iconlylightsearch} alt="" src={searchIcon} />
      <div className={styles.search} style={searchStyle}>
        {searchButtonLabel}
      </div>
      <img
        className={styles.iconlylightsearch}
        alt=""
        src="/iconlylightfilter1.svg"
      />
    </div>
  );
};

export default StateActiveSearchThemeDar;
