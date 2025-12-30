"use client";

import { useState } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { IMAGES } from '@/config/images';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<{ src: string, caption: string } | null>(null);

    const galleryImages = [
        { src: IMAGES.gallery1, caption: "Creative Play Time" },
        { src: IMAGES.gallery2, caption: "Outdoor Adventures" },
        { src: IMAGES.gallery3, caption: "Learning New Things" },
        { src: IMAGES.gallery4, caption: "Group Activities" },
        { src: IMAGES.gallery5, caption: "Art & Craft Fun" },
        { src: IMAGES.gallery6, caption: "Celebrations & Joy" },
        { src: IMAGES.toddler, caption: "Early Steps" },
        { src: IMAGES.playgroup, caption: "Making Friends" }
    ];

    const openLightbox = (img: { src: string, caption: string }) => setSelectedImage(img);
    const closeLightbox = () => setSelectedImage(null);

    const navigate = (direction: 'next' | 'prev', e: React.MouseEvent) => {
        e.stopPropagation();
        if (!selectedImage) return;
        const currentIndex = galleryImages.findIndex(img => img.src === selectedImage.src);
        const nextIndex = direction === 'next'
            ? (currentIndex + 1) % galleryImages.length
            : (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        setSelectedImage(galleryImages[nextIndex]);
    };

    return (
        <div className="bg-slate-50 min-h-screen pt-20">
            <SectionWrapper background="white" withWaveBottom>
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6 text-gray-900"
                    >
                        Life at <span className="text-primary font-accent italic">Rainbow Sprouts</span>
                    </motion.h1>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100px" }}
                        className="h-1 bg-secondary mx-auto rounded-full mb-6"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xl text-gray-600 font-medium"
                    >
                        Glimpses of joy, learning, and fun!
                    </motion.p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 px-4">
                    {galleryImages.map((img, idx) => (
                        <motion.div
                            key={`gallery-item-${idx}`}
                            layoutId={`image-${img.src}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            onClick={() => openLightbox(img)}
                            className="break-inside-avoid rounded-3xl overflow-hidden shadow-md cursor-zoom-in group relative border-4 border-white transform transition-all duration-500 hover:shadow-[0_20px_50px_rgba(74,159,181,0.2)]"
                        >
                            <motion.img
                                src={img.src}
                                alt={img.caption}
                                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Magical Overlay on Hover */}
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                <div className="bg-white/90 p-3 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                                    <ZoomIn className="w-6 h-6 text-primary" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
                    >
                        {/* Close Button */}
                        <motion.button
                            whileHover={{ rotate: 90 }}
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-colors z-50"
                        >
                            <X className="w-8 h-8" />
                        </motion.button>

                        {/* Navigation Buttons (Desktop) */}
                        <button
                            onClick={(e) => navigate('prev', e)}
                            className="absolute left-6 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-colors hidden md:block z-50"
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>
                        <button
                            onClick={(e) => navigate('next', e)}
                            className="absolute right-6 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-colors hidden md:block z-50"
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>

                        <div className="relative max-w-5xl w-full flex flex-col items-center">
                            {/* Animated Image */}
                            <motion.div
                                layoutId={`image-${selectedImage.src}`}
                                className="relative w-full max-h-[80vh] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-black"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <motion.img
                                    src={selectedImage.src}
                                    alt={selectedImage.caption}
                                    className="w-full h-full object-contain max-h-[80vh]"
                                />
                            </motion.div>

                            {/* Caption */}
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-white text-xl font-medium mt-4 font-heading tracking-wide"
                            >
                                {selectedImage.caption}
                            </motion.p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
