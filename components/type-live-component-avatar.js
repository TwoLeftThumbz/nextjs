import StyleBorderlessStateSucces from "./style-borderless-state-succes";
import styles from "./type-live-component-avatar.module.css";

const TypeLiveComponentAvatar = () => {
  return (
    <div className={styles.typeliveComponentavatar}>
      <img className={styles.ellipseIcon} alt="" src="/ellipse@2x.png" />
      <div className={styles.ellipse} />
      <StyleBorderlessStateSucces
        tagMarkerText="LIVE"
        propTop="unset"
        propLeft="calc(50% - 20px)"
        propAlignItems="flex-end"
        propBottom="-15px"
        propBackgroundColor="#c82626"
        propBorder="unset"
        propColor="#fff"
        propTextAlign="center"
      />
    </div>
  );
};

export default TypeLiveComponentAvatar;
