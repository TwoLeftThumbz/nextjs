import TypeDefaultComponentTopBa from "./type-default-component-top-ba";
import SizeSmallTypeBorderIcon2 from "./size-small-type-border-icon2";
import styles from "./type-icon-back-component-top.module.css";

const TypeIconBackComponentTop = () => {
  return (
    <div className={styles.typeiconBackComponenttop}>
      <TypeDefaultComponentTopBa
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        propWidth="unset"
        propAlignSelf="stretch"
      />
      <div className={styles.autoLayoutHorizontal}>
        <div className={styles.autoLayoutHorizontal1}>
          <div className={styles.typelogoCircleComponentlo}>
            <div className={styles.rectangle} />
            <img className={styles.logoIcon} alt="" src="/logo1.svg" />
          </div>
          <img
            className={styles.iconlylightOutlinearrowL}
            alt=""
            src="/iconlylightoutlinearrow--left1.svg"
          />
          <b className={styles.title}>Title</b>
        </div>
        <div className={styles.autoLayoutHorizontal2}>
          <img
            className={styles.iconlycurvedplus}
            alt=""
            src="/iconlycurvedplus.svg"
          />
          <img
            className={styles.iconlycurvedplus}
            alt=""
            src="/iconlycurvedheart.svg"
          />
          <img
            className={styles.iconlyboldnotification}
            alt=""
            src="/iconlyboldnotification1.svg"
          />
          <img
            className={styles.iconlylightOutlinearrowL}
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
    </div>
  );
};

export default TypeIconBackComponentTop;
