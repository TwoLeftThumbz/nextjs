import ThemeDarkComponentNavbar from "../components/theme-dark-component-navbar";
import StateDefaultSearchThemeDa from "../components/state-default-search-theme-da";
import TypeContactFavoriteListTh from "../components/type-contact-favorite-list-th";
import TypeDefaultComponentTopBa from "../components/type-default-component-top-ba";

const DarkMoreCustomers = () => {
  return (
    <div className="relative bg-dark-dark-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[932px] overflow-hidden">
      <div className="absolute w-full top-[44px] right-[0px] left-[0px] h-[888px] flex flex-col items-center justify-start pt-4 px-6 pb-12 box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <ThemeDarkComponentNavbar
            iconlyLightOutlineArrowLe="/iconlylightoutlinearrow--left.svg"
            titleSection="Customers"
            iconlyCurvedNotification="/iconlylightoutlinesetting.svg"
            iconlyCurvedNotification1="/iconlycurvednotification.svg"
            showAutoLayoutHorizontal={false}
            showIconlyCurvedNotification
            iconlyCurvedNotification2={false}
          />
          <StateDefaultSearchThemeDa
            searchPlaceholder="Search name, username, or email"
            searchIconUrl="/iconlyboldvoice1.svg"
          />
          <div className="self-stretch flex flex-col items-center justify-center gap-[24px]">
            <TypeContactFavoriteListTh
              imageDimensions="/typedefault-componentavatar2.svg"
              personName="Chieko Chute"
              contactInfo="chieko_chute@gmail.com"
              productImageDimensions="/iconlylightoutlinestar.svg"
              showIconlyLightOutlineStar={false}
              iconlyLightOutlineStarOverflow="hidden"
              iconlyLightOutlineStarFlexShrink="0"
            />
            <TypeContactFavoriteListTh
              imageDimensions="/typedefault-componentavatar3.svg"
              personName="Marci Senter"
              contactInfo="marci_senter@gmail.com"
              productImageDimensions="/iconlyboldstar2.svg"
              showIconlyLightOutlineStar={false}
              iconlyLightOutlineStarOverflow="unset"
              iconlyLightOutlineStarFlexShrink="unset"
            />
            <TypeContactFavoriteListTh
              imageDimensions="/typedefault-componentavatar4.svg"
              personName="Sanjuanita Ordonez"
              contactInfo="sanjuanita_ordonez@gmail.com"
              productImageDimensions="/iconlylightoutlinestar.svg"
              showIconlyLightOutlineStar={false}
              iconlyLightOutlineStarOverflow="hidden"
              iconlyLightOutlineStarFlexShrink="0"
            />
            <TypeContactFavoriteListTh
              imageDimensions="/typedefault-componentavatar5.svg"
              personName="Rayford Chenail"
              contactInfo="rayford_chenail@gmail.com"
              productImageDimensions="/iconlyboldstar2.svg"
              showIconlyLightOutlineStar={false}
              iconlyLightOutlineStarOverflow="unset"
              iconlyLightOutlineStarFlexShrink="unset"
            />
            <TypeContactFavoriteListTh
              imageDimensions="/typedefault-componentavatar6.svg"
              personName="Darron Kulikowski"
              contactInfo="darron_kulikowski@gmail.com"
              productImageDimensions="/iconlylightoutlinestar.svg"
              showIconlyLightOutlineStar={false}
              iconlyLightOutlineStarOverflow="hidden"
              iconlyLightOutlineStarFlexShrink="0"
            />
            <TypeContactFavoriteListTh
              imageDimensions="/typedefault-componentavatar7.svg"
              personName="Brittni Lando"
              contactInfo="brittni_lando@gmail.com"
              productImageDimensions="/iconlyboldstar2.svg"
              showIconlyLightOutlineStar={false}
              iconlyLightOutlineStarOverflow="unset"
              iconlyLightOutlineStarFlexShrink="unset"
            />
            <TypeContactFavoriteListTh
              imageDimensions="/typedefault-componentavatar8.svg"
              personName="Daryl Nehls"
              contactInfo="daryl_nehls@gmail.com"
              productImageDimensions="/iconlylightoutlinestar.svg"
              showIconlyLightOutlineStar={false}
              iconlyLightOutlineStarOverflow="hidden"
              iconlyLightOutlineStarFlexShrink="0"
            />
            <TypeContactFavoriteListTh
              imageDimensions="/typedefault-componentavatar9.svg"
              personName="Janetta Rotolo"
              contactInfo="janetta_rotolo@gmail.com"
              productImageDimensions="/iconlylightoutlinestar.svg"
              showIconlyLightOutlineStar={false}
              iconlyLightOutlineStarOverflow="hidden"
              iconlyLightOutlineStarFlexShrink="0"
            />
            <TypeContactFavoriteListTh
              imageDimensions="/typedefault-componentavatar2.svg"
              personName="Lauralee Quintero"
              contactInfo="lauralee_quintero@gmail.com"
              productImageDimensions="/iconlylightoutlinestar.svg"
              showIconlyLightOutlineStar={false}
              iconlyLightOutlineStarOverflow="hidden"
              iconlyLightOutlineStarFlexShrink="0"
            />
          </div>
        </div>
      </div>
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

export default DarkMoreCustomers;
