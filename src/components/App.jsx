import './App.css'
import CincoPilares from './components/CincoPilares'
import DifSection from './components/DifSection'
import DifSectionDos from './components/DifSectionDos'
import DifSectionTres from './components/DifSectionTres'
import DiversionSection from './components/DiversionSection'
import DosSemanas from './components/DosSemanas'
import HeaderPV from './components/HeaderPV'
import Navbar from './components/Navbar'
import PreescolarSection from './components/PreescolarSection'
import PrimariaAltaSection from './components/PrimariaAltaSection'
import PrimariaBajaSection from './components/PrimariaBajaSection'

function App() {
  return (
    <main className="w-full montserrat min-h-screen">
      <Navbar />
      <HeaderPV />
      <PreescolarSection />
      <DifSection />
      <DiversionSection />
      <PrimariaBajaSection />
      <DifSectionDos />
      <CincoPilares />
      <PrimariaAltaSection />
      <DifSectionTres />
      <DosSemanas />
      <PrimariaBajaSection />
    </main>
  )
}

export default App
