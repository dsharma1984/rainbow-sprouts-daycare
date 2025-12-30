import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { IMAGES } from '@/config/images';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ProgramsPage() {
    const earlyYears = [
        {
            title: "Playgroup",
            age: "2 - 3 Years",
            desc: "Structured play-based learning to build confidence and independence.",
            features: ["Language Skills", "Creative Arts", "Physical Activity", "Early Math Concepts"],
            image: IMAGES.playgroup,
            color: "border-yellow-200 bg-yellow-50"
        },
        {
            title: "Nursery",
            age: "3+ Years",
            desc: "Comprehensive curriculum focusing on school readiness and holistic growth.",
            features: ["Reading & Writing", "Logical Thinking", "World Awareness", "Collaborative Projects"],
            image: IMAGES.nursery,
            color: "border-green-200 bg-green-50"
        }
    ];

    const careServices = [
        {
            title: "Daycare",
            age: "1+ Years",
            desc: "A warm, loving home-away-from-home where children are cared for like family.",
            features: ["Nutritious Home-Cooked Meals", "Dedicated Nap Rooms", "Evening Activities (Art/Dance)", "Flexible Timings (8:30 - 6:30)"],
            image: IMAGES.daycare,
            color: "border-orange-200 bg-orange-50"
        },
        {
            title: "After School",
            age: "2 - 7 Years",
            desc: "Productive evenings with homework help, hobbies, and nutritious snacks.",
            features: ["Homework Assistance", "Hobby Classes", "Safe Environment", "Social Interaction"],
            image: IMAGES.playgroup,
            color: "border-blue-200 bg-blue-50"
        }
    ];

    return (
        <>
            <section className="bg-primary pt-24 pb-32 text-center text-white relative">
                <div className="container mx-auto px-4 z-10 relative">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Programs</h1>
                    <p className="text-xl max-w-2xl mx-auto opacity-90">
                        Age-appropriate learning journeys designed to spark curiosity.
                    </p>
                </div>
                {/* Decorative Wave Bottom */}
                <div className="absolute bottom-0 w-full leading-[0] text-white">
                    <svg className="block w-full h-[50px] md:h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#F8FAFC" opacity=".5"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#F8FAFC" opacity=".8"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#F8FAFC"></path>
                    </svg>
                </div>
            </section>

            <section className="bg-slate-50 pb-20 pt-16">
                <div className="container mx-auto px-4">
                    {/* Section 1: Early Years */}
                    <div className="mb-20">
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-3xl font-bold font-heading text-gray-800">Early Years Programs</h2>
                            <div className="h-px bg-gray-200 flex-1"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {earlyYears.map((prog, idx) => (
                                <ProgramCard key={idx} prog={prog} />
                            ))}
                        </div>
                    </div>

                    {/* Section 2: Care Services */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-3xl font-bold font-heading text-gray-800">Extended Care Services</h2>
                            <div className="h-px bg-gray-200 flex-1"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {careServices.map((prog, idx) => (
                                <ProgramCard key={idx} prog={prog} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function ProgramCard({ prog }: { prog: any }) {
    return (
        <section id={prog.title.toLowerCase().replace(/ /g, '-').replace('&', 'and')} className="scroll-mt-24">
            <Card hoverEffect className={`overflow-hidden border-2 ${prog.color} h-full`}>
                <div className="flex flex-col md:flex-row gap-6 h-full">
                    <div className="w-full md:w-1/3 aspect-square md:aspect-auto rounded-2xl overflow-hidden relative shrink-0">
                        <img src={prog.image} alt={prog.title} className="object-cover w-full h-full" />
                    </div>
                    <div className="flex-1 py-2 flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-2xl font-bold text-gray-900">{prog.title}</h3>
                        </div>
                        <span className="inline-block self-start bg-white px-3 py-1 rounded-full text-sm font-bold text-primary mb-4 shadow-sm border border-slate-100">
                            {prog.age}
                        </span>
                        <p className="text-gray-600 mb-6 flex-grow">{prog.desc}</p>

                        <ul className="space-y-2 mb-8">
                            {prog.features.map((feat: string, fIdx: number) => (
                                <li key={fIdx} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> {feat}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto">
                            <Link href="/contact">
                                <Button size="sm" variant="secondary" className="rounded-full w-full md:w-auto">
                                    Enquire Now <ArrowRight className="w-4 h-4 ml-1" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Card>
        </section>
    );
}
