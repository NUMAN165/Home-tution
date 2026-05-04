'use client';

import { Card } from '@/components/ui/card';
import { BookOpen, Users, Lightbulb } from 'lucide-react';

export function CoursesSection() {
  const courses = [
    {
      title: 'Junior KG to 4th',
      description: 'Foundation building with focus on core concepts and basic skills',
      icon: Lightbulb,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Std 5th to 10th',
      description: 'Comprehensive curriculum with emphasis on conceptual understanding',
      icon: BookOpen,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      title: '11th & 12th (Arts)',
      description: 'Advanced topics with focus on competitive exam preparation',
      icon: Users,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
          <p className="text-lg text-gray-600">We offer tailored programs for all academic levels</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const IconComponent = course.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-shadow duration-300 border-0"
              >
                <div className={`${course.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                  <IconComponent className={`w-8 h-8 ${course.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
                <p className="text-gray-600 leading-relaxed">{course.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
