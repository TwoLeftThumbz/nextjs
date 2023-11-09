import { useMemo } from "react";
import ThemeDarkDividerIcon from "./theme-dark-divider-icon";
import styles from "./theme-dark-dropdown.module.css";

const ThemeDarkDropdown = ({
  iconlyBoldTickSquare,
  themeDarkDivider,
  iconlyBoldTickSquare1,
  themeDarkDivider1,
  iconlyBoldTickSquare2,
  themeDarkDivider2,
  iconlyBoldTickSquare3,
  themeDarkDivider3,
  iconlyBoldTickSquare4,
  themeDarkDivider4,
  iconlyBoldTickSquare5,
  themeDarkDivider5,
  iconlyBoldTickSquare6,
  themeDarkDivider6,
  iconlyBoldTickSquare7,
  themeDarkDivider7,
  iconlyBoldTickSquare8,
  propLeft,
  propBackgroundColor,
  propMixBlendMode,
  propColor,
  propColor1,
  propColor2,
  propColor3,
  propColor4,
  propColor5,
  propColor6,
  propColor7,
  propColor8,
}) => {
  const themeDarkDropdownStyle = useMemo(() => {
    return {
      left: propLeft,
      backgroundColor: propBackgroundColor,
      mixBlendMode: propMixBlendMode,
    };
  }, [propLeft, propBackgroundColor, propMixBlendMode]);

  const dropdownStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const dropdown1Style = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const dropdown2Style = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const dropdown3Style = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const dropdown4Style = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  const dropdown5Style = useMemo(() => {
    return {
      color: propColor5,
    };
  }, [propColor5]);

  const dropdown6Style = useMemo(() => {
    return {
      color: propColor6,
    };
  }, [propColor6]);

  const dropdown7Style = useMemo(() => {
    return {
      color: propColor7,
    };
  }, [propColor7]);

  const dropdown8Style = useMemo(() => {
    return {
      color: propColor8,
    };
  }, [propColor8]);

  return (
    <div className={styles.themedarkDropdown} style={themeDarkDropdownStyle}>
      <div className={styles.autoLayoutHorizontal}>
        <img
          className={styles.iconlyboldtickSquare}
          alt=""
          src={iconlyBoldTickSquare}
        />
        <div className={styles.dropdown} style={dropdownStyle}>
          Dropdown
        </div>
      </div>
      <ThemeDarkDividerIcon
        imageDimensions="/themedark-divider1.svg"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        propWidth="unset"
        propAlignSelf="stretch"
        propMaxWidth="100%"
        propOverflow="hidden"
        propFlexShrink="0"
      />
      <div className={styles.autoLayoutHorizontal}>
        <img
          className={styles.iconlyboldtickSquare}
          alt=""
          src={iconlyBoldTickSquare1}
        />
        <div className={styles.dropdown} style={dropdown1Style}>
          Dropdown
        </div>
      </div>
      <ThemeDarkDividerIcon
        imageDimensions="/themedark-divider1.svg"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        propWidth="unset"
        propAlignSelf="stretch"
        propMaxWidth="100%"
        propOverflow="hidden"
        propFlexShrink="0"
      />
      <div className={styles.autoLayoutHorizontal}>
        <img
          className={styles.iconlyboldtickSquare}
          alt=""
          src={iconlyBoldTickSquare2}
        />
        <div className={styles.dropdown} style={dropdown2Style}>
          Dropdown
        </div>
      </div>
      <ThemeDarkDividerIcon
        imageDimensions="/themedark-divider1.svg"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        propWidth="unset"
        propAlignSelf="stretch"
        propMaxWidth="100%"
        propOverflow="hidden"
        propFlexShrink="0"
      />
      <div className={styles.autoLayoutHorizontal}>
        <img
          className={styles.iconlyboldtickSquare}
          alt=""
          src={iconlyBoldTickSquare3}
        />
        <div className={styles.dropdown} style={dropdown3Style}>
          Dropdown
        </div>
      </div>
      <ThemeDarkDividerIcon
        imageDimensions="/themedark-divider1.svg"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        propWidth="unset"
        propAlignSelf="stretch"
        propMaxWidth="100%"
        propOverflow="hidden"
        propFlexShrink="0"
      />
      <div className={styles.autoLayoutHorizontal}>
        <img
          className={styles.iconlyboldtickSquare}
          alt=""
          src={iconlyBoldTickSquare4}
        />
        <div className={styles.dropdown} style={dropdown4Style}>
          Dropdown
        </div>
      </div>
      <ThemeDarkDividerIcon
        imageDimensions="/themedark-divider1.svg"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        propWidth="unset"
        propAlignSelf="stretch"
        propMaxWidth="100%"
        propOverflow="hidden"
        propFlexShrink="0"
      />
      <div className={styles.autoLayoutHorizontal}>
        <img
          className={styles.iconlyboldtickSquare}
          alt=""
          src={iconlyBoldTickSquare5}
        />
        <div className={styles.dropdown} style={dropdown5Style}>
          Dropdown
        </div>
      </div>
      <ThemeDarkDividerIcon
        imageDimensions="/themedark-divider1.svg"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        propWidth="unset"
        propAlignSelf="stretch"
        propMaxWidth="100%"
        propOverflow="hidden"
        propFlexShrink="0"
      />
      <div className={styles.autoLayoutHorizontal}>
        <img
          className={styles.iconlyboldtickSquare}
          alt=""
          src={iconlyBoldTickSquare6}
        />
        <div className={styles.dropdown} style={dropdown6Style}>
          Dropdown
        </div>
      </div>
      <ThemeDarkDividerIcon
        imageDimensions="/themedark-divider1.svg"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        propWidth="unset"
        propAlignSelf="stretch"
        propMaxWidth="100%"
        propOverflow="hidden"
        propFlexShrink="0"
      />
      <div className={styles.autoLayoutHorizontal}>
        <img
          className={styles.iconlyboldtickSquare}
          alt=""
          src={iconlyBoldTickSquare7}
        />
        <div className={styles.dropdown} style={dropdown7Style}>
          Dropdown
        </div>
      </div>
      <ThemeDarkDividerIcon
        imageDimensions="/themedark-divider1.svg"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        propWidth="unset"
        propAlignSelf="stretch"
        propMaxWidth="100%"
        propOverflow="hidden"
        propFlexShrink="0"
      />
      <div className={styles.autoLayoutHorizontal}>
        <img
          className={styles.iconlyboldtickSquare}
          alt=""
          src={iconlyBoldTickSquare8}
        />
        <div className={styles.dropdown} style={dropdown8Style}>
          Dropdown
        </div>
      </div>
    </div>
  );
};

export default ThemeDarkDropdown;
