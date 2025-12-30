import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { IMAGES } from '@/config/images';
import { Award, GraduationCap, Heart, Clock } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <>
            {/* Bio Section */}
            <section className="relative pt-20 pb-20 bg-gradient-to-b from-blue-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Meet The Founder</h1>
                        <p className="text-xl text-gray-600">
                            Passionate about shaping young minds with love and expertise.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
                        {/* Photo */}
                        <div className="w-full md:w-1/3">
                            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl rotate-3 border-4 border-white">
                                <img
                                    src={IMAGES.founder}
                                    alt="Kamini Rajotia"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="w-full md:w-2/3">
                            <h2 className="text-3xl font-bold mb-4 text-primary">Kamini Rajotia</h2>
                            <h3 className="text-xl font-bold text-gray-500 mb-6">Founder & Principal</h3>

                            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                                With over 10 years of experience in early childhood education, Kamini is dedicated to creating a nurturing environment where every child can flourish. As a B.Ed and TEFL certified educator, she specializes in personality development and holistic learning methodologies.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 p-4 bg-yellow-50 rounded-xl">
                                    <Clock className="w-6 h-6 text-yellow-600" />
                                    <div>
                                        <p className="font-bold text-gray-800">10+ Years</p>
                                        <p className="text-sm text-gray-500">Experience</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                                    <GraduationCap className="w-6 h-6 text-blue-600" />
                                    <div>
                                        <p className="font-bold text-gray-800">B.Ed & TEFL</p>
                                        <p className="text-sm text-gray-500">Certified</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl">
                                    <Award className="w-6 h-6 text-purple-600" />
                                    <div>
                                        <p className="font-bold text-gray-800">Specialist</p>
                                        <p className="text-sm text-gray-500">Personality Dev</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-pink-50 rounded-xl">
                                    <Heart className="w-6 h-6 text-pink-600" />
                                    <div>
                                        <p className="font-bold text-gray-800">Passionate</p>
                                        <p className="text-sm text-gray-500">Educator</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision/Mission */}
            <SectionWrapper background="soft" withWaveTop>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Our Vision</h2>
                    <Card className="bg-white border-none shadow-lg">
                        <p className="text-xl text-gray-600 italic leading-relaxed">
                            "To provide a safe, happy, and stimulating environment where children can explore, learn, and grow into confident individuals."
                        </p>
                    </Card>
                </div>
            </SectionWrapper>
        </>
    );
}
