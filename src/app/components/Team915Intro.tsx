import { Server, Activity, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export default function Team915Intro() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <section className="pt-28 pb-10 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="text-center mb-12"
                >
                    <motion.h1
                        variants={fadeInUp}
                        className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
                    >
                        Team 915
                    </motion.h1>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-xl md:text-2xl lg:text-3xl text-[#0d9488] font-semibold mb-6 tracking-wide"
                    >
                        CYBERSECURITY LABORATORY @ VJTI CoE CNDS
                    </motion.h2>
                    <motion.div
                        variants={fadeInUp}
                        className="w-24 h-1 bg-[#0d9488] mx-auto mb-8"
                    ></motion.div>

                    <motion.p
                        variants={fadeInUp}
                        className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
                    >
                        Team 915 is the Cybersecurity Laboratory group operating under VJTI’s Centre of Excellence in Complex & Nonlinear Dynamical Systems (CoE-CNDS).
                    </motion.p>

                    <motion.div variants={fadeInUp}>
                        <Button
                            className="bg-[#0d9488] hover:bg-[#0f766e] text-white px-8 py-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                            asChild
                        >
                            <a href="https://vaibhavidhas.github.io/cybersecurity_lab" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                Visit Official Website
                                <ExternalLink size={20} />
                            </a>
                        </Button>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-2 gap-8 mb-12"
                >
                    <motion.div variants={fadeInUp}>
                        <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors h-full">
                            <CardContent className="p-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-[#0d9488]/20 rounded-lg shrink-0">
                                        <Activity className="text-[#0d9488] w-6 h-6" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-2xl text-white mb-4">Role & Focus</CardTitle>
                                        <p className="text-gray-300 leading-relaxed">
                                            The team’s visible focus is analyzing and cataloging cybersecurity vulnerabilities in industrial control systems and critical infrastructure devices. We run the specialized Cybersecurity Laboratory at VJTI CoE CNDS.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors h-full">
                            <CardContent className="p-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-[#B8860B]/20 rounded-lg shrink-0">
                                        <Server className="text-[#B8860B] w-6 h-6" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-2xl text-white mb-4">Core Activities</CardTitle>
                                        <p className="text-gray-300 leading-relaxed">
                                            We maintain a table of CVEs for PLCs, protocol gateways, routers, and RTU products from vendors such as Rockwell, Mitsubishi, MOXA, ABB, Schneider, Delta, and Kalkitech. Our work concentrates on high- and critical-severity vulnerabilities affecting automation and power/energy systems.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
