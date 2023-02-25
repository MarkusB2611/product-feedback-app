import Pill from "../ui/pill";

const Filter = ({ options, filter, onFilterChange }: FilterProps) => {
  return (
    <div className="flex w-[255px] flex-wrap gap-x-2 gap-y-[14px] rounded-[10px] bg-white p-6">
      {options.map((option) => {
        return (
          <Pill
            key={option.value}
            option={option}
            filter={filter}
            onClick={onFilterChange}
          />
        );
      })}
    </div>
  );
};

type FilterProps = {
  options: { value: string; label: string }[];
  filter: string;
  onFilterChange: () => void;
};

export default Filter;
