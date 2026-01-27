"use client";

import { useState } from "react";
import Image from "next/image";

export default function WaitlistPage() {
  const [showSurveyModal, setShowSurveyModal] = useState(false);

  // Google Form embed URL
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfYjUglypUm6alut9ta12U5QuMgXffsUC_vA_FHJekPv4WJ5A/viewform?embedded=true";

  return (
    <main className="min-h-screen gradient-hero relative overflow-hidden">
      {/* Animated Orbs */}
      <div className="orb orb-purple w-[500px] h-[500px] -top-48 -left-48 animate-float-slow opacity-60" />
      <div className="orb orb-violet w-[400px] h-[400px] top-1/4 -right-32 animate-float opacity-50" />
      <div className="orb orb-fuchsia w-[350px] h-[350px] bottom-20 left-1/4 animate-float-delayed opacity-40" />
      <div className="orb orb-purple w-[300px] h-[300px] -bottom-32 right-1/3 animate-pulse-glow opacity-50" />

      {/* Sparkles */}
      <div className="sparkle top-[15%] left-[10%] animate-sparkle" />
      <div className="sparkle top-[25%] right-[15%] animate-sparkle delay-300" />
      <div className="sparkle top-[60%] left-[20%] animate-sparkle delay-500" />
      <div className="sparkle top-[45%] right-[25%] animate-sparkle delay-700" />
      <div className="sparkle bottom-[30%] left-[35%] animate-sparkle delay-200" />



      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-16 pb-32 md:pt-24 md:pb-40 lg:pt-32 lg:pb-48">
        {/* Hero Illustrations - Left and Right */}


        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <div className="animate-fade-in-up relative w-[36rem] h-48">
              <Image
                src="/Nishara_Logo.png"
                alt="Nishara"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
            <span className="text-sm text-pink-700">Women-Only Travel Safety App — Coming Soon</span>
          </div>

          {/* Main Headline */}
          <h1 className="animate-fade-in-up delay-100 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Be the Light of{" "}
            <span className="gradient-text-shimmer animate-shimmer">the Night</span>
          </h1>

          {/* Tagline */}
          <p className="animate-fade-in-up delay-150 text-xl md:text-2xl text-rose-600 font-medium mb-4">
            Travel freely. Travel safely. Travel together.
          </p>

          {/* Subheadline */}
          <p className="animate-fade-in-up delay-200 text-lg md:text-xl text-pink-800 max-w-2xl mx-auto mb-12 leading-relaxed">
            A trust-first digital infrastructure designed exclusively for women on the move —
            built to enable confidence, safety, and collective strength through technology.
          </p>

          {/* Join Survey Button */}
          <div className="animate-fade-in-up delay-300 flex flex-col items-center gap-3">
            <button
              onClick={() => setShowSurveyModal(true)}
              className="btn-primary btn-glow flex items-center justify-center gap-3 px-8 py-4 text-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <span>Join Survey</span>
            </button>
            <p className="text-pink-700 text-sm italic">Help us build Nishara for YOU — your input shapes our features</p>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 animate-fade-in-up delay-500">
            <div className="flex items-center justify-center" style={{ isolation: 'isolate' }}>
              {[
                "/avatar-1.png",
                "/avatar-2.png",
                "/avatar-3.png",
                "/avatar-4.png",
              ].map((src, i) => (
                <div
                  key={i}
                  className="relative w-12 h-12 rounded-full border-2 border-[#0c0010] overflow-hidden shadow-lg"
                  style={{
                    marginLeft: i > 0 ? '-20px' : '0',
                    zIndex: i,
                    position: 'relative'
                  }}
                >
                  <Image
                    src={src}
                    alt={`Sisterhood member ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-pink-800">
              <span className="text-pink-950 font-semibold">2,500+</span> women already joined the sisterhood
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-24 md:py-32 mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-950 mb-4">
              Your Safety, <span className="gradient-text">Our Mission</span>
            </h2>
            <p className="text-pink-800 max-w-xl mx-auto">
              Built with zero tolerance for compromise. Every feature designed to empower women travelers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Verified Women Only",
                description: "Multi-layer identity verification ensures every member is a verified woman. Government ID, liveness detection, and community trust scores.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Nearby Safety Hub",
                description: "Find verified safe hotels, women-run stays, clean restrooms, and trusted restaurants — all rated by women, for women.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Local Birds Network",
                description: "Connect with verified local guides, safety companions, and fellow travelers. Women helping women navigate unfamiliar territories.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                ),
                title: "One-Tap Emergency",
                description: "Instant access to police, NGOs, and trusted contacts. Works offline, in background, and even from lock screen.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: "Travel Diaries",
                description: "Share and discover authentic travel stories with safety notes. Learn from real experiences, not algorithms.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                ),
                title: "Smart Navigation",
                description: "Turn-by-turn directions to women-verified safe destinations. Radius control from 1km to 50km based on your comfort.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 hover:scale-105 transition-transform duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500/10 to-rose-500/10 flex items-center justify-center mb-6 text-pink-600 group-hover:text-rose-500 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-pink-950 mb-3">{feature.title}</h3>
                <p className="text-pink-800 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Testimonial Section */}


      {/* CTA Section */}
      <section id="about" className="relative z-10 px-6 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-950 mb-6">
            Ready to Light Up the Night?
          </h2>
          <p className="text-pink-800 text-lg mb-8 max-w-xl mx-auto">
            Join thousands of women who refuse to let fear limit their adventures.
            Be among the first to experience Nishara when we launch.
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="btn-primary btn-glow inline-flex items-center gap-2"
          >
            <span>Join the Sisterhood</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative z-10 px-6 py-12 border-t border-pink-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="relative w-64 h-20">
              <Image
                src="/Nishara_Logo.png"
                alt="Nishara"
                fill
                className="object-contain object-center md:object-left"
              />
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="text-pink-700 hover:text-pink-950 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-pink-700 hover:text-pink-950 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-pink-700 hover:text-pink-950 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>

            <p className="text-pink-600 text-sm">
              © 2026 Nishara. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Survey Modal */}
      {showSurveyModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(4px)' }}
          onClick={() => setShowSurveyModal(false)}
        >
          <div
            className="relative w-full max-w-xl h-[85vh] max-h-[700px] bg-white rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowSurveyModal(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* Survey Message */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 px-4 py-3 border-b border-pink-100">
              <p className="text-sm text-rose-600 text-center font-medium">Your responses help us design features that truly matter to women travelers ✨</p>
            </div>
            {/* Google Form Embed */}
            <iframe
              src={googleFormUrl}
              className="w-full h-[calc(100%-48px)]"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Nishara Survey"
            >
              Loading…
            </iframe>
          </div>
        </div>
      )}
    </main>
  );
}
