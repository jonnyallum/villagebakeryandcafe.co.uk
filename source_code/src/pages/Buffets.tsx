import { Phone, CheckCircle2, Sparkles } from 'lucide-react';

const Buffets = () => {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/buffets-hero-new.jpg"
                        alt="Buffet Catering"
                        className="w-full h-full object-cover brightness-[0.35]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 via-transparent to-dark-900"></div>
                </div>

                <div className="container relative z-10 text-center px-6 pt-32 pb-20">
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-300/10 backdrop-blur-sm border border-gold-300/20 mb-8 animate-fade-in">
                        <Sparkles size={16} className="text-gold-300" />
                        <span className="text-gold-300 tracking-[0.2em] font-body font-medium text-sm uppercase">
                            Catering Excellence
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold text-cream mb-6 animate-fade-in-up delay-100">
                        Buffets & Catering
                    </h1>
                    <p className="text-xl md:text-2xl text-gold-300 font-body max-w-3xl mx-auto animate-fade-in-up delay-200">
                        Freshly Made Platters for Every Occasion
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="relative py-24 bg-gradient-to-b from-dark-900 to-dark-800">
                <div className="container px-6 max-w-4xl mx-auto text-center space-y-8">
                    <p className="text-lg text-cream/80 font-body leading-relaxed">
                        Need food for a party, meeting, or celebration? We've got you covered. All our buffet trays are <span className="text-gold-300 font-semibold">freshly made to order</span> in our kitchen, using the same quality ingredients we serve in the café every day.
                    </p>
                    <p className="text-lg text-cream/80 font-body leading-relaxed">
                        Our sandwiches are prepared fresh with a variety of fillings on white or brown bread. Just give us a bit of notice, and we'll create exactly what you need.
                    </p>
                </div>
            </section>

            {/* Offerings */}
            <section className="relative py-24 bg-dark-800 border-y border-gold-300/10">
                <div className="container px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-cream mb-4">What We Offer</h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-gold-300 to-transparent mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                img: '/images/photo21_sandwich4.webp',
                                title: 'Sandwich Platters',
                                desc: 'Freshly made with premium fillings: ham, cheese, tuna mayo, chicken mayo, egg mayo. White or brown bread, cut to perfection.'
                            },
                            {
                                img: '/images/photo18_cake.webp',
                                title: 'Cake Platters',
                                desc: 'Our fresh cakes and traybakes. Brownies, flapjacks, sponges - the perfect sweet addition to any event.'
                            },
                            {
                                img: '/images/buffet-sandwiches.jpg',
                                title: 'Mixed Platters',
                                desc: 'Can\'t decide? We create beautiful mixed trays combining our savory sandwiches with sweet treats.'
                            }
                        ].map((item, i) => (
                            <div key={i} className={`card animate-scale-in delay-${i * 100}`}>
                                <div className="relative h-56 mb-6 overflow-hidden rounded-2xl">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                </div>
                                <h3 className="text-2xl font-display font-bold text-gold-300 mb-4">{item.title}</h3>
                                <p className="text-cream/70 font-body leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing CTA */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-black"></div>
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold-300/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gold-600/5 rounded-full blur-3xl"></div>

                <div className="container relative px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-gold-300/10 to-gold-600/5 rounded-3xl blur-2xl"></div>
                            <div className="relative bg-gradient-to-br from-dark-800/90 to-dark-900/90 backdrop-blur-xl border border-gold-300/20 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
                                <h2 className="text-4xl md:text-5xl font-display font-bold text-cream mb-6">Simple, Fair Pricing</h2>
                                <p className="text-2xl text-cream/80 font-body mb-4">
                                    Buffet trays start from <span className="text-gold-300 font-bold text-3xl">£15</span>
                                </p>
                                <p className="text-cream/60 font-body mb-10 max-w-lg mx-auto">
                                    Prices vary based on selection and guest count. We cater for groups of any size.
                                </p>

                                <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold-300/30 to-transparent mx-auto mb-10"></div>

                                <h3 className="text-2xl font-display font-bold text-cream mb-4">Ready to Order?</h3>
                                <p className="text-cream/70 font-body mb-10 max-w-md mx-auto">
                                    Call us or visit the café. We recommend ordering <span className="text-gold-300">1-2 days in advance</span> for the freshest results.
                                </p>

                                <a href="tel:07840803555" className="btn btn-primary text-lg inline-flex">
                                    <Phone size={22} />
                                    <span className="relative z-10">Call 07840 803555</span>
                                </a>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-16 border-t border-gold-300/10">
                                    {[
                                        'Freshly made to order',
                                        'Quality ingredients',
                                        'Flexible portions'
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center justify-center gap-3">
                                            <CheckCircle2 className="text-gold-300 shrink-0" size={20} />
                                            <span className="text-cream/70 font-body text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Buffets;
