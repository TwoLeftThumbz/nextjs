import { useCallback } from "react";
import TypeDefaultComponentTopBa from "../components/type-default-component-top-ba";
import ThemeDarkComponentNavbar from "../components/theme-dark-component-navbar";
import StatusDefaultTypeDefault from "../components/status-default-type-default";
import StatusDefaultTypeNormalS from "../components/status-default-type-normal-s";
import ThemeDarkDivider from "../components/theme-dark-divider";
import ListItemInvoicingThemeDar from "../components/list-item-invoicing-theme-dar";
import SizeLargeTypeBorderIcon from "../components/size-large-type-border-icon";
import StateEnabledThemeDefault from "../components/state-enabled-theme-default";
import ThemeDarkComponentButtomB from "../components/theme-dark-component-buttom-b";

const DarkCreateInvoiceExpandFi = () => {
  const onThemeDarkComponentButtomBClick = useCallback(() => {
    // Please sync "95_Dark_more full page" to the project
  }, []);

  return (
    <div className="relative bg-dark-dark-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full overflow-hidden flex flex-col items-center justify-start">
      <TypeDefaultComponentTopBa
        dimensionLabel="/group3.svg"
        dimensionValue="/group4.svg"
        dimensionText="/group5.svg"
        typeDefaultComponentTopBaWidth="430px"
        typeDefaultComponentTopBaPosition="relative"
        typeDefaultComponentTopBaTop="unset"
        typeDefaultComponentTopBaRight="unset"
        typeDefaultComponentTopBaLeft="unset"
        divColor="#fff"
      />
      <div className="w-[430px] h-[1956px] overflow-hidden shrink-0 flex flex-col items-center justify-start">
        <main
          className="w-[430px] flex flex-col items-center justify-start pt-4 px-6 pb-12 box-border"
          id="2"
          verticle="yes"
        >
          <section
            className="self-stretch flex flex-col items-start justify-start gap-[24px] text-left text-xl text-others-white font-body-medium-medium"
            id="1"
            vertcle="yes"
          >
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
                  statusDefaultTypeDefaultBorder="none"
                  statusDefaultTypeDefaultFontWeight="600"
                  statusDefaultTypeDefaultFontFamily="Urbanist"
                  statusDefaultTypeDefaultFontSize="16px"
                  statusDefaultTypeDefaultHeight="56px"
                  statusDefaultTypeDefaultAlignItems="center"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <b className="self-stretch relative leading-[140%]">
                  Select Currency
                </b>
                <StatusDefaultTypeNormalS
                  additionalIcons="/additional-icons2.svg"
                  iconlyBoldProfile="/iconlyboldprofile1.svg"
                  label="USD - US Dollar"
                  additionalIcons1="/additional-icons3.svg"
                  iconlyBoldArrowDown2="/iconlyboldarrow--down-21.svg"
                  showIconlyBoldProfile={false}
                  labelColor="rgba(255, 255, 255, 0.7)"
                  labelFontWeight="600"
                  labelColor1="#fff"
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
              <ListItemInvoicingThemeDar
                itemName="Mobile App UI Kit"
                prop="$40.00"
                prop1="1"
                prop2="$40.00"
              />
              <SizeLargeTypeBorderIcon
                iconlyBoldStar="/iconplus-componentadditional-icons.svg"
                chips="Add Item or Services"
                sizeLargeTypeBorderIconBoxSizing="border-box"
                sizeLargeTypeBorderIconCursor="pointer"
                sizeLargeTypeBorderIconBackgroundColor="transparent"
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
              <div className="self-stretch rounded-3xl bg-dark-dark-2 flex flex-col items-center justify-start p-6 gap-[24px] text-base text-greyscale-300 border-[1px] border-solid border-dark-dark-3">
                <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                  <div className="flex-1 relative tracking-[0.2px] leading-[140%] font-medium">
                    Subtotal
                  </div>
                  <b className="relative text-lg leading-[140%] text-others-white text-right">
                    $40.00
                  </b>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                  <div className="flex-1 relative tracking-[0.2px] leading-[140%] font-medium">
                    Discount
                  </div>
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/iconlycurvededit2.svg"
                  />
                  <b className="relative text-lg leading-[140%] text-others-white text-right">
                    $0.00
                  </b>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                  <div className="flex-1 relative tracking-[0.2px] leading-[140%] font-medium">{`Shipping & Handling`}</div>
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/iconlycurvededit2.svg"
                  />
                  <b className="relative text-lg leading-[140%] text-others-white text-right">
                    $0.00
                  </b>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                  <div className="flex-1 relative tracking-[0.2px] leading-[140%] font-medium">
                    Indonesia (11%)
                  </div>
                  <b className="relative text-lg leading-[140%] text-others-white text-right">
                    $4.40
                  </b>
                </div>
                <ThemeDarkDivider
                  imageId="/themedark-divider1.svg"
                  themeDarkDividerIconPosition="relative"
                  themeDarkDividerIconMaxWidth="100%"
                  themeDarkDividerIconOverflow="hidden"
                  themeDarkDividerIconFlexShrink="0"
                  themeDarkDividerIconAlignSelf="stretch"
                  themeDarkDividerIconWidth="unset"
                />
                <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                  <div className="flex-1 relative tracking-[0.2px] leading-[140%] font-medium">
                    Total
                  </div>
                  <b className="relative text-lg leading-[140%] text-others-white text-right">
                    $44.40
                  </b>
                </div>
              </div>
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
                  stateEnabledThemeDefaultBackgroundColor="#1d56ca"
                  stateEnabledThemeDefaultPosition="relative"
                  stateEnabledThemeDefaultFlexShrink="0"
                  frameLeft="20px"
                  frameBorder="2px solid #1c56c6"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <b className="self-stretch relative leading-[140%]">{`Terms & Conditions`}</b>
                <StatusDefaultTypeDefault
                  itemDescription="If the item is damaged, the seller will help solve the problem. If the problem cannot be resolved, a refund will be issued."
                  statusDefaultTypeDefaultBorder="unset"
                  statusDefaultTypeDefaultFontWeight="unset"
                  statusDefaultTypeDefaultFontFamily="unset"
                  statusDefaultTypeDefaultFontSize="unset"
                  statusDefaultTypeDefaultHeight="116px"
                  statusDefaultTypeDefaultAlignItems="flex-start"
                  labelColor="rgba(255, 255, 255, 0.7)"
                  labelFontWeight="600"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <b className="self-stretch relative leading-[140%]">
                  Reference
                </b>
                <StatusDefaultTypeDefault
                  itemDescription="Digital PO number: 83847839"
                  statusDefaultTypeDefaultBorder="unset"
                  statusDefaultTypeDefaultFontWeight="unset"
                  statusDefaultTypeDefaultFontFamily="unset"
                  statusDefaultTypeDefaultFontSize="unset"
                  statusDefaultTypeDefaultHeight="116px"
                  statusDefaultTypeDefaultAlignItems="flex-start"
                  labelColor="rgba(255, 255, 255, 0.7)"
                  labelFontWeight="600"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <b className="self-stretch relative leading-[140%]">
                  Note to Customer
                </b>
                <StatusDefaultTypeDefault
                  itemDescription="UI Design Kit mobile application support for iOS and Android."
                  statusDefaultTypeDefaultBorder="unset"
                  statusDefaultTypeDefaultFontWeight="unset"
                  statusDefaultTypeDefaultFontFamily="unset"
                  statusDefaultTypeDefaultFontSize="unset"
                  statusDefaultTypeDefaultHeight="116px"
                  statusDefaultTypeDefaultAlignItems="flex-start"
                  labelColor="rgba(255, 255, 255, 0.7)"
                  labelFontWeight="600"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <b className="self-stretch relative leading-[140%]">Memo</b>
                <StatusDefaultTypeDefault
                  itemDescription="Mobile App UI Kit transaction for 5th customer. Application design using Figma."
                  statusDefaultTypeDefaultBorder="unset"
                  statusDefaultTypeDefaultFontWeight="unset"
                  statusDefaultTypeDefaultFontFamily="unset"
                  statusDefaultTypeDefaultFontSize="unset"
                  statusDefaultTypeDefaultHeight="116px"
                  statusDefaultTypeDefaultAlignItems="flex-start"
                  labelColor="rgba(255, 255, 255, 0.7)"
                  labelFontWeight="600"
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
              <div className="self-stretch flex flex-row items-center justify-start gap-[12px] text-lg">
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/iconlyboldimage1.svg"
                />
                <b className="flex-1 relative leading-[140%]">
                  Attachment Design Preview.png
                </b>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/icontimes-componentadditional-icons1.svg"
                />
              </div>
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
          </section>
        </main>
        <ThemeDarkComponentButtomB
          buttonText="Continue"
          addPaymentButtonText="Continue"
          showTypeButtonType2Secondary={false}
          showAutoLayoutHorizontal={false}
          themeDarkComponentButtomBWidth="430px"
          themeDarkComponentButtomBPosition="unset"
          themeDarkComponentButtomBRight="unset"
          themeDarkComponentButtomBBottom="unset"
          themeDarkComponentButtomBLeft="unset"
          themeDarkComponentButtomBCursor="pointer"
          themeDarkComponentButtomBMarginTop="-15px"
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
      </div>
    </div>
  );
};

export default DarkCreateInvoiceExpandFi;
