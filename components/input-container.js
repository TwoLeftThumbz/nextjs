import StatusDefaultTypeDefault from "./status-default-type-default";
import StatusDefaultTypePhoneSt from "./status-default-type-phone-st";
import StatusDefaultTypeNormalS from "./status-default-type-normal-s";
import StatusDefaultTypePassword from "./status-default-type-password";
import StatusDefaultTypeUsername from "./status-default-type-username";
import styles from "./input-container.module.css";

const InputContainer = ({
  placeholderText,
  showLabel,
  dimensionCode,
  dimensionCodeImageUrl,
  phoneNumber,
}) => {
  return (
    <div className={styles.input}>
      <StatusDefaultTypeDefault
        placeholderText="8"
        showLabel
        propTop="997px"
        propWidth="unset"
        propHeight="unset"
        propJustifyContent="center"
        propPadding="var(--padding-base) var(--padding-13xl)"
        propOverflow="hidden"
        propLeft="888px"
        propBorder="1px solid var(--dark-dark-3)"
        propBackgroundColor="#2c2c2c"
        propBoxShadow="1px 1px 5px 1px rgba(0, 0, 0, 0.15) inset"
        propFlex="unset"
        propFontSize="24px"
        propLetterSpacing="unset"
        propColor="rgba(255, 255, 255, 0.7)"
        propTextAlign="center"
        propFontWeight="bold"
      />
      <StatusDefaultTypeDefault
        placeholderText="8"
        showLabel
        propTop="997px"
        propWidth="78px"
        propHeight="66px"
        propJustifyContent="flex-start"
        propPadding="20px"
        propOverflow="hidden"
        propLeft="452px"
        propBorder="1px solid var(--greyscale-600)"
        propBackgroundColor="#2c2c2c"
        propBoxShadow="1px 1px 5px 1px rgba(0, 0, 0, 0.15) inset"
        propFlex="unset"
        propFontSize="24px"
        propLetterSpacing="unset"
        propColor="#f5f5f5"
        propTextAlign="center"
        propFontWeight="bold"
      />
      <StatusDefaultTypeDefault
        placeholderText="8"
        showLabel={false}
        propTop="997px"
        propWidth="unset"
        propHeight="unset"
        propJustifyContent="center"
        propPadding="var(--padding-base) var(--padding-13xl)"
        propOverflow="hidden"
        propLeft="16px"
        propBorder="1px solid var(--dark-dark-3)"
        propBackgroundColor="#2c2c2c"
        propBoxShadow="1px 1px 5px 1px rgba(0, 0, 0, 0.15) inset"
        propFlex="unset"
        propFontSize="24px"
        propLetterSpacing="unset"
        propColor="#212121"
        propTextAlign="center"
        propFontWeight="bold"
      />
      <StatusDefaultTypePhoneSt
        dimensionCode="/flag.svg"
        dimensionCodeImageUrl="/iconlylightarrow--down-22.svg"
        phoneNumber="+1 111 467 378 399"
        propLeft="888px"
        propBorder="unset"
        propTop="925px"
        propBackgroundColor="#2c2c2c"
        propBoxShadow="1px 1px 5px 1px rgba(0, 0, 0, 0.15) inset"
        propColor="rgba(255, 255, 255, 0.7)"
        propFontWeight="600"
      />
      <StatusDefaultTypePhoneSt
        dimensionCode="/flag1.svg"
        dimensionCodeImageUrl="/iconlylightarrow--down-23.svg"
        phoneNumber="+1 111 467 378 399"
        propLeft="452px"
        propBorder="1px solid var(--greyscale-600)"
        propTop="925px"
        propBackgroundColor="#2c2c2c"
        propBoxShadow="1px 1px 5px 1px rgba(0, 0, 0, 0.15) inset"
        propColor="#f5f5f5"
        propFontWeight="600"
      />
      <StatusDefaultTypePhoneSt
        dimensionCode="/flag1.svg"
        dimensionCodeImageUrl="/iconlylightarrow--down-24.svg"
        phoneNumber="+1 000 000 000"
        propLeft="16px"
        propBorder="unset"
        propTop="925px"
        propBackgroundColor="#2c2c2c"
        propBoxShadow="1px 1px 5px 1px rgba(0, 0, 0, 0.15) inset"
        propColor="1px solid #757575"
        propFontWeight="unset"
      />
      <StatusDefaultTypeNormalS
        dimensionCode="/additional-icons.svg"
        dimensionCodeImageUrl="/iconlyboldprofile1.svg"
        dimensionCodeText="/additional-icons1.svg"
        dimensionCodeImageText="/iconlyboldarrow--down-22.svg"
        propLeft="888px"
        propBorder="unset"
        propTop="853px"
        propBackgroundColor="#2c2c2c"
        propBoxShadow="1px 1px 5px 1px rgba(0, 0, 0, 0.15) inset"
        propColor="rgba(255, 255, 255, 0.7)"
        propFontWeight="600"
        propColor1="#fff"
      />
      <StatusDefaultTypeNormalS
        dimensionCode="/additional-icons2.svg"
        dimensionCodeImageUrl="/iconlyboldprofile2.svg"
        dimensionCodeText="/additional-icons3.svg"
        dimensionCodeImageText="/iconlyboldarrow--down-23.svg"
        propLeft="452px"
        propBorder="1px solid var(--greyscale-600)"
        propTop="853px"
        propBackgroundColor="#2c2c2c"
        propBoxShadow="1px 1px 5px 1px rgba(0, 0, 0, 0.15) inset"
        propColor="#f5f5f5"
        propFontWeight="600"
        propColor1="#1c56c6"
      />
      <StatusDefaultTypeNormalS
        dimensionCode="/additional-icons4.svg"
        dimensionCodeImageUrl="/iconlyboldprofile3.svg"
        dimensionCodeText="/additional-icons5.svg"
        dimensionCodeImageText="/iconlyboldarrow--down-24.svg"
        propLeft="16px"
        propBorder="unset"
        propTop="853px"
        propBackgroundColor="#2c2c2c"
        propBoxShadow="1px 1px 5px 1px rgba(0, 0, 0, 0.15) inset"
        propColor="1px solid #757575"
        propFontWeight="unset"
        propColor1="rgba(158, 158, 158, 0.6)"
      />
      <StatusDefaultTypePassword
        passwordHint="/iconlyboldlock1.svg"
        passwordMaskedValue="●●●●●●●●●●●●"
        customIconId="/iconlyboldhide1.svg"
        propLeft="888px"
        propBorder="unset"
        propTop="781px"
        propBackgroundColor="#2c2c2c"
        propBoxShadow="1px 1px 5px 1px rgba(0, 0, 0, 0.15) inset"
        propColor="rgba(255, 255, 255, 0.7)"
        propFontWeight="600"
      />
      <StatusDefaultTypePassword
        passwordHint="/iconlyboldlock2.svg"
        passwordMaskedValue="●●●●●●●●●●●●"
        customIconId="/iconlyboldhide2.svg"
        propLeft="452px"
        propBorder="1px solid var(--greyscale-600)"
        propTop="781px"
        propBackgroundColor="#2c2c2c"
        propBoxShadow="1px 1px 5px 1px rgba(0, 0, 0, 0.15) inset"
        propColor="#f5f5f5"
        propFontWeight="600"
      />
      <StatusDefaultTypePassword
        passwordHint="/iconlyboldlock3.svg"
        passwordMaskedValue="Password"
        customIconId="/iconlyboldhide3.svg"
        propLeft="16px"
        propBorder="unset"
        propTop="781px"
        propBackgroundColor="#2c2c2c"
        propBoxShadow="1px 1px 5px 1px rgba(0, 0, 0, 0.15) inset"
        propColor="1px solid #757575"
        propFontWeight="unset"
      />
      <StatusDefaultTypeUsername
        userAvatarUrl="/iconlyboldmessage1.svg"
        userIdentifier="john.doe@domain.com"
        propTop="709px"
        propLeft="888px"
        propBorder="unset"
        propBackgroundColor="#2c2c2c"
        propBoxShadow="1px 1px 5px 1px rgba(0, 0, 0, 0.15) inset"
        propColor="rgba(255, 255, 255, 0.7)"
        propFontWeight="600"
      />
      <StatusDefaultTypeUsername
        userAvatarUrl="/iconlyboldmessage2.svg"
        userIdentifier="john.doe@domain.com"
        propTop="709px"
        propLeft="452px"
        propBorder="unset"
        propBackgroundColor="#2c2c2c"
        propBoxShadow="1px 1px 5px 1px rgba(0, 0, 0, 0.15) inset"
        propColor="#f5f5f5"
        propFontWeight="600"
      />
      <StatusDefaultTypeUsername
        userAvatarUrl="/iconlyboldmessage3.svg"
        userIdentifier="Email"
        propTop="709px"
        propLeft="16px"
        propBorder="unset"
        propBackgroundColor="#2c2c2c"
        propBoxShadow="1px 1px 5px 1px rgba(0, 0, 0, 0.15) inset"
        propColor="1px solid #757575"
        propFontWeight="unset"
      />
      <StatusDefaultTypeUsername
        userAvatarUrl="/iconlyboldprofile1.svg"
        userIdentifier="John Doe"
        propTop="637px"
        propLeft="888px"
        propBorder="unset"
        propBackgroundColor="#2c2c2c"
        propBoxShadow="1px 1px 5px 1px rgba(0, 0, 0, 0.15) inset"
        propColor="rgba(255, 255, 255, 0.7)"
        propFontWeight="600"
      />
      <StatusDefaultTypeUsername
        userAvatarUrl="/iconlyboldprofile2.svg"
        userIdentifier="John Doe"
        propTop="637px"
        propLeft="452px"
        propBorder="unset"
        propBackgroundColor="#2c2c2c"
        propBoxShadow="1px 1px 5px 1px rgba(0, 0, 0, 0.15) inset"
        propColor="#f5f5f5"
        propFontWeight="600"
      />
      <StatusDefaultTypeUsername
        userAvatarUrl="/iconlyboldprofile3.svg"
        userIdentifier="Username"
        propTop="637px"
        propLeft="16px"
        propBorder="unset"
        propBackgroundColor="#2c2c2c"
        propBoxShadow="1px 1px 5px 1px rgba(0, 0, 0, 0.15) inset"
        propColor="1px solid #757575"
        propFontWeight="unset"
      />
      <StatusDefaultTypeDefault
        placeholderText="Lorem Ipsum"
        showLabel
        propTop="565px"
        propWidth="382px"
        propHeight="56px"
        propJustifyContent="flex-start"
        propPadding="20px"
        propOverflow="unset"
        propLeft="888px"
        propBorder="unset"
        propBackgroundColor="#2c2c2c"
        propBoxShadow="1px 1px 5px 1px rgba(0, 0, 0, 0.15) inset"
        propFlex="1"
        propFontSize="16px"
        propLetterSpacing="0.2px"
        propColor="rgba(255, 255, 255, 0.7)"
        propTextAlign="left"
        propFontWeight="600"
      />
      <StatusDefaultTypeDefault
        placeholderText="Lorem |"
        showLabel
        propTop="562px"
        propWidth="382px"
        propHeight="56px"
        propJustifyContent="flex-start"
        propPadding="20px"
        propOverflow="unset"
        propLeft="452px"
        propBorder="unset"
        propBackgroundColor="#2c2c2c"
        propBoxShadow="1px 1px 5px 1px rgba(0, 0, 0, 0.15) inset"
        propFlex="1"
        propFontSize="16px"
        propLetterSpacing="0.2px"
        propColor="#f5f5f5"
        propTextAlign="left"
        propFontWeight="600"
      />
      <StatusDefaultTypeDefault
        placeholderText="Placeholder"
        showLabel
        propTop="572px"
        propWidth="382px"
        propHeight="56px"
        propJustifyContent="flex-start"
        propPadding="20px"
        propOverflow="unset"
        propLeft="16px"
        propBorder="unset"
        propBackgroundColor="#2c2c2c"
        propBoxShadow="1px 1px 5px 1px rgba(0, 0, 0, 0.15) inset"
        propFlex="1"
        propFontSize="16px"
        propLetterSpacing="0.2px"
        propColor="1px solid #757575"
        propTextAlign="left"
        propFontWeight="unset"
      />
      <StatusDefaultTypeDefault
        placeholderText="8"
        showLabel
        propTop="448px"
        propWidth="unset"
        propHeight="unset"
        propJustifyContent="center"
        propPadding="var(--padding-base) var(--padding-13xl)"
        propOverflow="hidden"
        propLeft="888px"
        propBorder="1px solid var(--greyscale-300)"
        propBackgroundColor="#e9f0ff"
        propBoxShadow="0px 4px 10px rgba(0, 0, 0, 0.15)"
        propFlex="unset"
        propFontSize="24px"
        propLetterSpacing="unset"
        propColor="1px solid #757575"
        propTextAlign="center"
        propFontWeight="bold"
      />
      <StatusDefaultTypeDefault
        placeholderText="8"
        showLabel
        propTop="448px"
        propWidth="unset"
        propHeight="unset"
        propJustifyContent="center"
        propPadding="var(--padding-base) var(--padding-13xl)"
        propOverflow="hidden"
        propLeft="452px"
        propBorder="unset"
        propBackgroundColor="#e9f0ff"
        propBoxShadow="0px 4px 10px rgba(0, 0, 0, 0.15)"
        propFlex="unset"
        propFontSize="24px"
        propLetterSpacing="unset"
        propColor="#000"
        propTextAlign="center"
        propFontWeight="bold"
      />
      <StatusDefaultTypeDefault
        placeholderText="8"
        showLabel={false}
        propTop="448px"
        propWidth="unset"
        propHeight="unset"
        propJustifyContent="center"
        propPadding="var(--padding-base) var(--padding-13xl)"
        propOverflow="hidden"
        propLeft="16px"
        propBorder="1px solid var(--greyscale-300)"
        propBackgroundColor="#e9f0ff"
        propBoxShadow="0px 4px 10px rgba(0, 0, 0, 0.15)"
        propFlex="unset"
        propFontSize="24px"
        propLetterSpacing="unset"
        propColor="#212121"
        propTextAlign="center"
        propFontWeight="bold"
      />
      <StatusDefaultTypePhoneSt
        dimensionCode="/flag1.svg"
        dimensionCodeImageUrl="/iconlylightarrow--down-24.svg"
        phoneNumber="+1 111 467 378 399"
        propLeft="888px"
        propBorder="1px solid var(--greyscale-300)"
        propTop="376px"
        propBackgroundColor="#e9f0ff"
        propBoxShadow="0px 4px 10px rgba(0, 0, 0, 0.15)"
        propColor="1px solid #757575"
        propFontWeight="600"
      />
      <StatusDefaultTypePhoneSt
        dimensionCode="/flag1.svg"
        dimensionCodeImageUrl="/iconlylightarrow--down-25.svg"
        phoneNumber="+1 111 467 378 399"
        propLeft="452px"
        propBorder="unset"
        propTop="376px"
        propBackgroundColor="#e9f0ff"
        propBoxShadow="0px 4px 10px rgba(0, 0, 0, 0.15)"
        propColor="#000"
        propFontWeight="600"
      />
      <StatusDefaultTypePhoneSt
        dimensionCode="/flag1.svg"
        dimensionCodeImageUrl="/iconlylightarrow--down-25.svg"
        phoneNumber="+1 000 000 000"
      />
      <StatusDefaultTypeNormalS
        dimensionCode="/additional-icons6.svg"
        dimensionCodeImageUrl="/iconlyboldprofile3.svg"
        dimensionCodeText="/additional-icons7.svg"
        dimensionCodeImageText="/iconlyboldarrow--down-24.svg"
        propLeft="888px"
        propBorder="1px solid var(--greyscale-300)"
        propTop="304px"
        propBackgroundColor="#e9f0ff"
        propBoxShadow="0px 4px 10px rgba(0, 0, 0, 0.15)"
        propColor="1px solid #757575"
        propFontWeight="600"
        propColor1="#212121"
      />
      <StatusDefaultTypeNormalS
        dimensionCode="/additional-icons2.svg"
        dimensionCodeImageUrl="/iconlyboldprofile2.svg"
        dimensionCodeText="/additional-icons3.svg"
        dimensionCodeImageText="/iconlyboldarrow--down-23.svg"
        propLeft="452px"
        propBorder="unset"
        propTop="304px"
        propBackgroundColor="#e9f0ff"
        propBoxShadow="0px 4px 10px rgba(0, 0, 0, 0.15)"
        propColor="#000"
        propFontWeight="600"
        propColor1="#1c56c6"
      />
      <StatusDefaultTypeNormalS
        dimensionCode="/additional-icons4.svg"
        dimensionCodeImageUrl="/iconlyboldprofile4.svg"
        dimensionCodeText="/additional-icons5.svg"
        dimensionCodeImageText="/iconlyboldarrow--down-25.svg"
      />
      <StatusDefaultTypePassword
        passwordHint="/iconlyboldlock3.svg"
        passwordMaskedValue="●●●●●●●●●●●●"
        customIconId="/iconlyboldhide3.svg"
        propLeft="888px"
        propBorder="1px solid var(--greyscale-300)"
        propTop="232px"
        propBackgroundColor="#e9f0ff"
        propBoxShadow="0px 4px 10px rgba(0, 0, 0, 0.15)"
        propColor="1px solid #757575"
        propFontWeight="600"
      />
      <StatusDefaultTypePassword
        passwordHint="/iconlyboldlock2.svg"
        passwordMaskedValue="●●●●●●●●●●●●"
        customIconId="/iconlyboldhide2.svg"
        propLeft="452px"
        propBorder="unset"
        propTop="232px"
        propBackgroundColor="#e9f0ff"
        propBoxShadow="0px 4px 10px rgba(0, 0, 0, 0.15)"
        propColor="#000"
        propFontWeight="600"
      />
      <StatusDefaultTypePassword
        passwordHint="/iconlyboldlock4.svg"
        passwordMaskedValue="Password"
        customIconId="/iconlyboldhide4.svg"
      />
      <StatusDefaultTypeUsername
        userAvatarUrl="/iconlyboldmessage3.svg"
        userIdentifier="john.doe@domain.com"
        propTop="160px"
        propLeft="888px"
        propBorder="1px solid var(--greyscale-300)"
        propBackgroundColor="#e9f0ff"
        propBoxShadow="0px 4px 10px rgba(0, 0, 0, 0.15)"
        propColor="1px solid #757575"
        propFontWeight="600"
      />
      <StatusDefaultTypeUsername
        userAvatarUrl="/iconlyboldmessage2.svg"
        userIdentifier="john.doe@domain.com"
        propTop="160px"
        propLeft="452px"
        propBorder="unset"
        propBackgroundColor="#e9f0ff"
        propBoxShadow="0px 4px 10px rgba(0, 0, 0, 0.15)"
        propColor="#000"
        propFontWeight="600"
      />
      <StatusDefaultTypeUsername
        userAvatarUrl="/iconlyboldmessage4.svg"
        userIdentifier="Email"
        propTop="160px"
        propLeft="16px"
        propBorder="1px solid var(--greyscale-300)"
        propBackgroundColor="#e9f0ff"
        propBoxShadow="0px 4px 10px rgba(0, 0, 0, 0.15)"
        propColor="#616161"
        propFontWeight="unset"
      />
      <StatusDefaultTypeUsername
        userAvatarUrl="/iconlyboldprofile3.svg"
        userIdentifier="John Doe"
        propTop="88px"
        propLeft="888px"
        propBorder="1px solid var(--greyscale-300)"
        propBackgroundColor="#e9f0ff"
        propBoxShadow="0px 4px 10px rgba(0, 0, 0, 0.15)"
        propColor="1px solid #757575"
        propFontWeight="600"
      />
      <StatusDefaultTypeUsername
        userAvatarUrl="/iconlyboldprofile2.svg"
        userIdentifier="John Doe"
        propTop="88px"
        propLeft="452px"
        propBorder="unset"
        propBackgroundColor="#e9f0ff"
        propBoxShadow="0px 4px 10px rgba(0, 0, 0, 0.15)"
        propColor="#000"
        propFontWeight="600"
      />
      <StatusDefaultTypeUsername
        userAvatarUrl="/iconlyboldprofile4.svg"
        userIdentifier="Username"
      />
      <StatusDefaultTypeDefault
        placeholderText="Lorem Ipsum"
        showLabel
        propTop="16px"
        propWidth="382px"
        propHeight="56px"
        propJustifyContent="flex-start"
        propPadding="20px"
        propOverflow="unset"
        propLeft="888px"
        propBorder="1px solid var(--greyscale-300)"
        propBackgroundColor="#e9f0ff"
        propBoxShadow="0px 4px 10px rgba(0, 0, 0, 0.15)"
        propFlex="1"
        propFontSize="16px"
        propLetterSpacing="0.2px"
        propColor="1px solid #757575"
        propTextAlign="left"
        propFontWeight="600"
      />
      <StatusDefaultTypeDefault
        placeholderText="Lorem |"
        showLabel
        propTop="16px"
        propWidth="382px"
        propHeight="56px"
        propJustifyContent="flex-start"
        propPadding="20px"
        propOverflow="unset"
        propLeft="452px"
        propBorder="unset"
        propBackgroundColor="#e9f0ff"
        propBoxShadow="0px 4px 10px rgba(0, 0, 0, 0.15)"
        propFlex="1"
        propFontSize="16px"
        propLetterSpacing="0.2px"
        propColor="#000"
        propTextAlign="left"
        propFontWeight="600"
      />
      <StatusDefaultTypeDefault placeholderText="Placeholder" showLabel />
    </div>
  );
};

export default InputContainer;
