import ThemeDarkComponentNavbar from "../components/theme-dark-component-navbar";
import StatusDefaultTypeDefault from "../components/status-default-type-default";
import CurrencyForm from "../components/currency-form";
import ThemeDarkDivider from "../components/theme-dark-divider";
import SizeLargeTypeBorderIcon from "../components/size-large-type-border-icon";
import FormContainer from "../components/form-container";
import TypeButtonType2Secondary from "../components/type-button-type2-secondary";
import ThemeDarkComponentButtomB from "../components/theme-dark-component-buttom-b";
import TypeDefaultComponentTopBa from "../components/type-default-component-top-ba";

const DarkCreateInvoiceBlankForm = () => {
  return (
    <div className="relative bg-dark-dark-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[1180px] overflow-hidden text-left text-xl text-others-white font-body-medium-medium">
      <div className="absolute w-full top-[44px] right-[0px] left-[0px] flex flex-col items-center justify-start pt-4 px-6 pb-12 box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <ThemeDarkComponentNavbar
            iconlyLightOutlineArrowLe="/icontimes-componentadditional-icons.svg"
            titleSection="Invoice #0260"
            iconlyCurvedNotification="/iconlylightoutlinesetting.svg"
            iconlyCurvedNotification1="/iconlycurvededit1.svg"
            showAutoLayoutHorizontal
            showIconlyCurvedNotification={false}
            iconlyCurvedNotification2
          />
          <div className="self-stretch flex flex-col items-center justify-center gap-[24px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <b className="self-stretch relative leading-[140%]">Bill to</b>
              <StatusDefaultTypeDefault
                itemDescription="Enter email address, name, or username"
                statusDefaultTypeDefaultBorder="unset"
                statusDefaultTypeDefaultFontWeight="unset"
                statusDefaultTypeDefaultFontFamily="unset"
                statusDefaultTypeDefaultFontSize="unset"
                statusDefaultTypeDefaultHeight="56px"
                statusDefaultTypeDefaultAlignItems="center"
                labelColor="#757575"
                labelFontWeight="unset"
              />
            </div>
            <CurrencyForm showIconlyBoldProfile={false} />
            <ThemeDarkDivider
              imageId="/themedark-divider.svg"
              themeDarkDividerIconPosition="relative"
              themeDarkDividerIconMaxWidth="unset"
              themeDarkDividerIconOverflow="unset"
              themeDarkDividerIconFlexShrink="unset"
              themeDarkDividerIconAlignSelf="unset"
              themeDarkDividerIconWidth="382px"
            />
            <SizeLargeTypeBorderIcon
              iconlyBoldStar="/iconplus-componentadditional-icons.svg"
              chips="Add Item or Services"
              sizeLargeTypeBorderIconBoxSizing="border-box"
              sizeLargeTypeBorderIconCursor="unset"
              sizeLargeTypeBorderIconBackgroundColor="unset"
              sizeLargeTypeBorderIconAlignSelf="stretch"
              iconlyBoldStarOverflow="hidden"
              iconlyBoldStarFlexShrink="0"
              chipsDisplay="inline-block"
            />
            <ThemeDarkDivider
              imageId="/themedark-divider.svg"
              themeDarkDividerIconPosition="relative"
              themeDarkDividerIconMaxWidth="unset"
              themeDarkDividerIconOverflow="unset"
              themeDarkDividerIconFlexShrink="unset"
              themeDarkDividerIconAlignSelf="unset"
              themeDarkDividerIconWidth="382px"
            />
            <FormContainer />
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <b className="self-stretch relative leading-[140%]">
                Note to Customer
              </b>
              <StatusDefaultTypeDefault
                itemDescription="You can include a note to your customer here"
                statusDefaultTypeDefaultBorder="unset"
                statusDefaultTypeDefaultFontWeight="unset"
                statusDefaultTypeDefaultFontFamily="unset"
                statusDefaultTypeDefaultFontSize="unset"
                statusDefaultTypeDefaultHeight="116px"
                statusDefaultTypeDefaultAlignItems="flex-start"
                labelColor="#757575"
                labelFontWeight="unset"
              />
            </div>
            <ThemeDarkDivider
              imageId="/themedark-divider.svg"
              themeDarkDividerIconPosition="relative"
              themeDarkDividerIconMaxWidth="unset"
              themeDarkDividerIconOverflow="unset"
              themeDarkDividerIconFlexShrink="unset"
              themeDarkDividerIconAlignSelf="unset"
              themeDarkDividerIconWidth="382px"
            />
            <TypeButtonType2Secondary
              buttonText="More Options"
              typeButtonType2SecondaryBackgroundColor="#3d3d44"
              typeButtonType2SecondaryAlignSelf="stretch"
              typeButtonType2SecondaryWidth="unset"
              typeButtonType2SecondaryHeight="unset"
              typeButtonType2SecondaryPadding="18px 16px"
              typeButtonType2SecondaryFlex="unset"
              typeButtonType2SecondaryBoxShadow="unset"
              buttonFlex="1"
              buttonDisplay="inline-block"
              buttonColor="#fff"
              buttonAlignItems="unset"
              buttonJustifyContent="unset"
              buttonWidth="unset"
              buttonFlexShrink="unset"
            />
          </div>
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
        themeDarkComponentButtomBCursor="unset"
        themeDarkComponentButtomBMarginTop="unset"
        typeButtonType2PrimaryTBoxShadow="unset"
        buttonDisplay="inline-block"
        buttonColor="#fff"
        buttonAlignItems="unset"
        buttonJustifyContent="unset"
        buttonWidth="unset"
        buttonFlexShrink="unset"
        buttonFlex="1"
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

export default DarkCreateInvoiceBlankForm;
