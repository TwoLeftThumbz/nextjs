import { useMemo } from "react";
import TypeButtonType2PrimaryT from "./type-button-type2-primary-t";
import styles from "./theme-dark-modal.module.css";

const ThemeDarkModal = ({
  dimensionLabel,
  propLeft,
  propBackgroundColor,
  propColor,
  propColor1,
  propBackgroundColor1,
  propColor2,
  modalTitle,
}) => {
  const themeDarkModalStyle = useMemo(() => {
    return {
      left: propLeft,
      backgroundColor: propBackgroundColor,
    };
  }, [propLeft, propBackgroundColor]);

  const loremIpsumDolorStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const button1Style = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const typeButtonType2PrimaryTStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const button1Style1 = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  return (
    <div className={styles.themedarkModal} style={themeDarkModalStyle}>
      <img className={styles.groupIcon} alt="" src={dimensionLabel} />
      <div className={styles.autoLayoutVertical}>
        <b className={styles.modalTitle}>{modalTitle}</b>
        <div className={styles.loremIpsumDolor} style={loremIpsumDolorStyle}>
          Lorem ipsum dolor sit amet hua qui lori ipsum sit ghui amet poety amet
        </div>
      </div>
      <div className={styles.autoLayoutVertical1}>
        <TypeButtonType2PrimaryT
          propTop="unset"
          propBackgroundColor="#006fee"
          propHeight="58px"
          propPadding="0px var(--padding-base)"
          propPosition="unset"
          propLeft="unset"
          propWidth="unset"
          propAlignSelf="stretch"
          propColor="#e9f0ff"
          propDisplay="flex"
          propAlignItems="center"
          propJustifyContent="center"
          propWidth1="350px"
          propFlexShrink="0"
          propFlex="unset"
        />
        <TypeButtonType2PrimaryT
          propTop="unset"
          propBackgroundColor="1px solid #3d3d44"
          propHeight="unset"
          propPadding="var(--padding-lg) var(--padding-base)"
          propPosition="unset"
          propLeft="unset"
          propWidth="unset"
          propAlignSelf="stretch"
          propColor="#fff"
          propDisplay="inline-block"
          propAlignItems="unset"
          propJustifyContent="unset"
          propWidth1="unset"
          propFlexShrink="unset"
          propFlex="1"
        />
      </div>
      <img className={styles.frameIcon} alt="" src="/frame6.svg" />
    </div>
  );
};

export default ThemeDarkModal;
