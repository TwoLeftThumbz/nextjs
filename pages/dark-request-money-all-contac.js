import { useCallback } from "react";
import { useRouter } from "next/router";
import ThemeDarkComponentNavbar from "../components/theme-dark-component-navbar";
import StateDefaultSearchThemeDa from "../components/state-default-search-theme-da";
import StateActiveStyleNoneThem from "../components/state-active-style-none-them";
import StateInactiveStyleNoneTh from "../components/state-inactive-style-none-th";
import TypeContactFavoriteListTh from "../components/type-contact-favorite-list-th";
import TypeDefaultComponentTopBa from "../components/type-default-component-top-ba";

const DarkRequestMoneyAllContac = () => {
  const router = useRouter();

  const onAutoLayoutVertical11Click = useCallback(() => {
    router.push("/dark-transfer-to-bank-select");
  }, [router]);

  return (
    <div className="relative bg-dark-dark-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[932px] overflow-hidden">
      <div
        className="absolute w-full top-[44px] right-[0px] left-[0px] h-[888px] flex flex-col items-center justify-start pt-4 px-6 pb-12 box-border cursor-pointer"
        onClick={onAutoLayoutVertical11Click}
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <ThemeDarkComponentNavbar
            iconlyLightOutlineArrowLe="/iconlylightoutlinearrow--left.svg"
            titleSection="Request Money from"
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
          <div className="self-stretch flex flex-row items-start justify-start">
            <StateActiveStyleNoneThem tabTitle="All Contact" />
            <StateInactiveStyleNoneTh tabLabel="Favorite" />
          </div>
          <div className="self-stretch flex flex-col items-center justify-center gap-[24px]">
            <TypeContactFavoriteListTh
              imageDimensions="/typedefault-componentavatar10.svg"
              personName="Abigail Vaniasiwa"
              contactInfo="abigail_vaniasiwa@gmail.com"
              productImageDimensions="/iconlylightoutlinestar.svg"
              showIconlyLightOutlineStar
              iconlyLightOutlineStarOverflow="hidden"
              iconlyLightOutlineStarFlexShrink="0"
            />
            <TypeContactFavoriteListTh
              imageDimensions="/typedefault-componentavatar11.svg"
              personName="Adaline Gutenberg"
              contactInfo="adaline_gutenberg@gmail.com"
              productImageDimensions="/iconlyboldstar3.svg"
              showIconlyLightOutlineStar
              iconlyLightOutlineStarOverflow="unset"
              iconlyLightOutlineStarFlexShrink="unset"
            />
            <TypeContactFavoriteListTh
              imageDimensions="/typedefault-componentavatar12.svg"
              personName="Alan Williamson"
              contactInfo="alan_williamson@gmail.com"
              productImageDimensions="/iconlylightoutlinestar.svg"
              showIconlyLightOutlineStar
              iconlyLightOutlineStarOverflow="hidden"
              iconlyLightOutlineStarFlexShrink="0"
            />
            <TypeContactFavoriteListTh
              imageDimensions="/typedefault-componentavatar13.svg"
              personName="Albert Alenxander"
              contactInfo="albert_alenxander@gmail.com"
              productImageDimensions="/iconlyboldstar3.svg"
              showIconlyLightOutlineStar
              iconlyLightOutlineStarOverflow="unset"
              iconlyLightOutlineStarFlexShrink="unset"
            />
            <TypeContactFavoriteListTh
              imageDimensions="/typedefault-componentavatar14.svg"
              personName="Alyssa Russel"
              contactInfo="alyssa_russel@gmail.com"
              productImageDimensions="/iconlylightoutlinestar.svg"
              showIconlyLightOutlineStar
              iconlyLightOutlineStarOverflow="hidden"
              iconlyLightOutlineStarFlexShrink="0"
            />
            <TypeContactFavoriteListTh
              imageDimensions="/typedefault-componentavatar15.svg"
              personName="Anthony Robertson"
              contactInfo="anthony_robertson@gmail.com"
              productImageDimensions="/iconlyboldstar3.svg"
              showIconlyLightOutlineStar
              iconlyLightOutlineStarOverflow="unset"
              iconlyLightOutlineStarFlexShrink="unset"
            />
            <TypeContactFavoriteListTh
              imageDimensions="/typedefault-componentavatar16.svg"
              personName="Arianna Cooper"
              contactInfo="arianna_cooper@gmail.com"
              productImageDimensions="/iconlylightoutlinestar.svg"
              showIconlyLightOutlineStar
              iconlyLightOutlineStarOverflow="hidden"
              iconlyLightOutlineStarFlexShrink="0"
            />
            <TypeContactFavoriteListTh
              imageDimensions="/typedefault-componentavatar17.svg"
              personName="Arthur Watson"
              contactInfo="arthur_watson@gmail.com"
              productImageDimensions="/iconlylightoutlinestar.svg"
              showIconlyLightOutlineStar
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

export default DarkRequestMoneyAllContac;
