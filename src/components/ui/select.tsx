import arrowDown from "~/assets/shared/icon-arrow-down.svg";
import arrowUp from "~/assets/shared/icon-arrow-up.svg";
import Image from "next/image";
import { useState } from "react";

const Select = ({ sortBy, type = "sort" }: SelectProps) => {
  const [open, setOpen] = useState(false);

  let button = (
    <div className="group flex items-baseline gap-[9px] rounded-[10px] bg-[#373F68] px-[17px] py-[26px] text-h4 text-[#F2F4FE] hover:cursor-pointer">
      <span className="font-normal group-hover:opacity-75">
        Sort By : <span className="font-bold">{sortBy}</span>
      </span>
      <Image className="h-1 w-2" src={arrowDown} alt="" />
    </div>
  );
  if (type === "form") {
    button = (
      <div className="flex w-full items-baseline justify-between gap-[9px] rounded-[5px] bg-[#F7F8FD] px-6 py-[13px] text-body2 text-[#3A4374] hover:cursor-pointer">
        <span>{sortBy}</span>
        <Image className="h-1 w-2" src={open ? arrowUp : arrowDown} alt="" />
      </div>
    );
  }
  return (
    <div className={`relative ${type === "form" ? "w-full" : "w-[194px]"}`}>
      {button}
      <div></div>
    </div>
  );
};

type SelectProps = {
  sortBy: string;
  type: string;
};

export default Select;
