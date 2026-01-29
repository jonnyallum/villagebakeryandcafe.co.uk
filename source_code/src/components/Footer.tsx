import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-surface border-t border-white/10 pt-16 pb-8 text-zinc-400">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col">
                            <h3 className="text-2xl font-heading text-white font-bold mb-1">Village</h3>
                            <span className="text-xs tracking-[0.25em] text-accent uppercase font-semibold">Bakery & Cafe</span>
                        </div>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Freshly baked goods, hearty breakfasts, and delicious lunches served daily in Purbrook. Built with community in mind.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-all">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Contact Column */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-white font-heading text-lg font-bold">Contact Us</h4>
                        <div className="flex flex-col gap-4">
                            <a href="https://maps.google.com/?q=142+London+Road,Purbrook" target="_blank" rel="noreferrer" className="flex items-start gap-4 hover:text-white transition-colors">
                                <MapPin className="text-accent shrink-0 mt-1" size={20} />
                                <span>142 London Road,<br />Purbrook, Hampshire</span>
                            </a>
                            <a href="tel:07840803555" className="flex items-center gap-4 hover:text-white transition-colors">
                                <Phone className="text-accent shrink-0" size={20} />
                                <span>07840 803555</span>
                            </a>
                            <a href="mailto:info@villagebakery.co.uk" className="flex items-center gap-4 hover:text-white transition-colors">
                                <Mail className="text-accent shrink-0" size={20} />
                                <span>info@villagebakery.co.uk</span>
                            </a>
                        </div>
                    </div>

                    {/* Opening Times Column */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-white font-heading text-lg font-bold">Opening Hours</h4>
                        <ul className="flex flex-col gap-3 text-sm">
                            <li className="flex justify-between border-b border-white/5 pb-2">
                                <span>Mon - Thu</span>
                                <span className="text-white">7:30am - 2:00pm</span>
                            </li>
                            <li className="flex justify-between border-b border-white/5 pb-2">
                                <span>Fri - Sat</span>
                                <span className="text-white">7:00am - 2:00pm</span>
                            </li>
                            <li className="flex justify-between pb-2">
                                <span>Sunday</span>
                                <span className="text-accent">Closed</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center pt-8 border-t border-white/5 text-xs text-zinc-600">
                    <p>&copy; {new Date().getFullYear()} The Village Bakery & Cafe. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
