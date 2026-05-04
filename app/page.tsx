import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero';
import { AboutSection } from '@/components/about';
import { CoursesSection } from '@/components/courses';
import { TimingsSection } from '@/components/timings';
import { SpecialCoursesSection } from '@/components/special-courses';
import { WhyUsSection } from '@/components/why-us';
import { ContactSection } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <TimingsSection />
      <SpecialCoursesSection />
      <WhyUsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
