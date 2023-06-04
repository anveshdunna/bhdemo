import Page from "../components/Page";
import Card from "../components/expCard/Card";

const Home = () => {
  return (
    <Page>
      <div className="section">
        <div className="fixed-container">
          <div className="flex flex-col gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Home;
