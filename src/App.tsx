import TopNav from './components/TopNav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import CalendarStrip from './components/CalendarStrip'
import Welcome from './components/Welcome'
import MapSection from './components/MapSection'
import Skate from './components/Skate'
import Around from './components/Around'
import Events from './components/Events'
import ToDo from './components/ToDo'
import Food from './components/Food'
import Phrases from './components/Phrases'
import Album from './components/Album'
import Practical from './components/Practical'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <TopNav />
      <main>
        <Hero />
        <Marquee />
        <Welcome />
        <CalendarStrip />
        <MapSection />
        <Skate />
        <Around />
        <Events />
        <ToDo />
        <Food />
        <Phrases />
        <Album />
        <Practical />
      </main>
      <Footer />
    </>
  )
}
