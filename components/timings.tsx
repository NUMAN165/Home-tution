'use client';

import { Card } from '@/components/ui/card';
import { Clock, Calendar } from 'lucide-react';

export function TimingsSection() {
  const timings = [
    {
      grade: 'Junior KG to 4th',
      time: '7:00 PM – 9:30 PM',
      duration: '2.5 hours',
    },
    {
      grade: 'Std 5th to 7th',
      time: '7:00 PM – 9:00 PM',
      duration: '2 hours',
    },
    {
      grade: 'Std 8th to 10th',
      time: '4:00 PM – 7:00 PM',
      duration: '3 hours',
    },
    {
      grade: '11th & 12th (Arts)',
      time: '3:00 PM – 7:00 PM',
      duration: '4 hours',
    },
  ];

  return (
    <section id="timings" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Batch Timings</h2>
          <p className="text-lg text-gray-600">Flexible schedules designed for your convenience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {timings.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-md transition-shadow border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600 mt-1" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.grade}</h3>
                  <div className="space-y-1">
                    <p className="text-base text-gray-700 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-yellow-600" />
                      {item.time}
                    </p>
                    <p className="text-sm text-gray-500">Duration: {item.duration}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
