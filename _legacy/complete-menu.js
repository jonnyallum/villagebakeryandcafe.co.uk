// Add Complete Menu Items to the website
(function() {
    'use strict';
    
    function addCompleteMenu() {
        // Find the menu section
        const menuSection = document.querySelector('[class*="container"]');
        if (!menuSection) {
            console.log('Menu section not found, retrying...');
            setTimeout(addCompleteMenu, 100);
            return;
        }
        
        // Check if complete menu already added
        if (document.querySelector('.complete-menu-added')) {
            console.log('Complete menu already added');
            return;
        }
        
        // Find the Big Breakfasts section
        const headings = Array.from(document.querySelectorAll('h3'));
        const bigBreakfastsHeading = headings.find(h => h.textContent.includes('Big Breakfasts'));
        
        if (!bigBreakfastsHeading) {
            console.log('Big Breakfasts heading not found, retrying...');
            setTimeout(addCompleteMenu, 100);
            return;
        }
        
        // Get the parent container of the menu items
        const menuContainer = bigBreakfastsHeading.closest('div[class*="grid"]')?.parentElement;
        if (!menuContainer) {
            console.log('Menu container not found, retrying...');
            setTimeout(addCompleteMenu, 100);
            return;
        }
        
        // Find the Big Breakfasts grid
        const bigBreakfastsGrid = bigBreakfastsHeading.nextElementSibling;
        if (!bigBreakfastsGrid) {
            console.log('Big Breakfasts grid not found');
            return;
        }
        
        // Add missing breakfast items
        const missingBreakfastItems = [
            {
                name: 'Veggie Breakfast',
                price: '£5.95',
                description: '2 Hash Browns, 2 Poached Eggs, Beans, Mushrooms, Tomatoes. Served with Toast.'
            },
            {
                name: 'Lite Breakfast',
                price: '£4.95',
                description: 'Sauté Potatoes or Hash Brown, Egg, Sausage, Bacon, Beans. Served with Toast.'
            }
        ];
        
        missingBreakfastItems.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = bigBreakfastsGrid.firstElementChild.className;
            itemDiv.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px;">
                    <h4 style="color: #9ca83e; font-size: 18px; font-weight: 600; margin: 0;">${item.name}</h4>
                    <span style="color: #9ca83e; font-size: 18px; font-weight: 600;">${item.price}</span>
                </div>
                <p style="color: rgba(255, 255, 255, 0.7); font-size: 14px; line-height: 1.6; margin: 0;">${item.description}</p>
            `;
            bigBreakfastsGrid.appendChild(itemDiv);
        });
        
        // Add "Add Extra Items" section after Big Breakfasts
        const extraItemsDiv = document.createElement('div');
        extraItemsDiv.className = bigBreakfastsGrid.firstElementChild.className;
        extraItemsDiv.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px;">
                <h4 style="color: #9ca83e; font-size: 18px; font-weight: 600; margin: 0;">Add Extra Items</h4>
                <span style="color: #9ca83e; font-size: 18px; font-weight: 600;">£0.80 per item</span>
            </div>
            <p style="color: rgba(255, 255, 255, 0.7); font-size: 14px; line-height: 1.6; margin: 0;">Black Pudding, Hash Brown, Egg (Poached or Scrambled), Sausage, Bacon, Beans, Mushrooms, Grilled or Tinned Tomatoes, Toast, Fried Bread, or Bread and Butter.</p>
        `;
        bigBreakfastsGrid.appendChild(extraItemsDiv);
        
        // Add "Baps, Baguettes & Rolls" section
        const bapsSection = document.createElement('div');
        bapsSection.innerHTML = `
            <h3 style="color: #9ca83e; font-size: 28px; font-weight: 700; margin: 48px 0 24px 0; font-family: 'Playfair Display', serif;">Baps, Baguettes & Rolls</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
                <div>
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px;">
                        <h4 style="color: #9ca83e; font-size: 18px; font-weight: 600; margin: 0;">Large Breakfast Bap/Baguette</h4>
                        <span style="color: #9ca83e; font-size: 18px; font-weight: 600;">£5.00</span>
                    </div>
                    <p style="color: rgba(255, 255, 255, 0.7); font-size: 14px; line-height: 1.6; margin: 0;">Bacon, Egg, and Sausage.</p>
                </div>
                <div>
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px;">
                        <h4 style="color: #9ca83e; font-size: 18px; font-weight: 600; margin: 0;">BLT Bap/Baguette</h4>
                        <span style="color: #9ca83e; font-size: 18px; font-weight: 600;">£4.00</span>
                    </div>
                    <p style="color: rgba(255, 255, 255, 0.7); font-size: 14px; line-height: 1.6; margin: 0;">Bacon, Lettuce, Tomato, Mayo.</p>
                </div>
                <div>
                    <div style="margin-bottom: 12px;">
                        <h4 style="color: #9ca83e; font-size: 18px; font-weight: 600; margin: 0 0 8px 0;">Bap / Baguette / Door Stop / Crusty Roll / Plait</h4>
                        <div style="color: rgba(255, 255, 255, 0.7); font-size: 14px; line-height: 1.8;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                                <span>1 Filling:</span>
                                <span style="color: #9ca83e; font-weight: 600;">£4.00</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                                <span>2 Fillings:</span>
                                <span style="color: #9ca83e; font-weight: 600;">£4.50</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                                <span>3 Fillings:</span>
                                <span style="color: #9ca83e; font-weight: 600;">£5.00</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                                <span>4 Fillings:</span>
                                <span style="color: #9ca83e; font-weight: 600;">£5.50</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                <span>5 Fillings:</span>
                                <span style="color: #9ca83e; font-weight: 600;">£6.00</span>
                            </div>
                            <p style="margin: 8px 0 0 0; font-size: 13px;">Filling Options: Bacon, Sausage, Egg, Mushroom, Hash Brown, Black Pudding, Veggie Sausage.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Insert Baps section after Big Breakfasts
        const sandwichesHeading = headings.find(h => h.textContent.includes('Hot & Cold Sandwiches'));
        if (sandwichesHeading) {
            sandwichesHeading.parentElement.insertBefore(bapsSection, sandwichesHeading.parentElement.firstChild);
        }
        
        // Add "Light Bites" section
        const lightBitesSection = document.createElement('div');
        lightBitesSection.innerHTML = `
            <h3 style="color: #9ca83e; font-size: 28px; font-weight: 700; margin: 48px 0 24px 0; font-family: 'Playfair Display', serif;">Light Bites</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
                <div>
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px;">
                        <h4 style="color: #9ca83e; font-size: 18px; font-weight: 600; margin: 0;">Plain Omelette</h4>
                        <span style="color: #9ca83e; font-size: 18px; font-weight: 600;">£3.00</span>
                    </div>
                    <p style="color: rgba(255, 255, 255, 0.7); font-size: 14px; line-height: 1.6; margin: 0;">Served with a Side Salad.<br><span style="font-size: 13px;">Add Items: Cheese, Ham, Tomato, Bacon, Sausage, Mushroom, Onion. (£0.80 per additional item)</span></p>
                </div>
                <div>
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px;">
                        <h4 style="color: #9ca83e; font-size: 18px; font-weight: 600; margin: 0;">Egg On Toast</h4>
                        <span style="color: #9ca83e; font-size: 18px; font-weight: 600;">£4.95</span>
                    </div>
                    <p style="color: rgba(255, 255, 255, 0.7); font-size: 14px; line-height: 1.6; margin: 0;">Choose from 2 Fried, Poached, or Scrambled Eggs. Served on Freshly Cut Door Stop Toast.</p>
                </div>
                <div>
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px;">
                        <h4 style="color: #9ca83e; font-size: 18px; font-weight: 600; margin: 0;">Beans On Toast</h4>
                        <span style="color: #9ca83e; font-size: 18px; font-weight: 600;">£4.95</span>
                    </div>
                    <p style="color: rgba(255, 255, 255, 0.7); font-size: 14px; line-height: 1.6; margin: 0;">2 Slices of Door Stop Toast Smothered in Baked Beans.</p>
                </div>
                <div>
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px;">
                        <h4 style="color: #9ca83e; font-size: 18px; font-weight: 600; margin: 0;">Breakfast Muffins</h4>
                        <span style="color: #9ca83e; font-size: 18px; font-weight: 600;">£4.00</span>
                    </div>
                    <p style="color: rgba(255, 255, 255, 0.7); font-size: 14px; line-height: 1.6; margin: 0;">Choose from Bacon and Egg, Sausage and Egg, or Veggie Sausage & Egg.<br><span style="font-size: 13px;">Additional items: £0.80</span></p>
                </div>
                <div>
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px;">
                        <h4 style="color: #9ca83e; font-size: 18px; font-weight: 600; margin: 0;">Pancakes</h4>
                        <span style="color: #9ca83e; font-size: 18px; font-weight: 600;">£4.95</span>
                    </div>
                    <p style="color: rgba(255, 255, 255, 0.7); font-size: 14px; line-height: 1.6; margin: 0;">With Bacon and Maple Syrup, or Fruit of the Forest and Maple Syrup.</p>
                </div>
            </div>
        `;
        
        // Insert Light Bites before Hot & Cold Sandwiches
        if (sandwichesHeading) {
            sandwichesHeading.parentElement.insertBefore(lightBitesSection, sandwichesHeading.parentElement.firstChild);
        }
        
        // Mark as complete
        const marker = document.createElement('div');
        marker.className = 'complete-menu-added';
        marker.style.display = 'none';
        document.body.appendChild(marker);
        
        console.log('Complete menu added successfully');
    }
    
    // Try to add complete menu when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addCompleteMenu);
    } else {
        addCompleteMenu();
    }
})();
