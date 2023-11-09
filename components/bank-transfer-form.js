import ThemeDarkDivider from "./theme-dark-divider";
import ListBanksCardsThemeDark from "./list-banks-cards-theme-dark";
import TypeButtonType2Secondary from "./type-button-type2-secondary";

const BankTransferForm = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-center gap-[24px]">
      <ThemeDarkDivider
        imageId="/themedark-divider.svg"
        themeDarkDividerIconPosition="relative"
        themeDarkDividerIconMaxWidth="100%"
        themeDarkDividerIconOverflow="hidden"
        themeDarkDividerIconFlexShrink="0"
        themeDarkDividerIconAlignSelf="stretch"
        themeDarkDividerIconWidth="unset"
      />
      <ListBanksCardsThemeDark
        typeLogoDefaultComponentL="/typelogo-default-componentlogo1.svg"
        frame="/frame.svg"
        frame1="/frame3.svg"
        frame2="/frame4.svg"
        bankName="Bank of America"
        bankNumber="Checking ●●●● 4679"
        iconcheckComponentAdditio="/iconcheck-componentadditional-icons.svg"
        showFrameIcon
        frameIcon={false}
        frameIcon1={false}
        showIconcheckComponentAdditio
      />
      <ThemeDarkDivider
        imageId="/themedark-divider.svg"
        themeDarkDividerIconPosition="relative"
        themeDarkDividerIconMaxWidth="100%"
        themeDarkDividerIconOverflow="hidden"
        themeDarkDividerIconFlexShrink="0"
        themeDarkDividerIconAlignSelf="stretch"
        themeDarkDividerIconWidth="unset"
      />
      <ListBanksCardsThemeDark
        typeLogoDefaultComponentL="/typelogo-default-componentlogo.svg"
        frame="/frame.svg"
        frame1="/frame1.svg"
        frame2="/frame2.svg"
        bankName="MasterCard"
        bankNumber="Checking ●●●● 3726"
        iconcheckComponentAdditio="/iconcheck-componentadditional-icons.svg"
        showFrameIcon={false}
        frameIcon
        frameIcon1={false}
        showIconcheckComponentAdditio={false}
      />
      <ThemeDarkDivider
        imageId="/themedark-divider.svg"
        themeDarkDividerIconPosition="relative"
        themeDarkDividerIconMaxWidth="100%"
        themeDarkDividerIconOverflow="hidden"
        themeDarkDividerIconFlexShrink="0"
        themeDarkDividerIconAlignSelf="stretch"
        themeDarkDividerIconWidth="unset"
      />
      <ListBanksCardsThemeDark
        typeLogoDefaultComponentL="/typelogo-default-componentlogo.svg"
        frame="/frame.svg"
        frame1="/frame1.svg"
        frame2="/frame2.svg"
        bankName="Visa"
        bankNumber="Checking ●●●● 9468"
        iconcheckComponentAdditio="/iconcheck-componentadditional-icons.svg"
        showFrameIcon={false}
        frameIcon={false}
        frameIcon1
        showIconcheckComponentAdditio={false}
      />
      <ThemeDarkDivider
        imageId="/themedark-divider.svg"
        themeDarkDividerIconPosition="relative"
        themeDarkDividerIconMaxWidth="100%"
        themeDarkDividerIconOverflow="hidden"
        themeDarkDividerIconFlexShrink="0"
        themeDarkDividerIconAlignSelf="stretch"
        themeDarkDividerIconWidth="unset"
      />
      <ListBanksCardsThemeDark
        typeLogoDefaultComponentL="/typelogo-default-componentlogo.svg"
        frame="/frame.svg"
        frame1="/frame1.svg"
        frame2="/frame2.svg"
        bankName="MasterCard"
        bankNumber="Checking ●●●● 5582"
        iconcheckComponentAdditio="/iconcheck-componentadditional-icons.svg"
        showFrameIcon={false}
        frameIcon
        frameIcon1={false}
        showIconcheckComponentAdditio={false}
      />
      <ThemeDarkDivider
        imageId="/themedark-divider.svg"
        themeDarkDividerIconPosition="relative"
        themeDarkDividerIconMaxWidth="100%"
        themeDarkDividerIconOverflow="hidden"
        themeDarkDividerIconFlexShrink="0"
        themeDarkDividerIconAlignSelf="stretch"
        themeDarkDividerIconWidth="unset"
      />
      <ListBanksCardsThemeDark
        typeLogoDefaultComponentL="/typelogo-default-componentlogo.svg"
        frame="/frame.svg"
        frame1="/frame1.svg"
        frame2="/frame2.svg"
        bankName="JPMorgan Chase Bank"
        bankNumber="Checking ●●●● 3657"
        iconcheckComponentAdditio="/iconcheck-componentadditional-icons.svg"
        showFrameIcon
        frameIcon={false}
        frameIcon1={false}
        showIconcheckComponentAdditio={false}
      />
      <ThemeDarkDivider
        imageId="/themedark-divider.svg"
        themeDarkDividerIconPosition="relative"
        themeDarkDividerIconMaxWidth="100%"
        themeDarkDividerIconOverflow="hidden"
        themeDarkDividerIconFlexShrink="0"
        themeDarkDividerIconAlignSelf="stretch"
        themeDarkDividerIconWidth="unset"
      />
      <TypeButtonType2Secondary
        buttonText="Link a New Card"
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
  );
};

export default BankTransferForm;
