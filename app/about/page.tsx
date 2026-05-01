"use client";

import { motion } from "framer-motion";
import { Target, Rocket, Quote, Star, StarHalf } from "lucide-react";
import TextPressure from "@/components/TextPressure";
import TiltedCard from "@/components/TiltedCard";
import SpotlightCard from "@/components/SpotlightCard";

export default function About() {

  return (
    <div className="flex flex-col w-full -mt-24">
      {/* Header */}
      <section className="pt-40 pb-20 px-6 bg-black text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">Our <span className="text-[#FF670B]">Story</span>.</h1>
          <p className="text-xl text-gray-400 max-w-2xl">We are a team of digital natives passionate about building brands that leave a lasting impact.</p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission Card (Scrollable) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="p-10 border-l-4 border-[#FF670B] bg-[#0c0c0c] rounded-r-2xl h-[550px] flex flex-col"
          >
            <Target className="text-[#FF670B] w-12 h-12 mb-6 shrink-0" />
            <h2 className="text-3xl font-bold mb-4 shrink-0">Our Mission</h2>
            
            {/* Scrollable Container */}
            <div className="overflow-y-auto pr-6 space-y-6 custom-scrollbar h-full flex-grow">
              <p className="text-gray-400 text-lg leading-relaxed">
                At InnoDigitix Solutions, our mission is to empower businesses to grow, scale, and lead in the digital world through innovative and results-driven strategies. We aim to bridge the gap between creativity and technology by delivering solutions that are both impactful and measurable. Our focus is on helping brands build a strong digital presence that not only attracts attention but also drives real business outcomes.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                We are committed to providing high-quality digital marketing, web, and app development services tailored to the unique needs of each client. Our goal is to turn ideas into powerful digital experiences that engage audiences and create lasting impressions. We believe in using data, insights, and advanced tools to guide every decision we make.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                At the core of our mission is a dedication to innovation. We continuously explore new technologies, trends, and strategies to keep our clients ahead of the competition. By integrating AI-powered solutions, automation, and modern marketing techniques, we ensure efficiency and effectiveness in every project.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                We strive to build long-term partnerships based on trust, transparency, and consistent results. Our mission is not just to deliver services, but to become a reliable growth partner for every client we work with. We take pride in understanding our clients’ vision and transforming it into reality through strategic execution.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                We are also committed to affordability without compromising on quality. Our aim is to make professional digital solutions accessible to startups, small businesses, and enterprises alike. Every business deserves the opportunity to succeed in the digital space, and we work to make that possible.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our mission includes fostering creativity in everything we do. From content creation to branding and development, we focus on originality and excellence. We believe that creativity, combined with strategy, is the key to standing out in today’s competitive market.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                We are driven by results and guided by integrity. Every campaign, project, and solution is designed to deliver measurable growth and real value. We continuously monitor, analyze, and optimize our work to ensure maximum performance.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                At InnoDigitix Solutions, our mission is to help businesses not just adapt to the digital age, but thrive in it. We are dedicated to creating meaningful digital transformations that lead to sustainable success.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="p-10 border-l-4 border-white bg-[#0c0c0c] rounded-r-2xl h-[550px] flex flex-col"
          >
            <Rocket className="text-white w-12 h-12 mb-6 shrink-0" />
            <h2 className="text-3xl font-bold mb-4 shrink-0">Our Vision</h2>
            
            <div className="overflow-y-auto pr-6 space-y-6 custom-scrollbar h-full flex-grow">
              <p className="text-gray-400 text-lg leading-relaxed">
                At InnoDigitix Solutions, our vision is to become a globally recognized digital marketing and technology agency known for delivering innovative, impactful, and result-oriented solutions. We aspire to set new standards in the digital industry by combining creativity, technology, and data-driven strategies. Our goal is to help businesses of all sizes unlock their full potential in the ever-evolving digital landscape.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                We envision a future where every brand, regardless of its size or location, has access to powerful digital tools and strategies that drive growth and success. Our aim is to be at the forefront of this transformation, guiding businesses toward smarter and more effective digital practices.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                We strive to lead with innovation by continuously adopting the latest technologies, including AI, automation, and advanced analytics. Our vision is to create a digital ecosystem where businesses can operate more efficiently, connect better with their audience, and achieve sustainable growth.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                We aim to build a reputation for excellence, reliability, and creativity in everything we deliver. By maintaining high standards and focusing on measurable results, we seek to become a trusted partner for clients worldwide.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our vision also includes empowering brands to tell their stories in a unique and engaging way. We believe that every business has a story worth sharing, and our role is to present it in the most impactful manner.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                We are committed to expanding our reach across international markets while maintaining strong roots in local expertise. Our goal is to create a balance between global standards and personalized solutions tailored to each client.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                At InnoDigitix Solutions, we envision long-term partnerships built on trust, transparency, and consistent success. We aim to grow alongside our clients, celebrating their achievements as our own.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Ultimately, our vision is to become a driving force behind digital success stories, helping businesses not just compete, but lead in their industries.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
          <div className="mx-auto w-full max-w-[500px] md:max-w-[800px] h-[60px] md:h-[100px] mb-20">
            <TextPressure 
              text="MEET THE EXPERTS" 
              flex={true} 
              alpha={false} 
              stroke={false} 
              width={true} 
              weight={true} 
              italic={true} 
              textColor="#ffffff" 
              strokeColor="#FF670B" 
              minFontSize={32} 
            />
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-16 w-full max-w-5xl mx-auto">
            {[
              { name: "Sufiyan Maqsood", role: "CEO & DIGITAL STRATEGIST", desc: "Driving real growth for brands with data-driven marketing strategies.", img: "/WhatsApp Image 2026-04-19 at 5.14.54 PM.jpeg" },
              { name: "Abdul Moiz", role: "CO-FOUNDER ", desc: "Delivering modern web solutions and AI enhanced visual content to elevate brands in the digital world", img: "/Gemini_Generated_Image_5mzufz5mzufz5mzu.png" }
            ].map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="w-full md:w-[320px] rounded-[15px] shadow-[0_0_30px_rgba(255,103,11,0.15)]"
              >
                <TiltedCard
                  imageSrc={member.img}
                  altText={member.name}
                  captionText={member.name}
                  containerHeight="400px"
                  containerWidth="100%"
                  imageHeight="400px"
                  imageWidth="100%"
                  rotateAmplitude={12}
                  scaleOnHover={1.05}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={
                    <div className="w-full h-[400px] p-6 flex flex-col justify-end bg-gradient-to-t from-black via-black/40 to-transparent rounded-[15px]">
                      <h3 className="text-2xl font-bold mb-1 text-white">{member.name}</h3>
                      <p className="text-[#FF670B] font-bold text-xs tracking-[0.2em] uppercase mb-3">{member.role}</p>
                      <p className="text-sm text-gray-200">{member.desc}</p>
                    </div>
                  }
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-16">Client <span className="text-[#FF670B]">Testimonials</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {[
              { 
                name: "Raza Khan", 
                project: "E-commerce Business Owner", 
                rating: 5,
                feedback: "InnoDigitix Solutions handled our social media and ads professionally. Within the first month, we started getting consistent orders. Their team understands what actually converts, not just what looks good." 
              },
              { 
                name: "Zoya Sheikh", 
                project: "Beauty Clinic Owner", 
                rating: 4.5,
                feedback: "We were struggling to get quality leads before working with InnoDigitix. Their content strategy and ad campaigns helped us reach the right audience. Now we get regular inquiries and bookings every week." 
              },
              { 
                name: "Hammad Ali", 
                project: "IT Services Provider", 
                rating: 4,
                feedback: "InnoDigitix helped us improve our online presence and generate better leads. The quality of inquiries increased, and we started closing more deals. Their approach is practical and result-oriented" 
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="h-full"
              >
                <SpotlightCard 
                  className="h-full flex flex-col justify-between p-8 bg-[#0c0c0c] border-[#1a1a1a] hover:border-[#FF670B]/50 transition-all duration-500"
                  spotlightColor="rgba(255, 103, 11, 0.15)"
                >
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex gap-1 items-center">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, index) => {
                            const ratingValue = index + 1;
                            if (testimonial.rating >= ratingValue) {
                              return <Star key={index} size={16} className="fill-[#FF670B] text-[#FF670B]" />;
                            } else if (testimonial.rating >= ratingValue - 0.5) {
                              return <StarHalf key={index} size={16} className="fill-[#FF670B] text-[#FF670B]" />;
                            } else {
                              return <Star key={index} size={16} className="text-gray-600" />;
                            }
                          })}
                        </div>
                        <span className="text-xs font-bold text-gray-500 ml-1">{testimonial.rating.toFixed(1)}</span>
                      </div>
                      <Quote className="text-[#FF670B]/20" size={40} />
                    </div>
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                      &quot;{testimonial.feedback}&quot;
                    </p>
                  </div>

                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF670B] to-[#b34700] flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg leading-tight">{testimonial.name}</p>
                      <p className="text-[#FF670B] text-xs uppercase tracking-[0.15em] mt-1 font-medium">{testimonial.project}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
