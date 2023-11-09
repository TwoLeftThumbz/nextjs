import { useMemo } from "react";

const TypeDefaultComponentAvatarIcon = ({
  imageDimensions,
  typeDefaultComponentAvataWidth,
  typeDefaultComponentAvataHeight,
  typeDefaultComponentAvataPosition,
}) => {
  const typeDefaultComponentAvatarIconStyle = useMemo(() => {
    return {
      width: typeDefaultComponentAvataWidth,
      height: typeDefaultComponentAvataHeight,
      position: typeDefaultComponentAvataPosition,
    };
  }, [
    typeDefaultComponentAvataWidth,
    typeDefaultComponentAvataHeight,
    typeDefaultComponentAvataPosition,
  ]);

  return (
    <img
      className="w-12 h-12"
      alt=""
      src={imageDimensions}
      style={typeDefaultComponentAvatarIconStyle}
    />
  );
};

export default TypeDefaultComponentAvatarIcon;
