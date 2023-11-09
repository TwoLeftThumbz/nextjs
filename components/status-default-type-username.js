import { useMemo } from "react";
import styles from "./status-default-type-username.module.css";

const StatusDefaultTypeUsername = ({
  userAvatarUrl,
  userIdentifier,
  propTop,
  propLeft,
  propBorder,
  propBackgroundColor,
  propBoxShadow,
  propColor,
  propFontWeight,
}) => {
  const statusDefaultTypeUsernameStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      border: propBorder,
      backgroundColor: propBackgroundColor,
      boxShadow: propBoxShadow,
    };
  }, [propTop, propLeft, propBorder, propBackgroundColor, propBoxShadow]);

  const label4Style = useMemo(() => {
    return {
      color: propColor,
      fontWeight: propFontWeight,
    };
  }, [propColor, propFontWeight]);

  return (
    <div
      className={styles.statusdefaultTypeusername}
      style={statusDefaultTypeUsernameStyle}
    >
      <img className={styles.iconlyboldprofile} alt="" src={userAvatarUrl} />
      <div className={styles.label} style={label4Style}>
        {userIdentifier}
      </div>
    </div>
  );
};

export default StatusDefaultTypeUsername;
