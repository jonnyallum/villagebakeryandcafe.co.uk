import { MapPin, Phone, Mail, Instagram, Facebook, Clock, Video } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-b from-dark-900 to-black border-t border-gold-300/10">
            {/* Decorative top gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-300/30 to-transparent"></div>

            <div className="container mx-auto px-6 pt-20 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-6 animate-fade-in-up">
                        <div className="flex flex-col">
                            <h3 className="text-4xl font-display font-bold text-cream mb-2">Village</h3>
                            <span className="text-xs tracking-[0.3em] text-gold-300 uppercase font-semibold font-body">
                                Bakery & Cafe
                            </span>
                        </div>
                        <p className="text-sm text-cream/60 font-body leading-relaxed max-w-xs">
                            Handcrafted with love since 2014. Fresh artisan bakes, hearty breakfasts, and community warmth served daily in the heart of Purbrook.
                        </p>
                        <div className="flex gap-4 mt-2">
                            <a
                                href="https://www.facebook.com/theVillagebakeryandcafe/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-12 h-12 rounded-xl border border-gold-300/20 flex items-center justify-center overflow-hidden transition-all duration-500 hover:border-gold-300 hover:scale-110"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-gold-300/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <Facebook className="relative z-10 text-gold-300/60 group-hover:text-gold-300 transition-colors duration-300" size={20} />
                            </a>
                            <a
                                href="https://www.instagram.com/thevillagebakerycafe/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-12 h-12 rounded-xl border border-gold-300/20 flex items-center justify-center overflow-hidden transition-all duration-500 hover:border-gold-300 hover:scale-110"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-gold-300/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <Instagram className="relative z-10 text-gold-300/60 group-hover:text-gold-300 transition-colors duration-300" size={20} />
                            </a>
                            <a
                                href="https://www.tiktok.com/@thevillagebakerypurbrook"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-12 h-12 rounded-xl border border-gold-300/20 flex items-center justify-center overflow-hidden transition-all duration-500 hover:border-gold-300 hover:scale-110"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-gold-300/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <Video className="relative z-10 text-gold-300/60 group-hover:text-gold-300 transition-colors duration-300" size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Contact Column */}
                    <div className="flex flex-col gap-6 animate-fade-in-up delay-100">
                        <h4 className="text-cream font-display text-2xl font-bold flex items-center gap-3">
                            <div className="h-px w-8 bg-gradient-to-r from-gold-300 to-transparent"></div>
                            Get in Touch
                        </h4>
                        <div className="flex flex-col gap-5">
                            {[
                                { icon: MapPin, text: '142 London Road,\nPurbrook, Hampshire', href: 'https://maps.google.com/?q=142+London+Road,Purbrook' },
                                { icon: Phone, text: '07840 803555', href: 'tel:07840803555' },
                                { icon: Mail, text: 'info@villagebakery.co.uk', href: 'mailto:info@villagebakery.co.uk' }
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    target={i === 0 ? '_blank' : undefined}
                                    rel={i === 0 ? 'noreferrer' : undefined}
                                    className="group flex items-start gap-4 transition-all duration-300 hover:translate-x-1"
                                >
                                    <div className="mt-1 text-gold-300 transition-transform duration-300 group-hover:scale-110">
                                        <item.icon size={20} strokeWidth={2} />
                                    </div>
                                    <span className="text-cream/60 group-hover:text-cream text-sm font-body transition-colors duration-300 whitespace-pre-line">
                                        {item.text}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Opening Times Column */}
                    <div className="flex flex-col gap-6 animate-fade-in-up delay-200">
                        <h4 className="text-cream font-display text-2xl font-bold flex items-center gap-3">
                            <Clock size={24} className="text-gold-300" />
                            Opening Hours
                        </h4>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-gold-300/5 to-transparent rounded-2xl"></div>
                            <div className="relative bg-dark-800/40 backdrop-blur-sm border border-gold-300/10 rounded-2xl p-6">
                                <ul className="flex flex-col gap-4 text-sm font-body">
                                    {[
                                        { days: 'Monday - Thursday', hours: '7:30am - 2:00pm' },
                                        { days: 'Friday - Saturday', hours: '7:00am - 2:00pm' },
                                        { days: 'Sunday', hours: 'Closed', closed: true }
                                    ].map((time, i) => (
                                        <li key={i} className="flex justify-between items-center pb-4 border-b border-gold-300/10 last:border-0 last:pb-0">
                                            <span className="text-cream/70">{time.days}</span>
                                            <span className={`font-semibold ${time.closed ? 'text-gold-600' : 'text-gold-300'}`}>
                                                {time.hours}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="relative pt-10 border-t border-gold-300/10">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-300/20 to-transparent"></div>
                    <p className="text-center text-xs text-cream/40 font-body">
                        &copy; {new Date().getFullYear()} The Village Bakery & Cafe. Crafted with passion in Purbrook.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
