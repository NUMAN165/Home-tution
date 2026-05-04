'use client';

import { Card } from '@/components/ui/card';
import { Award, Users, BookOpen } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Learning Ladder is a trusted home tuition service led by{' '}
              <span className="font-semibold">Prof. Aafreen Shaikh</span> (Post Graduate & Nutritionist) with over{' '}
              <span className="font-semibold">5 years of teaching experience</span>. We focus on personalized
              attention and strong conceptual learning.
            </p>
            <p className="text-base text-gray-500 leading-relaxed">
              Our mission is to build strong educational foundations for every student through dedicated,
              one-on-one mentoring and a deep understanding of individual learning needs.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <Card className="p-4 text-center">
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-gray-600 mt-1">Years Experience</div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600 mt-1">Students Taught</div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600 mt-1">Dedication</div>
              </Card>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-yellow-100 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <Users size={64} className="text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-600 font-semibold">Prof. Aafreen Shaikh</p>
                  <p className="text-sm text-gray-500">Post Graduate & Nutritionist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
