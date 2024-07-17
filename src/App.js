import AirBnB from "./components/AirBnBNav";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./Data";
import "./App.css";

function App() {
  const cards = Data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <>
      <div className="Container">
        <AirBnB />
        <Hero />
        <section className="cards-list">{cards}</section>
      </div>
    </>
  );
}

export default App;
