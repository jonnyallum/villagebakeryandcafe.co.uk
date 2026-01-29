import { Phone } from 'lucide-react';

const Buffets = () => {
    return (
        <div className="flex flex-col pt-20">
            {/* Hero */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/buffets-hero-new.jpg"
                        alt="Buffet Catering"
                        className="w-full h-full object-cover brightness-50"
                    />
                </div>
                <div className="container relative z-10 text-center animate-fade-in">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">Buffets & Catering</h1>
                    <p className="text-lg md:text-xl text-accent max-w-2xl mx-auto">
                        Freshly Made Sandwich & Cake Platters for Any Occasion
                    </p>
                </div>
            </section>

            {/* Intro Text */}
            <section className="py-20 bg-bg">
                <div className="container max-w-4xl text-center">
                    <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
                        Need food for a party, meeting, or get-together? We can help. All our buffet trays are freshly made to order in our kitchen, using the same quality ingredients we serve in the café every day. Whether it's sandwiches for a work do or cakes for a celebration, we keep it simple and delicious.
                    </p>
                    <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
                        Everything is made by us, from scratch. Our sandwiches are prepared fresh with a variety of fillings on white or brown bread, and our cakes are baked right here. Just give us a bit of notice, and we'll sort you out with exactly what you need.
                    </p>
                </div>
            </section>

            {/* Offerings Grid */}
            <section className="py-20 bg-surface border-y border-white/5">
                <div className="container">
                    <h2 className="text-3xl font-heading font-bold text-white text-center mb-16">What We Offer</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="card group hover:bg-[#1a1a1a]">
                            <div className="h-48 mb-6 overflow-hidden rounded-lg">
                                <img src="/images/photo21_sandwich4.webp" alt="Sandwiches" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <h3 className="text-xl font-bold text-accent mb-4">Sandwich Platters</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Freshly made sandwiches with a selection of fillings including ham, cheese, tuna mayo, egg mayo, chicken mayo, and more. Available on white or brown bread, cut into halves or quarters.
                            </p>
                        </div>

                        <div className="card group hover:bg-[#1a1a1a]">
                            <div className="h-48 mb-6 overflow-hidden rounded-lg">
                                <img src="/images/photo18_cake.webp" alt="Cakes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <h3 className="text-xl font-bold text-accent mb-4">Cake Platters</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                A selection of our homemade cakes and traybakes. Perfect for adding something sweet to your spread. Brownies, Flapjacks, Sponges - you name it.
                            </p>
                        </div>

                        <div className="card group hover:bg-[#1a1a1a]">
                            <div className="h-48 mb-6 overflow-hidden rounded-lg">
                                <img src="/images/buffet-sandwiches.jpg" alt="Mixed Platter" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <h3 className="text-xl font-bold text-accent mb-4">Mixed Platters</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Can't decide? We can do a mix of sandwiches and cakes on the same tray to keep everyone happy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing & CTA */}
            <section className="py-24 bg-bg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 skew-x-12 transform translate-x-20"></div>
                <div className="container relative z-10">
                    <div className="max-w-4xl mx-auto bg-surface border border-white/10 rounded-2xl p-12 text-center shadow-2xl">
                        <h2 className="text-3xl font-heading font-bold text-white mb-6">Simple Pricing</h2>
                        <p className="text-xl text-zinc-300 mb-8">
                            Buffet trays start from <span className="text-accent font-bold">£15</span>. Prices vary depending on what you want and how many people you're feeding.
                        </p>

                        <div className="h-px w-24 bg-white/10 mx-auto mb-8"></div>

                        <h3 className="text-2xl font-bold text-white mb-4">Ready to Order?</h3>
                        <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
                            Give us a call or pop into the café. We recommend ordering at least a day or two in advance.
                        </p>

                        <a href="tel:07840803555" className="btn btn-primary text-lg px-8 py-4">
                            <Phone size={20} />
                            Call 07840 803555
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Buffets;
