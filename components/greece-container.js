import { useMemo } from "react";
import styles from "./greece-container.module.css";

const GreeceContainer = ({
  destinationPrice,
  destinationPriceGreece,
  propBackgroundImage,
  propPadding,
  propBoxSizing,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const frameDiv2Style = useMemo(() => {
    return {
      padding: propPadding,
      boxSizing: propBoxSizing,
    };
  }, [propPadding, propBoxSizing]);

  return (
    <button className={styles.card2}>
      <div className={styles.destinationDetailsWrapper} style={frameDiv1Style}>
        <div className={styles.destinationDetails}>
          <b className={styles.greece}>{destinationPrice}</b>
          <div className={styles.fromParent} style={frameDiv2Style}>
            <div className={styles.from}>from</div>
            <div className={styles.div}>{destinationPriceGreece}</div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default GreeceContainer;
