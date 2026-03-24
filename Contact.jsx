import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FanfixSection from './components/FanfixSection'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Steps from './components/Steps'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0D0B12]">
      <Navbar />
      <Hero />
      <FanfixSection />
      <Services />
      <WhyUs />
      <Steps />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
