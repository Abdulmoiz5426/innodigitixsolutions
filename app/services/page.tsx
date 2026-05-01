"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Search, Share2, PenTool, TrendingUp, BarChart, Users, Mail, LayoutTemplate, Smartphone, Code, Lightbulb, ShoppingCart, Wrench, RefreshCw } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

export default function Services() {
  const digitalMarketing = [
    { icon: <Share2 className="w-8 h-8 text-[#FF670B] mb-4" />, title: "Social Media Marketing", desc: "Build highly engaged communities and create viral campaigns that convert followers into loyal customers." },
    { icon: <TrendingUp className="w-8 h-8 text-[#FF670B] mb-4" />, title: "Paid Advertising", desc: "Instant traffic with positive ROI. We manage high-performing Google and Meta ad campaigns." },
    { icon: <PenTool className="w-8 h-8 text-[#FF670B] mb-4" />, title: "Content Creation", desc: "Engage your audience with high-quality content ranging from short-form videos to professional copywriting." },
    { icon: <Search className="w-8 h-8 text-[#FF670B] mb-4" />, title: "SEO", desc: "Dominate search results with our technical, on-page, and off-page SEO strategies to maximize organic traffic." },
    { icon: <Mail className="w-8 h-8 text-[#FF670B] mb-4" />, title: "Email & CRM Marketing", desc: "Nurture leads and drive repeat business with personalized, automated email outreach campaigns." },
    { icon: <Users className="w-8 h-8 text-[#FF670B] mb-4" />, title: "Influencer Marketing", desc: "Leverage industry voices to expand your brand reach and build authentic trust with your target market." },
    { icon: <BarChart className="w-8 h-8 text-[#FF670B] mb-4" />, title: "Analytics & Reporting", desc: "Make informed, data-driven decisions based on deep actionable insights and transparent performance metrics." },
  ];

  const webDev = [
    { icon: <LayoutTemplate className="w-8 h-8 text-[#FF670B] mb-4" />, title: "Website Development", desc: "Premium, ultra-fast landing pages and corporate websites built to be 24/7 lead generation machines." },
    { icon: <Code className="w-8 h-8 text-[#FF670B] mb-4" />, title: "Custom Web Development", desc: "Scalable web applications built on modern tech stacks like Next.js and React to solve complex problems." },
    { icon: <Smartphone className="w-8 h-8 text-[#FF670B] mb-4" />, title: "Mobile App Development", desc: "Native and cross-platform mobile solutions delivering fluid experiences on iOS and Android devices." },
    { icon: <Lightbulb className="w-8 h-8 text-[#FF670B] mb-4" />, title: "UI/UX Design", desc: "User-centric interface design that ensures intuitive navigation, accessibility, and high conversion rates." },
    { icon: <ShoppingCart className="w-8 h-8 text-[#FF670B] mb-4" />, title: "E-commerce Solutions", desc: "End-to-end online storefronts optimized for seamless checkouts, inventory tracking, and sales growth." },
    { icon: <Wrench className="w-8 h-8 text-[#FF670B] mb-4" />, title: "Maintenance & Support", desc: "Ongoing server management, security patching, and core updates to keep your ecosystem reliable." },
    { icon: <RefreshCw className="w-8 h-8 text-[#FF670B] mb-4" />, title: "Integrations & Automation", desc: "Connecting third-party APIs and automating workflows to save you hundreds of hours in operational tasks." },
  ];

  return (
    <div className="flex flex-col w-full -mt-24">
      {/* Header */}
      <section className="pt-40 pb-20 px-6 bg-black text-center border-b border-[#111]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our <span className="text-[#FF670B]">Services</span>.</h1>
          <p className="text-xl text-gray-400">Everything you need to scale your digital presence under one roof.</p>
        </motion.div>
      </section>

      {/* Services Content Sections */}
      <section className="py-24 px-6 bg-[#050505] space-y-32">
        {/* Section 1: Digital Marketing */}
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 border-l-4 border-[#FF670B] pl-6">
            <h2 className="text-4xl font-bold mb-4">Digital Marketing</h2>
            <p className="text-gray-400 text-lg">Comprehensive strategies designed to capture attention and convert audiences.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalMarketing.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="h-full"
              >
                <SpotlightCard spotlightColor="rgba(255, 103, 11, 0.2)" className="h-full bg-[#0c0c0c] border border-[#1a1a1a] p-8 rounded-3xl shadow-lg hover:shadow-[0_0_20px_rgba(255,103,11,0.15)] hover:border-[#FF670B] hover:-translate-y-2 transition-all duration-300 group flex flex-col items-start">
                  {service.icon}
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: Web & App Dev */}
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 border-l-4 border-white pl-6">
            <h2 className="text-4xl font-bold mb-4">Web & App Development</h2>
            <p className="text-gray-400 text-lg">High-performance digital products engineered for speed and scalability.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webDev.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="h-full"
              >
                <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.15)" className="h-full bg-[#0c0c0c] border border-[#1a1a1a] p-8 rounded-3xl shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:border-white hover:-translate-y-2 transition-all duration-300 group flex flex-col items-start">
                  {service.icon}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-24 px-6 min-h-[40vh] flex items-center justify-center bg-[#050505] border-t border-[#1a1a1a] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="text-center max-w-3xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Not sure what you need?</h2>
          <p className="text-xl text-gray-400 mb-10 font-medium">Let&apos;s hop on a discovery call. We&apos;ll audit your current digital presence and propose a tailored strategy.</p>
          <Link href="/contact" className="inline-block px-10 py-5 text-lg bg-[#FF670B] text-white font-bold rounded-full hover:scale-105 hover:bg-[#ff7a2b] hover:shadow-[0_0_20px_rgba(255,103,11,0.4)] transition-all shadow-xl">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
