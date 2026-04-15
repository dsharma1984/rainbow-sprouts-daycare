"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { ShieldCheck, Utensils, Users, Award, Sun, ArrowRight, Star, Phone } from 'lucide-react';
import { IMAGES } from '@/config/images';
import Link from 'next/link';
import InstagramGrid from '@/components/InstagramGrid';
import { client } from '@/sanity/client';

// Testimonial Carousel Component
const TestimonialCarousel = () => {
  // Mobile-friendly, native horizontal snap scrolling without aggressive JS interrupts
  return (
    <SectionWrapper background="soft" withWaveTop withWaveBottom className="py-8 md:py-32 overflow-hidden">
      <div className="text-center mb-8 md:mb-16 relative">
        {/* Rainbow Motif */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 -z-10 opacity-20 pointer-events-none">
          <svg viewBox="0 0 200 100" className="w-full h-full">
            <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#FF9F1C" strokeWidth="8" strokeLinecap="round" opacity="0.4" />
            <path d="M 40 100 A 60 60 0 0 1 160 100" fill="none" stroke="#2EC4B6" strokeWidth="8" strokeLinecap="round" opacity="0.4" />
            <path d="M 60 100 A 40 40 0 0 1 140 100" fill="none" stroke="#FFBF69" strokeWidth="8" strokeLinecap="round" opacity="0.4" />
          </svg>
        </div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-gray-900"
        >
          Happy Families
        </motion.h2>
        <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-6"></div>
        <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed">Don't just take our word for it. Here is what our community says.</p>
      </div>

      {/* Magical Scrolling Container */}
      <div
        className="relative w-full max-w-7xl mx-auto group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#FFF8F0] to-transparent z-10 pointer-events-none hidden md:block"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#FFF8F0] to-transparent z-10 pointer-events-none hidden md:block"></div>

        <div
          className="flex overflow-x-auto pb-12 pt-4 px-4 md:px-0 gap-6 md:gap-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {[
            { name: "Priya Sharma", role: "Mother of Aarav, 3", text: "The best decision we made for our son. The teachers are so caring and the live CCTV gives us such peace of mind.", img: "https://images.unsplash.com/photo-1607506548777-6d30492934eb?auto=format&fit=crop&q=80&w=200" },
            { name: "Rahul Verma", role: "Father of Diya, 4", text: "My daughter loves going to Rainbow Sprouts. The activities are creative and she has learned so much in just 6 months!", img: "https://i.pravatar.cc/150?u=rahul" },
            { name: "Anjali Gupta", role: "Mother of Kabier, 2", text: "Clean, safe, and nurturing environment. The layout and facilities are top-notch. Highly recommended!", img: "https://i.pravatar.cc/150?u=anjali" },
            { name: "Vikram Singh", role: "Father of Meera, 5", text: "The transparent communication is what I love most. I feel completely connected to my child's day.", img: "https://i.pravatar.cc/150?u=vikram" },
            { name: "Neha Patel", role: "Mother of Vihaan, 3", text: "I love the focus on holistic development. Vihaan comes home happy and excited to share what he learned.", img: "https://i.pravatar.cc/150?u=neha" }
          ].map((t, i) => (
            <motion.div
              key={i}
              className="min-w-[85vw] md:min-w-[400px] snap-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card hoverEffect className="relative h-full pt-16 pb-10 px-8 bg-white border-none shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(255,107,91,0.15)] rounded-[3rem]">
                {/* Large Quote Mark */}
                <div className="absolute top-8 left-8 text-6xl text-accent/30 font-serif leading-none">“</div>

                <div className="text-center relative z-10">
                  <div className="relative mx-auto w-20 h-20 mb-6">
                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl transform translate-y-2"></div>
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover rounded-full border-4 border-white shadow-md relative z-10" />
                  </div>

                  <div className="flex justify-center gap-1 mb-6 text-accent">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>

                  <p className="text-gray-600 mb-8 font-medium text-lg leading-relaxed italic">"{t.text}"</p>

                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="font-bold text-gray-900 text-xl font-heading">{t.name}</h4>
                    <span className="text-sm text-primary font-bold uppercase tracking-wider">{t.role}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default function Home() {
  const [recentGallery, setRecentGallery] = useState<string[]>([
    IMAGES.gallery1, IMAGES.gallery2, IMAGES.gallery3, IMAGES.gallery4
  ]);

  useEffect(() => {
    async function fetchRecentGallery() {
      try {
        const query = `*[_type == "gallery"] | order(_createdAt desc)[0...4] { "src": image.asset->url }`;
        const data = await client.fetch(query);
        if (data && data.length > 0) {
          setRecentGallery(data.map((item: any) => item.src));
        }
      } catch (error) {
        console.error("Failed to fetch recent gallery images:", error);
      }
    }
    fetchRecentGallery();
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const usps = [
    { icon: <ShieldCheck className="w-8 h-8 text-white" />, title: 'Live CCTV Access', desc: 'Secure view for parents anytime.', color: 'bg-blue-500' },
    { icon: <Utensils className="w-8 h-8 text-white" />, title: 'Home-Cooked Meals', desc: 'Nutritious & fresh food daily.', color: 'bg-green-500' },
    { icon: <Users className="w-8 h-8 text-white" />, title: '1:8 Teacher Ratio', desc: 'Personalized attention for every child.', color: 'bg-yellow-500' },
    { icon: <Award className="w-8 h-8 text-white" />, title: 'Experienced Staff', desc: 'Police verified & trained mentors.', color: 'bg-red-500' },
    { icon: <Sun className="w-8 h-8 text-white" />, title: 'In/Outdoor Play', desc: 'Holistic development through play.', color: 'bg-purple-500' },
  ];

  // Testimonials inlined in render


  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-0 md:pt-4 lg:pt-8 pb-6 md:pb-32 bg-[linear-gradient(135deg,#FFFCF5_0%,#FFF5F5_50%,#F0F9FF_100%)]">
        {/* Parallax Floating Clouds/Blobs - Hidden on mobile to reduce noise */}
        <motion.div animate={{ x: [-20, 20, -20], y: [-10, 15, -10] }} transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-10 left-10 w-48 h-48 bg-yellow-200/40 rounded-full blur-3xl hidden md:block" />
        <motion.div animate={{ x: [20, -10, 20], y: [10, -20, 10] }} transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-20 right-10 w-64 h-64 bg-teal-200/30 rounded-full blur-3xl opacity-50 hidden md:block" />
        <motion.div animate={{ x: [-30, 10, -30], y: [30, -10, 30] }} transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-200/20 rounded-full blur-3xl hidden md:block" />

        <div className="container mx-auto px-4 flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            {/* Removed inline Admissions Open badge as it's now in TopBar */}
            <h1 className="text-4xl md:text-7xl font-bold text-gray-800 leading-tight mb-4 md:mb-6 tracking-tight flex flex-wrap gap-x-2 md:gap-x-3 gap-y-1">
              {[
                { text: "Where", delay: 0 },
                { text: "Little", delay: 0.1 },
                { text: "Dreams", delay: 0.2, className: "font-accent italic text-primary" },
                { text: "", break: true }, // Explicit break
                { text: "Come", delay: 0.3 },
                { text: "to", delay: 0.4 },
                { text: "Life", delay: 0.5, className: "font-accent italic text-secondary" }
              ].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: word.delay || 0, ease: "easeOut" }}
                  className={`${word.className || ""} ${word.break ? "basis-full h-0 m-0 p-0" : ""}`}
                >
                  {word.text}
                </motion.span>
              ))}
            </h1>

            <p className="font-medium text-gray-600 text-lg md:text-2xl mb-6 md:mb-8 leading-relaxed max-w-lg">
              Premium Care & Education in Sector 10, Gurgaon. Live CCTV, Home-Cooked Meals & 1:8 Teacher Ratio.
            </p>

            <ul className="mb-10 space-y-3 text-gray-600 font-medium">
              <li className="flex items-center gap-3"><div className="bg-green-100 p-1 rounded-full text-green-600"><ShieldCheck className="w-5 h-5" /></div> Your child is in safe, loving hands</li>
              <li className="flex items-center gap-3"><div className="bg-yellow-100 p-1 rounded-full text-yellow-600"><Sun className="w-5 h-5" /></div> Learning through joyful discovery</li>
              <li className="flex items-center gap-3"><div className="bg-blue-100 p-1 rounded-full text-blue-600"><Award className="w-5 h-5" /></div> Every child feels seen and celebrated</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95, y: 5 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                  <Button variant="primary" size="lg" className="rounded-full shadow-[0_10px_30px_rgba(255,107,91,0.3)] hover:shadow-[0_15px_40px_rgba(255,107,91,0.5)] px-10 py-[1.125rem] text-lg w-full sm:w-auto font-bold border-2 border-transparent">
                    <Star className="w-5 h-5 mr-2 fill-current" /> Book a Visit
                  </Button>
                </motion.div>
              </Link>
              <a href="tel:+918199062496" className="w-full sm:w-auto">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95, y: 5 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                  <Button variant="outline" size="lg" className="rounded-full w-full sm:w-auto border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 px-10 py-[1.125rem] text-lg font-bold">
                    <Phone className="w-5 h-5 mr-2" /> Call Now
                  </Button>
                </motion.div>
              </a>
            </div>

            <div className="mt-6 md:mt-8 flex items-center justify-center md:justify-start gap-4 opacity-90">
              <div className="flex gap-0.5 text-yellow-500 bg-white/50 px-2 py-1 rounded-full backdrop-blur-sm shadow-sm">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm font-bold text-gray-700">Trusted by 50+ Families</p>
            </div>
          </motion.div>

          {/* Hero Image Blob with Magic Float - Simplified Mobile View */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 0.8 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative z-10 w-full"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10"></div>

              {/* Floating Sparkles around image */}
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="absolute -top-4 -left-4 text-accent text-4xl z-20">✨</motion.div>
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 0.5 }} className="absolute bottom-10 -right-8 text-primary text-3xl z-20">✦</motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:-bottom-6 md:-left-6 bg-white py-3 px-5 rounded-2xl shadow-xl border-4 border-yellow-200 z-30 flex items-center gap-3 w-[max-content]"
              >
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm leading-tight">Trusted by</p>
                  <p className="text-xs font-bold text-gray-500">50+ Families</p>
                </div>
              </motion.div>

              <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-8 border-white bg-white transform rotate-2">
                <img
                  src={IMAGES.hero}
                  alt="Happy Kids"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Wave Divider Bottom */}
        <div className="absolute bottom-0 w-full leading-[0] text-white">
          <svg className="block w-full h-[50px] md:h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current"></path>
          </svg>
        </div>
      </section>

      {/* Programs at a Glance - Gateway to Discovery */}
      <section className="-mt-12 md:-mt-20 relative z-20 pb-8 md:pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 md:pb-0 scrollbar-hide -mx-4 px-8 md:mx-0 md:px-0"
          >
            {[
              {
                title: 'Playgroup',
                age: '2-3 Years',
                features: ['Social Skills', 'Music & Dance', 'Creative Art'],
                link: 'playgroup',
                theme: 'from-orange-50 to-orange-100 border-orange-200 text-orange-900',
                icon: '🎨',
                shadow: 'hover:shadow-[0_12px_32px_rgba(255,165,0,0.3)]'
              },
              {
                title: 'Nursery',
                age: '3+ Years',
                features: ['Reading & Writing', 'Math Concepts', 'World Awareness'],
                link: 'nursery',
                theme: 'from-teal-50 to-teal-100 border-teal-200 text-teal-900',
                icon: '🌱',
                shadow: 'hover:shadow-[0_12px_32px_rgba(74,159,181,0.3)]'
              },
              {
                title: 'Daycare',
                age: '1+ Years',
                features: ['Nutritious Meals', 'Peaceful Naps', 'Flexible Hours'],
                link: 'daycare',
                theme: 'from-yellow-50 to-yellow-100 border-yellow-200 text-yellow-900',
                icon: '💖',
                shadow: 'hover:shadow-[0_12px_32px_rgba(234,179,8,0.3)]'
              },
              {
                title: 'After-School',
                age: '3-7 Years',
                features: ['Homework Help', 'Hobby Classes', 'Safe Environment'],
                link: 'after-school',
                theme: 'from-blue-50 to-blue-100 border-blue-200 text-blue-900',
                icon: '🚀',
                shadow: 'hover:shadow-[0_12px_32px_rgba(26,47,79,0.3)]'
              }
            ].map((prog, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
              >
                <Link href={`/programs#${prog.link}`} className="block group h-full min-w-[85vw] md:min-w-0 snap-center">
                  <Card hoverEffect className={`h-full border-2 bg-gradient-to-br ${prog.theme} ${prog.shadow} transition-all duration-500 hover:scale-105 hover:rotate-1 relative overflow-hidden`}>
                    {/* Decorative circle bg */}
                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/40 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                    <div className="relative z-10 flex flex-col items-center text-center pt-4 pb-2">
                      <div className="text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">{prog.icon}</div>
                      <h3 className="text-3xl font-bold mb-1 font-heading">{prog.title}</h3>
                      <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-4">{prog.age}</p>

                      <div className="w-12 h-1 bg-current opacity-20 rounded-full mb-4"></div>

                      <ul className="text-sm font-medium opacity-90 space-y-1">
                        {prog.features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials - Moved Up for Mobile Impact */}
      <TestimonialCarousel />

      {/* Quick Facts Strip - Glassmorphism Pill */}
      <div className="relative z-30 mx-4 md:mx-10 -mt-8 md:-mt-14 mb-16 md:mb-24">
        {/* Glowing backdrop */}
        <div className="absolute inset-0 bg-yellow-300 rounded-[3rem] blur-xl opacity-40"></div>
        
        <div className="bg-white/80 backdrop-blur-xl border-2 border-white/60 py-6 md:py-10 text-gray-800 shadow-[0_20px_50px_rgba(244,196,48,0.2)] rounded-[2rem] md:rounded-[3rem] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-400/20 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="grid grid-cols-2 lg:flex lg:flex-row justify-center lg:justify-around items-center gap-6 lg:gap-12 text-center text-base md:text-xl font-heading font-bold tracking-wide">
              <motion.div whileHover={{ y: -5 }} className="flex flex-col md:flex-row items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-2xl shadow-inner border border-white">🕒</div> 
                <span>8:30 AM - 6:30 PM</span>
              </motion.div>
              <div className="hidden lg:block h-10 w-[2px] bg-gray-200 rounded-full"></div>
              
              <motion.div whileHover={{ y: -5 }} className="flex flex-col md:flex-row items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-2xl shadow-inner border border-white">👶</div> 
                <span>Ages 1 - 7 Years</span>
              </motion.div>
              <div className="hidden lg:block h-10 w-[2px] bg-gray-200 rounded-full"></div>
              
              <motion.div whileHover={{ y: -5 }} className="flex flex-col md:flex-row items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl shadow-inner border border-white">👩‍🏫</div> 
                <span>1:8 Teach Ratio</span>
              </motion.div>
              <div className="hidden lg:block h-10 w-[2px] bg-gray-200 rounded-full"></div>
              
              <motion.div whileHover={{ y: -5 }} className="flex flex-col md:flex-row items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl shadow-inner border border-white">📍</div> 
                <span>Sec 10, Gurgaon</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Section - The Emotional Core */}
      <SectionWrapper background="white" withWaveTop withWaveBottom className="py-8 md:py-24 overflow-hidden relative">
        {/* Floating background shapes - Hidden on mobile */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl rounded-tr-none pointer-events-none hidden md:block"></div>

        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 font-heading">Why Parents Trust Us</h2>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto font-medium">Built for working parents who want a homely yet professional daycare.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 px-4 md:px-0 mt-8">
          {[
            { icon: <ShieldCheck className="w-8 h-8 text-teal-600" />, title: 'Live CCTV Access', desc: 'Watch your child whenever you wish.', highlight: 'Safe. Connected.', bg: 'bg-teal-50 border-teal-200 shadow-[0_15px_30px_rgba(20,184,166,0.15)]', angle: '-rotate-2', delay: 0.1 },
            { icon: <Utensils className="w-8 h-8 text-orange-600" />, title: 'Home-Cooked Meals', desc: 'Fresh, nutritious food made with love.', highlight: 'Healthy. Yummy.', bg: 'bg-orange-50 border-orange-200 shadow-[0_15px_30px_rgba(249,115,22,0.15)]', angle: 'rotate-3 translate-y-4', delay: 0.2 },
            { icon: <Users className="w-8 h-8 text-yellow-600" />, title: '1:8 Teacher Ratio', desc: 'Every child gets the hug they need.', highlight: 'Personal. Caring.', bg: 'bg-yellow-50 border-yellow-200 shadow-[0_15px_30px_rgba(234,179,8,0.15)]', angle: '-rotate-1', delay: 0.3 },
            { icon: <Award className="w-8 h-8 text-purple-600" />, title: 'Experienced Staff', desc: 'Mentors who treat kids like their own.', highlight: 'Trained. Loving.', bg: 'bg-purple-50 border-purple-200 shadow-[0_15px_30px_rgba(168,85,247,0.15)]', angle: 'rotate-2 translate-y-2', delay: 0.4 },
            { icon: <Sun className="w-8 h-8 text-green-600" />, title: 'Holistic Play', desc: 'Learning that feels like magic.', highlight: 'Fun. Smart.', bg: 'bg-green-50 border-green-200 shadow-[0_15px_30px_rgba(34,197,94,0.15)]', angle: '-rotate-3', delay: 0.5 },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item.delay, type: "spring" }}
              className={`pt-6 ${idx > 2 ? 'hidden md:block lg:block' : ''}`}
            >
              <Card className={`h-full flex flex-col items-center text-center p-6 border-4 border-white ${item.bg} hover:border-white transition-all duration-300 group transform ${item.angle} hover:rotate-0 hover:-translate-y-4 hover:scale-105 hover:z-10 relative`}>
                
                {/* 3D chunky badge container */}
                <div className="w-24 h-24 rounded-[1.5rem] bg-white shadow-[0_8px_15px_rgba(0,0,0,0.05),0_0_0_4px_white] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 transform -translate-y-12 shrink-0">
                  <div className="scale-[1.8] transform bg-gray-50/50 p-2 rounded-xl">{item.icon}</div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-800 font-heading -mt-6">{item.title}</h3>
                <p className="text-gray-600 text-[15px] mb-6 leading-relaxed flex-grow hidden md:block">{item.desc}</p>
                
                <div className="w-full pt-4 border-t-2 border-white/60">
                   <span className="text-sm font-bold uppercase tracking-widest text-primary mix-blend-multiply opacity-80">{item.highlight}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>



      {/* Founder Teaser - The Heart */}
      <section className="py-8 md:py-20 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="w-full md:w-1/2 relative group">
              <div className="absolute inset-0 bg-orange-200 rounded-[2rem] transform rotate-3 transition-transform group-hover:rotate-6"></div>
              <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-xl aspect-[4/5] md:aspect-square">
                <img src={IMAGES.founder} alt="Kamini Rajotia" className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border-2 border-orange-100 flex flex-col items-center">
                <span className="text-3xl font-bold text-primary">10+</span>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Years Exp.</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Meet the Heart of <br /><span className="text-primary">Rainbow Sprouts</span></h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                "I started Rainbow Sprouts with a simple dream – to create a warm, trusting space where children feel seen, heard, and deeply cared for. Confidence starts with kindness."
              </p>

              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Kamini Rajotia</h4>
                  <p className="text-gray-500 font-medium">Founder & Principal</p>
                </div>
                <Link href="/about">
                  <Button variant="secondary" className="rounded-full">Read My Story <ArrowRight className="w-4 h-4 ml-2" /></Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Life at Rainbow Sprouts - Gallery Tease */}
      <section className="py-8 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Life at Rainbow Sprouts</h2>
            <p className="text-xl text-gray-500">Every day is a new adventure.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {recentGallery.slice(0, 4).map((img, i) => (
              <Link href="/gallery" key={i} className="block group relative overflow-hidden rounded-2xl aspect-square shadow-md bg-slate-100">
                <img src={img} alt="Gallery" className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/gallery">
              <Button variant="outline" className="rounded-full hover:bg-gray-50">View Full Gallery <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Feed Integration */}
      <section className="py-8 md:py-16 bg-gradient-to-br from-purple-50 to-white">
        <InstagramGrid />
      </section>

      {/* Map Section */}
      <section className="py-8 md:py-24 bg-gradient-to-t from-gray-50 to-white relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Find the Magic</h2>
          <p className="text-xl text-gray-500 mb-12">Come visit us in Sector 10, Gurgaon.</p>
          <div className="rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] h-[400px] border-8 border-white max-w-5xl mx-auto relative bg-slate-100 group">
            {/* Playful map frame overlap - Hidden on mobile */}
            <div className="absolute -top-6 -left-6 bg-yellow-400 w-24 h-24 rounded-full blur-2xl opacity-50 pointer-events-none group-hover:scale-150 transition-transform duration-1000 z-10 hidden md:block"></div>
            <div className="absolute -bottom-6 -right-6 bg-teal-400 w-24 h-24 rounded-full blur-2xl opacity-50 pointer-events-none group-hover:scale-150 transition-transform duration-1000 z-10 hidden md:block"></div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.8577003245023!2d76.9951409!3d28.4537057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17a0ae450437%3A0xd13a807bc964f1c9!2sRainbow%20Sprouts%20Daycare%20%26%20Play%20School!5e0!3m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.1) saturate(1.2)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
              className="relative z-0"
            ></iframe>
          </div>
        </div>
      </section>

    </>
  );
}
