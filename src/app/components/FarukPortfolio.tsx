import { motion } from 'motion/react';
import { useState } from 'react';
import Navigation from './Navigation';
import ResearchPapers from './ResearchPapers';
import PhotoGallery from './PhotoGallery';
import { Award, BookOpen, Briefcase, Building2, FileText, Globe, GraduationCap, Mail, MapPin, Shield, TrendingUp, Users, Server, Activity, Lock, Cpu } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import drFarukKaziImage from '../../assets/287b324ae8353c3ef50b0fdcdd672d78fcd94baf.png';

export default function FarukPortfolio() {

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    return (
        <div className="min-h-screen bg-white font-['Inter']">
            <Navigation />


            <div className="bg-white pt-28 pb-8 text-center">
                <h2 className="font-['Playfair_Display'] text-[#1a2740] text-3xl md:text-4xl font-bold">
                    Mentor of Team 915
                </h2>
                <div className="w-16 h-1 bg-[#0d9488] mx-auto mt-4"></div>
            </div>

            {/* Hero Section */}
            <section id="home" className="pb-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Portrait */}
                        <motion.div
                            className="order-2 lg:order-1"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="relative">
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-[#0d9488]/20 to-[#B8860B]/20 rounded-lg transform rotate-3"
                                    initial={{ rotate: 3, scale: 0.95 }}
                                    animate={{ rotate: 3, scale: 1 }}
                                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                ></motion.div>
                                <img
                                    src={drFarukKaziImage}
                                    alt="Dr. Faruk Kazi"
                                    className="relative rounded-lg shadow-2xl w-full object-cover"
                                    style={{ aspectRatio: '3/4' }}
                                />
                            </div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            className="order-1 lg:order-2 space-y-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        >
                            <div>
                                <motion.h1
                                    className="font-['Playfair_Display'] text-[#1a2740] mb-3"
                                    style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.1 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    Dr. Faruk Kazi
                                </motion.h1>
                                <motion.p
                                    className="text-[#0d9488] mb-4"
                                    style={{ fontSize: '1.25rem', fontWeight: 500 }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                >
                                    Professor | Policy Advisor | Principal Investigator | Energy & Cybersecurity Expert
                                </motion.p>
                                <motion.div
                                    className="flex items-start gap-2 text-[#2c3e50]"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.7 }}
                                >
                                    <MapPin size={20} className="mt-1 flex-shrink-0" />
                                    <p>
                                        <span className="block" style={{ fontSize: '1rem' }}>Professor of Electrical Engineering</span>
                                        <span className="block" style={{ fontSize: '1rem' }}>Director – Innovation, Incubation & Linkages</span>
                                        <span className="block" style={{ fontSize: '1rem' }}>University of Mumbai, India</span>
                                    </p>
                                </motion.div>
                            </div>

                            <motion.div
                                className="py-6 px-6 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.9 }}
                            >
                                <p className="text-[#2c3e50] leading-relaxed" style={{ fontSize: '1.0625rem' }}>
                                    Contributing policy-relevant research and applied expertise to strengthen energy security and critical infrastructure resilience across the Indo-Pacific.
                                </p>
                            </motion.div>

                            <motion.div
                                className="flex flex-wrap gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.1 }}
                            >
                                <Button
                                    className="bg-[#1a2740] hover:bg-[#2c3e50] text-white px-6 py-6"
                                    onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    View Research
                                </Button>
                                <Button
                                    variant="outline"
                                    className="border-[#0d9488] text-[#0d9488] hover:bg-[#0d9488] hover:text-white px-6 py-6"
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Collaborate
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-12">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-['Playfair_Display'] text-[#1a2740] mb-4" style={{ fontSize: '2.5rem', fontWeight: 600 }}>
                            About
                        </h2>
                        <motion.div
                            className="w-20 h-1 bg-[#0d9488] mx-auto"
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        ></motion.div>
                    </motion.div>

                    <motion.div
                        className="space-y-6 text-[#2c3e50]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="leading-relaxed" style={{ fontSize: '1.0625rem' }}>
                            Dr. Faruk Kazi is a distinguished professor of Electrical Engineering and serves as the Director of Innovation, Incubation & Linkages at the University of Mumbai. With over two decades of experience in academia, research, and policy advisory, he has established himself as a leading expert in energy security, critical infrastructure resilience, and cybersecurity.
                        </p>
                        <p className="leading-relaxed" style={{ fontSize: '1.0625rem' }}>
                            His work bridges the gap between cutting-edge research and practical policy implementation, making significant contributions to national security initiatives, smart grid development, and digital twin technologies. Dr. Kazi has been instrumental in fostering innovation ecosystems and building strategic partnerships between academia, industry, and government bodies.
                        </p>

                        <motion.div
                            className="grid md:grid-cols-2 gap-6 mt-10"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
                                <Card className="border-[#1a2740]/10">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-[#1a2740]">
                                            <GraduationCap className="text-[#0d9488]" />
                                            Current Affiliations
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2 text-[#2c3e50]">
                                        <p>• Director (Innovation, Incubation & Linkages), University of Mumbai</p>
                                        <p>• Director, R&D Committee</p>
                                        <p>• Professor, VJTI Mumbai</p>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
                                <Card className="border-[#1a2740]/10">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-[#1a2740]">
                                            <Shield className="text-[#0d9488]" />
                                            Domain Focus
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2 text-[#2c3e50]">
                                        <p>• Energy Security & Smart Grids</p>
                                        <p>• Critical Infrastructure Resilience</p>
                                        <p>• Cybersecurity & Digital Twins</p>
                                        <p>• Indo-Pacific Policy</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Research & Projects Section */}
            <section id="research" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="font-['Playfair_Display'] text-[#1a2740] mb-4" style={{ fontSize: '2.5rem', fontWeight: 600 }}>
                            Research & Funded Projects
                        </h2>
                        <div className="w-20 h-1 bg-[#0d9488] mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="border-l-4 border-l-[#0d9488] hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex justify-between items-start mb-2">
                                    <CardTitle className="text-[#1a2740] flex-1">
                                        National Security Council Critical Infrastructure Project
                                    </CardTitle>
                                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Ongoing</span>
                                </div>
                                <CardDescription className="text-[#2c3e50]">
                                    Funding: ₹49.88 Crore | Confidential
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-[#2c3e50]">
                                <p className="mb-3">Principal Investigator for large-scale national security infrastructure resilience project.</p>
                                <div className="flex items-center gap-2 text-[#0d9488]">
                                    <Shield size={18} />
                                    <span>National Security Council</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-[#B8860B] hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex justify-between items-start mb-2">
                                    <CardTitle className="text-[#1a2740] flex-1">
                                        DRDO Cyber Resilience for Critical Systems
                                    </CardTitle>
                                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Ongoing</span>
                                </div>
                                <CardDescription className="text-[#2c3e50]">
                                    Principal Investigator
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-[#2c3e50]">
                                <p className="mb-3">Developing advanced cybersecurity frameworks for critical infrastructure protection.</p>
                                <div className="flex items-center gap-2 text-[#B8860B]">
                                    <Shield size={18} />
                                    <span>Defence Research and Development Organisation</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-[#0d9488] hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex justify-between items-start mb-2">
                                    <CardTitle className="text-[#1a2740] flex-1">
                                        World Bank TEQIP Centre of Excellence
                                    </CardTitle>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Completed</span>
                                </div>
                                <CardDescription className="text-[#2c3e50]">
                                    Principal Investigator
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-[#2c3e50]">
                                <p className="mb-3">Established center of excellence for technical education and research capacity building.</p>
                                <div className="flex items-center gap-2 text-[#0d9488]">
                                    <Building2 size={18} />
                                    <span>World Bank</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-[#B8860B] hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex justify-between items-start mb-2">
                                    <CardTitle className="text-[#1a2740] flex-1">
                                        DST-NIDHI Technology Incubator
                                    </CardTitle>
                                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Ongoing</span>
                                </div>
                                <CardDescription className="text-[#2c3e50]">
                                    Principal Investigator & Director
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-[#2c3e50]">
                                <p className="mb-3">Leading innovation ecosystem development and startup incubation initiatives.</p>
                                <div className="flex items-center gap-2 text-[#B8860B]">
                                    <TrendingUp size={18} />
                                    <span>Department of Science & Technology</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-[#0d9488] hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex justify-between items-start mb-2">
                                    <CardTitle className="text-[#1a2740] flex-1">
                                        ISRO Advanced Control Systems
                                    </CardTitle>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Completed</span>
                                </div>
                                <CardDescription className="text-[#2c3e50]">
                                    Co-Principal Investigator
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-[#2c3e50]">
                                <p className="mb-3">Research on advanced control systems for aerospace applications.</p>
                                <div className="flex items-center gap-2 text-[#0d9488]">
                                    <Shield size={18} />
                                    <span>Indian Space Research Organisation</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-[#B8860B] hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex justify-between items-start mb-2">
                                    <CardTitle className="text-[#1a2740] flex-1">
                                        BRNS Nuclear Safety Systems
                                    </CardTitle>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Completed</span>
                                </div>
                                <CardDescription className="text-[#2c3e50]">
                                    Principal Investigator
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-[#2c3e50]">
                                <p className="mb-3">Safety and resilience systems for nuclear infrastructure.</p>
                                <div className="flex items-center gap-2 text-[#B8860B]">
                                    <Shield size={18} />
                                    <span>Board of Research in Nuclear Sciences</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
            {/* National & Cross-Institutional Research Missions */}
            <section id="missions" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="font-['Playfair_Display'] text-[#1a2740] mb-4" style={{ fontSize: '2.5rem', fontWeight: 600 }}>
                            National & Cross-Institutional Research Missions
                        </h2>
                        <div className="w-20 h-1 bg-[#0d9488] mx-auto"></div>
                    </div>

                    <div className="space-y-6">
                        <Card className="border-l-4 border-l-[#0d9488] hover:shadow-lg transition-shadow bg-slate-50">
                            <CardHeader>
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-[#0d9488]/10 rounded-lg">
                                            <Activity className="text-[#0d9488]" size={24} />
                                        </div>
                                        <div>
                                            <CardTitle className="text-[#1a2740] text-xl">ANRF – Partnerships for Accelerated Innovation & Research (PAIR)</CardTitle>
                                            <CardDescription className="text-[#2c3e50] font-medium mt-1">
                                                Role: Co-Principal Investigator | IIT Bombay Hub
                                            </CardDescription>
                                        </div>
                                    </div>
                                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">₹101.69 Cr</span>
                                </div>
                            </CardHeader>
                            <CardContent className="flex justify-between items-center bg-white/50 p-4 rounded-b-lg mt-2 mx-6 mb-6">
                                <span className="text-[#2c3e50] font-medium">Duration: Sept 2025 – Aug 2030</span>
                            </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-[#B8860B] hover:shadow-lg transition-shadow bg-slate-50">
                            <CardHeader>
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-[#B8860B]/10 rounded-lg">
                                            <Cpu className="text-[#B8860B]" size={24} />
                                        </div>
                                        <div>
                                            <CardTitle className="text-[#1a2740] text-xl">PUSHPAK – National Mission on Drone Technology</CardTitle>
                                            <CardDescription className="text-[#2c3e50] font-medium mt-1">
                                                Role: Co-Principal Investigator | MeitY, Government of India
                                            </CardDescription>
                                        </div>
                                    </div>
                                    <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">₹82.77 Cr</span>
                                </div>
                            </CardHeader>
                            <CardContent className="flex justify-between items-center bg-white/50 p-4 rounded-b-lg mt-2 mx-6 mb-6">
                                <span className="text-[#2c3e50] font-medium">Duration: March 2025 – March 2029</span>
                            </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-[#1a2740] hover:shadow-lg transition-shadow bg-slate-50">
                            <CardHeader>
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-[#1a2740]/10 rounded-lg">
                                            <Shield className="text-[#1a2740]" size={24} />
                                        </div>
                                        <div>
                                            <CardTitle className="text-[#1a2740] text-xl">Smart Drone Ecosystem & Social Applications</CardTitle>
                                            <CardDescription className="text-[#2c3e50] font-medium mt-1">
                                                Role: Co-Principal Investigator | Government of Maharashtra
                                            </CardDescription>
                                        </div>
                                    </div>
                                    <span className="px-3 py-1 bg-slate-200 text-slate-800 rounded-full text-sm font-medium">₹33.73 Cr</span>
                                </div>
                            </CardHeader>
                            <CardContent className="flex justify-between items-center bg-white/50 p-4 rounded-b-lg mt-2 mx-6 mb-6">
                                <span className="text-[#2c3e50] font-medium">Duration: Oct 2022 – Oct 2027</span>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
            <section id="leadership" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="font-['Playfair_Display'] text-[#1a2740] mb-4" style={{ fontSize: '2.5rem', fontWeight: 600 }}>
                            Leadership & Advisory Roles
                        </h2>
                        <div className="w-20 h-1 bg-[#0d9488] mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="text-center hover:shadow-lg transition-shadow border-[#1a2740]/10">
                            <CardHeader>
                                <div className="w-16 h-16 bg-[#0d9488]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="text-[#0d9488]" size={32} />
                                </div>
                                <CardTitle className="text-[#1a2740]">USAID-SAREP</CardTitle>
                                <CardDescription className="text-[#2c3e50]">Technical Advisor</CardDescription>
                            </CardHeader>
                            <CardContent className="text-[#2c3e50]">
                                <p className="text-sm">South Asia Regional Energy Partnership technical advisory</p>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow border-[#1a2740]/10">
                            <CardHeader>
                                <div className="w-16 h-16 bg-[#B8860B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Shield className="text-[#B8860B]" size={32} />
                                </div>
                                <CardTitle className="text-[#1a2740]">India Smart Grid Forum</CardTitle>
                                <CardDescription className="text-[#2c3e50]">Chair – Cybersecurity</CardDescription>
                            </CardHeader>
                            <CardContent className="text-[#2c3e50]">
                                <p className="text-sm">Leading cybersecurity initiatives for national smart grid infrastructure</p>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow border-[#1a2740]/10">
                            <CardHeader>
                                <div className="w-16 h-16 bg-[#0d9488]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <GraduationCap className="text-[#0d9488]" size={32} />
                                </div>
                                <CardTitle className="text-[#1a2740]">Directorate of Technical Education</CardTitle>
                                <CardDescription className="text-[#2c3e50]">CAC Member</CardDescription>
                            </CardHeader>
                            <CardContent className="text-[#2c3e50]">
                                <p className="text-sm">Central Academic Council member, Government of Maharashtra</p>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow border-[#1a2740]/10">
                            <CardHeader>
                                <div className="w-16 h-16 bg-[#B8860B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Briefcase className="text-[#B8860B]" size={32} />
                                </div>
                                <CardTitle className="text-[#1a2740]">Electronics Policy Committee</CardTitle>
                                <CardDescription className="text-[#2c3e50]">Expert Member</CardDescription>
                            </CardHeader>
                            <CardContent className="text-[#2c3e50]">
                                <p className="text-sm">Government of Maharashtra electronics policy development</p>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow border-[#1a2740]/10">
                            <CardHeader>
                                <div className="w-16 h-16 bg-[#0d9488]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Award className="text-[#0d9488]" size={32} />
                                </div>
                                <CardTitle className="text-[#1a2740]">Management Council</CardTitle>
                                <CardDescription className="text-[#2c3e50]">Member (Hon. Chancellor’s Nominee)</CardDescription>
                            </CardHeader>
                            <CardContent className="text-[#2c3e50]">
                                <p className="text-sm">Dr. Homi Bhabha State University, Mumbai</p>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow border-[#1a2740]/10">
                            <CardHeader>
                                <div className="w-16 h-16 bg-[#B8860B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <TrendingUp className="text-[#B8860B]" size={32} />
                                </div>
                                <CardTitle className="text-[#1a2740]">NEP Steering Committee</CardTitle>
                                <CardDescription className="text-[#2c3e50]">Member</CardDescription>
                            </CardHeader>
                            <CardContent className="text-[#2c3e50]">
                                <p className="text-sm">Engineering & Technology Subgroup, Government of Maharashtra</p>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow border-[#1a2740]/10">
                            <CardHeader>
                                <div className="w-16 h-16 bg-[#0d9488]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <GraduationCap className="text-[#0d9488]" size={32} />
                                </div>
                                <CardTitle className="text-[#1a2740]">UDRF</CardTitle>
                                <CardDescription className="text-[#2c3e50]">External Expert Committee</CardDescription>
                            </CardHeader>
                            <CardContent className="text-[#2c3e50]">
                                <p className="text-sm">University Department Ranking Framework, University of Mumbai</p>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow border-[#1a2740]/10">
                            <CardHeader>
                                <div className="w-16 h-16 bg-[#B8860B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FileText className="text-[#B8860B]" size={32} />
                                </div>
                                <CardTitle className="text-[#1a2740]">Scheme Analysis Committee</CardTitle>
                                <CardDescription className="text-[#2c3e50]">Member Secretary</CardDescription>
                            </CardHeader>
                            <CardContent className="text-[#2c3e50]">
                                <p className="text-sm">Committee for Central Government Scheme Analysis, Govt. of Maharashtra</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Public Safety, Government Advisory & Societal Impact */}
            <section id="public-safety" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="font-['Playfair_Display'] text-[#1a2740] mb-4" style={{ fontSize: '2.5rem', fontWeight: 600 }}>
                            Public Safety, Government Advisory & Societal Impact
                        </h2>
                        <div className="w-20 h-1 bg-[#0d9488] mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="bg-white hover:shadow-xl transition-all duration-300 border-t-4 border-t-[#0d9488]">
                            <CardContent className="pt-6">
                                <Shield className="text-[#0d9488] w-10 h-10 mb-4" />
                                <h3 className="text-lg font-bold text-[#1a2740] mb-2">Police Commendation</h3>
                                <p className="text-[#2c3e50] text-sm">
                                    Received official commendation from Maharashtra Police for technology-driven analysis supporting critical investigations.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white hover:shadow-xl transition-all duration-300 border-t-4 border-t-[#B8860B]">
                            <CardContent className="pt-6">
                                <Lock className="text-[#B8860B] w-10 h-10 mb-4" />
                                <h3 className="text-lg font-bold text-[#1a2740] mb-2">Technical Expert</h3>
                                <p className="text-[#2c3e50] text-sm">
                                    Served as Technical Expert for cybersecurity project evaluations and infrastructure auditing.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white hover:shadow-xl transition-all duration-300 border-t-4 border-t-[#1a2740]">
                            <CardContent className="pt-6">
                                <Activity className="text-[#1a2740] w-10 h-10 mb-4" />
                                <h3 className="text-lg font-bold text-[#1a2740] mb-2">"Dial 1930" Initiative</h3>
                                <p className="text-[#2c3e50] text-sm">
                                    Technical Expert for India's national cybercrime response initiative, enhancing emergency response capabilities.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white hover:shadow-xl transition-all duration-300 border-t-4 border-t-[#0d9488]">
                            <CardContent className="pt-6">
                                <Users className="text-[#0d9488] w-10 h-10 mb-4" />
                                <h3 className="text-lg font-bold text-[#1a2740] mb-2">Public Safety Analytics</h3>
                                <p className="text-[#2c3e50] text-sm">
                                    Developed data-driven crime analysis and heatmap-based insights to support investigations into crimes against children.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Publications & Impact */}
            <section id="publications" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="font-['Playfair_Display'] text-[#1a2740] mb-4" style={{ fontSize: '2.5rem', fontWeight: 600 }}>
                            Publications & Academic Impact
                        </h2>
                        <div className="w-20 h-1 bg-[#0d9488] mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        <Card className="bg-gradient-to-br from-[#1a2740] to-[#2c3e50] text-white border-0">
                            <CardHeader>
                                <BookOpen size={40} className="mb-2" />
                                <CardTitle style={{ fontSize: '3rem', fontWeight: 700 }}>3,100+</CardTitle>
                                <CardDescription className="text-white/80">Total Citations</CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="bg-gradient-to-br from-[#0d9488] to-[#14b8a6] text-white border-0">
                            <CardHeader>
                                <TrendingUp size={40} className="mb-2" />
                                <CardTitle style={{ fontSize: '3rem', fontWeight: 700 }}>29</CardTitle>
                                <CardDescription className="text-white/80">h-index</CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="bg-gradient-to-br from-[#B8860B] to-[#DAA520] text-white border-0">
                            <CardHeader>
                                <FileText size={40} className="mb-2" />
                                <CardTitle style={{ fontSize: '3rem', fontWeight: 700 }}>113+</CardTitle>
                                <CardDescription className="text-white/80">Publications</CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="bg-gradient-to-br from-[#1a2740] to-[#2c3e50] text-white border-0">
                            <CardHeader>
                                <GraduationCap size={40} className="mb-2" />
                                <CardTitle style={{ fontSize: '3rem', fontWeight: 700 }}>11</CardTitle>
                                <CardDescription className="text-white/80">PhD Scholars Guided</CardDescription>
                            </CardHeader>
                        </Card>
                    </div>

                    <div className="text-center space-y-4">
                        <p className="text-[#2c3e50]">View complete publication list and citation metrics:</p>
                        <div className="flex justify-center gap-4">
                            <Button className="bg-[#1a2740] hover:bg-[#2c3e50] text-white">
                                Google Scholar Profile
                            </Button>
                            <Button variant="outline" className="border-[#0d9488] text-[#0d9488] hover:bg-[#0d9488] hover:text-white">
                                Scopus Profile
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Published Research Papers */}
            <ResearchPapers />

            {/* Industry & Government Collaboration */}
            <section id="industry" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="font-['Playfair_Display'] text-[#1a2740] mb-4" style={{ fontSize: '2.5rem', fontWeight: 600 }}>
                            Industry & Government Collaboration
                        </h2>
                        <div className="w-20 h-1 bg-[#0d9488] mx-auto mb-6"></div>
                        <p className="text-[#2c3e50] max-w-3xl mx-auto" style={{ fontSize: '1.0625rem' }}>
                            Established strategic partnerships with leading industry players and government agencies to translate research into real-world applications and policy frameworks.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        <Card className="text-center p-8 hover:shadow-lg transition-shadow border-[#1a2740]/10">
                            <div className="h-24 flex items-center justify-center mb-4">
                                <Building2 size={64} className="text-[#0d9488]" />
                            </div>
                            <h3 className="text-[#1a2740] mb-2" style={{ fontSize: '1.25rem', fontWeight: 600 }}>Siemens</h3>
                            <p className="text-[#2c3e50] text-sm">Chair Professor Grant & Research Lab</p>
                        </Card>

                        <Card className="text-center p-8 hover:shadow-lg transition-shadow border-[#1a2740]/10">
                            <div className="h-24 flex items-center justify-center mb-4">
                                <Building2 size={64} className="text-[#B8860B]" />
                            </div>
                            <h3 className="text-[#1a2740] mb-2" style={{ fontSize: '1.25rem', fontWeight: 600 }}>CISCO</h3>
                            <p className="text-[#2c3e50] text-sm">Cybersecurity & Networking Lab</p>
                        </Card>

                        <Card className="text-center p-8 hover:shadow-lg transition-shadow border-[#1a2740]/10">
                            <div className="h-24 flex items-center justify-center mb-4">
                                <Building2 size={64} className="text-[#0d9488]" />
                            </div>
                            <h3 className="text-[#1a2740] mb-2" style={{ fontSize: '1.25rem', fontWeight: 600 }}>L&T</h3>
                            <p className="text-[#2c3e50] text-sm">Applied Research & Industry Projects</p>
                        </Card>

                        <Card className="text-center p-8 hover:shadow-lg transition-shadow border-[#1a2740]/10">
                            <div className="h-24 flex items-center justify-center mb-4">
                                <Building2 size={64} className="text-[#B8860B]" />
                            </div>
                            <h3 className="text-[#1a2740] mb-2" style={{ fontSize: '1.25rem', fontWeight: 600 }}>Emerson</h3>
                            <p className="text-[#2c3e50] text-sm">Process Control & Automation</p>
                        </Card>
                    </div>
                </div>
            </section>


            {/* Global Recognition in Securing Industrial Automation Systems */}
            <section id="global-recognition" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="font-['Playfair_Display'] text-[#1a2740] mb-4" style={{ fontSize: '2.5rem', fontWeight: 600 }}>
                            Global Recognition in Securing Industrial Systems
                        </h2>
                        <div className="w-20 h-1 bg-[#0d9488] mx-auto mb-6"></div>
                        <p className="text-[#2c3e50] max-w-3xl mx-auto" style={{ fontSize: '1.0625rem' }}>
                            Discovered and responsibly disclosed ~25 global cybersecurity vulnerabilities (CVEs) impacting industrial and critical infrastructure systems.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <Card className="border-l-8 border-l-[#B8860B] bg-white shadow-lg">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <Shield className="text-[#B8860B] w-12 h-12 flex-shrink-0" />
                                        <div>
                                            <h3 className="text-xl font-bold text-[#1a2740] mb-2">Critical Infrastructure Impact</h3>
                                            <p className="text-[#2c3e50] mb-4">
                                                Identified vulnerabilities in widely deployed industrial controllers and networking devices used in power grids, manufacturing, and process automation.
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-bold">CVE-202X-XXXX</span>
                                                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-bold">ICS-CERT</span>
                                                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-bold">VDE-CERT</span>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                            <h3 className="text-[#1a2740] font-bold text-lg mb-6 flex items-center gap-2">
                                <Activity className="text-[#0d9488]" />
                                Affected Systems & Manufacturers
                            </h3>
                            <div className="grid grid-cols-1 gap-4">
                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md border-l-4 border-l-[#1a2740]">
                                    <Server size={20} className="text-[#1a2740]" />
                                    <span className="text-[#2c3e50] font-medium">SEL Relays (SEL-411L)</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md border-l-4 border-l-[#1a2740]">
                                    <Server size={20} className="text-[#1a2740]" />
                                    <span className="text-[#2c3e50] font-medium">Rockwell Automation PLCs</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md border-l-4 border-l-[#1a2740]">
                                    <Server size={20} className="text-[#1a2740]" />
                                    <span className="text-[#2c3e50] font-medium">Mitsubishi Electric HMI & Controllers</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md border-l-4 border-l-[#1a2740]">
                                    <Server size={20} className="text-[#1a2740]" />
                                    <span className="text-[#2c3e50] font-medium">Schneider Electric RTUs & ABB AC500 PLCs</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md border-l-4 border-l-[#1a2740]">
                                    <Server size={20} className="text-[#1a2740]" />
                                    <span className="text-[#2c3e50] font-medium">GE MiCOM Protection Systems</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md border-l-4 border-l-[#1a2740]">
                                    <Globe size={20} className="text-[#1a2740]" />
                                    <span className="text-[#2c3e50] font-medium">TP-Link, D-Link, Skyworth Networking</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards & Recognition */}
            <section id="awards" className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="font-['Playfair_Display'] text-[#1a2740] mb-4" style={{ fontSize: '2.5rem', fontWeight: 600 }}>
                            Awards & Recognition
                        </h2>
                        <div className="w-20 h-1 bg-[#0d9488] mx-auto"></div>
                    </div>

                    <div className="space-y-4">
                        <Card className="border-l-4 border-l-[#B8860B] hover:shadow-lg transition-shadow">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <div className="w-12 h-12 bg-[#B8860B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Award className="text-[#B8860B]" />
                                </div>
                                <div className="flex-1">
                                    <CardTitle className="text-[#1a2740]">AICTE Visvesvaraya Best Teacher Award</CardTitle>
                                    <CardDescription className="text-[#2c3e50]">2020 | All India Council for Technical Education</CardDescription>
                                </div>
                            </CardHeader>
                        </Card>

                        <Card className="border-l-4 border-l-[#0d9488] hover:shadow-lg transition-shadow">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <div className="w-12 h-12 bg-[#0d9488]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Award className="text-[#0d9488]" />
                                </div>
                                <div className="flex-1">
                                    <CardTitle className="text-[#1a2740]">Siemens Chair Professor Grant</CardTitle>
                                    <CardDescription className="text-[#2c3e50]">Prestigious research grant and laboratory establishment</CardDescription>
                                </div>
                            </CardHeader>
                        </Card>

                        <Card className="border-l-4 border-l-[#B8860B] hover:shadow-lg transition-shadow">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <div className="w-12 h-12 bg-[#B8860B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Award className="text-[#B8860B]" />
                                </div>
                                <div className="flex-1">
                                    <CardTitle className="text-[#1a2740]">IEEE Senior Member</CardTitle>
                                    <CardDescription className="text-[#2c3e50]">Institute of Electrical and Electronics Engineers</CardDescription>
                                </div>
                            </CardHeader>
                        </Card>

                        <Card className="border-l-4 border-l-[#0d9488] hover:shadow-lg transition-shadow">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <div className="w-12 h-12 bg-[#0d9488]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Award className="text-[#0d9488]" />
                                </div>
                                <div className="flex-1">
                                    <CardTitle className="text-[#1a2740]">Best Research Paper Awards</CardTitle>
                                    <CardDescription className="text-[#2c3e50]">Multiple international conferences and journals</CardDescription>
                                </div>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Applied Expertise & Professional Certifications */}
            <section id="expertise" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="font-['Playfair_Display'] text-[#1a2740] mb-4" style={{ fontSize: '2.5rem', fontWeight: 600 }}>
                            Applied Expertise & Professional Certifications
                        </h2>
                        <div className="w-20 h-1 bg-[#0d9488] mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Expertise */}
                        <Card className="border-0 shadow-lg bg-gradient-to-br from-[#1a2740] to-[#2c3e50] text-white">
                            <CardHeader>
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="p-3 bg-white/10 rounded-full">
                                        <Briefcase size={32} className="text-[#0d9488]" />
                                    </div>
                                    <CardTitle className="text-2xl">Core Expertise</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-4">
                                    {['Cybersecurity Frameworks (C2M2, NIST)', 'ICS / OT Security', 'Digital Twin Technologies', 'Smart Grid Architecture', 'Ethical Hacking for Critical Infrastructure'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-[#0d9488]"></div>
                                            <span className="text-lg">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Certifications */}
                        <Card className="border-0 shadow-lg bg-white">
                            <CardHeader>
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="p-3 bg-[#0d9488]/10 rounded-full">
                                        <Award size={32} className="text-[#0d9488]" />
                                    </div>
                                    <CardTitle className="text-2xl text-[#1a2740]">Professional Certifications</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                                        <Shield className="text-[#B8860B] mt-1" size={24} />
                                        <div>
                                            <h4 className="font-bold text-[#1a2740] text-lg">Certified Ethical Hacker (CEH)</h4>
                                            <p className="text-[#2c3e50]">EC-Council</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                                        <Lock className="text-[#B8860B] mt-1" size={24} />
                                        <div>
                                            <h4 className="font-bold text-[#1a2740] text-lg">IEC 62443 Cyber Security Specialist</h4>
                                            <p className="text-[#2c3e50]">Foundation & Risk Assessment</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Photo Gallery */}
            <PhotoGallery />

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="font-['Playfair_Display'] text-[#1a2740] mb-4" style={{ fontSize: '2.5rem', fontWeight: 600 }}>
                            Contact
                        </h2>
                        <div className="w-20 h-1 bg-[#0d9488] mx-auto mb-6"></div>
                        <p className="text-[#2c3e50]" style={{ fontSize: '1.0625rem' }}>
                            For research collaborations, policy consultations, or academic inquiries
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Contact Information */}
                        <Card className="border-[#1a2740]/10 h-full">
                            <CardHeader>
                                <CardTitle className="text-[#1a2740]">Get in Touch</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Mail className="text-[#0d9488] mt-1" size={20} />
                                    <div>
                                        <p className="text-[#2c3e50]">fskazi@el.vjti.ac.in</p>
                                        <p className="text-sm text-[#717182]">Official Email</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <MapPin className="text-[#0d9488] mt-1" size={20} />
                                    <div>
                                        <p className="text-[#2c3e50]">Veermata Jijabai Technological Institute (VJTI)</p>
                                        <p className="text-[#2c3e50]">Matunga, Mumbai, Maharashtra 400019</p>
                                        <p className="text-[#2c3e50]">India</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-br from-[#1a2740] to-[#2c3e50] text-white border-0 h-full">
                            <CardContent className="pt-6">
                                <p className="text-sm mb-4">Available for:</p>
                                <ul className="space-y-2 text-sm">
                                    <li>• International research collaborations</li>
                                    <li>• Policy advisory consultations</li>
                                    <li>• Government & industry partnerships</li>
                                    <li>• Academic speaking engagements</li>
                                    <li>• PhD & postdoc supervision inquiries</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#1a2740] text-white py-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <h3 className="font-['Playfair_Display'] mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>Dr. Faruk Kazi</h3>
                            <p className="text-white/80 text-sm">
                                Contributing to energy security, critical infrastructure resilience, and policy development across the Indo-Pacific.
                            </p>
                        </div>

                        <div>
                            <h4 className="mb-4" style={{ fontSize: '1.125rem', fontWeight: 600 }}>Quick Links</h4>
                            <ul className="space-y-2 text-white/80 text-sm">
                                <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#0d9488] transition-colors">About</button></li>
                                <li><button onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#0d9488] transition-colors">Research</button></li>
                                <li><button onClick={() => document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#0d9488] transition-colors">Publications</button></li>
                                <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#0d9488] transition-colors">Contact</button></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="mb-4" style={{ fontSize: '1.125rem', fontWeight: 600 }}>Affiliations</h4>
                            <ul className="space-y-2 text-white/80 text-sm">
                                <li>University of Mumbai</li>
                                <li>VJTI Mumbai</li>
                                <li>India Smart Grid Forum</li>
                                <li>USAID-SAREP</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
                        <p>© 2025 Dr. Faruk Kazi. All rights reserved.</p>
                        <p className="mt-2">
                            This website is intended for academic and professional purposes. Not to be used for collecting personal information.
                        </p>
                    </div>
                </div>
            </footer>
        </div >
    );
}
