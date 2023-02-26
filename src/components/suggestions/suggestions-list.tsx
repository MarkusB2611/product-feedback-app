import type { Feedback } from "@prisma/client";
import SuggestionItem from "./suggestion-item";

const SuggestionsList = ({ suggestions, filter }: SuggestionsListProps) => {
  return (
    <div className="mb-[129px] flex flex-col gap-5">
      {suggestions
        .filter((s) => s.category.includes(filter))
        .map((suggestion) => {
          return <SuggestionItem key={suggestion.id} suggestion={suggestion} />;
        })}
    </div>
  );
};

type SuggestionsListProps = {
  suggestions: Feedback[];
  filter: string;
};

export default SuggestionsList;
