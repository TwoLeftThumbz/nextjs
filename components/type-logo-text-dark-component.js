import { useMemo } from "react";
import TypeLogoDefaultComponentL from "./type-logo-default-component-l";
import styles from "./type-logo-text-dark-component.module.css";

const TypeLogoTextDarkComponent = ({ propTop, propColor }) => {
  const typeLogoTextDarkComponentStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const payzaStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className={styles.typelogoTextDarkComponent}
      style={typeLogoTextDarkComponentStyle}
    >
      <TypeLogoDefaultComponentL
        timestamp="/logo4.svg"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
      />
      <b className={styles.payza} style={payzaStyle}>
        Payza
      </b>
    </div>
  );
};

export default TypeLogoTextDarkComponent;
