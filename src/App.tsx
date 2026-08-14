import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import HomePage from "@/app/page";
import AboutPage from "@/app/about/page";
import ServicesPage from "@/app/services/page";
import PortfolioPage from "@/app/portfolio/page";
import ConfiguratorPage from "@/app/configurator/page";
import ProcessPage from "@/app/process/page";
import ContactPage from "@/app/contact/page";
import QuotePage from "@/app/quote/page";

const titles: Record<string, string> = {
  "/": "Maggs Engineering | Laser CNC Gates & Fabrication",
  "/about": "About | Maggs Engineering",
  "/services": "Services | Maggs Engineering",
  "/portfolio": "Portfolio | Maggs Engineering",
  "/configurator": "Gate Configurator | Maggs Engineering",
  "/process": "Process | Maggs Engineering",
  "/contact": "Contact | Maggs Engineering",
  "/quote": "Request a Quote | Maggs Engineering",
};

function RouteEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = titles[pathname] ?? "Maggs Engineering";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function NotFound() {
  return (
    <section className="container-maggs grid min-h-[70vh] place-items-center pt-28 text-center">
      <div>
        <p className="font-display text-8xl text-maggs-orange">404</p>
        <h1 className="mt-2 font-display text-4xl uppercase">Page not found</h1>
        <a href="/" className="btn-primary mt-6">Back home</a>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <RouteEffects />
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/configurator" element={<ConfiguratorPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
