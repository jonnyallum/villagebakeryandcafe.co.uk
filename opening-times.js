// Add Opening Times to the website
(function() {
    'use strict';
    
    function addOpeningTimes() {
        // Find the contact section or footer
        const sections = document.querySelectorAll('section');
        let contactSection = null;
        
        // Look for a section that contains contact information
        for (const section of sections) {
            const text = section.textContent.toLowerCase();
            if (text.includes('142 london road') || text.includes('purbrook') || text.includes('contact')) {
                contactSection = section;
                break;
            }
        }
        
        if (!contactSection) {
            console.log('Contact section not found, retrying...');
            setTimeout(addOpeningTimes, 100);
            return;
        }
        
        // Check if opening times already exist
        if (document.querySelector('.opening-times-section')) {
            console.log('Opening times already added');
            return;
        }
        
        // Create the opening times element
        const openingTimesHTML = `
            <div class="opening-times-section" style="
                background: linear-gradient(135deg, rgba(156, 168, 62, 0.1) 0%, rgba(156, 168, 62, 0.05) 100%);
                border: 2px solid rgba(156, 168, 62, 0.3);
                border-radius: 12px;
                padding: 32px;
                margin: 40px auto;
                max-width: 600px;
                text-align: center;
            ">
                <h3 style="
                    color: #9ca83e;
                    font-size: 24px;
                    font-weight: 700;
                    margin: 0 0 20px 0;
                ">Opening Times</h3>
                <div style="
                    display: grid;
                    gap: 12px;
                    color: #ffffff;
                    font-size: 16px;
                    line-height: 1.6;
                ">
                    <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid rgba(156, 168, 62, 0.2);">
                        <span style="font-weight: 600;">Monday - Thursday</span>
                        <span>7:30am - 2:00pm</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid rgba(156, 168, 62, 0.2);">
                        <span style="font-weight: 600;">Friday - Saturday</span>
                        <span>7:00am - 2:00pm</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 8px 0;">
                        <span style="font-weight: 600;">Sunday</span>
                        <span style="color: #ff6b6b;">Closed</span>
                    </div>
                </div>
            </div>
        `;
        
        // Insert the opening times before the contact section or at the end
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = openingTimesHTML;
        const openingTimesElement = tempDiv.firstElementChild;
        
        // Insert into the contact section
        const container = contactSection.querySelector('div[class*="container"]') || contactSection;
        container.appendChild(openingTimesElement);
        
        console.log('Opening times added successfully');
    }
    
    // Try to add opening times when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addOpeningTimes);
    } else {
        addOpeningTimes();
    }
})();
