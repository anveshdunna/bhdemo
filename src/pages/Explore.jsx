import LocationCard from "../components/LocationCard";
import Page from "../components/Page";

const Explore = (props) => {
  return (
    <Page>
      <div className="section">
        <div className="fixed-container">
          <div className="my-40 text-5xl font-medium text-gray-12">
            Find the best x in y
          </div>
          <LocationRow />
          <LocationRow />
          <LocationRow />
          <LocationRow />
        </div>
      </div>
    </Page>
  );
};

const LocationRow = (props) => {
  const { title } = props;
  return (
    <div className="mb-10 flex flex-col">
      <div className="my-4 flex items-baseline justify-between text-xl font-semibold text-gray-12">
        Trending places<button className="text-sm font-medium">See more</button>
      </div>
      <div className="grid grid-cols-4 gap-4 overflow-clip">
        <LocationCard />
        <LocationCard />
      </div>
    </div>
  );
};

export default Explore;
