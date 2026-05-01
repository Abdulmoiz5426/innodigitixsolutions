"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ShieldCheck, Info, Eye, Share2, Lock, Link as LinkIcon, UserCheck, RefreshCw } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: <Info className="text-[#FF670B] w-6 h-6" />,
      title: "1. What Information We Collect",
      content: [
        "Basic details like your name, email address, phone number, and company name.",
        "Information you share with us about your project or business needs.",
        "Technical details such as your IP address, browser type, and how you use our website."
      ]
    },
    {
      icon: <Eye className="text-[#FF670B] w-6 h-6" />,
      title: "2. How We Use Your Information",
      content: [
        "Communicate with you and respond to your inquiries.",
        "Deliver and improve our services.",
        "Manage projects and provide support.",
        "Share updates, offers, or helpful content (only if you agree)."
      ]
    },
    {
      icon: <ShieldCheck className="text-[#FF670B] w-6 h-6" />,
      title: "3. Cookies & Website Tracking",
      content: [
        "Like most websites, we use cookies to improve your browsing experience and understand how visitors use our site.",
        "You can choose to disable cookies anytime through your browser settings."
      ]
    },
    {
      icon: <Share2 className="text-[#FF670B] w-6 h-6" />,
      title: "4. Sharing Your Information",
      content: [
        "We respect your trust and do not sell your personal data.",
        "We may only share information with reliable third-party tools (such as analytics or payment services) that help us operate our business.",
        "Authorities if required by law."
      ]
    },
    {
      icon: <Lock className="text-[#FF670B] w-6 h-6" />,
      title: "5. Keeping Your Data Safe",
      content: [
        "We take reasonable steps to protect your information from unauthorized access, loss, or misuse."
      ]
    },
    {
      icon: <LinkIcon className="text-[#FF670B] w-6 h-6" />,
      title: "6. External Links",
      content: [
        "Our website may include links to other websites. Once you leave our site, we are not responsible for how those websites handle your data."
      ]
    },
    {
      icon: <UserCheck className="text-[#FF670B] w-6 h-6" />,
      title: "7. Your Control & Rights",
      content: [
        "You are always in control of your information. You can ask us to update or delete your data, or opt out of marketing messages at any time."
      ]
    },
    {
      icon: <RefreshCw className="text-[#FF670B] w-6 h-6" />,
      title: "8. Updates to This Policy",
      content: [
        "We may update this policy occasionally to reflect changes in our services or legal requirements. Any updates will be posted here."
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full -mt-24">
      <section className="pt-40 pb-24 px-6 bg-black min-h-screen">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 italic">Privacy <span className="text-[#FF670B]">Policy</span>.</h1>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              At InnoDigitix Solutions, your privacy matters to us. We believe in being transparent about how your information is collected and used, and we are committed to keeping it safe.
            </p>
            
            <div className="space-y-12 mb-16">
              {sections.map((section, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#0c0c0c] border border-[#1a1a1a] p-8 rounded-3xl group hover:border-[#FF670B]/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-[#111] rounded-2xl group-hover:bg-[#FF670B]/10 transition-colors">
                      {section.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  </div>
                  <ul className="space-y-4">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400 leading-relaxed">
                        <div className="w-1.5 h-1.5 bg-[#FF670B] rounded-full mt-2.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-[#0c0c0c] border border-[#1a1a1a] p-10 rounded-3xl text-center"
            >
              <h2 className="text-3xl font-bold mb-8 italic">9. Contact <span className="text-[#FF670B]">Us</span></h2>
              <p className="text-gray-400 mb-8">If you have any questions or concerns, feel free to reach out:</p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <a href="https://wa.me/923252730032" className="flex items-center gap-3 text-gray-300 hover:text-[#FF670B] transition-colors group">
                  <div className="p-3 bg-[#111] rounded-2xl group-hover:bg-[#FF670B]/10 transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="font-semibold">+92 325 2730032</span>
                </a>
                <a href="mailto:innodigitixsolutions@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-[#FF670B] transition-colors group">
                  <div className="p-3 bg-[#111] rounded-2xl group-hover:bg-[#FF670B]/10 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="font-semibold">innodigitixsolutions@gmail.com</span>
                </a>
              </div>
              <p className="mt-8 text-gray-500 font-medium tracking-wider uppercase text-sm">InnoDigitix Solutions</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
