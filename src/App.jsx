import Hero from "./components/Hero";
import Demo from "./components/Demo";
import "./App.css";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="relative z-10 flex justify-center items-center flex-col  mx-auto">
        <Hero />
        <Demo />
      </div>
    </main>
  );
};

export default App;
