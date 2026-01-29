import { ArrowRight, Star, Sparkles, Award, Timer } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Solid dark background - completely hiding the old photo */}
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-dark-900 via-dark-800 to-black">
                    {/* Subtle texture overlay for depth */}
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(198, 168, 124, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(198, 168, 124, 0.1) 0%, transparent 50%)'
                    }}></div>
                </div>

                {/* Content */}
                <div className="container relative z-10 text-center px-6 pt-32 pb-20">
                    <div className="max-w-5xl mx-auto space-y-8">
                        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-300/10 backdrop-blur-sm border border-gold-300/20 animate-fade-in">
                            <Sparkles size={16} className="text-gold-300" />
                            <span className="text-gold-300 tracking-[0.2em] font-body font-medium text-sm uppercase">
                                Handcrafted Daily Since 2014
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-display font-bold leading-[1.1] animate-fade-in-up delay-100">
                            <span className="block text-cream mb-4">Artisan Baking</span>
                            <span className="block text-gold-gradient">Loved Locally</span>
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
                                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000"
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

            {/* Gallery Section - COMPLETELY REDESIGNED */}
            <section className="relative py-32 bg-gradient-to-b from-black via-dark-900 to-dark-800">
                <div className="container px-6">
                    <div className="text-center mb-16 space-y-4 animate-fade-in">
                        <span className="text-gold-300 font-body font-bold tracking-widest uppercase text-sm">Our Craft</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-cream">Fresh From The Kitchen</h2>
                        <p className="text-cream/60 font-body max-w-2xl mx-auto">Every item is handcrafted with care, using the finest ingredients and time-honored techniques.</p>
                    </div>

                    {/* Premium Masonry-style Gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {[
                            { src: '/images/photo18_cake.webp', alt: 'Signature Cakes', title: 'Signature Cakes', desc: 'Layered perfection' },
                            { src: '/images/photo9_sandwich.webp', alt: 'Artisan Sandwiches', title: 'Artisan Sandwiches', desc: 'Fresh daily' },
                            { src: '/images/photo5_cheesecake.webp', alt: 'Decadent Desserts', title: 'Decadent Desserts', desc: 'Sweet indulgence' },
                            { src: '/images/buffets-hero-new.jpg', alt: 'Buffet Platters', title: 'Buffet Platters', desc: 'Perfect for events', link: '/buffets' },
                            { src: '/images/photo10_soup.webp', alt: 'Hearty Soups', title: 'Hearty Soups', desc: 'Warming comfort' },
                            { src: '/images/photo21_sandwich4.webp', alt: 'Fresh Baguettes', title: 'Fresh Baguettes', desc: 'Crispy & golden' },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="group relative rounded-2xl overflow-hidden bg-dark-800 border border-gold-300/10 hover:border-gold-300/30 transition-all duration-700 animate-scale-in"
                                style={{ animationDelay: `${i * 100}ms` }}
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-xl font-display font-bold text-cream mb-1">{item.title}</h3>
                                    <p className="text-gold-300 font-body text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.desc}</p>
                                    {item.link && (
                                        <Link
                                            to={item.link}
                                            className="inline-flex items-center gap-2 mt-4 text-sm font-body text-gold-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"
                                        >
                                            Explore Catering
                                            <ArrowRight size={14} />
                                        </Link>
                                    )}
                                </div>

                                {/* Shine effect on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
