"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CalendarCheck } from 'lucide-react';
import { Button } from './Button';

interface BookTourModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function BookTourModal({ isOpen, onClose }: BookTourModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        program: 'Toddler (1-2 Years)',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const phone = '918199062496';
        const text = `Hi, I am ${formData.name}, interested in ${formData.program} for my ${formData.age} yr old child.`;
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative w-full max-w-md bg-white rounded-3xl p-6 shadow-xl z-50"
                    >
                        <button
                            onClick={onClose}
                            className="absolute right-4 top-4 p-2 rounded-full hover:bg-slate-100 transition-colors"
                        >
                            <X className="w-5 h-5 text-gray-500" />
                        </button>

                        <div className="text-center mb-6">
                            <div className="w-12 h-12 bg-blue-100 text-primary rounded-full flex items-center justify-center mx-auto mb-3">
                                <CalendarCheck className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Book a School Tour</h2>
                            <p className="text-gray-500 text-sm">Come visit us and see the magic!</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Parent's Name</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. John Doe"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Child's Age (Years)</label>
                                <input
                                    type="number"
                                    required
                                    placeholder="e.g. 2.5"
                                    step="0.1"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    value={formData.age}
                                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Interested Program</label>
                                <select
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                                    value={formData.program}
                                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                                >
                                    <option>Toddler (1-2 Years)</option>
                                    <option>Playgroup (2-3 Years)</option>
                                    <option>Nursery (3+ Years)</option>
                                    <option>Daycare & After School</option>
                                </select>
                            </div>

                            <div className="pt-2">
                                <Button type="submit" fullWidth size="lg">
                                    Submit on WhatsApp
                                </Button>
                                <p className="text-xs text-center text-gray-400 mt-3">
                                    We'll open WhatsApp to send your details.
                                </p>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
