import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';

export default function PhotoGallery() {
    // Dynamically import all images from the gallery directory
    const images = import.meta.glob<{ default: string }>('../../assets/gallery/*.jpeg', { eager: true });

    // Convert the object to an array of image URLs
    const imageList = Object.values(images).map(img => img.default);

    return (
        <section id="gallery" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-12">
                    <h2 className="font-['Playfair_Display'] text-[#1a2740] mb-4" style={{ fontSize: '2.5rem', fontWeight: 600 }}>
                        Photo Gallery
                    </h2>
                    <div className="w-20 h-1 bg-[#0d9488] mx-auto mb-6"></div>
                    <p className="text-[#2c3e50] max-w-3xl mx-auto" style={{ fontSize: '1.0625rem' }}>
                        Snapshots from various events, conferences, and interactions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {imageList.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow duration-300">
                                <CardContent className="p-0">
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={src}
                                            alt={`Gallery image ${index + 1}`}
                                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
