import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/hero-bakery-new.jpg"
                        alt="Fresh artisan bread"
                        className="w-full h-full object-cover scale-105 animate-[zoomIn_20s_infinite_alternate]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-bg"></div>
                </div>

                <div className="container relative z-10 text-center animate-fade-in pt-20">
                    <span className="text-accent tracking-[0.3em] font-medium text-sm md:text-base uppercase mb-4 block">
                        Est. 2014 &bull; Purbrook
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 leading-tight">
                        Artisan Baking <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
                            Community Heart
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        From our legendary breakfast challenges to our freshly baked sourdough,
                        we serve passion on every plate.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/menu" className="btn btn-primary">
                            View Our Menu
                        </Link>
                        <Link to="/buffets" className="btn btn-outline hover:bg-white/5">
                            Book Catering
                        </Link>
                    </div>
                </div>
            </section>

            {/* Intro Grid */}
            <section className="py-24 bg-bg">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                        <div className="p-6 border border-white/5 rounded-2xl bg-surface/50 hover:bg-surface transition-colors group">
                            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                                <Star size={24} />
                            </div>
                            <h3 className="text-xl font-bold font-heading text-white mb-2">Quality Ingredients</h3>
                            <p className="text-zinc-400">We source locally where possible and bake fresh every single morning.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-2xl bg-surface/50 hover:bg-surface transition-colors group">
                            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                                <ArrowRight size={24} />
                            </div>
                            <h3 className="text-xl font-bold font-heading text-white mb-2">Fast Service</h3>
                            <p className="text-zinc-400">Order ahead for quick pickup or relax in our comfortable cafe setting.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-2xl bg-surface/50 hover:bg-surface transition-colors group">
                            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                                <Star size={24} />
                            </div>
                            <h3 className="text-xl font-bold font-heading text-white mb-2">5-Star Rated</h3>
                            <p className="text-zinc-400">Loved by locals and visitors alike for our friendly atmosphere.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenge Section - The Makeover */}
            <section className="py-24 relative overflow-hidden">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative group">
                            <div className="absolute inset-0 bg-accent rounded-2xl rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
                            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 shadow-lg">
                                <img
                                    src="/images/challenge-bg.jpg"
                                    alt="The Big Breakfast Challenge"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                                    <span className="text-white font-heading font-bold text-2xl">Can you handle it?</span>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Legends Only</span>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">The Breakfast Challenge</h2>
                            <p className="text-zinc-300 text-lg mb-6 leading-relaxed">
                                It’s big, it’s bold, and it’s not for the faint-hearted. Our famous Breakfast Challenge has defeated many, but glory attempts await the brave.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-zinc-300">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                    Includes 4 sausages, 4 bacon, 4 eggs...
                                </li>
                                <li className="flex items-center gap-3 text-zinc-300">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                    If you finish in under 30 mins, it's FREE!
                                </li>
                                <li className="flex items-center gap-3 text-zinc-300">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                    Wall of Fame immortality guaranteed.
                                </li>
                            </ul>
                            <Link to="/menu" className="btn btn-outline">
                                See Full Details
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Images Grid (Gallery Teaser) */}
            <section className="py-24 bg-surface">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Our Craft</span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Fresh From The Kitchen</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
                        {/* Large Left Item */}
                        <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden group">
                            <img src="/images/photo18_cake.webp" alt="Signature Cakes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-heading font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform">Signature Cakes</span>
                            </div>
                        </div>

                        {/* Small Top Right 1 */}
                        <div className="relative rounded-xl overflow-hidden group">
                            <img src="/images/photo9_sandwich.webp" alt="Sandwiches" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        {/* Small Top Right 2 */}
                        <div className="relative rounded-xl overflow-hidden group">
                            <img src="/images/photo5_cheesecake.webp" alt="Cheesecake" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        {/* Landscape Bottom Right */}
                        <div className="col-span-2 relative rounded-xl overflow-hidden group">
                            <img src="/images/buffets-hero-new.jpg" alt="Buffet Spreads" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                < Link to="/buffets" className="text-white border-b border-accent pb-1 font-heading">Explore Buffets</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
