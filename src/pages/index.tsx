import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Filter from "~/components/suggestions/filter";
import RoadmapBox from "~/components/suggestions/roadmap-box";
import TitleBoard from "~/components/suggestions/title-board";
import DATA from "~/data.json";
import bulbIcon from "~/assets/suggestions/icon-suggestions.svg";
import Image from "next/image";
import Link from "next/link";
import NoSuggestions from "~/components/suggestions/no-suggestions";
import SuggestionsList from "~/components/suggestions/suggestions-list";
import Select from "~/components/ui/select";

export const FILTER_OPTIONS = [
  { value: "", label: "All" },
  { value: "ui", label: "UI" },
  { value: "ux", label: "UX" },
  { value: "enhancement", label: "Enhancement" },
  { value: "bug", label: "Bug" },
  { value: "feature", label: "Feature" },
];

const Home: NextPage = () => {
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("Most Upvotes");
  const [suggestions, setSuggestions] = useState(DATA.productRequests);
  const numberOfSuggestions = suggestions.filter(
    (s) => s.status === "suggestion" && s.category.includes(filter)
  ).length;

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  return (
    <>
      <Head>
        <title>Product Feedback App - Suggestions</title>
        <meta name="description" content="Product feedback app" />
        <link rel="icon" href="favicon-32x32.png" />
      </Head>
      <div className="mt-[94px] flex justify-center gap-[30px]">
        <div className="flex w-[255px] flex-col gap-6">
          <TitleBoard />
          <Filter
            options={FILTER_OPTIONS}
            filter={filter}
            onFilterChange={handleFilterChange}
          />
          <RoadmapBox
            planned={suggestions.filter((s) => s.status === "planned").length}
            inProgress={
              suggestions.filter((s) => s.status === "in-progress").length
            }
            live={suggestions.filter((s) => s.status === "live").length}
          />
        </div>
        <main className="w-[825px]">
          <div className="mb-6 flex items-center justify-between rounded-[10px] bg-[#373F68] py-[14px] pl-6 pr-4 text-h3 text-white">
            <div className="flex items-center gap-4">
              <Image src={bulbIcon.src} width={24} height={24} alt="" />
              <span>
                {numberOfSuggestions} Suggestion
                <span
                  className={`${numberOfSuggestions === 1 ? "invisible" : ""}`}
                >
                  s
                </span>
              </span>
              {/* <Select sortBy={sortBy} /> */}
              {/* <div className="ml-[22px]">Sort by</div> */}
            </div>
            <Link
              className="rounded-[10px] bg-[#AD1FEA] px-6 py-3 text-h4 text-white hover:bg-[#C75AF6]"
              href="#"
            >
              + Add Feedback
            </Link>
          </div>
          {numberOfSuggestions === 0 ? (
            <NoSuggestions />
          ) : (
            <SuggestionsList
              suggestions={suggestions.filter((s) => s.status === "suggestion")}
              filter={filter}
            />
          )}
        </main>
      </div>
    </>
  );
};

export default Home;
