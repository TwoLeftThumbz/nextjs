import ThemeDarkComponentNavbar from "../components/theme-dark-component-navbar";
import TypeCreditCardThemeDark from "../components/type-credit-card-theme-dark";
import ThemeDarkComponentButtomB from "../components/theme-dark-component-buttom-b";
import TypeDefaultComponentTopBa from "../components/type-default-component-top-ba";

const DarkMorePaymentMethods = () => {
  return (
    <div className="relative bg-dark-dark-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[932px] overflow-hidden">
      <div className="absolute w-full top-[44px] right-[0px] left-[0px] h-[888px] flex flex-col items-center justify-start pt-4 px-6 pb-12 box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <ThemeDarkComponentNavbar
            iconlyLightOutlineArrowLe="/iconlylightoutlinearrow--left.svg"
            titleSection="Payment Methods"
            iconlyCurvedNotification="/iconlylightoutlinescan1.svg"
            iconlyCurvedNotification1="/iconlycurvednotification.svg"
            showAutoLayoutHorizontal
            showIconlyCurvedNotification
            iconlyCurvedNotification2={false}
          />
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
            <TypeCreditCardThemeDark
              logosmastercard="/frame5.svg"
              prop="PayPal"
              styleNoneThemeDefaultStat="/stylenone-themelight-stateunselected-componentradio.svg"
              change="Connected"
              showStyleNoneThemeDefaultSta={false}
              change1
              logosmastercardIconWidth="32px"
            />
            <TypeCreditCardThemeDark
              logosmastercard="/frame6.svg"
              prop="Google Pay"
              styleNoneThemeDefaultStat="/stylenone-themedefault-stateunselected-componentradio.svg"
              change="Connected"
              showStyleNoneThemeDefaultSta={false}
              change1
              logosmastercardIconWidth="32px"
            />
            <TypeCreditCardThemeDark
              logosmastercard="/frame7.svg"
              prop="Apple Pay"
              styleNoneThemeDefaultStat="/stylenone-themedefault-stateunselected-componentradio.svg"
              change="Connected"
              showStyleNoneThemeDefaultSta={false}
              change1
              logosmastercardIconWidth="32px"
            />
            <TypeCreditCardThemeDark
              logosmastercard="/logosmastercard.svg"
              prop="•••• •••• •••• •••• 4679"
              styleNoneThemeDefaultStat="/stylenone-themelight-stateselected-componentradio.svg"
              change="Connected"
              showStyleNoneThemeDefaultSta={false}
              change1
              logosmastercardIconWidth="41.2px"
            />
            <TypeCreditCardThemeDark
              logosmastercard="/logosmastercard.svg"
              prop="•••• •••• •••• •••• 2766"
              styleNoneThemeDefaultStat="/stylenone-themelight-stateselected-componentradio.svg"
              change="Connected"
              showStyleNoneThemeDefaultSta={false}
              change1
              logosmastercardIconWidth="41.2px"
            />
            <TypeCreditCardThemeDark
              logosmastercard="/logosmastercard.svg"
              prop="•••• •••• •••• •••• 3892"
              styleNoneThemeDefaultStat="/stylenone-themelight-stateselected-componentradio.svg"
              change="Connected"
              showStyleNoneThemeDefaultSta={false}
              change1
              logosmastercardIconWidth="41.2px"
            />
          </div>
        </div>
      </div>
      <ThemeDarkComponentButtomB
        buttonText="Add New Payment"
        addPaymentButtonText="Button"
        showTypeButtonType2Secondary={false}
        showAutoLayoutHorizontal={false}
        themeDarkComponentButtomBWidth="100%"
        themeDarkComponentButtomBPosition="absolute"
        themeDarkComponentButtomBRight="0px"
        themeDarkComponentButtomBBottom="0px"
        themeDarkComponentButtomBLeft="0px"
        themeDarkComponentButtomBCursor="unset"
        themeDarkComponentButtomBMarginTop="unset"
        typeButtonType2PrimaryTBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        buttonDisplay="flex"
        buttonColor="#f3f3f3"
        buttonAlignItems="center"
        buttonJustifyContent="center"
        buttonWidth="350px"
        buttonFlexShrink="0"
        buttonFlex="unset"
      />
      <TypeDefaultComponentTopBa
        dimensionLabel="/group3.svg"
        dimensionValue="/group4.svg"
        dimensionText="/group5.svg"
        typeDefaultComponentTopBaWidth="100%"
        typeDefaultComponentTopBaPosition="absolute"
        typeDefaultComponentTopBaTop="0px"
        typeDefaultComponentTopBaRight="0px"
        typeDefaultComponentTopBaLeft="0px"
        divColor="#fff"
      />
    </div>
  );
};

export default DarkMorePaymentMethods;
