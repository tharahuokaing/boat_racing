// ==============================================
// Wedding Boat Race Interactivity
// ==============================================

// Event images click effect
document.querySelectorAll('.event-images img').forEach(img => {
    img.addEventListener('click', () => {
        alert("🎉 សូមអញ្ជើញរីករាយជាមួយពិធីប្រណាំងអ៊ុំទូក ក្នុងឱកាសសិរីមង្គលអាពាហ៍ពិពាហ៍ 🎉");
    });
});

// Boat List
const boats = [
    "ទូកង ព្រះទីនាំងឥន្ទ្របុរៈ : វត្តឥន្ទ្របុរៈ",
    "ទូកង បារមីសុវណ្ណភូមិសែនជ័យ : វត្តមានជ័យ",
    "ទូកង ពោធិ៍មាសសែនមានជ័យ : វត្តពោធិ៍មាស",
    "ទូកង សារាយតេជោសែនជ័យ : វត្តពិជ័យរង្សី (ហៅថា វត្តអញ្ជែង)",
    "ទូកង ព្រែកតាមាក់រុងរឿង : វត្តព្រែកតាមាក់",
    "ទូកង ជ័យមង្គលបវរ : វត្តជ័យមង្គល",
    "ទូកង ព្រែកអញ្ចាញឈ្នះជ័យ : វត្តព្រែកអញ្ចាញ",
    "ទូកង កំពង់ស្វាយមានឫទ្ធិ : វត្តកំពង់ស្វាយ",
    "ទូកង សិរីសោភ័ណមានជ័យ : វត្តសិរីសោភ័ណ",
    "ទូកង ព្រះប្រសប់មានជ័យ : វត្តប្រសប់",
    "ទូកង ព្រែកលួងបារមីមានជ័យ : វត្តព្រែកលួង",
    "ទូកង កោះធំសុខសាន្តមានជ័យ : វត្តកោះធំ",
    "ទូកង សាឯមសែនជ័យបារមីស្វាយជ្រុំ : វត្តស្វាយជ្រុំ",
    "ទូកង អរិយក្សត្រឈ្នះមានជ័យ : វត្តអរិយក្សត្រ",
    "ទូកង ព្រែកដាច់មានបារមី : វត្តព្រែកដាច់",
    "ទូកង រកាខ្ពស់សែនជ័យ : វត្តរកាខ្ពស់",
    "ទូកង តាខ្មៅរុងរឿងជ័យ : វត្តតាខ្មៅ",
    "ទូកង សិត្បូសែនជ័យ : វត្តសិត្បូ",
    "ទូកង ព្រែកហូរមហាជ័យ : វត្តព្រែកហូរ",
    "ទូកង មហានិគ្រោធតេជោសែនជ័យ : វត្តមហានិគ្រោធ",
    "ទូកង ហួកាំង ថារ៉ា  : (ភោជនីយដ្ឋាន ផ្កាយ ៥ ហួ កាំង សាខាអូរស្មាច់ ខេត្តឧត្តមានជ័យ)"
];

// Create Section
const boatSection = document.createElement('section');
boatSection.className = 'boat-list';

// Heading
const heading = document.createElement('h3');
heading.innerHTML = `🚣 បញ្ជីទូកប្រណាំង <span>(${boats.length} ទូក)</span>`;
boatSection.appendChild(heading);

// Description
const description = document.createElement('p');
description.textContent = 'សូមស្វាគមន៍ក្រុមទូកទាំងអស់ដែលបានចូលរួមក្នុងកម្មវិធីប្រណាំងអ៊ុំទូក ដើម្បីអបអរសាទរពិធីសិរីមង្គលអាពាហ៍ពិពាហ៍។';
boatSection.appendChild(description);

// Create List
const ul = document.createElement('ul');

boats.forEach((boat, index) => {
    const li = document.createElement('li');

    li.innerHTML = `
        <span class="boat-number">${index + 1}</span>
        <span class="boat-name">${boat}</span>
    `;

    // Highlight special wedding boat
    const isSpecialBoat = boat.includes('ហួកាំង ថារ៉ា');
    if (isSpecialBoat) {
        li.classList.add('special-boat');
        // Optional inline style to make sure it stands out visually immediately
        li.style.border = "2px solid #c5a059";
        li.style.background = "rgba(128, 0, 32, 0.08)";
        li.style.cursor = "pointer";
    }

    // Click interaction
    li.addEventListener('click', () => {
        if (isSpecialBoat) {
            // Show the custom image overlay for the special boat
            showBoatImageModal(boat);
        } else {
            // Standard alert for all other traditional boats
            alert(`🚣‍♂️ ${boat}\n\nសូមជូនពរឲ្យទទួលបានជ័យជម្នះ!`);
        }
    });

    ul.appendChild(li);
});

boatSection.appendChild(ul);

// Summary
const summary = document.createElement('div');
summary.className = 'boat-summary';
summary.innerHTML = `<strong>ចំនួនទូកសរុប៖ ${boats.length} ទូក</strong>`;
boatSection.appendChild(summary);

// Add to page
const mainElement = document.querySelector('main') || document.querySelector('.invitation-container');
if (mainElement) {
    mainElement.appendChild(boatSection);
} else {
    console.error('Main container layout element not found.');
}

/**
 * Creates and displays a sleek, modern image modal modal overlay 
 * when the user clicks on the custom wedding boat.
 */
function showBoatImageModal(boatName) {
    // Prevent duplicate overlays if clicked multiple times
    if (document.getElementById('boatModalOverlay')) return;

    // 1. Create Overlay Background Window
    const overlay = document.createElement('div');
    overlay.id = 'boatModalOverlay';
    Object.assign(overlay.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '10000',
        padding: '20px',
        boxSizing: 'border-box'
    });

    // 2. Create Image Display Container Card
    const card = document.createElement('div');
    Object.assign(card.style, {
        backgroundColor: '#fffdf9',
        border: '3px solid #c5a059',
        borderRadius: '8px',
        padding: '20px',
        maxWidth: '550px',
        width: '100%',
        textAlign: 'center',
        position: 'relative',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
    });

    // Close button (Top-Right Corner)
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    Object.assign(closeBtn.style, {
        position: 'absolute',
        top: '10px',
        right: '15px',
        background: 'none',
        border: 'none',
        fontSize: '2rem',
        color: '#800020',
        cursor: 'pointer',
        lineHeight: '1'
    });
    closeBtn.onclick = () => overlay.remove();

    // Text Heading Inside Card
    const textTitle = document.createElement('h4');
    textTitle.style.cssText = "font-family: 'Moul', serif; color: #800020; margin: 0 0 15px 0; font-size: 0.95rem; line-height: 1.5;";
    textTitle.textContent = boatName;

    // 3. Image Element Loading the Custom Source Domain Directly
    const img = document.createElement('img');
    img.src = "https://tharahuokaing.github.io"; 
    Object.assign(img.style, {
        width: '100%',
        height: 'auto',
        maxHeight: '65vh',
        borderRadius: '4px',
        border: '1px solid rgba(197, 160, 89, 0.3)',
        objectFit: 'contain',
        marginBottom: '15px'
    });
    
    // Safety handling for empty/broken domains to fallback gracefully
    img.onerror = () => {
        img.src = "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80";
    };

    // Blessing Footer text inside modal
    const footerText = document.createElement('p');
    footerText.style.cssText = "font-family: 'Hanuman', serif; font-weight: bold; color: #c5a059; margin: 5px 0 0 0; font-size: 0.95rem;";
    footerText.textContent = "🚣‍♂️ សូមជូនពរឲ្យទទួលបានជ័យជម្នះ និងមហាសិរីសួស្តី! 🏆";

    // Assemble components
    card.appendChild(closeBtn);
    card.appendChild(textTitle);
    card.appendChild(img);
    card.appendChild(footerText);
    overlay.appendChild(card);

    // Dismiss overlay on clicking anywhere outside the card background area
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.remove();
    });

    document.body.appendChild(overlay);
}
