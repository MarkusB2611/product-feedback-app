import Link from "next/link";
import Image from "next/image";
import empty from "~/assets/suggestions/illustration-empty.svg";

const NoSuggestions = () => {
  return (
    <div className="flex h-[600px] flex-col items-center justify-center rounded-[10px] bg-white">
      <Image src={empty} width={130} height={140} alt="" />
      <h2 className="mb-4 mt-[53.26px] text-h1 text-[#3A4374]">
        There is no feedback yet.
      </h2>
      <p className="w-[410px] text-center text-body1 text-[#647196]">
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <Link
        className="mt-12 rounded-[10px] bg-[#AD1FEA] px-6 py-3 text-h4 text-white hover:bg-[#C75AF6]"
        href="#"
      >
        + Add Feedback
      </Link>
    </div>
  );
};

export default NoSuggestions;
