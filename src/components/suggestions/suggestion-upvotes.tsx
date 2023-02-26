import Image from "next/image";
import arrowUp from "~/assets/shared/icon-arrow-up.svg";
import arrowUpActive from "~/assets/shared/icon-arrow-up-active.svg";

const SuggestionUpvotes = ({ upvotes, isUpvoted }: SuggestionUpvotesProps) => {
  return (
    <div
      className={`z-50 flex h-[53px] w-[40px] flex-col items-center justify-center gap-2 rounded-[10px]  pt-[14px] pb-2 text-body3 font-bold text-[#3A4374] ${
        isUpvoted
          ? "bg-[#4661E6] text-white"
          : "bg-[#F2F4FE] hover:bg-[#CFD7FF]"
      }`}
      onClick={(e) => {
        e.stopPropagation();
        alert("b");
      }}
    >
      {isUpvoted ? (
        <Image src={arrowUpActive} alt="" />
      ) : (
        <Image src={arrowUp} alt="" />
      )}
      <span>{upvotes}</span>
    </div>
  );
};

type SuggestionUpvotesProps = {
  upvotes: number;
  isUpvoted: boolean;
};

export default SuggestionUpvotes;
