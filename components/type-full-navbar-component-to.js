import TypeDefaultComponentTopBa from "./type-default-component-top-ba";
import SizeSmallTypeBorderIcon2 from "./size-small-type-border-icon2";
import StateActiveStyleNoneThem from "./state-active-style-none-them";
import StateInactiveStyleNoneTh from "./state-inactive-style-none-th";
import styles from "./type-full-navbar-component-to.module.css";

const TypeFullNavbarComponentTo = ({ navBar }) => {
  return (
    <div className={styles.typefullNavbarComponentto}>
      <TypeDefaultComponentTopBa
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        propWidth="unset"
        propAlignSelf="stretch"
      />
      <div className={styles.autoLayoutHorizontal}>
        <div className={styles.autoLayoutHorizontal1}>
          <img className={styles.logoIcon} alt="" src="/logo2.svg" />
          <img
            className={styles.iconlylightarrowLeft}
            alt=""
            src="/iconlylightarrow--left2.svg"
          />
          <img className={styles.avatarIcon} alt="" src="/avatar.svg" />
          <b className={styles.header}>{navBar}</b>
        </div>
        <div className={styles.autoLayoutHorizontal2}>
          <img
            className={styles.avatarIcon}
            alt=""
            src="/iconlylightsearch1.svg"
          />
          <img
            className={styles.iconlycurvedheart}
            alt=""
            src="/iconlycurvedheart.svg"
          />
          <img
            className={styles.iconlylightarrowLeft}
            alt=""
            src="/iconlyboldnotification1.svg"
          />
        </div>
        <SizeSmallTypeBorderIcon2
          itemCode="/additional-icons10.svg"
          chipItemCode="Create"
          propPosition="unset"
          propTop="unset"
          propLeft="unset"
          propPadding="var(--padding-7xs) var(--padding-base)"
          propBorder="2px solid var(--primary-500)"
          propGap="8px"
          propBackgroundColor="unset"
          propWidth="unset"
          propHeight="unset"
          propOverflow="hidden"
          propFlexShrink="0"
          propWidth1="12px"
          propHeight1="12px"
          propFontSize="14px"
          propFontWeight="600"
          propColor="#1c56c6"
        />
      </div>
      <div className={styles.autoLayoutHorizontal3}>
        <StateActiveStyleNoneThem
          tabLabel="Active Tab"
          propPosition="unset"
          propTop="unset"
          propLeft="unset"
          propWidth="unset"
          propFlex="1"
        />
        <StateInactiveStyleNoneTh
          tabLabel="Inactive Tab"
          propPosition="unset"
          propTop="unset"
          propLeft="unset"
          propWidth="unset"
          propFlex="1"
          propColor="rgba(158, 158, 158, 0.6)"
          propBackgroundColor="1px solid rgba(77, 77, 77, 0.5)"
        />
        <StateInactiveStyleNoneTh
          tabLabel="Inactive Tab"
          propPosition="unset"
          propTop="unset"
          propLeft="unset"
          propWidth="unset"
          propFlex="1"
          propColor="rgba(158, 158, 158, 0.6)"
          propBackgroundColor="1px solid rgba(77, 77, 77, 0.5)"
        />
      </div>
    </div>
  );
};

export default TypeFullNavbarComponentTo;
