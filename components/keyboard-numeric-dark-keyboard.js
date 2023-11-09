import styles from "./keyboard-numeric-dark-keyboard.module.css";

const KeyboardNumericDarkKeyboard = ({
  prop,
  prop1,
  prop2,
  prop3,
  prop4,
  prop5,
  prop6,
  prop7,
  prop8,
  prop9,
  prop10,
}) => {
  return (
    <div className={styles.keyboardnumericdarkkeyboard}>
      <div className={styles.keyboardnumber}>
        <div className={styles.autoLayoutHorizontal}>
          <div className={styles.autoLayoutVertical}>
            <div className={styles.div}>{prop}</div>
          </div>
          <div className={styles.autoLayoutVertical}>
            <div className={styles.div}>{prop1}</div>
          </div>
          <div className={styles.autoLayoutVertical}>
            <div className={styles.div}>{prop2}</div>
          </div>
        </div>
        <div className={styles.autoLayoutHorizontal}>
          <div className={styles.autoLayoutVertical}>
            <div className={styles.div}>{prop3}</div>
          </div>
          <div className={styles.autoLayoutVertical}>
            <div className={styles.div}>{prop4}</div>
          </div>
          <div className={styles.autoLayoutVertical}>
            <div className={styles.div}>{prop5}</div>
          </div>
        </div>
        <div className={styles.autoLayoutHorizontal}>
          <div className={styles.autoLayoutVertical}>
            <div className={styles.div}>{prop6}</div>
          </div>
          <div className={styles.autoLayoutVertical}>
            <div className={styles.div}>{prop7}</div>
          </div>
          <div className={styles.autoLayoutVertical}>
            <div className={styles.div}>{prop8}</div>
          </div>
        </div>
        <div className={styles.autoLayoutHorizontal}>
          <div className={styles.autoLayoutVertical}>
            <div className={styles.div}>{prop9}</div>
          </div>
          <div className={styles.autoLayoutVertical}>
            <div className={styles.div}>{prop10}</div>
          </div>
          <div className={styles.autoLayoutVertical}>
            <img className={styles.frameIcon} alt="" src="/frame8.svg" />
          </div>
        </div>
      </div>
      <div className={styles.property1default}>
        <div className={styles.rectangle} />
      </div>
    </div>
  );
};

export default KeyboardNumericDarkKeyboard;
