import { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import paris from "../assets/places/paris.png";
import tokyo from "../assets/places/tokyo.png";
import bali from "../assets/places/bali.png";


const MainSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Animate sections on scroll
      sectionsRef.current.forEach((section) => {
        if (section) {
          const top = section.getBoundingClientRect().top;
          const height = window.innerHeight;
          if (top < height - 100) {
            section.classList.add("animate-fadeInUp");
            section.classList.remove("opacity-0");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "backdrop-blur-md bg-white/70 shadow-md" : "bg-transparent"
        }`}
      >
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-5 md:px-20 lg:px-32 bg-gradient-to-br from-pink-500 to-rose-400">
        <h1
          className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg opacity-0"
          style={{ transition: "all 0.7s ease", transitionDelay: "0.1s" }}
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          Welcome to <span className="text-yellow-100">Nishara</span>
        </h1>
        <h3
          className="text-xl md:text-2xl font-semibold mt-4 text-white drop-shadow-md opacity-0"
          style={{ transition: "all 0.7s ease", transitionDelay: "0.2s" }}
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          Be the Light of the Night
        </h3>
        <p
          className="text-lg md:text-2xl max-w-2xl mt-4 text-white drop-shadow-md opacity-0"
          style={{ transition: "all 0.7s ease", transitionDelay: "0.3s" }}
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          Empowering women to travel solo with confidence, safety, and style.
          Discover destinations, connect with community, and plan your adventure.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 mt-6 opacity-0"
          style={{ transition: "all 0.7s ease", transitionDelay: "0.4s" }}
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <button className="px-6 py-3 bg-white text-pink-500 font-semibold rounded-full shadow-lg hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
            Explore Destinations
          </button>
          <button className="px-6 py-3 bg-white/70 text-pink-700 font-semibold rounded-full shadow-lg hover:bg-pink-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
            Join Community
          </button>
        </div>
      </section>

      {/* Featured Destinations */}
      <section
        className="bg-white py-16 px-5 md:px-20 lg:px-32"
        ref={(el) => (sectionsRef.current[4] = el)}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Featured Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { img: paris, name: "Paris", desc: "Explore the city of lights safely with our solo travel tips." },
            { img: tokyo, name: "Tokyo", desc: "Discover the vibrant culture and hidden gems in Tokyo." },
            { img: bali, name: "Bali", desc: "Relax and rejuvenate with our safe solo travel guides." },
          ].map((dest, i) => (
            <div
              key={i}
              className="bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 opacity-0"
              ref={(el) => (sectionsRef.current[i + 5] = el)}
            >
              <img src={dest.img} alt={dest.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{dest.name}</h3>
                <p className="text-gray-600 text-sm">{dest.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainSection;
