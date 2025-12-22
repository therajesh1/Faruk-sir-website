import { ExternalLink, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export default function ResearchPapers() {
    const papers = [
        {
            title: "Dynamic modeling and cascade failure analysis of the Mumbai grid incident of October 12",
            description: "Describes the massive power outage in the Mumbai region on October 12, 2020, caused by cascade failure, and highlights lessons for grid operators about energy security and reliability.",
            link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=oa7QCAgAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=oa7QCAgAAAAJ:ZuybSZzF8UAC",
            badge: "Mumbai Grid Incident"
        },
        {
            title: "Improving lifetime of fuel cell in hybrid energy management system by Lure–Lyapunov-based control formulation",
            description: "Presents a novel control strategy and associated power electronics to extend fuel cell lifetime in transport and microgrid applications, positioning fuel cells as clean, nonpolluting energy sources.",
            link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=oa7QCAgAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=oa7QCAgAAAAJ:ZHo1McVdvXMC",
            badge: "Fuel Cell Lifetime Improvement"
        },
        {
            title: "Support-vector-machine-based proactive cascade prediction in smart grid using probabilistic framework",
            description: "Proposes a proactive blackout prediction model for smart grid early warning, using probabilistic evaluation of system performance in steady state and under line contingencies to build a database of normal and cascade-failure states.",
            link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=oa7QCAgAAAAJ&citation_for_view=oa7QCAgAAAAJ:Wp0gIr-vW9MC",
            badge: "Proactive Cascade Prediction in Smart Grids"
        }
    ];

    return (
        <section id="research-papers" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-12">
                    <h2 className="font-['Playfair_Display'] text-[#1a2740] mb-4" style={{ fontSize: '2.5rem', fontWeight: 600 }}>
                        Published Research Papers
                    </h2>
                    <div className="w-20 h-1 bg-[#0d9488] mx-auto mb-6"></div>
                    <p className="text-[#2c3e50] max-w-3xl mx-auto" style={{ fontSize: '1.0625rem' }}>
                        Selected publications highlighting contributions to power systems stability, control strategies, and smart grid resilience.
                    </p>
                </div>

                <div className="grid gap-6">
                    {papers.map((paper, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow border-[#1a2740]/10">
                            <CardHeader>
                                <div className="flex justify-between items-start gap-4 mb-2 flex-col md:flex-row">
                                    <div>
                                        <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold mb-2">
                                            {paper.badge}
                                        </span>
                                        <CardTitle className="text-[#1a2740] text-xl">
                                            {paper.title}
                                        </CardTitle>
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="shrink-0 border-[#0d9488] text-[#0d9488] hover:bg-[#0d9488] hover:text-white"
                                        asChild
                                    >
                                        <a href={paper.link} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink size={16} className="mr-2" />
                                            View Paper
                                        </a>
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex gap-4">
                                    <div className="shrink-0 mt-1 hidden sm:block">
                                        <FileText className="text-gray-400" size={24} />
                                    </div>
                                    <CardDescription className="text-[#2c3e50] text-base leading-relaxed">
                                        {paper.description}
                                    </CardDescription>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
