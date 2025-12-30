"use client";

import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Phone, MessageCircle, MapPin, Clock, ExternalLink, ArrowRight, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const ContactForm = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('success');
    };

    if (status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-100 rounded-2xl p-8 text-center"
            >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700">Thank you! We'll get back to you within 2 hours.</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm font-bold text-green-600 hover:text-green-800 underline"
                >
                    Send another message
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-gray-400 font-medium"
                />
                <input
                    type="tel"
                    placeholder="Phone"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-gray-400 font-medium"
                />
            </div>
            <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-gray-400 font-medium"
            />
            <select
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-gray-600 font-medium bg-white appearance-none"
            >
                <option value="">Select Inquiry Type</option>
                <option value="tour">Book a Tour</option>
                <option value="admission">Admission Info</option>
                <option value="general">General Question</option>
            </select>
            <textarea
                placeholder="How can we help?"
                rows={3}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-gray-400 font-medium resize-none"
            ></textarea>

            <Button
                type="submit"
                fullWidth
                size="lg"
                disabled={status === 'submitting'}
                className="shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
            >
                {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
            </Button>
        </form>
    );
};

export default function ContactPage() {
    return (
        <SectionWrapper background="soft" className="min-h-screen pt-20">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6 text-gray-900"
                    >
                        Get in <span className="text-primary font-accent italic">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 font-medium"
                    >
                        We'd love to hear from you and show you around.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <Card className="p-8 md:p-12 mb-16 border-t-4 border-t-primary shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
                            {/* Contact Info */}
                            <div className="space-y-8">
                                <h2 className="text-3xl font-bold mb-8 font-accent text-gray-800">Contact Information</h2>
                                <ul className="space-y-8">
                                    <li className="flex items-start gap-5 group">
                                        <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                            <MapPin className="text-blue-500 w-7 h-7" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900 text-lg mb-1">Visit Us</p>
                                            <p className="text-gray-600 leading-relaxed">Sector 10, Gurgaon<br />(Near Civil Hospital)</p>
                                            <a
                                                href="https://www.google.com/maps/dir/?api=1&destination=Sector+10+Gurugram+Haryana"
                                                target="_blank"
                                                className="inline-flex items-center text-sm font-bold text-blue-500 mt-2 hover:underline link-underline"
                                            >
                                                Get Directions <ArrowRight className="w-4 h-4 ml-1" />
                                            </a>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-5 group">
                                        <div className="w-14 h-14 rounded-full bg-green-50 border border-green-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                            <Phone className="text-green-600 w-7 h-7" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900 text-lg mb-1">Call Us</p>
                                            <a href="tel:+918199062496" className="text-gray-600 hover:text-green-600 transition-colors block text-lg font-medium link-underline">+91 81990 62496</a>
                                            <p className="text-xs font-bold text-green-600 uppercase tracking-wider mt-1">Typical response time: &lt; 2 hours</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-5 group">
                                        <div className="w-14 h-14 rounded-full bg-yellow-50 border border-yellow-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                            <Clock className="text-yellow-600 w-7 h-7" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900 text-lg mb-1">Timings</p>
                                            <p className="text-gray-600">Mon-Fri: 8:30 AM - 6:30 PM</p>
                                            <p className="text-gray-600">Sat: 8:30 AM - 3:00 PM</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Vertical Divider (Desktop) */}
                            <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent absolute left-1/2 top-4 bottom-4 -ml-px"></div>

                            {/* Actions & Inquiry Form */}
                            <div className="flex flex-col gap-8">
                                <div>
                                    <h2 className="text-3xl font-bold mb-2 font-accent text-gray-800">Send an Inquiry</h2>
                                    <p className="text-gray-500 mb-6 font-medium">Have a question? Drop us a line.</p>

                                    <ContactForm />
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-gray-500 text-sm font-bold uppercase tracking-wider before:h-px before:flex-1 before:bg-gray-200 after:h-px after:flex-1 after:bg-gray-200">
                                        OR
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <a href="tel:+918199062496" className="w-full group">
                                            <Button fullWidth size="md" className="h-12 text-base gap-2 shadow-lg shadow-blue-500/20 group-hover:-translate-y-1">
                                                <Phone className="w-4 h-4" /> Call
                                            </Button>
                                        </a>

                                        <a href="https://wa.me/918199062496" target="_blank" className="w-full group">
                                            <Button fullWidth variant="secondary" size="md" className="bg-green-500 hover:bg-green-600 h-12 text-base gap-2 shadow-lg shadow-green-500/20 group-hover:-translate-y-1 text-white border-none">
                                                <MessageCircle className="w-4 h-4" /> WhatsApp
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </motion.div>

                {/* Map */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white h-[400px] bg-slate-100"
                >
                    {/* Overlay Button */}
                    <a href="https://www.google.com/maps/dir/?api=1&destination=Sector+10+Gurugram+Haryana" target="_blank" className="absolute top-6 right-6 z-10">
                        <Button variant="primary" size="sm" className="shadow-lg rounded-full text-sm font-bold">
                            Open in Google Maps <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                    </a>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14032.535804567298!2d77.017!3d28.448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sSector%2010%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1703607777777!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                        className="grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                    ></iframe>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
