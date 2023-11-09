import { useState } from "react";
import InputContainer from "../components/input-container";
import TypeButtonType2PrimaryT from "../components/type-button-type2-primary-t";
import TypeButtonType2PrimaryT1 from "../components/type-button-type2-primary-t1";
import TypeLoginType2SocialTyp from "../components/type-login-type2-social-typ";
import TypeButtonType2IconType from "../components/type-button-type2-icon-type";
import AvatarContainer from "../components/avatar-container";
import StateInactiveStyleNoneTh from "../components/state-inactive-style-none-th";
import StateInactiveStyleIconTh from "../components/state-inactive-style-icon-th";
import StateActiveStyleNoneThem from "../components/state-active-style-none-them";
import StateActiveStyleIconThem from "../components/state-active-style-icon-them";
import StatusErrorComponentAlert from "../components/status-error-component-alert";
import ThemeDarkModal from "../components/theme-dark-modal";
import FormContainer from "../components/form-container";
import SearchForm from "../components/search-form";
import Grid from "../components/grid";
import TypeLogoCircleComponentLo from "../components/type-logo-circle-component-lo";
import TypeLogoTextDarkComponent from "../components/type-logo-text-dark-component";
import TypeLogoDefaultComponentL from "../components/type-logo-default-component-l";
import ChipsContainer from "../components/chips-container";
import KeyboardNumericDarkKeyboard from "../components/keyboard-numeric-dark-keyboard";
import { ComponentsContext } from "../context/ComponentsContext";
import styles from "./components-variants.module.css";

const ComponentsVariants = () => {
  const [components, setComponents] = useState("components");
  return (
    <ComponentsContext.Provider value={{ components, setComponents }}>
      <div className={styles.componentsVariants}>
        <div className={styles.header}>
          <b
            className={styles.componentsVariants1}
          >{`Components & Variants`}</b>
        </div>
        <div className={styles.content}>
          <div className={styles.inputField}>
            <b className={styles.label}>Input Field</b>
            <InputContainer
              placeholderText="8"
              showLabel
              dimensionCode="/flag1.svg"
              dimensionCodeImageUrl="/iconlylightarrow--down-23.svg"
              phoneNumber="+1 111 467 378 399"
            />
          </div>
          <div className={styles.autoLayout}>
            <div className={styles.inputField}>
              <b className={styles.label}>Button</b>
              <div className={styles.sizemdVariantshadowColor}>
                <TypeButtonType2PrimaryT
                  propTop="16px"
                  propBackgroundColor="#006fee"
                  propHeight="58px"
                  propPadding="var(--padding-0) var(--padding-base)"
                  propPosition="absolute"
                  propLeft="16px"
                  propWidth="382px"
                  propAlignSelf="unset"
                  propColor="#fff"
                  propDisplay="flex"
                  propAlignItems="center"
                  propJustifyContent="center"
                  propWidth1="350px"
                  propFlexShrink="0"
                  propFlex="unset"
                />
                <TypeButtonType2PrimaryT
                  propTop="448px"
                  propBackgroundColor="#006fee"
                  propHeight="58px"
                  propPadding="var(--padding-0) var(--padding-base)"
                  propPosition="absolute"
                  propLeft="16px"
                  propWidth="382px"
                  propAlignSelf="unset"
                  propColor="#fff"
                  propDisplay="inline-block"
                  propAlignItems="unset"
                  propJustifyContent="unset"
                  propWidth1="unset"
                  propFlexShrink="unset"
                  propFlex="1"
                />
                <TypeButtonType2PrimaryT1
                  itemCode="/iconlyboldbuy1.svg"
                  dimensionCode="/iconlyboldarrow--right2.svg"
                  propTop="16px"
                  propBackgroundColor="#006fee"
                  propHeight="58px"
                  propPadding="var(--padding-0) var(--padding-base)"
                  propWidth="350px"
                  propFlex="unset"
                  propColor="#fff"
                />
                <TypeButtonType2PrimaryT1
                  itemCode="/iconlyboldbuy1.svg"
                  dimensionCode="/iconlyboldarrow--right2.svg"
                  propTop="448px"
                  propBackgroundColor="#006fee"
                  propHeight="58px"
                  propPadding="var(--padding-0) var(--padding-base)"
                  propWidth="unset"
                  propFlex="1"
                  propColor="#fff"
                />
                <TypeButtonType2PrimaryT
                  propTop="88px"
                  propBackgroundColor="#e9f0ff"
                  propHeight="unset"
                  propPadding="var(--padding-lg) var(--padding-base)"
                  propPosition="absolute"
                  propLeft="16px"
                  propWidth="382px"
                  propAlignSelf="unset"
                  propColor="#1c56c6"
                  propDisplay="inline-block"
                  propAlignItems="unset"
                  propJustifyContent="unset"
                  propWidth1="unset"
                  propFlexShrink="unset"
                  propFlex="1"
                />
                <TypeButtonType2PrimaryT
                  propTop="160px"
                  propBackgroundColor="1px solid #3d3d44"
                  propHeight="unset"
                  propPadding="var(--padding-lg) var(--padding-base)"
                  propPosition="absolute"
                  propLeft="16px"
                  propWidth="382px"
                  propAlignSelf="unset"
                  propColor="#fff"
                  propDisplay="inline-block"
                  propAlignItems="unset"
                  propJustifyContent="unset"
                  propWidth1="unset"
                  propFlexShrink="unset"
                  propFlex="1"
                />
                <TypeButtonType2PrimaryT1
                  itemCode="/iconlyboldbuy2.svg"
                  dimensionCode="/iconlyboldarrow--right3.svg"
                  propTop="88px"
                  propBackgroundColor="#e9f0ff"
                  propHeight="unset"
                  propPadding="var(--padding-lg) var(--padding-base)"
                  propWidth="unset"
                  propFlex="1"
                  propColor="#1c56c6"
                />
                <TypeButtonType2PrimaryT1
                  itemCode="/iconlyboldbuy1.svg"
                  dimensionCode="/iconlyboldarrow--right2.svg"
                  propTop="160px"
                  propBackgroundColor="1px solid #3d3d44"
                  propHeight="unset"
                  propPadding="var(--padding-lg) var(--padding-base)"
                  propWidth="unset"
                  propFlex="1"
                  propColor="#fff"
                />
                <TypeButtonType2PrimaryT
                  propTop="304px"
                  propBackgroundColor="#e9f0ff"
                  propHeight="unset"
                  propPadding="var(--padding-lg) var(--padding-base)"
                  propPosition="absolute"
                  propLeft="16px"
                  propWidth="382px"
                  propAlignSelf="unset"
                  propColor="#1c56c6"
                  propDisplay="inline-block"
                  propAlignItems="unset"
                  propJustifyContent="unset"
                  propWidth1="unset"
                  propFlexShrink="unset"
                  propFlex="1"
                />
                <TypeButtonType2PrimaryT
                  propTop="376px"
                  propBackgroundColor="1px solid #3d3d44"
                  propHeight="unset"
                  propPadding="var(--padding-lg) var(--padding-base)"
                  propPosition="absolute"
                  propLeft="16px"
                  propWidth="382px"
                  propAlignSelf="unset"
                  propColor="#fff"
                  propDisplay="inline-block"
                  propAlignItems="unset"
                  propJustifyContent="unset"
                  propWidth1="unset"
                  propFlexShrink="unset"
                  propFlex="1"
                />
                <TypeButtonType2PrimaryT
                  propTop="520px"
                  propBackgroundColor="#006fee"
                  propHeight="58px"
                  propPadding="var(--padding-0) var(--padding-base)"
                  propPosition="absolute"
                  propLeft="16px"
                  propWidth="382px"
                  propAlignSelf="unset"
                  propColor="#fff"
                  propDisplay="inline-block"
                  propAlignItems="unset"
                  propJustifyContent="unset"
                  propWidth1="unset"
                  propFlexShrink="unset"
                  propFlex="1"
                />
                <TypeButtonType2PrimaryT1
                  itemCode="/iconlyboldbuy2.svg"
                  dimensionCode="/iconlyboldarrow--right3.svg"
                  propTop="304px"
                  propBackgroundColor="#e9f0ff"
                  propHeight="unset"
                  propPadding="var(--padding-lg) var(--padding-base)"
                  propWidth="unset"
                  propFlex="1"
                  propColor="#1c56c6"
                />
                <TypeButtonType2PrimaryT1
                  itemCode="/iconlyboldbuy1.svg"
                  dimensionCode="/iconlyboldarrow--right2.svg"
                  propTop="376px"
                  propBackgroundColor="1px solid #3d3d44"
                  propHeight="unset"
                  propPadding="var(--padding-lg) var(--padding-base)"
                  propWidth="unset"
                  propFlex="1"
                  propColor="#fff"
                />
                <TypeButtonType2PrimaryT1
                  itemCode="/iconlyboldbuy1.svg"
                  dimensionCode="/iconlyboldarrow--right2.svg"
                  propTop="520px"
                  propBackgroundColor="#006fee"
                  propHeight="58px"
                  propPadding="var(--padding-0) var(--padding-base)"
                  propWidth="unset"
                  propFlex="1"
                  propColor="#fff"
                />
                <TypeLoginType2SocialTyp
                  socialButtonIcon="/frame2.svg"
                  loginButtonIcon="Continue with Apple"
                  propTop="592px"
                  propLeft="16px"
                  propBackgroundColor="#fff"
                  propBorder="1px solid var(--greyscale-200)"
                  propBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  propOverflow="unset"
                  propColor="#212121"
                />
                <TypeLoginType2SocialTyp
                  socialButtonIcon="/frame3.svg"
                  loginButtonIcon="Continue with Apple"
                  propTop="592px"
                  propLeft="412px"
                  propBackgroundColor="#2b2b2b"
                  propBorder="1px solid var(--dark-dark-3)"
                  propBoxShadow="unset"
                  propOverflow="unset"
                  propColor="#fff"
                />
                <TypeLoginType2SocialTyp
                  socialButtonIcon="/frame4.svg"
                  loginButtonIcon="Continue with Google"
                  propTop="664px"
                  propLeft="16px"
                  propBackgroundColor="#fff"
                  propBorder="1px solid var(--greyscale-200)"
                  propBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  propOverflow="unset"
                  propColor="#212121"
                />
                <TypeLoginType2SocialTyp
                  socialButtonIcon="/frame4.svg"
                  loginButtonIcon="Continue with Google"
                  propTop="664px"
                  propLeft="412px"
                  propBackgroundColor="#2b2b2b"
                  propBorder="1px solid var(--dark-dark-3)"
                  propBoxShadow="unset"
                  propOverflow="unset"
                  propColor="#fff"
                />
                <TypeLoginType2SocialTyp
                  socialButtonIcon="/frame5.svg"
                  loginButtonIcon="Continue with Facebook"
                  propTop="736px"
                  propLeft="16px"
                  propBackgroundColor="#fff"
                  propBorder="1px solid var(--greyscale-200)"
                  propBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  propOverflow="hidden"
                  propColor="#212121"
                />
                <TypeLoginType2SocialTyp
                  socialButtonIcon="/frame5.svg"
                  loginButtonIcon="Continue with Facebook"
                />
                <TypeButtonType2IconType
                  itemCode="/additional-icons8.svg"
                  propLeft="266px"
                  propBorderRadius="100px"
                  propBackgroundColor="#006fee"
                  propBorder="unset"
                  propFlexDirection="row"
                  propPadding="var(--padding-0) var(--padding-base)"
                  propGap="12px"
                  propHeight="58px"
                  propHeight1="unset"
                  propWidth="40px"
                />
                <TypeButtonType2IconType
                  itemCode="/additional-icons8.svg"
                  propLeft="482px"
                  propBorderRadius="15px"
                  propBackgroundColor="#006fee"
                  propBorder="unset"
                  propFlexDirection="row"
                  propPadding="var(--padding-0) var(--padding-base)"
                  propGap="12px"
                  propHeight="58px"
                  propHeight1="unset"
                  propWidth="40px"
                />
                <TypeButtonType2IconType
                  itemCode="/additional-icons9.svg"
                  propLeft="338px"
                  propBorderRadius="16px"
                  propBackgroundColor="#fff"
                  propBorder="1px solid var(--greyscale-300)"
                  propFlexDirection="column"
                  propPadding="17px"
                  propGap="8px"
                  propHeight="unset"
                  propHeight1="40px"
                  propWidth="unset"
                />
                <TypeButtonType2IconType itemCode="/additional-icons8.svg" />
                <TypeButtonType2PrimaryT />
                <TypeButtonType2PrimaryT1
                  itemCode="/iconlyboldbuy1.svg"
                  dimensionCode="/iconlyboldarrow--right2.svg"
                />
              </div>
            </div>
            <AvatarContainer />
          </div>
          <div className={styles.autoLayout}>
            <div className={styles.autoLayout2}>
              <div className={styles.inputField}>
                <b className={styles.label}>Horizontal Tab</b>
                <div className={styles.horizontalTab1}>
                  <StateInactiveStyleNoneTh
                    tabLabel="Horizontal Tab"
                    propPosition="absolute"
                    propTop="20px"
                    propLeft="20px"
                    propWidth="160px"
                    propFlex="unset"
                    propColor="rgba(158, 158, 158, 0.6)"
                    propBackgroundColor="1px solid rgba(77, 77, 77, 0.5)"
                  />
                  <StateInactiveStyleNoneTh tabLabel="Horizontal Tab" />
                  <StateInactiveStyleIconTh
                    iconCode="/iconlycurvedchart1.svg"
                    iconTextCode="/iconlycurvedtick-square1.svg"
                    propTop="20px"
                    propColor="rgba(158, 158, 158, 0.6)"
                    propBackgroundColor="1px solid rgba(77, 77, 77, 0.5)"
                  />
                  <StateInactiveStyleIconTh
                    iconCode="/iconlycurvedchart2.svg"
                    iconTextCode="/iconlycurvedtick-square2.svg"
                  />
                  <StateActiveStyleNoneThem tabLabel="Horizontal Tab" />
                  <StateActiveStyleIconThem />
                </div>
              </div>
              <div className={styles.inputField}>
                <b className={styles.label}>Alert</b>
                <div className={styles.alert1}>
                  <StatusErrorComponentAlert
                    productCode="/iconlyboldinfo-circle1.svg"
                    propTop="20px"
                    propBackgroundColor="rgba(74, 222, 128, 0.2)"
                    propColor="#4aaf57"
                  />
                  <StatusErrorComponentAlert
                    productCode="/iconlyboldinfo-circle2.svg"
                    propTop="70px"
                    propBackgroundColor="rgba(36, 107, 253, 0.2)"
                    propColor="#6949ff"
                  />
                  <StatusErrorComponentAlert
                    productCode="/iconlyboldinfo-circle3.svg"
                    propTop="120px"
                    propBackgroundColor="rgba(250, 204, 21, 0.2)"
                    propColor="#ff981f"
                  />
                  <StatusErrorComponentAlert productCode="/iconlyboldinfo-circle4.svg" />
                </div>
              </div>
            </div>
            <div className={styles.inputField}>
              <b className={styles.label}>Modal</b>
              <div className={styles.modal2}>
                <ThemeDarkModal
                  dimensionLabel="/group2.svg"
                  propLeft="calc(50% - 360px)"
                  propBackgroundColor="#fff"
                  propColor="#212121"
                  propColor1="#f2f2f2"
                  propBackgroundColor1="#e9f0ff"
                  propColor2="#1c56c6"
                />
                <ThemeDarkModal dimensionLabel="/group3.svg" />
              </div>
            </div>
          </div>
          <FormContainer />
          <div className={styles.autoLayout}>
            <SearchForm />
            <div className={styles.autoLayout2}>
              <div className={styles.inputField}>
                <b className={styles.label}>Grid</b>
                <Grid />
              </div>
              <div className={styles.appLogo}>
                <b className={styles.label}>App Logo</b>
                <div className={styles.logo}>
                  <TypeLogoCircleComponentLo />
                  <TypeLogoTextDarkComponent
                    propTop="20px"
                    propColor="#212121"
                  />
                  <TypeLogoTextDarkComponent />
                  <TypeLogoDefaultComponentL timestamp="/typelogo-default-componentlogo.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.inputField}>
            <b className={styles.label}>Chips</b>
            <ChipsContainer />
          </div>
        </div>
        <div className={styles.componentsVariantsInner}>
          <div className={styles.property1defaultParent}>
            <div className={styles.property1default}>
              <div className={styles.rectangle} />
            </div>
            <KeyboardNumericDarkKeyboard
              prop="1"
              prop1="2"
              prop2="3"
              prop3="4"
              prop4="5"
              prop5="6"
              prop6="7"
              prop7="8"
              prop8="9"
              prop9="*"
              prop10="0"
            />
          </div>
        </div>
      </div>
    </ComponentsContext.Provider>
  );
};

export default ComponentsVariants;
