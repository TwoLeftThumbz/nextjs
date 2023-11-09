import { useMemo } from "react";
import styles from "./type-login-type2-social-typ.module.css";

const TypeLoginType2SocialTyp = ({
  socialButtonIcon,
  loginButtonIcon,
  propTop,
  propLeft,
  propBackgroundColor,
  propBorder,
  propBoxShadow,
  propOverflow,
  propColor,
}) => {
  const typeLoginType2SocialTypStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      backgroundColor: propBackgroundColor,
      border: propBorder,
      boxShadow: propBoxShadow,
      overflow: propOverflow,
    };
  }, [
    propTop,
    propLeft,
    propBackgroundColor,
    propBorder,
    propBoxShadow,
    propOverflow,
  ]);

  const continueWithFacebookStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className={styles.typeloginType2socialTyp}
      style={typeLoginType2SocialTypStyle}
    >
      <div className={styles.autoLayoutHorizontal}>
        <img className={styles.frameIcon} alt="" src={socialButtonIcon} />
        <div
          className={styles.continueWithFacebook}
          style={continueWithFacebookStyle}
        >
          {loginButtonIcon}
        </div>
      </div>
    </div>
  );
};

export default TypeLoginType2SocialTyp;
