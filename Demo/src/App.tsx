/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Project } from './types';
import { DemoHeaderBanner } from './components/DemoHeaderBanner';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { ExpertiseSection } from './components/ExpertiseSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { GallerySection } from './components/GallerySection';
import { ConstructionJourney } from './components/ConstructionJourney';
import { MortgageCalculatorModal } from './components/MortgageCalculatorModal';
import { SampleBrochureModal } from './components/SampleBrochureModal';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { EnquirySection } from './components/EnquirySection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [brochureProject, setBrochureProject] = useState<Project | null>(null);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [prefilledProjectName, setPrefilledProjectName] = useState<string>('');
  const [mortgageEstimateNote, setMortgageEstimateNote] = useState<string>('');

  const scrollToContact = (projectName?: string) => {
    if (projectName) {
      setPrefilledProjectName(projectName);
    }
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsElement = document.getElementById('projects');
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyMortgageEstimate = (note: string) => {
    setMortgageEstimateNote(note);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#F6F3ED] text-[#202321] flex flex-col font-sans selection:bg-[#B89B68]/30 selection:text-[#141715]">
      {/* Demonstration Header Banner */}
      <DemoHeaderBanner onOpenContact={() => scrollToContact('SP VisionWorks Builder Website Proposal')} />

      {/* Primary Sticky Top Bar */}
      <Navbar
        onOpenEnquiry={(projName) => scrollToContact(projName)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onExploreProjects={scrollToProjects}
          onOpenEnquiry={() => scrollToContact()}
        />

        {/* 2. About The Company */}
        <AboutSection />

        {/* 3. Featured Projects Portfolio */}
        <ProjectsSection
          onSelectProject={(proj) => setSelectedProject(proj)}
          onEnquire={(projName) => scrollToContact(projName)}
        />

        {/* 4. Our Expertise */}
        <ExpertiseSection />

        {/* 5. Why Choose Us */}
        <WhyChooseUsSection />

        {/* 6. Architectural Gallery */}
        <GallerySection />

        {/* 7. Construction Journey */}
        <ConstructionJourney />

        {/* 8. Testimonials */}
        <TestimonialsSection />

        {/* 9. FAQ Intelligence */}
        <FAQSection />

        {/* 10. Enquiry Section & Lead Capture */}
        <EnquirySection
          initialProjectName={prefilledProjectName}
          mortgageEstimateNote={mortgageEstimateNote}
        />
      </main>

      {/* 11. Footer */}
      <Footer onOpenEnquiry={() => scrollToContact()} />

      {/* Modals & Dialogs */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onEnquire={(projName) => scrollToContact(projName)}
          onDownloadBrochure={(proj) => setBrochureProject(proj)}
        />
      )}

      {brochureProject && (
        <SampleBrochureModal
          project={brochureProject}
          onClose={() => setBrochureProject(null)}
          onEnquire={(projName) => scrollToContact(projName)}
        />
      )}

      <MortgageCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        onApplyToEnquiry={handleApplyMortgageEstimate}
      />
    </div>
  );
}
