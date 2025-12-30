import Link from 'next/link';
import { Phone, MapPin, Mail, Instagram, Facebook } from 'lucide-react';
import { IMAGES } from '@/config/images';

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 md:py-16">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Brand */}
                <div>
                    <div className="mb-6 flex items-center gap-3">
                        <img
                            src="/images/logo-icon.png"
                            alt="Logo"
                            className="h-10 w-10 object-contain"
                        />
                        <h3 className="text-2xl font-bold text-white tracking-wide">Rainbow Sprouts</h3>
                    </div>
                    <p className="mb-6 max-w-sm text-slate-400">
                        Nurturing young minds with love, care, and creativity. Join us in building a colorful future for your child.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/rainbowsproutsdaycare_sec10ggn/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition-colors text-white group">
                            <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61555075214265" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-white group">
                            <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
                    <ul className="space-y-3">
                        {[
                            { label: 'Our Programs', href: '/programs' },
                            { label: 'About Founder', href: '/about' },
                            { label: 'Photo Gallery', href: '/gallery' },
                            { label: 'Contact Us', href: '/contact' },
                        ].map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className="hover:text-primary transition-colors">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                            <span>Sector 10, Gurgaon<br />(Near Civil Hospital)</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-primary shrink-0" />
                            <a href="tel:+918199062496" className="hover:text-white transition-colors">+91 81990 62496</a>
                        </li>
                        {/* <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <a href="mailto:info@rainbowsprouts.com" className="hover:text-white transition-colors">info@rainbowsprouts.com</a>
            </li> */}
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-4 pt-8 mt-8 border-t border-slate-800 text-center text-sm text-slate-500">
                <p className="mb-2">© {new Date().getFullYear()} Rainbow Sprouts Daycare. All rights reserved.</p>
                <p className="text-[11px] text-slate-600 tracking-[2px] opacity-80">✨ DS</p>
            </div>
        </footer>
    );
}
