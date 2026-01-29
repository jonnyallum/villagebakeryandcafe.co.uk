import { ArrowRight, Star, Sparkles, Award, Timer } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image with Parallax */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-dark-900/85 via-dark-900/95 to-dark-900"></div>
                    <img
                        src="/images/hero-bakery-new.jpg"
                        alt="Village Bakery atmosphere"
                        className="w-full h-full object-cover scale-110 brightness-75"
                        style={{ objectPosition: '50% 55%', filter: 'blur(1.5px)' }}
                    />
                </div>

                {/* Content */}
                <div className="container relative z-10 text-center px-6 pt-32 pb-20">
                    <div className="max-w-5xl mx-auto space-y-8">
                        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-300/10 backdrop-blur-sm border border-gold-300/20 animate-fade-in">
                            <Sparkles size={16} className="text-gold-300" />
                            <span className="text-gold-300 tracking-[0.2em] font-body font-medium text-sm uppercase">
                                Crafting Excellence Since 2014
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-display font-bold leading-[1.1] animate-fade-in-up delay-100">
                            <span className="block text-cream mb-4">Artisan Baking</span>
                            <span className="block text-gold-gradient">Community Heart</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-cream/80 font-body max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                            From legendary breakfast challenges to freshly baked sourdough,
                            we pour passion into every plate at Purbrook's favorite bakery.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6 animate-fade-in-up delay-300">
                            <Link to="/menu" className="btn btn-primary text-lg">
                                <span className="relative z-10">Explore Our Menu</span>
                                <ArrowRight className="relative z-10" size={20} />
                            </Link>
                            <Link to="/buffets" className="btn btn-outline text-lg">
                                <span>Catering Services</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
                    <div className="w-6 h-10 border-2 border-gold-300/30 rounded-full flex justify-center pt-2">
                        <div className="w-1.5 h-3 bg-gold-300 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="relative py-32 bg-gradient-to-b from-dark-900 to-dark-800">
                <div className="container px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Star, title: 'Premium Ingredients', desc: 'Locally sourced where possible, baked fresh every morning with love.' },
                            { icon: Timer, title: 'Quick Service', desc: 'Pre-order for lightning-fast pickup or relax in our welcoming cafe.' },
                            { icon: Award, title: '5-Star Rated', desc: 'Beloved by locals for exceptional food and warm hospitality.' }
                        ].map((item, i) => (
                            <div key={i} className={`card group animate-scale-in delay-${i * 100}`}>
                                <div className="flex flex-col items-start gap-6">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gold-300 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                                        <div className="relative w-16 h-16 bg-gradient-to-br from-gold-300/20 to-gold-600/20 rounded-2xl flex items-center justify-center border border-gold-300/20 group-hover:scale-110 transition-transform duration-700">
                                            <item.icon className="text-gold-300" size={28} strokeWidth={2} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-display font-bold text-cream mb-3">{item.title}</h3>
                                        <p className="text-cream/60 font-body leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Challenge Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-dark-800 via-dark-900 to-black"></div>
                <div className="absolute top-20 right-0 w-1/2 h-1/2 bg-gold-300/5 rounded-full blur-3xl"></div>

                <div className="container relative px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Image */}
                        <div className="order-2 lg:order-1 relative group animate-fade-in">
                            <div className="absolute -inset-4 bg-gradient-to-r from-gold-300/20 to-gold-600/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-700"></div>
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-gold-300/20 shadow-2xl">
                                <img
                                    src="/images/challenge-bg.jpg"
                                    alt="The Big Breakfast Challenge"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-300/20 backdrop-blur-sm border border-gold-300/30 mb-4">
                                        <Award size={16} className="text-gold-300" />
                                        <span className="text-gold-300 font-body font-semibold text-sm">Legendary Challenge</span>
                                    </div>
                                    <h3 className="text-3xl font-display font-bold text-cream">Think you can finish?</h3>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="order-1 lg:order-2 space-y-6 animate-fade-in-up">
                            <div className="inline-block">
                                <span className="text-gold-300 font-body font-bold tracking-widest uppercase text-sm">Legends Only</span>
                                <div className="h-0.5 w-20 bg-gradient-to-r from-gold-300 to-transparent mt-2"></div>
                            </div>

                            <h2 className="text-5xl md:text-6xl font-display font-bold text-cream leading-tight">
                                The Breakfast Challenge
                            </h2>

                            <p className="text-xl text-cream/70 font-body leading-relaxed">
                                It's big, it's bold, and it's not for the faint-hearted. Our infamous Breakfast Challenge has defeated many, but glory awaits the brave.
                            </p>

                            <ul className="space-y-4 pt-4">
                                {[
                                    'Epic portions: 4 sausages, 4 bacon, 4 eggs & more',
                                    'Finish in under 30 minutes = It\'s FREE!',
                                    'Your name immortalized on our Wall of Fame'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 group">
                                        <div className="mt-1.5 w-1.5 h-1.5 bg-gold-300 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                                        <span className="text-cream/80 font-body">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6">
                                <Link to="/menu" className="btn btn-outline">
                                    <span>View Full Details</span>
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="relative py-32 bg-gradient-to-b from-black to-dark-900">
                <div className="container px-6">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-gold-300 font-body font-bold tracking-widest uppercase text-sm">Our Craft</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-cream">Fresh From The Kitchen</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                        {/* Large Feature */}
                        <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer aspect-square">
                            <img src="/images/photo18_cake.webp" alt="Signature Cakes" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <span className="text-2xl font-display font-bold text-cream transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Signature Cakes</span>
                            </div>
                        </div>

                        {[
                            { src: '/images/photo9_sandwich.webp', alt: 'Sandwiches' },
                            { src: '/images/photo5_cheesecake.webp', alt: 'Cheesecake' },
                        ].map((img, i) => (
                            <div key={i} className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer">
                                <img src={img.src} alt={img.alt} className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        ))}

                        <div className="col-span-2 relative aspect-[2/1] rounded-2xl overflow-hidden group cursor-pointer">
                            <img src="/images/buffets-hero-new.jpg" alt="Buffet Spreads" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <Link to="/buffets" className="text-xl font-display font-bold text-gold-300 border-b-2 border-gold-300 pb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    Explore Catering
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
