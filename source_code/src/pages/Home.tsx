import { ArrowRight, Star, Sparkles, Award, Timer, Facebook, Video, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import InstagramEmbed from '../components/InstagramEmbed';

const Home = () => {
    return (
        <div className="flex flex-col overflow-hidden">
            {/* Hero Section - Using Beautiful Food Photo */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Dynamic Shopfront Background with Logo Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/hero-bakery-new.jpg"
                        alt="Village Bakery Fresh Bakes"
                        className="w-full h-full object-cover scale-105"
                    />
                    {/* Atmospheric Logo Watermark */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none overflow-hidden">
                        <img
                            src="/images/logo.png"
                            alt=""
                            className="w-[120%] max-w-none md:w-[80%] md:max-w-4xl object-contain invert brightness-0"
                        />
                    </div>
                    {/* Dark overlay for text readability - Adjusted for black background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/70 to-dark-900"></div>
                </div>

                {/* Content */}
                <div className="container relative z-10 text-center px-6 pt-32 pb-20">
                    <div className="max-w-5xl mx-auto space-y-8">
                        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-olive-300/10 backdrop-blur-sm border border-olive-300/20 animate-fade-in">
                            <Sparkles size={16} className="text-olive-300" />
                            <span className="text-olive-300 tracking-[0.2em] font-body font-medium text-sm uppercase">
                                Serving Daily Since 2014
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-bold leading-[1.1] animate-fade-in-up delay-100">
                            <span className="block text-cream mb-2 sm:mb-4">Fresh Food</span>
                            <span className="block text-gold-gradient">Warm Welcome</span>
                        </h1>

                        <p className="text-base sm:text-xl md:text-2xl text-cream/90 font-body max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200 px-2">
                            From legendary breakfast challenges to showstopping cakes,
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
                        <div className="order-2 lg:order-1 relative group animate-fade-in flex justify-center">
                            <div className="absolute -inset-4 bg-gradient-to-r from-gold-300/20 to-gold-600/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-700"></div>
                            <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden border-2 border-gold-300/20 shadow-2xl bg-black flex items-center justify-center">
                                {/* Video Embed - Enhanced Visibility & Centering */}
                                <div className="z-10 w-full flex justify-center">
                                    <InstagramEmbed />
                                </div>
                                {/* Fallback/Background Image - Blurred & Centered */}
                                <img
                                    src="/images/challenge-bg.jpg"
                                    alt="The Big Breakfast Challenge"
                                    className="absolute inset-0 w-full h-full object-cover object-center opacity-30 blur-sm"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="order-1 lg:order-2 space-y-6 animate-fade-in-up">
                            <div className="inline-block">
                                <span className="text-gold-300 font-body font-bold tracking-widest uppercase text-sm">Community & Charity</span>
                                <div className="h-0.5 w-20 bg-gradient-to-r from-gold-300 to-transparent mt-2"></div>
                            </div>

                            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-cream leading-tight">
                                Monthly Charity Challenges
                            </h2>

                            <p className="text-xl text-cream/70 font-body leading-relaxed">
                                Each month features a new, grueling eating challenge to raise money for local charities.
                            </p>

                            <ul className="space-y-4 pt-4">
                                {[
                                    'Current Challenge: The Baguette',
                                    'Includes 8 Sausages, 8 Bacon, and much more',
                                    'Request a challenge: You pick what you want!'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 group">
                                        <div className="mt-1.5 w-1.5 h-1.5 bg-gold-300 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                                        <span className="text-cream/80 font-body">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6">
                                <Link to="/menu" className="btn btn-outline">
                                    <span>Request A Challenge</span>
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Community Section - Group Photo */}
            <section className="relative py-32 bg-dark-900 overflow-hidden">
                <div className="container px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6 animate-fade-in-up">
                            <div className="inline-block">
                                <span className="text-gold-300 font-body font-bold tracking-widest uppercase text-sm">Our People</span>
                                <div className="h-0.5 w-20 bg-gradient-to-r from-gold-300 to-transparent mt-2"></div>
                            </div>
                            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-cream leading-tight">
                                At the Heart of Purbrook
                            </h2>
                            <p className="text-xl text-cream/70 font-body leading-relaxed">
                                More than just a bakery, we're a meeting place. From our morning regulars to the brave challenge seekers, the Village Bakery is where the community comes together.
                            </p>
                            <p className="text-lg text-cream/60 font-body leading-relaxed">
                                Whether it's a quick coffee or a full family breakfast, you'll always find a warm welcome and a friendly face.
                            </p>
                            <div className="pt-6">
                                <a href="https://www.facebook.com/thevillagebakerycafe" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                                    <span>Join Our Community</span>
                                    <Facebook size={18} />
                                </a>
                            </div>
                        </div>
                        <div className="relative group p-4">
                            <div className="absolute inset-0 bg-gold-300/10 rounded-3xl blur-3xl group-hover:bg-gold-300/20 transition-all duration-700"></div>
                            <img
                                src="/images/new_stock/490146123_1501538671106425_4044332027040543873_n.jpg"
                                alt="The Village Bakery Community"
                                className="relative rounded-2xl border border-gold-300/20 shadow-2xl group-hover:scale-[1.02] transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* News & Updates Section */}
            <section className="relative py-24 bg-dark-800">
                <div className="container px-6">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-gold-300 font-body font-bold tracking-widest uppercase text-sm">Latest News</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-cream">Charity & Community</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* News Item 1 */}
                        <div className="bg-dark-900 rounded-2xl p-8 border border-gold-300/10 hover:border-gold-300/30 transition-all group">
                            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-wider">
                                <Award size={14} />
                                <span>Challenge Update</span>
                            </div>
                            <h3 className="text-2xl font-display font-bold text-cream mb-4 group-hover:text-gold-300 transition-colors">We Have A Winner! 🏆</h3>
                            <p className="text-cream/70 font-body leading-relaxed mb-6">
                                85 tried, 85 failed... but today the baguette was finally beaten! Well done <strong className="text-white">Andy</strong> for being the first regular eater to beat the baguette. Your name now sits alongside the amazing pro Max vs Food as the only 2 people to defeat the challenge 👏
                            </p>
                            <div className="p-4 bg-dark-800 rounded-xl border border-gold-300/10">
                                <p className="text-gold-300 font-bold mb-1">New Cash Prize!</p>
                                <p className="text-sm text-cream/70">We are offering a cash prize if anyone can beat Andy's time... who fancies their chances?</p>
                            </div>
                        </div>

                        {/* News Item 2 */}
                        <div className="bg-dark-900 rounded-2xl p-8 border border-gold-300/10 hover:border-gold-300/30 transition-all group">
                            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-wider">
                                <Sparkles size={14} />
                                <span>Charity Focus</span>
                            </div>
                            <h3 className="text-2xl font-display font-bold text-cream mb-4 group-hover:text-gold-300 transition-colors">Free Breakfast for Kids ❤️</h3>
                            <p className="text-cream/70 font-body leading-relaxed mb-6">
                                At the Village Bakery, we feel no child should start the day hungry. If you know a child or family that may be struggling right now, we’re offering free breakfast for kids - no questions asked, no judgment, just breakfast in a safe, welcoming space.
                            </p>
                            <p className="text-sm text-cream/60 italic">
                                Please share this so it reaches the families who need it most. Helping our community is what we do best 🥣 🍞
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section - VERIFIED IMAGES ONLY */}
            <section className="relative py-32 bg-gradient-to-b from-black via-dark-900 to-dark-800">
                <div className="container px-6">
                    <div className="text-center mb-16 space-y-4 animate-fade-in">
                        <span className="text-gold-300 font-body font-bold tracking-widest uppercase text-sm">Our Craft</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-cream">Fresh From The Kitchen</h2>
                        <p className="text-cream/60 font-body max-w-2xl mx-auto">Every item is prepared with care, using the finest ingredients.</p>
                    </div>

                    {/* Premium Masonry-style Gallery - VERIFIED ACCURATE LABELS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {[
                            { src: '/images/new_stock/129955334_3490638874338770_6000996615654609337_n.jpg', alt: 'Full English Breakfast', title: 'Big Breakfasts', desc: 'The heart of Purbrook' },
                            { src: '/images/new_stock/489340488_1499820237944935_5490590416000557979_n.jpg', alt: 'Chocolate Swiss Roll', title: 'Sweet Treats', desc: 'Perfect with coffee' },
                            { src: '/images/new_stock/554040759_1650146012912356_7711737919927358654_n.jpg', alt: 'Toasted Ham & Cheese Panini', title: 'Toasties & Paninis', desc: 'Hot and delicious' },
                            { src: '/images/new_stock/475682389_9023612191041383_471844509600715094_n.jpg', alt: 'Sausage Baguette', title: 'Hot Baps & Rolls', desc: 'Grab and go' },
                            { src: '/images/new_stock/486000734_1481786989748260_3307925956475930799_n.jpg', alt: 'Full English Breakfast', title: 'Cooked Fresh', desc: 'Made to order' },
                            { src: '/images/new_stock/557642269_1650142809579343_6070543851528674382_n.jpg', alt: 'The Baguette Challenge', title: 'The Challenge', desc: 'Are you brave enough?', link: '/menu' },
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
                                        loading="lazy"
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
                                            Learn More
                                            <ArrowRight size={14} />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social Growth Section - Help Us Reach 50K! */}
            <section className="relative py-24 bg-gradient-to-b from-dark-800 to-dark-900 overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-300/20 to-transparent"></div>
                <div className="absolute -top-20 left-1/4 w-96 h-96 bg-gold-300/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-gold-300/5 rounded-full blur-3xl"></div>

                <div className="container px-6 relative">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-gold-300 font-body font-bold tracking-widest uppercase text-sm">Join Our Community</span>
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-cream">Help Us Reach 50,000 Followers!</h2>
                        <p className="text-cream/60 font-body max-w-2xl mx-auto">
                            We're building something special here in Purbrook. Follow us for daily specials, challenge attempts, behind-the-scenes baking, and community stories.
                        </p>
                    </div>

                    {/* Social Platform Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                        {/* TikTok - Most Active */}
                        <a
                            href="https://www.tiktok.com/@thevillagebakerycafe"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-dark-900 rounded-2xl p-8 border-2 border-gold-300/30 hover:border-gold-300 transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute top-4 right-4 px-3 py-1 bg-gold-300 text-dark-900 text-xs font-bold uppercase tracking-wider rounded-full">
                                Most Active
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-gold-300/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative flex flex-col items-center text-center gap-4">
                                <div className="w-20 h-20 bg-gradient-to-br from-gold-300/20 to-gold-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                    <Video className="text-gold-300" size={36} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-display font-bold text-cream mb-2">TikTok</h3>
                                    <p className="text-cream/60 font-body text-sm mb-4">Challenge videos, baking moments & viral content</p>
                                    <span className="inline-flex items-center gap-2 text-gold-300 font-body font-bold group-hover:gap-3 transition-all">
                                        Follow Now <ArrowRight size={16} />
                                    </span>
                                </div>
                            </div>
                        </a>

                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/thevillagebakerycafe"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-dark-900 rounded-2xl p-8 border border-gold-300/10 hover:border-gold-300/50 transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative flex flex-col items-center text-center gap-4">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                    <Facebook className="text-blue-400" size={36} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-display font-bold text-cream mb-2">Facebook</h3>
                                    <p className="text-cream/60 font-body text-sm mb-4">Community updates, events & daily specials</p>
                                    <span className="inline-flex items-center gap-2 text-gold-300 font-body font-bold group-hover:gap-3 transition-all">
                                        Like Our Page <ArrowRight size={16} />
                                    </span>
                                </div>
                            </div>
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/thevillagebakerycafe/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-dark-900 rounded-2xl p-8 border border-gold-300/10 hover:border-gold-300/50 transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative flex flex-col items-center text-center gap-4">
                                <div className="w-20 h-20 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                    <Sparkles className="text-pink-400" size={36} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-display font-bold text-cream mb-2">Instagram</h3>
                                    <p className="text-cream/60 font-body text-sm mb-4">Beautiful food shots & stories from the kitchen</p>
                                    <span className="inline-flex items-center gap-2 text-gold-300 font-body font-bold group-hover:gap-3 transition-all">
                                        Follow Us <ArrowRight size={16} />
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Photo Grid Preview */}
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-3 max-w-5xl mx-auto">
                        {[
                            '/images/new_stock/129955334_3490638874338770_6000996615654609337_n.jpg',
                            '/images/new_stock/137505857_3579509675451689_2374564620046686557_n.jpg',
                            '/images/new_stock/475682389_9023612191041383_471844509600715094_n.jpg',
                            '/images/new_stock/486000734_1481786989748260_3307925956475930799_n.jpg',
                            '/images/new_stock/486516207_1481786956414930_2321442840945898864_n.jpg',
                            '/images/new_stock/489340488_1499820237944935_5490590416000557979_n.jpg',
                        ].map((src, i) => (
                            <div
                                key={i}
                                className="group relative aspect-square overflow-hidden rounded-xl bg-dark-800"
                            >
                                <img
                                    src={src}
                                    alt="Village Bakery"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>

                    {/* Goal Progress Bar */}
                    <div className="mt-12 max-w-2xl mx-auto text-center">
                        <p className="text-cream/80 font-body mb-4">Combined followers across all platforms</p>
                        <div className="relative h-4 bg-dark-800 rounded-full overflow-hidden border border-gold-300/20">
                            <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gold-300 to-gold-500 rounded-full animate-pulse"></div>
                        </div>
                        <div className="flex justify-between mt-2 text-sm">
                            <span className="text-gold-300 font-bold">~12,000 followers</span>
                            <span className="text-cream/60">Goal: 50,000</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
