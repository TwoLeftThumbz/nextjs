import { useMemo } from "react";
import styles from "./status-error-component-alert.module.css";

const StatusErrorComponentAlert = ({
  productCode,
  propTop,
  propBackgroundColor,
  propColor,
}) => {
  const statusErrorComponentAlertStyle = useMemo(() => {
    return {
      top: propTop,
      backgroundColor: propBackgroundColor,
    };
  }, [propTop, propBackgroundColor]);

  const alertMessageStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className={styles.statuserrorComponentalert}
      style={statusErrorComponentAlertStyle}
    >
      <img className={styles.iconlyboldinfoCircle} alt="" src={productCode} />
      <div className={styles.alertMessage} style={alertMessageStyle}>
        Alert message
      </div>
    </div>
  );
};

export default StatusErrorComponentAlert;
