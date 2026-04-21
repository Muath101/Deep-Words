import NavigationBar      from './components/NavigationBar'
import HeroSection        from './components/HeroSection'
import StatsSection       from './components/StatsSection'
import AboutSection       from './components/AboutSection'
import ServicesSection    from './components/ServicesSection'
import WhyChooseUs        from './components/WhyChooseUs'
import IntegrationsSection from './components/IntegrationsSection'
import ContactSection     from './components/ContactSection'
import FooterSection      from './components/FooterSection'

export default function App() {
  return (
    <div className="min-h-screen bg-brand-darker text-slate-200 overflow-x-hidden">
      <NavigationBar />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <IntegrationsSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  )
}
