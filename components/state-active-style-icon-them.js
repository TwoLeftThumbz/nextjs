import styles from "./state-active-style-icon-them.module.css";

const StateActiveStyleIconThem = () => {
  return (
    <div className={styles.stateactiveStyleiconThem}>
      <div className={styles.autoLayoutHorizontal}>
        <img
          className={styles.iconlycurvedchart}
          alt=""
          src="/iconlycurvedchart3.svg"
        />
        <div className={styles.horizontalTab}>Horizontal Tab</div>
        <img
          className={styles.iconlycurvedchart}
          alt=""
          src="/iconlycurvedtick-square3.svg"
        />
        <div className={styles.autoLayoutHorizontal1}>
          <div className={styles.div}>3</div>
        </div>
      </div>
      <div className={styles.rectangle} />
    </div>
  );
};

export default StateActiveStyleIconThem;
