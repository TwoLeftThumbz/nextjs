import styles from "./recommended-holidays-card.module.css";

const RecommendedHolidaysCard = ({
  locationImageUrl,
  destinationName,
  packageDuration,
  price,
}) => {
  return (
    <button className={styles.recCard1}>
      <img
        className={styles.unsplash5mv818tzxeoIcon}
        alt=""
        src={locationImageUrl}
      />
      <div className={styles.holidayDetails}>
        <div className={styles.frameParent}>
          <div className={styles.baliParent}>
            <div className={styles.bali}>{destinationName}</div>
            <div className={styles.d3n}>{packageDuration}</div>
          </div>
          <div className={styles.div}>{price}</div>
        </div>
      </div>
    </button>
  );
};

export default RecommendedHolidaysCard;
