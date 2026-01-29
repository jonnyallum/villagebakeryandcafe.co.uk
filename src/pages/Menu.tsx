const Menu = () => {
    return (
        <div className="flex flex-col pt-20">
            <section className="bg-surface py-16 border-b border-white/5">
                <div className="container text-center">
                    <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Dine In or Takeaway</span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Our Menu</h1>
                    <p className="text-zinc-400 max-w-2xl mx-auto">Freshly cooked breakfasts, hearty lunches, and delicious snacks.</p>
                </div>
            </section>

            <div className="container py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Column 1 */}
                    <div className="flex flex-col gap-16">
                        {/* Breakfast Section */}
                        <section>
                            <h2 className="text-2xl font-heading font-bold text-white mb-8 border-b border-accent/20 pb-4 inline-block pr-12">Big Breakfasts</h2>
                            <div className="flex flex-col gap-8">
                                {/* Standard items could be here if I had them, adding the "missing" ones + generic */}
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-accent group-hover:text-white transition-colors">Village Big Breakfast</h3>
                                        <span className="font-bold text-white">£8.95</span>
                                    </div>
                                    <p className="text-zinc-400 text-sm">2 Sausages, 2 Bacon, 2 Eggs, Beans, Mushrooms, Tomatoes, 2 Hash Browns, Black Pudding & Toast.</p>
                                </div>

                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-accent group-hover:text-white transition-colors">Veggie Breakfast</h3>
                                        <span className="font-bold text-white">£5.95</span>
                                    </div>
                                    <p className="text-zinc-400 text-sm">2 Hash Browns, 2 Poached Eggs, Beans, Mushrooms, Tomatoes. Served with Toast.</p>
                                </div>

                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-accent group-hover:text-white transition-colors">Lite Breakfast</h3>
                                        <span className="font-bold text-white">£4.95</span>
                                    </div>
                                    <p className="text-zinc-400 text-sm">Sauté Potatoes or Hash Brown, Egg, Sausage, Bacon, Beans. Served with Toast.</p>
                                </div>

                                <div className="bg-surface p-6 rounded-xl border border-white/5 mt-4">
                                    <h4 className="text-accent font-bold mb-2">Customize Your Breakfast</h4>
                                    <p className="text-zinc-400 text-sm mb-2">Add Extra Items for <span className="text-white font-bold">£0.80</span> each.</p>
                                    <p className="text-xs text-zinc-500">Black Pudding, Hash Brown, Egg, Sausage, Bacon, Beans, Mushrooms, Tomatoes, Toast, Fried Bread.</p>
                                </div>
                            </div>
                        </section>

                        {/* Light Bites */}
                        <section>
                            <h2 className="text-2xl font-heading font-bold text-white mb-8 border-b border-accent/20 pb-4 inline-block pr-12">Light Bites</h2>
                            <div className="flex flex-col gap-6">
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-accent group-hover:text-white transition-colors">Plain Omelette</h3>
                                        <span className="font-bold text-white">£3.00</span>
                                    </div>
                                    <p className="text-zinc-400 text-sm">Served with a Side Salad. Add fillings for £0.80 (Cheese, Ham, Tomato, Bacon, Sausage, Mushroom).</p>
                                </div>
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-accent group-hover:text-white transition-colors">Egg on Toast</h3>
                                        <span className="font-bold text-white">£4.95</span>
                                    </div>
                                    <p className="text-zinc-400 text-sm">2 Fried, Poached, or Scrambled Eggs on Door Stop Toast.</p>
                                </div>
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-accent group-hover:text-white transition-colors">Beans on Toast</h3>
                                        <span className="font-bold text-white">£4.95</span>
                                    </div>
                                    <p className="text-zinc-400 text-sm">2 Slices of Door Stop Toast smothered in Baked Beans.</p>
                                </div>
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-accent group-hover:text-white transition-colors">Breakfast Muffins</h3>
                                        <span className="font-bold text-white">£4.00</span>
                                    </div>
                                    <p className="text-zinc-400 text-sm">Bacon & Egg, Sausage & Egg, or Veggie Sausage & Egg.</p>
                                </div>
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-accent group-hover:text-white transition-colors">Pancakes</h3>
                                        <span className="font-bold text-white">£4.95</span>
                                    </div>
                                    <p className="text-zinc-400 text-sm">Served with Bacon & Maple Syrup, or Fruit of the Forest & Maple Syrup.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-16">
                        {/* Baps & Rolls */}
                        <section>
                            <h2 className="text-2xl font-heading font-bold text-white mb-8 border-b border-accent/20 pb-4 inline-block pr-12">Baps, Baguettes & Rolls</h2>
                            <div className="flex flex-col gap-6">
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-accent group-hover:text-white transition-colors">Large Breakfast Bap</h3>
                                        <span className="font-bold text-white">£5.00</span>
                                    </div>
                                    <p className="text-zinc-400 text-sm">Bacon, Egg, and Sausage in a fresh roll or baguette.</p>
                                </div>
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-accent group-hover:text-white transition-colors">BLT</h3>
                                        <span className="font-bold text-white">£4.00</span>
                                    </div>
                                    <p className="text-zinc-400 text-sm">Classic Bacon, Lettuce, Tomato & Mayo.</p>
                                </div>

                                <div className="group pt-4">
                                    <h3 className="text-lg font-bold text-white mb-4">Build Your Own</h3>
                                    <p className="text-zinc-400 text-sm mb-4">Choose from Bap, Baguette, Door Stop, Crusty Roll, or Plait.</p>

                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between border-b border-white/5 pb-2">
                                            <span className="text-zinc-300">1 Filling</span>
                                            <span className="text-accent font-bold">£4.00</span>
                                        </div>
                                        <div className="flex justify-between border-b border-white/5 pb-2">
                                            <span className="text-zinc-300">2 Fillings</span>
                                            <span className="text-accent font-bold">£4.50</span>
                                        </div>
                                        <div className="flex justify-between border-b border-white/5 pb-2">
                                            <span className="text-zinc-300">3 Fillings</span>
                                            <span className="text-accent font-bold">£5.00</span>
                                        </div>
                                        <div className="flex justify-between border-b border-white/5 pb-2">
                                            <span className="text-zinc-300">The Challenge Stack (5 Fillings)</span>
                                            <span className="text-accent font-bold">£6.00</span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-zinc-500 mt-4">Filling Options: Bacon, Sausage, Egg, Mushroom, Hash Brown, Black Pudding, Veggie Sausage.</p>
                                </div>
                            </div>
                        </section>

                        {/* Lunch */}
                        <section>
                            <h2 className="text-2xl font-heading font-bold text-white mb-8 border-b border-accent/20 pb-4 inline-block pr-12">Lunch & Snacks</h2>
                            <div className="flex flex-col gap-6">
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-accent group-hover:text-white transition-colors">Freshly Made Sandwiches</h3>
                                        <span className="font-bold text-white">from £3.50</span>
                                    </div>
                                    <p className="text-zinc-400 text-sm">Ham, Cheese, Tuna Mayo, Chicken Mayo, Egg Mayo. Served on White or Brown.</p>
                                </div>
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-accent group-hover:text-white transition-colors">Paninis & Toasties</h3>
                                        <span className="font-bold text-white">from £4.50</span>
                                    </div>
                                    <p className="text-zinc-400 text-sm">Toasted to perfection with your choice of fillings.</p>
                                </div>
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold text-accent group-hover:text-white transition-colors">Homemade Cakes</h3>
                                        <span className="font-bold text-white">Ask at counter</span>
                                    </div>
                                    <p className="text-zinc-400 text-sm">Selection changes daily. Brownies, Flapjacks, Sponges.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="mt-16 text-center text-zinc-500 text-sm">
                    <p>Please inform our staff of any allergies or dietary requirements before ordering.</p>
                    <p>Prices subject to change. V - Vegetarian options available.</p>
                </div>
            </div>
        </div>
    );
};

export default Menu;
