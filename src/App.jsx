import './App.css'
import CincoPilares from './components/CincoPilares'
import DifSection from './components/DifSection'
import DifSectionCuatro from './components/DifSectionCuatro'
import DifSectionDos from './components/DifSectionDos'
import DifSectionTres from './components/DifSectionTres'
import DiversionSection from './components/DiversionSection'
import DosSemanas from './components/DosSemanas'
import HeaderPV from './components/HeaderPV'
import InscribeloAhora from './components/InscribeloAhora'
import Navbar from './components/Navbar'
import PreescolarSection from './components/PreescolarSection'
import PrimariaAltaSection from './components/PrimariaAltaSection'
import PrimariaBajaSection from './components/PrimariaBajaSection'
import SecundariaSection from './components/SecundariaSection'
import SistemaLEGO from './components/SistemaLEGO'
import Testimonios from './components/Testimonios'

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
      <SecundariaSection />
      <DifSectionCuatro />
      <SistemaLEGO />
      <Testimonios />
      <InscribeloAhora />
    </main>
  )
}

export default App
