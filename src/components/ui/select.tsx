import arrowDown from "~/assets/shared/icon-arrow-down-active.svg";
import arrowUp from "~/assets/shared/icon-arrow-up-active.svg";
import Image from "next/image";
import { useState } from "react";

const Select = ({ sortBy }: SelectProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative w-[194px]">
      <div className="group flex items-baseline gap-[9px] rounded-[10px] bg-[#373F68] px-[17px] py-[26px] text-h4 text-[#F2F4FE] hover:cursor-pointer">
        <span className="font-normal group-hover:opacity-75">
          Sort By : <span className="font-bold">{sortBy}</span>
        </span>
        <Image className="h-1 w-2" src={arrowDown} alt="" />
      </div>
      <div></div>
    </div>
  );
};

type SelectProps = {
  sortBy: string;
};

export default Select;
