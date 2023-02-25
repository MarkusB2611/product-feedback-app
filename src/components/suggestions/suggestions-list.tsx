import SuggestionItem from "./suggestion-item";

const SuggestionsList = ({ suggestions, filter }) => {
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

export default SuggestionsList;
