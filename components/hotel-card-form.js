import { useMemo } from "react";
import styles from "./hotel-card-form.module.css";

const HotelCardForm = ({
  unsplashtSn8bPOpVEo,
  storyBeachfrontSuite,
  discoveryShores,
  night,
  vector,
  prop,
  reviews,
  propPadding,
  propBoxSizing,
}) => {
  const ratingStyle = useMemo(() => {
    return {
      padding: propPadding,
      boxSizing: propBoxSizing,
    };
  }, [propPadding, propBoxSizing]);

  return (
    <div className={styles.hotelCard2}>
      <a className={styles.hotelCard}>
        <img
          className={styles.unsplashtsn8bpopveoIcon}
          alt=""
          src={unsplashtSn8bPOpVEo}
        />
        <div className={styles.stayDetails}>
          <div className={styles.storyBeachfrontSuiteParent}>
            <div className={styles.storyBeachfrontSuite}>
              {storyBeachfrontSuite}
            </div>
            <b className={styles.discoveryShores}>{discoveryShores}</b>
            <div className={styles.night}>{night}</div>
          </div>
        </div>
        <div className={styles.rating} style={ratingStyle}>
          <div className={styles.vectorParent}>
            <img className={styles.vectorIcon} alt="" src={vector} />
            <div className={styles.div}>{prop}</div>
          </div>
          <div className={styles.reviews}>{reviews}</div>
        </div>
        <button className={styles.moreDetailsButton}>
          <div className={styles.button}>More details</div>
        </button>
      </a>
    </div>
  );
};

export default HotelCardForm;
