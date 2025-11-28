import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import FundTypes from "@/components/FundTypes";
import ActiveConvocations from "@/components/ActiveConvocations";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Winners from "@/components/Winners";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import ContactForm from "@/components/ContactForm";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutUs />
      <FundTypes />
      <ActiveConvocations />
      <Services />
      <Methodology />
      <Winners />
      <Testimonials />
      <Team />
      <ContactForm />
      <Contact />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;