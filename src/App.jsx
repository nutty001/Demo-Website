import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import "./App.css";
import Card from "./components/Cards/Card";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Intro />
      <Card />
      <Contact />
    </div>
  );
}

export default App;
