import AboutMe from "./components/AboutMe.jsx";
import ContactMe from "./components/ContactMe.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx"
import Knowledges from "./components/Knowledges.jsx";
import Portfolio from "./components/Portfolio.jsx";
import "./index.css"

export default function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <AboutMe/>
    <Knowledges/>
    <Portfolio/>
    <ContactMe/>
    </>
  )
}