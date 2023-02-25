import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Filter from "~/components/suggestions/filter";
import RoadmapBox from "~/components/suggestions/roadmap-box";
import TitleBoard from "~/components/suggestions/title-board";
import DATA from "~/data.json";

const FILTER_OPTIONS = [
  { value: "", label: "All" },
  { value: "ui", label: "UI" },
  { value: "ux", label: "UX" },
  { value: "enhancement", label: "Enhancement" },
  { value: "bug", label: "Bug" },
  { value: "feature", label: "Feature" },
];

const Home: NextPage = () => {
  const [filter, setFilter] = useState("");
  const [suggestions, setSuggestions] = useState(DATA.productRequests);

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
      <div className="mt-[94px] flex justify-center">
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
        <main className=""></main>
      </div>
    </>
  );
};

export default Home;
