import { useMemo } from "react";
import styles from "./paris-card-container.module.css";

const ParisCardContainer = ({
  destinationPrice,
  destinationPriceText,
  propBackgroundImage,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <button className={styles.card1}>
      <div className={styles.destinationDetailsWrapper} style={frameDivStyle}>
        <div className={styles.destinationDetails}>
          <b className={styles.paris}>{destinationPrice}</b>
          <div className={styles.fromParent}>
            <div className={styles.from}>from</div>
            <div className={styles.div}>{destinationPriceText}</div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default ParisCardContainer;
