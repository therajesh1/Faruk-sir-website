import { motion } from 'motion/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, ExternalLink, Shield, FileText, Users, Mail } from 'lucide-react';
import { Button } from './ui/button';

export default function CybersecurityLab() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const navLinks = [
        { name: 'HOME', href: '#home' },
        { name: 'VULNERABILITIES', href: '#vulnerabilities' },
        { name: 'PUBLICATIONS', href: '#publications' },
        { name: 'ABOUT US', href: '#about' },
        { name: 'RESEARCH', href: '#research' },
        { name: 'CONTACT US', href: '#contact' },
    ];

    const cveList = [
        { id: 'CVE-2023-38600', desc: 'Cross-site scripting (XSS) vulnerability in rconfig 3.9.6 via the scanOption parameter.', link: 'https://nvd.nist.gov/vuln/detail/CVE-2023-38600' },
        { id: 'CVE-2023-37148', desc: 'SQL Injection vulnerability in rconfig 3.9.6 via the searchColumn parameter.', link: 'https://nvd.nist.gov/vuln/detail/CVE-2023-37148' },
        { id: 'CVE-2023-32970', desc: 'Improper Neutralization of Special Elements used in an OS Command (\'OS Command Injection\')', link: 'https://nvd.nist.gov/vuln/detail/CVE-2023-32970' },
        { id: 'CVE-2023-32219', desc: 'Unrestricted Upload of File with Dangerous Type', link: 'https://nvd.nist.gov/vuln/detail/CVE-2023-32219' },
    ];

    return (
        <div className="min-h-screen bg-[#000223] text-white font-sans overflow-x-hidden">
            {/* Navigation */}
            <nav className="fixed w-full z-50 top-0 left-0 transition-all duration-300 bg-[#000223]/80 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex-shrink-0 flex items-center gap-2">
                            <Shield className="h-8 w-8 text-cyan-400" />
                            <span className="font-bold text-xl tracking-wider">CNDS LAB</span>
                        </div>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center space-x-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium hover:text-cyan-400 transition-colors tracking-wide"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Button
                                onClick={() => navigate('/Dr_FSK')}
                                className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(8,145,178,0.5)] border border-cyan-400/30"
                            >
                                Dr. Faruk Kazi
                            </Button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-white hover:text-cyan-400"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Nav */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden bg-[#000223] border-b border-white/10 px-4 pt-2 pb-4 space-y-2"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-cyan-900/30 hover:text-cyan-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={() => {
                                navigate('/Dr_FSK');
                                setIsMenuOpen(false);
                            }}
                            className="w-full text-left block px-3 py-2 rounded-md text-base font-bold bg-cyan-900/50 text-cyan-300 border border-cyan-500/30"
                        >
                            Dr. Faruk Kazi
                        </button>
                    </motion.div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="relative pt-32 pb-20 px-4 min-h-screen flex items-center justify-center overflow-hidden">
                {/* Abstract background elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-cyan-400 font-bold text-xl md:text-2xl mb-4 tracking-[0.2em]"
                    >
                        Team 915
                    </motion.h2>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-200"
                    >
                        CYBERSECURITY Laboratory
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-lg md:text-2xl text-gray-400 mb-12"
                    >
                        @ VJTI CoE CNDS
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                        className="relative inline-block group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <img
                            src="https://vaibhavidhas.github.io/cybersecurity_lab/static/media/HeroImage.ca9fee07b7af4574792c.jpeg"
                            alt="Cybersecurity Lab"
                            className="relative w-full max-w-4xl rounded-lg shadow-2xl border border-gray-800"
                            onError={(e) => {
                                e.currentTarget.src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'; // Fallback
                            }}
                        />
                    </motion.div>
                </div>
            </section>

            {/* Vulnerabilities Section */}
            <section id="vulnerabilities" className="py-20 px-4 bg-[#010314]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Vulnerabilities (CVEs)</h2>
                        <div className="h-1 w-24 bg-cyan-500 mx-auto"></div>
                    </motion.div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {cveList.map((cve, i) => (
                            <motion.a
                                key={cve.id}
                                href={cve.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="block group"
                            >
                                <div className="bg-[#0b0d29] p-6 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] h-full">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-cyan-400 font-mono font-bold text-lg">{cve.id}</span>
                                        <ExternalLink size={18} className="text-gray-500 group-hover:text-cyan-400 transition-colors" />
                                    </div>
                                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                        {cve.desc}
                                    </p>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-4 relative overflow-hidden">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">
                            About <span className="text-cyan-400">CoE CNDS</span>
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            The Center of Excellence in Complex & Nonlinear Dynamical Systems (CNDS) is a specialized research hub dedicated to the study and security of critical infrastructure.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Our focus areas include Smart Grid Cybersecurity, Network Anomaly Detection, and Resilience of Cyber-Physical Systems. We aim to bridge the gap between theoretical research and practical security implementations.
                        </p>
                        <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-950">
                            Learn More
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#0b0d29] p-6 rounded-lg border border-gray-800 text-center">
                                <Users className="mx-auto text-cyan-500 mb-3" size={32} />
                                <h3 className="text-xl font-bold mb-1">20+</h3>
                                <p className="text-sm text-gray-500">Researchers</p>
                            </div>
                            <div className="bg-[#0b0d29] p-6 rounded-lg border border-gray-800 text-center translate-y-8">
                                <FileText className="mx-auto text-cyan-500 mb-3" size={32} />
                                <h3 className="text-xl font-bold mb-1">50+</h3>
                                <p className="text-sm text-gray-500">Publications</p>
                            </div>
                            <div className="bg-[#0b0d29] p-6 rounded-lg border border-gray-800 text-center">
                                <Shield className="mx-auto text-cyan-500 mb-3" size={32} />
                                <h3 className="text-xl font-bold mb-1">15+</h3>
                                <p className="text-sm text-gray-500">CVEs Found</p>
                            </div>
                            <div className="bg-[#0b0d29] p-6 rounded-lg border border-gray-800 text-center translate-y-8">
                                <ExternalLink className="mx-auto text-cyan-500 mb-3" size={32} />
                                <h3 className="text-xl font-bold mb-1">10+</h3>
                                <p className="text-sm text-gray-500">Projects</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer / Contact */}
            <footer id="contact" className="py-20 px-4 bg-[#010314] border-t border-gray-800">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-400">
                        <div className="flex items-center gap-2">
                            <Mail className="text-cyan-400" size={20} />
                            <span>coe.cnds@vjti.org.in</span>
                        </div>
                        <div className="h-4 w-px bg-gray-700 hidden md:block"></div>
                        <div>
                            <p>Veermata Jijabai Technological Institute (VJTI)</p>
                            <p className="text-sm text-gray-500">Matunga, Mumbai, Maharashtra 400019</p>
                        </div>
                    </div>
                    <div className="mt-12 text-sm text-gray-600">
                        © 2025 Team 915 Cybersecurity Lab. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}
