"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");

    const formData = new FormData(form);
    formData.append("access_key", "918576b8-fdfb-463e-b262-1fa7776b277d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        form.reset(); // Clear the form fields using the captured reference
        
        // Reset status back to idle after 3 seconds
        setTimeout(() => {
          setStatus("idle");
        }, 3000);
      } else {
        console.error("Web3Forms Error:", result);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="flex flex-col w-full -mt-24">
      <section className="pt-40 pb-24 px-6 bg-black min-h-screen">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Let&apos;s <span className="text-[#FF670B]">Talk</span>.</h1>
            <p className="text-xl text-gray-400 mb-12">Whether you need a full digital transformation or just have a few questions, we&apos;re here to help.</p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#111] rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-[#FF670B]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Our Office</h3>
                  <p className="text-gray-400">Karachi, Pakistan</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#111] rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-[#FF670B]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Call Us</h3>
                  <p className="text-gray-400">+92 325 2730032</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#111] rounded-full flex items-center justify-center shrink-0">
                  <Mail className="text-[#FF670B]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Email Us</h3>
                  <p className="text-gray-400">innodigitixsolutions@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <form onSubmit={handleSubmit} className="bg-[#0a0a0a] border border-[#1a1a1a] p-8 md:p-12 rounded-3xl">
              <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                    <input name="name" required type="text" className="w-full bg-[#111] border border-[#333] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF670B]/50 focus:border-[#FF670B] transition-all" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input name="email" required type="email" className="w-full bg-[#111] border border-[#333] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF670B]/50 focus:border-[#FF670B] transition-all" placeholder="Enter your email address" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
                  <input name="phone" type="text" className="w-full bg-[#111] border border-[#333] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF670B]/50 focus:border-[#FF670B] transition-all" placeholder="Enter your phone number" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea name="message" required rows={5} className="w-full bg-[#111] border border-[#333] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF670B]/50 focus:border-[#FF670B] transition-all" placeholder="Tell us about your project"></textarea>
                </div>

                <button 
                  disabled={status === "loading" || status === "success"}
                  type="submit" 
                  className="w-full bg-[#FF670B] hover:bg-[#ff7a2b] disabled:bg-gray-700 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : status === "error" ? "Something went wrong!" : <><Send size={20} /> Send Message</>}
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
