import TypeAlphabeticThemeLight from "./type-alphabetic-theme-light";
import TypeAlphabeticThemeDarkC from "./type-alphabetic-theme-dark-c";
import TypeNumericThemeLightCom2 from "./type-numeric-theme-light-com2";
import TypeNumericThemeLightCom1 from "./type-numeric-theme-light-com1";
import TypeNumericThemeLightCom from "./type-numeric-theme-light-com";
import styles from "./keyboards-container.module.css";

const KeyboardsContainer = () => {
  return (
    <div className={styles.keyboards}>
      <b className={styles.label}>Keyboards</b>
      <div className={styles.keyboardsChild} />
      <div className={styles.keyboard}>
        <TypeAlphabeticThemeLight />
        <TypeAlphabeticThemeDarkC />
        <TypeNumericThemeLightCom2 />
        <TypeNumericThemeLightCom1 />
        <TypeNumericThemeLightCom />
      </div>
      <div className={styles.keyboardsItem} />
    </div>
  );
};

export default KeyboardsContainer;
