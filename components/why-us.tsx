'use client';

import { Award, Users, BookMarked, Lightbulb, Smile } from 'lucide-react';

export function WhyUsSection() {
  const features = [
    {
      icon: Award,
      title: '5+ Years Experience',
      description: 'Proven track record of excellence in teaching',
    },
    {
      icon: Users,
      title: 'Personalized Attention',
      description: 'One-on-one focus tailored to each student',
    },
    {
      icon: BookMarked,
      title: 'Small Batch Sizes',
      description: 'Intimate group settings for better learning',
    },
    {
      icon: Lightbulb,
      title: 'Concept-Based Learning',
      description: 'Understanding over memorization approach',
    },
    {
      icon: Smile,
      title: 'Friendly Teaching',
      description: 'Welcoming environment that encourages growth',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600">What makes Learning Ladder special</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
