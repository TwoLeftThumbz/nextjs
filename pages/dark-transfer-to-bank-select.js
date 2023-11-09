import { useCallback } from "react";
import ThemeDarkComponentNavbar from "../components/theme-dark-component-navbar";
import BankTransferForm from "../components/bank-transfer-form";
import ThemeDarkComponentButtomB from "../components/theme-dark-component-buttom-b";
import TypeDefaultComponentTopBa from "../components/type-default-component-top-ba";

const DarkTransferToBankSelect = () => {
  const onThemeDarkComponentButtomBClick = useCallback(() => {
    // Please sync "52_Dark_pay bills menu" to the project
  }, []);

  return (
    <div className="relative bg-dark-dark-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[932px] overflow-hidden">
      <div className="absolute w-full top-[44px] right-[0px] left-[0px] h-[888px] flex flex-col items-center justify-start pt-4 px-6 pb-12 box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <ThemeDarkComponentNavbar
            iconlyLightOutlineArrowLe="/iconlylightoutlinearrow--left.svg"
            titleSection="Transfer to Your Bank"
            iconlyCurvedNotification="/iconlylightoutlinesetting.svg"
            iconlyCurvedNotification1="/iconlycurvednotification.svg"
            showAutoLayoutHorizontal={false}
            showIconlyCurvedNotification
            iconlyCurvedNotification2={false}
          />
          <BankTransferForm />
        </div>
      </div>
      <ThemeDarkComponentButtomB
        buttonText="Continue"
        addPaymentButtonText="Continue"
        showTypeButtonType2Secondary={false}
        showAutoLayoutHorizontal={false}
        themeDarkComponentButtomBWidth="100%"
        themeDarkComponentButtomBPosition="absolute"
        themeDarkComponentButtomBRight="0px"
        themeDarkComponentButtomBBottom="0px"
        themeDarkComponentButtomBLeft="0px"
        themeDarkComponentButtomBCursor="pointer"
        themeDarkComponentButtomBMarginTop="unset"
        typeButtonType2PrimaryTBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        buttonDisplay="flex"
        buttonColor="#f3f3f3"
        buttonAlignItems="center"
        buttonJustifyContent="center"
        buttonWidth="350px"
        buttonFlexShrink="0"
        buttonFlex="unset"
        onThemeDarkComponentButtomBClick={onThemeDarkComponentButtomBClick}
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

export default DarkTransferToBankSelect;
