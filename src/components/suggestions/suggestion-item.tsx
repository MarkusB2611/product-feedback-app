import { FILTER_OPTIONS } from "~/pages";
import Image from "next/image";
import Pill from "../ui/pill";
import arrowUp from "~/assets/shared/icon-arrow-up.svg";
import commentsIcon from "~/assets/shared/icon-comments.svg";

const SuggestionItem = ({ suggestion }) => {
  let numberOfComments = 0;
  if (suggestion.comments) {
    numberOfComments += suggestion.comments.length;
    suggestion.comments.forEach((comment) => {
      if (comment.replies) {
        numberOfComments += comment.replies.length;
      }
    });
  }

  return (
    <div
      className="#3A4374 flex items-center justify-between rounded-[10px] bg-white px-8 py-7 hover:cursor-pointer hover:text-red-400"
      onClick={() => alert("a")}
    >
      <div className="flex gap-[40px]">
        <div
          className="z-20 flex h-[53px] w-[40px] flex-col items-center justify-center gap-2 rounded-[10px] bg-[#F2F4FE] pt-[14px] pb-2 text-body3 font-bold text-[#3A4374]"
          onClick={(e) => {
            e.stopPropagation();
            alert("b");
          }}
        >
          <Image src={arrowUp} alt="" />
          <span>{suggestion.upvotes}</span>
        </div>
        <div>
          <h2 className="mb-1 text-h3">{suggestion.title}</h2>
          <p className="mb-3 text-body1 text-[#647196]">
            {suggestion.description}
          </p>
          <Pill
            option={FILTER_OPTIONS.find((o) => o.value === suggestion.category)}
          />
        </div>
      </div>
      <div className="flex items-center gap-2 text-body1 font-bold text-[#3A4374]">
        <Image
          src={commentsIcon}
          width={18}
          height={16}
          alt=""
          className="h-4 w-[18px]"
        />
        <span className={`${numberOfComments === 0 ? "opacity-50" : ""}`}>
          {numberOfComments}
        </span>
      </div>
    </div>
  );
};

export default SuggestionItem;
