import arrowDown from "~/assets/shared/icon-arrow-down.svg";
import arrowUp from "~/assets/shared/icon-arrow-up.svg";
import check from "~/assets/shared/icon-check.svg";

import Image from "next/image";
import { useState } from "react";

const Select = ({
  value,
  updateValue,
  options,
  type = "sort",
}: SelectProps) => {
  const [open, setOpen] = useState(false);

  let button = (
    <div className="group flex items-baseline gap-[9px] rounded-[10px] bg-[#373F68] px-[17px] py-[26px] text-h4 text-[#F2F4FE] hover:cursor-pointer">
      <span className="font-normal group-hover:opacity-75">
        Sort By : <span className="font-bold">{value}</span>
      </span>
      <Image className="h-1 w-2" src={arrowDown} alt="" />
    </div>
  );
  if (type === "form") {
    button = (
      <div
        className={`focus:outline-[#4661E6 flex w-full items-baseline justify-between gap-[9px] rounded-[5px] bg-[#F7F8FD] px-6 py-[13px] text-body2 text-[#3A4374] hover:cursor-pointer hover:outline hover:outline-1 hover:outline-[#4661E6] ${
          open ? "outline outline-1 outline-[#4661E6]" : ""
        }`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{options.find((option) => option.value === value).label}</span>
        <Image className="h-1 w-2" src={open ? arrowUp : arrowDown} alt="" />
      </div>
    );
  }

  const handleValueChange = (newValue: string) => {
    setOpen(false);
    updateValue(newValue);
  };

  return (
    <div className={`relative ${type === "form" ? "w-full" : "w-[194px]"}`}>
      {button}
      <div
        className={`absolute z-10 mt-4 w-full rounded-[10px] bg-white shadow-select ${
          open ? "visible" : "invisible"
        }`}
      >
        <ul>
          {options.map((option) => {
            return (
              <li
                className="flex items-center justify-between border-b border-border-select/[.15] py-3 px-6 text-[#647196] hover:cursor-pointer hover:text-[#AD1FEA]"
                key={option.value}
                onClick={() => handleValueChange(option.value)}
              >
                {option.label}
                {value === option.value && (
                  <Image src={check} alt="" className="h-2" />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

type SelectProps = {
  value: string;
  updateValue: (category: string) => void;
  type: string;
  options: { value: string; label: string }[];
};

export default Select;
