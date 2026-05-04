'use client';

import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-yellow-50 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-pretty">
          Admissions Open<br />
          <span className="text-blue-600">2026 – 2027</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-pretty">
          Build Strong Foundations for Your Child
        </p>

        <p className="text-base text-gray-500 mb-12 max-w-2xl mx-auto">
          Expert home tuition with personalized attention and concept-based learning
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 px-8 rounded-lg font-semibold transition-all hover:shadow-lg"
          >
            Enroll Now
          </Button>
          <Button
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="text-blue-600 border-blue-600 hover:bg-blue-50 text-lg py-6 px-8 rounded-lg font-semibold"
          >
            Contact Us
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-400 hover:text-gray-600"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
