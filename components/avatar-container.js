import TypeLiveComponentAvatar from "./type-live-component-avatar";
import TypeStatusViewedComponent from "./type-status-viewed-component";
import StyleTextThemeDarkState1 from "./style-text-theme-dark-state1";
import StyleTextThemeDarkState from "./style-text-theme-dark-state";
import StateEnabledThemeDefault from "./state-enabled-theme-default";
import styles from "./avatar-container.module.css";

const AvatarContainer = () => {
  return (
    <div className={styles.autoLayoutVertical}>
      <div className={styles.avatar}>
        <b className={styles.label}>Avatar</b>
        <div className={styles.avatar2}>
          <img
            className={styles.typeonlineAvatarComponent}
            alt=""
            src="/typeonline-avatar-componentavatar.svg"
          />
          <img
            className={styles.typeofflineAvatarComponent}
            alt=""
            src="/typeoffline-avatar-componentavatar.svg"
          />
          <img
            className={styles.typeeditAvatarComponentav}
            alt=""
            src="/typeedit-avatar-componentavatar.svg"
          />
          <img
            className={styles.typeplusAvatarComponentav}
            alt=""
            src="/typeplus-avatar-componentavatar.svg"
          />
          <img
            className={styles.typedefaultComponentavatarIcon}
            alt=""
            src="/typedefault-componentavatar.svg"
          />
          <TypeLiveComponentAvatar />
          <TypeStatusViewedComponent />
        </div>
      </div>
      <div className={styles.avatar}>
        <b className={styles.label}>Checkbox</b>
        <div className={styles.checkbox1}>
          <img
            className={styles.stylenoneThemedefaultSta}
            alt=""
            src="/stylenone-themedefault-stateunchecked-componentcheckbox.svg"
          />
          <img
            className={styles.stylenoneThemedefaultSta1}
            alt=""
            src="/stylenone-themedefault-statechecked-componentcheckbox.svg"
          />
          <StyleTextThemeDarkState1
            itemCode="/group.svg"
            isChecked="Checked"
            propTop="20px"
            propLeft="216px"
            propColor="#212121"
          />
          <StyleTextThemeDarkState1
            itemCode="/rectangle-stroke.svg"
            isChecked="Unchecked"
            propTop="20px"
            propLeft="64px"
            propColor="#212121"
          />
          <StyleTextThemeDarkState1
            itemCode="/rectangle-stroke.svg"
            isChecked="Unchecked"
            propTop="64px"
            propLeft="64px"
            propColor="#fff"
          />
          <StyleTextThemeDarkState1 itemCode="/group.svg" isChecked="Checked" />
        </div>
      </div>
      <div className={styles.avatar}>
        <b className={styles.label}>Radio</b>
        <div className={styles.radio2}>
          <StyleTextThemeDarkState
            dimensionLabel="/group1.svg"
            selectionIcon="Selected"
            propTop="20px"
            propLeft="217px"
            propColor="#212121"
          />
          <StyleTextThemeDarkState
            dimensionLabel="/group1.svg"
            selectionIcon="Selected"
            propTop="64px"
            propLeft="217px"
            propColor="#fff"
          />
          <StyleTextThemeDarkState
            dimensionLabel="/ellipse-stroke.svg"
            selectionIcon="Unselected"
            propTop="20px"
            propLeft="64px"
            propColor="#212121"
          />
          <StyleTextThemeDarkState
            dimensionLabel="/ellipse-stroke.svg"
            selectionIcon="Unselected"
          />
          <img
            className={styles.stylenoneThemedefaultSta}
            alt=""
            src="/stylenone-themedefault-stateunselected-componentradio.svg"
          />
          <img
            className={styles.stylenoneThemedefaultSta1}
            alt=""
            src="/stylenone-themedefault-stateselected-componentradio.svg"
          />
        </div>
      </div>
      <div className={styles.avatar}>
        <b className={styles.label}>Toggle</b>
        <div className={styles.toggle1}>
          <StateEnabledThemeDefault
            propLeft="16px"
            propBackgroundColor="1px solid rgba(77, 77, 77, 0.5)"
            propLeft1="0px"
            propBorder="2px solid var(--greyscale-200)"
          />
          <StateEnabledThemeDefault
            propLeft="72px"
            propBackgroundColor="1px solid #3d3d44"
            propLeft1="0px"
            propBorder="2px solid var(--dark-dark-3)"
          />
          <StateEnabledThemeDefault />
        </div>
      </div>
    </div>
  );
};

export default AvatarContainer;
