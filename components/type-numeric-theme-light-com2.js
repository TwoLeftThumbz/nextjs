import styles from "./type-numeric-theme-light-com2.module.css";

const TypeNumericThemeLightCom2 = () => {
  return (
    <div className={styles.typenumericThemelightCom}>
      <div className={styles.keyboardnumber}>
        <div className={styles.autoLayoutHorizontal}>
          <div className={styles.autoLayoutVertical}>
            <div className={styles.div}>1</div>
          </div>
          <div className={styles.autoLayoutVertical}>
            <div className={styles.div}>2</div>
          </div>
          <div className={styles.autoLayoutVertical2}>
            <div className={styles.div}>3</div>
          </div>
        </div>
        <div className={styles.autoLayoutHorizontal}>
          <div className={styles.autoLayoutVertical3}>
            <div className={styles.div}>4</div>
          </div>
          <div className={styles.autoLayoutVertical3}>
            <div className={styles.div}>5</div>
          </div>
          <div className={styles.autoLayoutVertical3}>
            <div className={styles.div}>6</div>
          </div>
        </div>
        <div className={styles.autoLayoutHorizontal}>
          <div className={styles.autoLayoutVertical}>
            <div className={styles.div}>7</div>
          </div>
          <div className={styles.autoLayoutVertical}>
            <div className={styles.div}>8</div>
          </div>
          <div className={styles.autoLayoutVertical}>
            <div className={styles.div}>9</div>
          </div>
        </div>
        <div className={styles.autoLayoutHorizontal}>
          <div className={styles.autoLayoutVertical}>
            <div className={styles.div}>*</div>
          </div>
          <div className={styles.autoLayoutVertical}>
            <div className={styles.div}>0</div>
          </div>
          <div className={styles.autoLayoutVertical}>
            <img className={styles.frameIcon} alt="" src="/frame7.svg" />
          </div>
        </div>
      </div>
      <div className={styles.property1default}>
        <div className={styles.rectangle} />
      </div>
    </div>
  );
};

export default TypeNumericThemeLightCom2;
