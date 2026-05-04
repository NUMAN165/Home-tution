'use client';

import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export function SpecialCoursesSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-yellow-100 p-4 rounded-full">
              <Sparkles className="w-8 h-8 text-yellow-600" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            English Speaking & Reading Course
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Master communication and comprehension skills with our specialized English course designed for all age groups
          </p>

          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 px-8 rounded-lg font-semibold transition-all hover:shadow-lg"
          >
            Learn More & Enroll
          </Button>
        </div>
      </div>
    </section>
  );
}
