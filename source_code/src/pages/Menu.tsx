const Menu = () => {
    return (
        <div className="flex flex-col pt-20">
            <section className="bg-dark-800 py-16 border-b border-white/5">
                <div className="container text-center">
                    <span className="text-gold-300 font-bold tracking-widest uppercase text-sm mb-2 block">Dine In or Takeaway</span>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-cream mb-4">Our Menu</h1>
                    <p className="text-cream/70 max-w-2xl mx-auto">Freshly cooked breakfasts, hearty lunches, burgers, and more. All available for dine-in or takeaway.</p>
                </div>
            </section>

            <div className="container py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Column 1 */}
                    <div className="flex flex-col gap-16">
                        {/* Breakfast Section */}
                        <section>
                            <h2 className="text-2xl font-display font-bold text-cream mb-8 border-b border-accent/20 pb-4 inline-block pr-12">🍳 Breakfast (Dine-In)</h2>
                            <div className="flex flex-col gap-8">
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">Purbrook Porker</h3>
                                        <span className="font-bold text-cream">£8.95</span>
                                    </div>
                                    <p className="text-cream/70 text-sm">Full works with 2 Eggs, 3 Sausages, 3 Bacon, and all the trimmings.</p>
                                </div>

                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">Full English</h3>
                                        <span className="font-bold text-cream">£5.95</span>
                                    </div>
                                    <p className="text-cream/70 text-sm">Our standard breakfast — the classic done right.</p>
                                </div>

                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">Veggie Breakfast</h3>
                                        <span className="font-bold text-cream">£5.95</span>
                                    </div>
                                    <p className="text-cream/70 text-sm">Hash Browns, Poached Eggs, Beans, Mushrooms, Tomatoes & Toast. Add veggie sausage 80p.</p>
                                </div>

                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">Lite Breakfast</h3>
                                        <span className="font-bold text-cream">£4.95</span>
                                    </div>
                                    <p className="text-cream/70 text-sm">A lighter start — Egg, Sausage, Bacon, Beans & Toast.</p>
                                </div>

                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">Large Breakfast Bap/Baguette</h3>
                                        <span className="font-bold text-cream">£5.00</span>
                                    </div>
                                    <p className="text-cream/70 text-sm">Bacon, Egg & Sausage in a fresh roll or baguette.</p>
                                </div>

                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">BLT Bap/Baguette</h3>
                                        <span className="font-bold text-cream">£4.00</span>
                                    </div>
                                    <p className="text-cream/70 text-sm">Classic Bacon, Lettuce, Tomato & Mayo.</p>
                                </div>

                                <div className="group pt-4">
                                    <h3 className="text-lg font-bold text-cream mb-4">Build Your Own</h3>
                                    <p className="text-cream/70 text-sm mb-4">Choose from Bap, Baguette, Door Stop, Crusty Roll, or Plait.</p>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between border-b border-white/5 pb-2">
                                            <span className="text-zinc-300">1 Filling</span>
                                            <span className="text-gold-300 font-bold">£4.00</span>
                                        </div>
                                        <div className="flex justify-between border-b border-white/5 pb-2">
                                            <span className="text-zinc-300">2-3 Fillings</span>
                                            <span className="text-gold-300 font-bold">£4.50–£5.00</span>
                                        </div>
                                        <div className="flex justify-between border-b border-white/5 pb-2">
                                            <span className="text-zinc-300">5 Fillings (The Stack)</span>
                                            <span className="text-gold-300 font-bold">£6.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-dark-800 p-6 rounded-xl border border-white/5 mt-4">
                                    <h4 className="text-gold-300 font-bold mb-2">All Extra Items</h4>
                                    <p className="text-cream/70 text-sm">Add extras for <span className="text-cream font-bold">80p</span> each — Black Pudding, Hash Brown, Egg, Sausage, Bacon, Beans, Mushrooms, Tomatoes, Toast.</p>
                                </div>
                            </div>
                        </section>

                        {/* Light Bites */}
                        <section>
                            <h2 className="text-2xl font-display font-bold text-cream mb-8 border-b border-accent/20 pb-4 inline-block pr-12">🥪 Light Bites</h2>
                            <div className="flex flex-col gap-6">
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">Plain Omelette</h3>
                                        <span className="font-bold text-cream">£5.00</span>
                                    </div>
                                    <p className="text-cream/70 text-sm">Add fillings for 80p each (Cheese, Ham, Tomato, Bacon, Sausage, Mushroom).</p>
                                </div>
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">Egg on Toast</h3>
                                        <span className="font-bold text-cream">£4.95</span>
                                    </div>
                                    <p className="text-cream/70 text-sm">2 Fried, Poached, or Scrambled Eggs on Door Stop Toast.</p>
                                </div>
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">Beans on Toast</h3>
                                        <span className="font-bold text-cream">£4.95</span>
                                    </div>
                                    <p className="text-cream/70 text-sm">2 Slices of Door Stop Toast smothered in Baked Beans.</p>
                                </div>
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">Breakfast Muffins</h3>
                                        <span className="font-bold text-cream">£4.00</span>
                                    </div>
                                    <p className="text-cream/70 text-sm">Bacon & Egg, Sausage & Egg, or Veggie Sausage & Egg. Add extra 80p.</p>
                                </div>
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">Pancakes</h3>
                                        <span className="font-bold text-cream">£4.95</span>
                                    </div>
                                    <p className="text-cream/70 text-sm">Served with Bacon & Maple Syrup, or Fruit of the Forest & Maple Syrup.</p>
                                </div>
                            </div>
                        </section>

                        {/* Mega Breakfast */}
                        <section>
                            <h2 className="text-2xl font-display font-bold text-cream mb-8 border-b border-accent/20 pb-4 inline-block pr-12">🍔 Mega Breakfast (The Challenge!)</h2>
                            <div className="flex flex-col gap-6">
                                <div className="group bg-gradient-to-r from-gold-300/5 to-transparent p-6 rounded-xl border border-gold-300/20">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">Mega Breakfast</h3>
                                        <span className="font-bold text-cream text-xl">£15.00</span>
                                    </div>
                                    <p className="text-cream/70 text-sm">4 Eggs, 5 Sausages, 3 Bacon, 3 Hash Browns, and much more! Are you brave enough?</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-16">
                        {/* Lunch */}
                        <section>
                            <h2 className="text-2xl font-display font-bold text-cream mb-8 border-b border-accent/20 pb-4 inline-block pr-12">🍽️ Lunch</h2>
                            <div className="flex flex-col gap-6">
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">Panini</h3>
                                        <span className="font-bold text-cream">£5.50</span>
                                    </div>
                                    <p className="text-cream/70 text-sm">Served with salad.</p>
                                </div>
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">Toastie</h3>
                                        <span className="font-bold text-cream">£4.00</span>
                                    </div>
                                    <p className="text-cream/70 text-sm">Served with salad.</p>
                                </div>
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">Sandwich</h3>
                                        <span className="font-bold text-cream">£3.00</span>
                                    </div>
                                    <p className="text-cream/70 text-sm">Ham, Cheese, Tuna Mayo, Chicken Mayo, Egg Mayo. White or Brown.</p>
                                </div>
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">Baguettes / Baps</h3>
                                        <span className="font-bold text-cream">£4.00</span>
                                    </div>
                                    <p className="text-cream/70 text-sm">Your choice of fillings in a fresh baguette or bap.</p>
                                </div>
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">House Club Sandwich</h3>
                                        <span className="font-bold text-cream">£6.00</span>
                                    </div>
                                    <p className="text-cream/70 text-sm">Served with chips.</p>
                                </div>
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">House Special Salad</h3>
                                        <span className="font-bold text-cream">£4.95</span>
                                    </div>
                                    <p className="text-cream/70 text-sm">Fresh and filling.</p>
                                </div>
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">Ham, Egg & Chips</h3>
                                        <span className="font-bold text-cream">£6.95</span>
                                    </div>
                                    <p className="text-cream/70 text-sm">A proper classic.</p>
                                </div>
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">Soup</h3>
                                        <span className="font-bold text-cream">£3.50</span>
                                    </div>
                                    <p className="text-cream/70 text-sm">Homemade soup of the day.</p>
                                </div>
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">Chilli Con Carne</h3>
                                        <span className="font-bold text-cream">£7.00</span>
                                    </div>
                                    <p className="text-cream/70 text-sm">Served with rice or chips.</p>
                                </div>
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">Chicken Curry</h3>
                                        <span className="font-bold text-cream">£7.00</span>
                                    </div>
                                    <p className="text-cream/70 text-sm">Homemade with rice or chips.</p>
                                </div>
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">Jacket Potato</h3>
                                        <span className="font-bold text-cream">£5.00–£8.00</span>
                                    </div>
                                    <p className="text-cream/70 text-sm">Price depends on fillings.</p>
                                </div>
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">Mixed Grill</h3>
                                        <span className="font-bold text-cream">£12.00</span>
                                    </div>
                                    <p className="text-cream/70 text-sm">The ultimate meat feast.</p>
                                </div>
                            </div>
                        </section>

                        {/* Burgers */}
                        <section>
                            <h2 className="text-2xl font-display font-bold text-cream mb-8 border-b border-accent/20 pb-4 inline-block pr-12">🍔 Burgers</h2>
                            <div className="flex flex-col gap-6">
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">Burger</h3>
                                        <span className="font-bold text-cream">£4.50</span>
                                    </div>
                                    <p className="text-cream/70 text-sm">Classic beef burger.</p>
                                </div>
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">Cheese Burger</h3>
                                        <span className="font-bold text-cream">£5.00</span>
                                    </div>
                                    <p className="text-cream/70 text-sm">With melted cheese.</p>
                                </div>
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">Bacon Burger</h3>
                                        <span className="font-bold text-cream">£6.00</span>
                                    </div>
                                    <p className="text-cream/70 text-sm">Topped with crispy bacon.</p>
                                </div>
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">Egg Burger</h3>
                                        <span className="font-bold text-cream">£5.00</span>
                                    </div>
                                    <p className="text-cream/70 text-sm">With a fried egg.</p>
                                </div>
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">Chicken Burger</h3>
                                        <span className="font-bold text-cream">£5.00</span>
                                    </div>
                                    <p className="text-cream/70 text-sm">Crispy chicken fillet.</p>
                                </div>
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">Texas Burger</h3>
                                        <span className="font-bold text-cream">£6.00</span>
                                    </div>
                                    <p className="text-cream/70 text-sm">Cheese, onion rings & BBQ sauce.</p>
                                </div>
                                <div className="group bg-gradient-to-r from-gold-300/5 to-transparent p-4 rounded-xl border border-gold-300/20">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">Porkey Burger</h3>
                                        <span className="font-bold text-cream">£7.00</span>
                                    </div>
                                    <p className="text-cream/70 text-sm">Bacon, sausage, egg & hash brown. The big one.</p>
                                </div>
                                <p className="text-cream/50 text-sm">Extra toppings 80p each.</p>
                            </div>
                        </section>

                        {/* Sides */}
                        <section>
                            <h2 className="text-2xl font-display font-bold text-cream mb-8 border-b border-accent/20 pb-4 inline-block pr-12">🍟 Sides</h2>
                            <div className="flex flex-col gap-6">
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">Chips</h3>
                                        <span className="font-bold text-cream">£3.00</span>
                                    </div>
                                </div>
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">Cheesy Chips</h3>
                                        <span className="font-bold text-cream">£3.95</span>
                                    </div>
                                </div>
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-gold-300 group-hover:text-cream transition-colors">Cheesy Chips with Bacon Bits</h3>
                                        <span className="font-bold text-cream">£4.95</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Takeaway Note */}
                <div className="mt-12 bg-dark-800 p-8 rounded-2xl border border-gold-300/10 text-center max-w-3xl mx-auto">
                    <h3 className="text-xl font-display font-bold text-gold-300 mb-3">🥡 Takeaway Available</h3>
                    <p className="text-cream/70 text-sm">All breakfast and lunch items available for takeaway. Call ahead for quick pickup!</p>
                    <a href="tel:07840803555" className="inline-block mt-4 text-gold-300 font-bold hover:text-cream transition-colors">📞 07840 803555</a>
                </div>

                {/* Footer Note */}
                <div className="mt-8 text-center text-zinc-500 text-sm">
                    <p>Please inform our staff of any allergies or dietary requirements before ordering.</p>
                    <p>Prices subject to change. V - Vegetarian options available.</p>
                </div>
            </div>
        </div>
    );
};

export default Menu;
