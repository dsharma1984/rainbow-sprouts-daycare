import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { IMAGES } from '@/config/images';
import { Award, GraduationCap, Heart, Clock } from 'lucide-react';

export default function AboutPage() {
    return (
        <>
            {/* Bio Section */}
            <section className="relative pt-12 md:pt-20 pb-20 bg-[linear-gradient(135deg,#FFF5F5_0%,#F8FAFC_50%,#F0F9FF_100%)] overflow-hidden">
                {/* Soft Disney background blobs */}
                <div className="absolute top-10 left-10 w-48 h-48 bg-yellow-200/40 rounded-full blur-3xl hidden md:block" />
                <div className="absolute bottom-40 right-10 w-64 h-64 bg-teal-200/30 rounded-full blur-3xl opacity-50 hidden md:block" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                            Meet The <span className="text-primary font-accent italic">Founder</span>
                        </h1>
                        <p className="text-xl text-gray-600 font-medium tracking-wide">
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
                                "With over 10 years of experience in early childhood education, Kamini is dedicated to creating a nurturing environment where every child can flourish. As a B.Ed and TEFL certified educator with an MBA and UGC-NET qualification, she specializes in personality development and holistic learning methodologies."
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col items-center text-center p-6 bg-yellow-50 rounded-[2rem] border-4 border-white shadow-[0_15px_30px_rgba(234,179,8,0.15)] group hover:-translate-y-2 transition-transform duration-300">
                                    <div className="w-16 h-16 rounded-[1rem] bg-white shadow-[0_4px_10px_rgba(0,0,0,0.05),0_0_0_3px_white] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                                        <Clock className="w-8 h-8 text-yellow-600 shrink-0" />
                                    </div>
                                    <p className="font-bold text-gray-800 text-lg">10+ Years</p>
                                    <p className="text-sm text-gray-500 font-medium">Experience</p>
                                </div>

                                <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-[2rem] border-4 border-white shadow-[0_15px_30px_rgba(59,130,246,0.15)] group hover:-translate-y-2 transition-transform duration-300">
                                    <div className="w-16 h-16 rounded-[1rem] bg-white shadow-[0_4px_10px_rgba(0,0,0,0.05),0_0_0_3px_white] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                                        <GraduationCap className="w-8 h-8 text-blue-600 shrink-0" />
                                    </div>
                                    <p className="font-bold text-gray-800 text-lg">MBA & NET</p>
                                    <p className="text-sm text-gray-500 font-medium">Qualified</p>
                                </div>

                                <div className="flex flex-col items-center text-center p-6 bg-purple-50 rounded-[2rem] border-4 border-white shadow-[0_15px_30px_rgba(168,85,247,0.15)] group hover:-translate-y-2 transition-transform duration-300">
                                    <div className="w-16 h-16 rounded-[1rem] bg-white shadow-[0_4px_10px_rgba(0,0,0,0.05),0_0_0_3px_white] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                                        <Award className="w-8 h-8 text-purple-600 shrink-0" />
                                    </div>
                                    <p className="font-bold text-gray-800 text-lg">Specialist</p>
                                    <p className="text-sm text-gray-500 font-medium">Personality Dev</p>
                                </div>

                                <div className="flex flex-col items-center text-center p-6 bg-pink-50 rounded-[2rem] border-4 border-white shadow-[0_15px_30px_rgba(236,72,153,0.15)] group hover:-translate-y-2 transition-transform duration-300">
                                    <div className="w-16 h-16 rounded-[1rem] bg-white shadow-[0_4px_10px_rgba(0,0,0,0.05),0_0_0_3px_white] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                                        <Heart className="w-8 h-8 text-pink-600 shrink-0" />
                                    </div>
                                    <p className="font-bold text-gray-800 text-lg">Expert</p>
                                    <p className="text-sm text-gray-500 font-medium">Early Education</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision/Mission */}
            <SectionWrapper background="soft" withWaveTop>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl font-bold mb-10 text-gray-900 font-heading">
                        Our <span className="text-secondary font-accent italic">Vision</span>
                    </h2>
                    
                    <div className="relative">
                        <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 text-8xl text-accent/20 font-serif leading-none z-0">“</div>
                        <Card className="bg-white border-4 border-white shadow-[0_20px_60px_rgba(74,159,181,0.15)] rounded-[3rem] p-8 md:p-12 relative z-10 transform transition-transform duration-500 hover:scale-[1.02]">
                            <p className="text-2xl md:text-3xl text-gray-700 italic leading-relaxed font-medium font-accent">
                                To provide a safe, happy, and stimulating environment where children can explore, learn, and grow into confident individuals.
                            </p>
                            <div className="mt-8 flex justify-center">
                                <div className="h-1 w-20 bg-secondary rounded-full opacity-50"></div>
                            </div>
                        </Card>
                        <div className="absolute -bottom-10 -right-6 md:-bottom-12 md:-right-10 text-8xl text-accent/20 font-serif leading-none z-0 rotate-180">“</div>
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
}
