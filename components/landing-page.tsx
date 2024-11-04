'use client'

import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { SolutionsSection } from './SolutionsSection';
import { FeaturesSection } from './FeaturesSection';
import { TestimonialsSection } from './TestimonialsSection';
import { ContactSection } from './ContactSection';
import { Footer } from './Footer';

export function LandingPageComponent() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <HeroSection />
        <SolutionsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}