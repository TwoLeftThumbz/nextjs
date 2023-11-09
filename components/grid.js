import styles from "./grid.module.css";

const Grid = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.static}>
        <b className={styles.b}>24</b>
      </div>
      <div className={styles.gridVisualization}>
        <div className={styles.columnGrid} />
      </div>
      <div className={styles.static1}>
        <b className={styles.b}>24</b>
      </div>
      <div className={styles.static2}>
        <b className={styles.b}>24</b>
      </div>
      <div className={styles.fluid}>
        <img className={styles.unionIcon} alt="" src="/union1.svg" />
        <b className={styles.auto}>Auto</b>
      </div>
    </div>
  );
};

export default Grid;
