import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const FacebookIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const XIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
);

const WhatsappIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.062-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const InstagramIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const LinkedinIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#1a1a1a] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-2">
              <Image src="/logo.png" alt="InnoDigitix Solutions" width={112} height={112} className="h-28 w-auto object-contain scale-110" />
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              Elevating brands through innovative digital marketing, stunning web design, and data-driven strategies.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61576469057481" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center text-gray-400 hover:bg-[#FF670B] hover:text-white transition-colors">
                <FacebookIcon size={18} />
              </a>
              <a href="https://x.com/innodigitix?s=21" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center text-gray-400 hover:bg-[#FF670B] hover:text-white transition-colors">
                <XIcon size={16} />
              </a>
              <a href="https://www.instagram.com/innodigitix_solutions" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center text-gray-400 hover:bg-[#FF670B] hover:text-white transition-colors">
                <InstagramIcon size={18} />
              </a>
              <a href="https://www.linkedin.com/company/innodigitix/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center text-gray-400 hover:bg-[#FF670B] hover:text-white transition-colors">
                <LinkedinIcon size={18} />
              </a>
              <a href="https://wa.me/923252730032" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center text-gray-400 hover:bg-[#FF670B] hover:text-white transition-colors">
                <WhatsappIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/" className="hover:text-[#FF670B] hover:translate-x-1 inline-block transition-all duration-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#FF670B] hover:translate-x-1 inline-block transition-all duration-300">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[#FF670B] hover:translate-x-1 inline-block transition-all duration-300">Our Services</Link></li>
              <li><Link href="/contact" className="hover:text-[#FF670B] hover:translate-x-1 inline-block transition-all duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/services" className="hover:text-[#FF670B] hover:translate-x-1 inline-block transition-all duration-300">SEO Optimization</Link></li>
              <li><Link href="/services" className="hover:text-[#FF670B] hover:translate-x-1 inline-block transition-all duration-300">Social Media Marketing</Link></li>
              <li><Link href="/services" className="hover:text-[#FF670B] hover:translate-x-1 inline-block transition-all duration-300">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-[#FF670B] hover:translate-x-1 inline-block transition-all duration-300">Content Creation</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3 group">
                <MapPin size={20} className="text-[#FF670B] shrink-0 mt-1 drop-shadow-md group-hover:scale-110 transition-transform" />
                <span className="cursor-default text-gray-400">Karachi, Pakistan<br/>Serving clients globally.</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone size={20} className="text-[#FF670B] shrink-0 drop-shadow-md group-hover:scale-110 transition-transform" />
                <a href="tel:+923252730032" className="text-gray-400 hover:text-[#FF670B] transition-colors drop-shadow-sm">+92 325 2730032</a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail size={20} className="text-[#FF670B] shrink-0 drop-shadow-md group-hover:scale-110 transition-transform" />
                <a href="mailto:innodigitixsolutions@gmail.com" className="text-gray-400 hover:text-[#FF670B] transition-colors drop-shadow-sm">innodigitixsolutions@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} InnoDigitix Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
