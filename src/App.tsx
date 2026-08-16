import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsStrip } from './components/MetricsStrip';
import { About } from './components/About';
import { ExpertiseGrid } from './components/ExpertiseGrid';
import { ImpactSection } from './components/ImpactSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { CaseStudies } from './components/CaseStudies';
import { ServicesSection } from './components/ServicesSection';
import { TechStackSection } from './components/TechStackSection';
import { ConsultingBanner } from './components/ConsultingBanner';
import { EducationCertifications } from './components/EducationCertifications';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
    setSelectedService(undefined);
  };

  return (
    <div className="min-h-screen bg-[#0A0C10] text-[#E2E8F0] selection:bg-blue-600 selection:text-white font-sans antialiased">
      {/* Sticky Header */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Hero Section with Technical Dashboard Grid */}
        <Hero onOpenConsultation={() => handleOpenConsultation()} />

        {/* 5-Metric Data Grid Strip */}
        <MetricsStrip />

        {/* Executive About & Career Progression Grid */}
        <About onOpenConsultation={() => handleOpenConsultation()} />

        {/* 7-Category Interactive Expertise Matrix */}
        <ExpertiseGrid />

        {/* Selected Business Impact (Telemetry & Data Grid) */}
        <ImpactSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* Vertical Experience Timeline */}
        <ExperienceTimeline />

        {/* Featured Automation Case Studies */}
        <CaseStudies onOpenConsultation={() => handleOpenConsultation()} />

        {/* Services & Offerings ("How I Can Help") */}
        <ServicesSection onSelectService={(serviceTitle) => handleOpenConsultation(serviceTitle)} />

        {/* Interactive Technology Stack Matrix */}
        <TechStackSection />

        {/* Consulting Positioning & Engagement Models */}
        <ConsultingBanner onOpenConsultation={() => handleOpenConsultation()} />

        {/* Education, Governance & Credentials */}
        <EducationCertifications />

        {/* Final Contact & Discussion Section */}
        <ContactSection onOpenConsultation={() => handleOpenConsultation()} />
      </main>

      {/* Executive Footer */}
      <Footer />

      {/* Interactive Consultation / Inquiry Scoping Generator */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
        preselectedService={selectedService}
      />
    </div>
  );
}
