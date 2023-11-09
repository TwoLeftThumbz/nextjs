import TypeDefaultComponentTopBa from "./type-default-component-top-ba";
import TypeIconBackComponentTop from "./type-icon-back-component-top";
import TypeFullNavbarComponentTo from "./type-full-navbar-component-to";
import HomeIndicatorIcon from "./home-indicator-icon";
import ThemeDarkDividerIcon from "./theme-dark-divider-icon";
import styles from "./top-bar-container.module.css";

const TopBarContainer = () => {
  return (
    <div className={styles.autoLayout}>
      <div className={styles.topBars}>
        <b className={styles.label}>Top Bars</b>
        <div className={styles.statusBar}>
          <TypeDefaultComponentTopBa />
          <TypeIconBackComponentTop />
          <TypeFullNavbarComponentTo navBar="navBar" />
        </div>
      </div>
      <div className={styles.topBars}>
        <b className={styles.label}>Home Indicator</b>
        <HomeIndicatorIcon />
      </div>
      <div className={styles.topBars}>
        <b className={styles.label}>Divider</b>
        <div className={styles.divider2}>
          <ThemeDarkDividerIcon
            imageDimensions="/themelight-divider.svg"
            propPosition="absolute"
            propTop="19px"
            propLeft="20px"
            propWidth="382px"
            propAlignSelf="unset"
            propMaxWidth="unset"
            propOverflow="unset"
            propFlexShrink="unset"
          />
          <ThemeDarkDividerIcon imageDimensions="/themedark-divider.svg" />
        </div>
      </div>
    </div>
  );
};

export default TopBarContainer;
