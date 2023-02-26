import { FILTER_OPTIONS } from "~/pages";
import Image from "next/image";
import Pill from "../ui/pill";
import commentsIcon from "~/assets/shared/icon-comments.svg";
import SuggestionUpvotes from "./suggestion-upvotes";
import type { Feedback } from "@prisma/client";
import Link from "next/link";

const SuggestionItem = ({ suggestion }: SuggestionItemProps) => {
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
    <Link
      className="#3A4374 flex items-center justify-between rounded-[10px] bg-white px-8 py-7 hover:cursor-pointer hover:text-[#4661E6]"
      href={`/${suggestion.id}`}
    >
      <div className="z-10 flex gap-[40px]">
        <SuggestionUpvotes upvotes={suggestion.upvotes} isUpvoted={false} />
        <div>
          <h2 className="mb-1 text-h3">{suggestion.title}</h2>
          <p className="mb-3 text-body1 text-[#647196]">
            {suggestion.description}
          </p>
          <Pill
            option={
              FILTER_OPTIONS.find((o) => o.value === suggestion.category) || {
                value: "",
                label: "All",
              }
            }
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
    </Link>
  );
};

type SuggestionItemProps = {
  suggestion: Feedback;
};

export default SuggestionItem;
