import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Recommended from "./components/Recommended";
import SpecialOffer from "./components/SpecialOffer";

function App() {
  return (
    <div className="bg-[#1b2838] ">
      <Navbar />
      <div className="lg:max-w-[90vw] xl:max-w-[80vw] mx-auto">
        <Categories />
        <Recommended />
        <SpecialOffer />
      </div>{" "}
    </div>
  );
}

export default App;
