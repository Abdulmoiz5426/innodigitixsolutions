"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BarChart, Code, Smartphone, Target } from "lucide-react";
import RippleGrid from "@/components/RippleGrid";
import GlareHover from "@/components/GlareHover";
import StarBorder from "@/components/StarBorder";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Home() {
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex flex-col w-full -mt-24">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-0 opacity-30"><RippleGrid gridColor="#FF670B" rippleIntensity={0.06} /></div>
          {/* Black overlay to fade the ripple grid slightly */}
          <div className="absolute inset-0 bg-black/40 z-5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF670B]/10 rounded-full blur-[140px] pointer-events-none z-5" />
        </div>
        
        <motion.div 
          className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Grow Your Business with <span className="text-[#FF670B]">Powerful Digital Solutions</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-2xl text-gray-400 mb-10 max-w-4xl mx-auto">
            We help brands scale faster through result-driven digital marketing and high-performance web & app development.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-[#FF670B] hover:bg-[#ff7a2b] text-white font-semibold rounded-full shadow-lg shadow-[#FF670B]/30 hover:scale-105 transition-all flex items-center justify-center gap-2">
              Get a Free Consultation <ArrowRight size={20} />
            </Link>
            <StarBorder as={Link} href="/services" color="#FF670B" speed="4s" className="hover:scale-105 transition-all">
              <span className="font-semibold text-[15px]">View Our Services</span>
            </StarBorder>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">What We Do Best</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive digital solutions designed to elevate your brand and maximize your ROI in the digital landscape.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: <Target className="text-[#FF670B] w-8 h-8 mb-4"/>, title: "SEO Strategy", desc: "Rank higher on search engines and attract organic, high-intent traffic." },
              { icon: <Smartphone className="text-[#FF670B] w-8 h-8 mb-4"/>, title: "Social Media", desc: "Build loyal communities and engage your audience across all platforms." },
              { icon: <Code className="text-[#FF670B] w-8 h-8 mb-4"/>, title: "Web Dev", desc: "Blazing fast, responsive websites optimized for seamless user experiences." },
              { icon: <BarChart className="text-[#FF670B] w-8 h-8 mb-4"/>, title: "Data Analytics", desc: "Make informed decisions based on deep actionable insights and performance data." },
            ].map((service, index) => (
              <motion.div 
                key={index} 
                className="group h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlareHover 
                  background="#0c0c0c" 
                  borderColor="#1a1a1a" 
                  glareColor="#FF670B" 
                  borderRadius="1.5rem"
                  className="h-full border-none"
                  transitionDuration={1200}
                >
                  <Card className="h-full bg-transparent border-none text-white shadow-none pt-4">
                    <CardHeader>
                      <div className="mb-2">{service.icon}</div>
                      <CardTitle className="text-xl font-bold group-hover:text-[#FF670B] transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                    </CardContent>
                  </Card>
                </GlareHover>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="/services" className="inline-block px-10 py-4 bg-transparent border border-[#FF670B] text-[#FF670B] font-bold rounded-full hover:bg-[#FF670B] hover:text-white hover:scale-105 transition-all shadow-[0_0_15px_rgba(255,103,11,0.3)] hover:shadow-[0_0_25px_rgba(255,103,11,0.6)]">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="w-full text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">Who We Are</h2>
          </motion.div>

          <div className="w-full flex flex-col gap-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Link 
                href="/about" 
                className="group flex flex-col md:flex-row items-center justify-between p-5 md:p-6 bg-[#0c0c0c] border border-[#1a1a1a] rounded-2xl hover:border-[#FF670B] hover:shadow-[0_10px_30px_rgba(255,103,11,0.15)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-left w-full md:w-auto">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#FF670B] transition-colors">Mission</h3>
                  <p className="text-base text-gray-400">To help businesses grow through smart digital strategies and innovative technology.</p>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-600 group-hover:text-[#FF670B] group-hover:translate-x-2 transition-all duration-300 shrink-0 mt-4 md:mt-0 self-end md:self-auto" />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Link 
                href="/about" 
                className="group flex flex-col md:flex-row items-center justify-between p-5 md:p-6 bg-[#0c0c0c] border border-[#1a1a1a] rounded-2xl hover:border-[#FF670B] hover:shadow-[0_10px_30px_rgba(255,103,11,0.15)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-left w-full md:w-auto">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#FF670B] transition-colors">Vision</h3>
                  <p className="text-base text-gray-400">To become a leading digital agency delivering impactful and scalable solutions.</p>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-600 group-hover:text-[#FF670B] group-hover:translate-x-2 transition-all duration-300 shrink-0 mt-4 md:mt-0 self-end md:self-auto" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative bg-gradient-to-b from-black to-[#050505]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to grow your business?</h2>
          <p className="text-xl text-gray-400 mb-10">Join hundreds of successful clients who have scaled their businesses with InnoDigitix.</p>
          <Link href="/contact" className="inline-block px-10 py-5 text-lg bg-white text-black font-bold rounded-full hover:bg-[#FF670B] hover:text-white transition-colors shadow-xl">
            Let&apos;s Talk About Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
