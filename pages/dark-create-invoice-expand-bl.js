import ThemeDarkComponentNavbar from "../components/theme-dark-component-navbar";
import StatusDefaultTypeDefault from "../components/status-default-type-default";
import CurrencyForm from "../components/currency-form";
import ThemeDarkDivider from "../components/theme-dark-divider";
import SizeLargeTypeBorderIcon from "../components/size-large-type-border-icon";
import FormContainer from "../components/form-container";
import StateEnabledThemeDefault from "../components/state-enabled-theme-default";
import ThemeDarkComponentButtomB from "../components/theme-dark-component-buttom-b";
import TypeDefaultComponentTopBa from "../components/type-default-component-top-ba";

const DarkCreateInvoiceExpandBl = () => {
  return (
    <div className="relative bg-dark-dark-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[1820px] overflow-hidden text-left text-xl text-others-white font-body-medium-medium">
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
            <div className="self-stretch flex flex-row items-center justify-start gap-[20px]">
              <b className="flex-1 relative leading-[140%]">
                Allow Partial Payment
              </b>
              <StateEnabledThemeDefault
                stateEnabledThemeDefaultBackgroundColor="#3d3d44"
                stateEnabledThemeDefaultPosition="relative"
                stateEnabledThemeDefaultFlexShrink="0"
                frameLeft="0px"
                frameBorder="2px solid #3d3d44"
              />
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[20px]">
              <b className="flex-1 relative leading-[140%]">Allow Tip</b>
              <StateEnabledThemeDefault
                stateEnabledThemeDefaultBackgroundColor="#3d3d44"
                stateEnabledThemeDefaultPosition="relative"
                stateEnabledThemeDefaultFlexShrink="0"
                frameLeft="0px"
                frameBorder="2px solid #3d3d44"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <b className="self-stretch relative leading-[140%]">{`Terms & Conditions`}</b>
              <StatusDefaultTypeDefault
                itemDescription="You can include details about your return and cancellation policy here."
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
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <b className="self-stretch relative leading-[140%]">Reference</b>
              <StatusDefaultTypeDefault
                itemDescription="You can include a reference, like a PO number here."
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
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <b className="self-stretch relative leading-[140%]">Memo</b>
              <StatusDefaultTypeDefault
                itemDescription="You can include a memo to yourself here. Your customer won’t see this."
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
            <SizeLargeTypeBorderIcon
              iconlyBoldStar="/iconplus-componentadditional-icons.svg"
              chips="Attach Photo"
              sizeLargeTypeBorderIconBoxSizing="border-box"
              sizeLargeTypeBorderIconCursor="unset"
              sizeLargeTypeBorderIconBackgroundColor="unset"
              sizeLargeTypeBorderIconAlignSelf="stretch"
              iconlyBoldStarOverflow="hidden"
              iconlyBoldStarFlexShrink="0"
              chipsDisplay="inline-block"
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
        typeButtonType2PrimaryTBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
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

export default DarkCreateInvoiceExpandBl;
