const Pill = ({ option, filter, onClick }: PillProps) => {
  return (
    <button
      className={`rounded-[10px] px-4 pt-[5px] pb-[6px] text-body3  hover:bg-[#CFD7FF] hover:text-[#4661E6]  ${
        filter === option.value
          ? "bg-[#4661E6] text-white"
          : "bg-[#F2F4FF] text-[#4661E6]"
      }`}
      onClick={() => {
        if (onClick) onClick(option.value);
      }}
    >
      {option.label}
    </button>
  );
};

type PillProps = {
  option: { value: string; label: string };
  filter?: string;
  onClick?: (value: string) => void;
};

export default Pill;
