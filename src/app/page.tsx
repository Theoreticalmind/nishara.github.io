"use client";

import { useState } from "react";
import BackgroundElements from "../components/BackgroundElements";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import SurveyModal from "../components/SurveyModal";

export default function WaitlistPage() {
  const [showSurveyModal, setShowSurveyModal] = useState(false);

  return (
    <main className="min-h-screen gradient-hero relative overflow-hidden">
      <BackgroundElements />

      <HeroSection onJoinClick={() => setShowSurveyModal(true)} />

      <FeaturesSection />

      <CTASection />

      <Footer />

      {showSurveyModal && (
        <SurveyModal onClose={() => setShowSurveyModal(false)} />
      )}
    </main>
  );
}
