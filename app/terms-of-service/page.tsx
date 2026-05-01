"use client";

import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <div className="flex flex-col w-full -mt-24">
      <section className="pt-40 pb-24 px-6 bg-black min-h-screen">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8 italic">Terms of <span className="text-[#FF670B]">Service</span>.</h1>
            
            <div className="bg-[#0c0c0c] border border-[#1a1a1a] p-8 md:p-12 rounded-3xl text-gray-400 space-y-6 leading-relaxed">
              <p className="text-xl text-white font-semibold">Placeholder Content</p>
              <p>
                We are currently preparing our detailed Terms of Service. Once ready, it will be displayed here. 
                InnoDigitix Solutions is committed to providing clear and fair terms for all our clients.
              </p>
              <div className="h-px bg-[#1a1a1a] w-full my-8" />
              <p>
                Please provide the content for this page so we can update it for you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
