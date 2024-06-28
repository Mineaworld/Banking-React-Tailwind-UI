const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph:
    "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  //Effects
  hoverEffect: "transition-transform duration-300 transform hover:scale-110",
  buttonEffect:
    "py-4 px-6 bg-gradient-to-r from-blue-500 to-teal-400 font-poppins font-medium text-[18px] text-white outline-none rounded-[20px] mt-10 shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl",
  buttonContainer:
    "w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg",
  buttonInner:
    "flex-col bg-primary w-[100%] h-[100%] rounded-full flex justify-center items-center",
  textGradient: "text-gradient",
  arrowUp:
    "w-[23px] h-[23px] object-contain transition-transform duration-300 ease-in-out group-hover:rotate-45",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
