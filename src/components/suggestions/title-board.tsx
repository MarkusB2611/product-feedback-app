import Image from "next/image";
import hamburgerIcon from "~/assets/shared/mobile/icon-hamburger.svg";

const TitleBoard = () => {
  return (
    <div className="flex h-[137px] justify-between rounded-[10px] bg-gradient-mobile pl-6 pt-[62px] md:bg-gradient-tablet lg:bg-gradient-desktop">
      <div>
        <h1 className="text-h2 text-white">Frontend Mentor</h1>
        <div className="text-body2 text-white opacity-75">Feedback Board</div>
      </div>
      <Image className="md:hidden" src={hamburgerIcon} alt="" />
    </div>
  );
};

export default TitleBoard;
