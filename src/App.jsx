import AboutMe from "./components/AboutMe.jsx";
import ContactMe from "./components/ContactMe.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx"
import Knowledges from "./components/Knowledges.jsx";
import Portfolio from "./components/Portfolio.jsx";
import "./index.css"
import './styles/App.css'

export default function App() {
  return (
    <>
      <Header />

      <div className="app">
        <Hero />
        <AboutMe />
      </div>

      <Knowledges />
      <Portfolio />
      <ContactMe />
    </>
  )
}