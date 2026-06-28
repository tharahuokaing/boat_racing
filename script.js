// ==============================
// Wedding Boat Race Interactivity
// ==============================

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
description.textContent =
    'សូមស្វាគមន៍ក្រុមទូកទាំងអស់ដែលបានចូលរួមក្នុងកម្មវិធីប្រណាំងអ៊ុំទូក ដើម្បីអបអរសាទរពិធីសិរីមង្គលអាពាហ៍ពិពាហ៍។';
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
    if (boat.includes('ហួកាំង ថារ៉ា')) {
        li.classList.add('special-boat');
        
        // Custom interactive click to show boat1.png image modal
        li.addEventListener('click', () => {
            showBoatImageModal('boat1.png', boat);
        });
    } else {
        // Standard click interaction for all other boats
        li.addEventListener('click', () => {
            alert(`🚣‍♂️ ${boat}\n\nសូមជូនពរឲ្យទទួលបានជ័យជម្នះ!`);
        });
    }

    ul.appendChild(li);
});

boatSection.appendChild(ul);

// Summary
const summary = document.createElement('div');
summary.className = 'boat-summary';
summary.innerHTML = `
    <strong>ចំនួនទូកសរុប៖ ${boats.length} ទូក</strong>
`;
boatSection.appendChild(summary);

// Add to page
const main = document.querySelector('main') || document.querySelector('.invitation-container');

if (main) {
    main.appendChild(boatSection);
} else {
    console.error('Main element not found.');
}

/**
 * Creates and displays a sleek modal popup displaying the requested boat image
 * @param {string} src - The image filename/URLpath 
 * @param {string} titleText - The header text or description overlay
 */
function showBoatImageModal(src, titleText) {
    // Create background backdrop overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.85);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        cursor: zoom-out;
        padding: 20px;
        box-sizing: border-box;
    `;

    // Wrapper for clean framing layout
    const modalWrapper = document.createElement('div');
    modalWrapper.style.cssText = `
        max-width: 90%;
        max-height: 80%;
        position: relative;
        text-align: center;
    `;

    // The boat image element
    const img = document.createElement('img');
    img.src = src;
    img.alt = titleText;
    img.style.cssText = `
        max-width: 100%;
        max-height: 70vh;
        border: 3px solid #c5a059;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    `;

    // Text Label below the image
    const label = document.createElement('p');
    label.style.cssText = `
        font-family: 'Hanuman', serif;
        color: #fffdf9;
        font-weight: bold;
        margin-top: 15px;
        font-size: 1rem;
        line-height: 1.5;
        text-shadow: 1px 1px 4px rgba(0,0,0,0.8);
    `;
    label.innerHTML = `🏆 ${titleText}<br><span style="color:#c5a059; font-size:0.85rem;">(សូមចុចកន្លែងណាក៏បានដើម្បីបិទវិញ)</span>`;

    // Build hierarchy and append to document
    modalWrapper.appendChild(img);
    modalWrapper.appendChild(label);
    overlay.appendChild(modalWrapper);
    document.body.appendChild(overlay);

    // Dismiss modal cleanly upon any click
    overlay.addEventListener('click', () => {
        overlay.remove();
    });
}
