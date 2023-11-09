import { useMemo } from "react";
import styles from "./hotel-card-container.module.css";

const HotelCardContainer = ({
  propertyDimensions,
  accommodationType,
  hotelName,
  pricePerNight,
  rating,
  reviewCount,
  propBorder,
}) => {
  const moreDetailsButtonStyle = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  return (
    <div className={styles.hotelCard1}>
      <a className={styles.hotelCard}>
        <img
          className={styles.unsplashhhrfsdwxxusIcon}
          alt=""
          src={propertyDimensions}
        />
        <div className={styles.stayDetails}>
          <div className={styles.entireBungalowParent}>
            <div className={styles.entireBungalow}>{accommodationType}</div>
            <b className={styles.matterhornSuites}>{hotelName}</b>
            <div className={styles.night}>{pricePerNight}</div>
          </div>
          <img className={styles.videoIcon} alt="" src="/video.svg" />
        </div>
        <div className={styles.rating}>
          <div className={styles.vectorParent}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <div className={styles.div}>{rating}</div>
          </div>
          <div className={styles.reviews}>{reviewCount}</div>
        </div>
        <button
          className={styles.moreDetailsButton}
          style={moreDetailsButtonStyle}
        >
          <div className={styles.button}>More details</div>
        </button>
      </a>
    </div>
  );
};

export default HotelCardContainer;
