const RoadmapBox = ({ planned, inProgress, live }: RoadmapBoxProps) => {
  const hasNoItems = !planned && !inProgress && !live;
  return (
    <div className="rounded-[10px] bg-white p-6 pt-[19px]">
      <div className="mb-6 flex justify-between">
        <h2 className="text-h3 text-[#3A4374]">Roadmap</h2>
        <a
          className={`text-body3 text-[#4661E6] underline hover:text-[#8397F8] ${
            hasNoItems ? "opacity-25" : ""
          }`}
          href="#"
        >
          View
        </a>
      </div>
      <div className="text-body1 text-[#647196]">
        <div className="flex justify-between">
          <div className="flex items-center">
            <span className="mr-4 inline-block h-2 w-2 rounded-[50%] bg-[#F49F85]"></span>
            Planned
          </div>
          <div className="font-bold">{planned}</div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <span className="mr-4 inline-block h-2 w-2 rounded-[50%] bg-[#AD1FEA]"></span>
            In-Progress
          </div>
          <div className="font-bold">{inProgress}</div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <span className="mr-4 inline-block h-2 w-2 rounded-[50%] bg-[#62BCFA]"></span>
            Live
          </div>
          <div className="font-bold">{live}</div>
        </div>
      </div>
    </div>
  );
};

type RoadmapBoxProps = {
  planned: number;
  inProgress: number;
  live: number;
};

export default RoadmapBox;
