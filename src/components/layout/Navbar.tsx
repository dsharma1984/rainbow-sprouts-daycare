"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { BookTourModal } from '../ui/BookTourModal';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/programs', label: 'Programs' },
        { href: '/gallery', label: 'Gallery' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-40 bg-white border-b border-slate-100 shadow-sm transition-all duration-300">
                <div className="container mx-auto px-4 h-22 md:h-20 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 mx-auto md:mx-0">
                        <img
                            src="/images/logo-full.png"
                            alt="Rainbow Sprouts"
                            className="w-[220px] md:w-[200px] h-auto object-contain mix-blend-multiply transition-all duration-300 transform translate-y-1"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-600 hover:text-primary transition-colors uppercase tracking-widest text-sm font-bold"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <Button onClick={() => setIsModalOpen(true)}>Book a Visit</Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden absolute left-4 p-2 text-gray-600"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg py-4 flex flex-col items-center gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-lg text-gray-700 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </header>

            {/* Spacer for fixed header */}
            <div className="h-22 md:h-20" />

            {/* Mobile Sticky Bottom Bar */}
            <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-4 z-40 flex gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                <a href="tel:+918199062496" className="flex-1">
                    <Button variant="secondary" size="md" fullWidth className="gap-2">
                        <Phone className="w-4 h-4" /> Call
                    </Button>
                </a>
                <Button
                    variant="primary"
                    size="md"
                    fullWidth
                    className="flex-1 gap-2"
                    onClick={() => setIsModalOpen(true)}
                >
                    <MessageCircle className="w-4 h-4" /> Book Tour
                </Button>
            </div>

            <BookTourModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
