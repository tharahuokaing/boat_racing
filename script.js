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
    "ព្រះទីនាំងឥន្ទ្របុរៈ : វត្តឥន្ទ្របុរៈ",
    "ព្រះស្រីសុវណ្ណភូមិជ័យ : វត្តសុវណ្ណភូមិ",
    "ពោធិ៍មាសសែនជ័យ : វត្តពោធិ៍មាស",
    "កោះចេកមានជ័យ : វត្តកោះចេក",
    "ព្រែកតាមាក់រុងរឿង : វត្តព្រែកតាមាក់",
    "ជ័យមង្គលបវរ : វត្តជ័យមង្គល",
    "ព្រែកអញ្ចាញឈ្នះជ័យ : វត្តព្រែកអញ្ចាញ",
    "កំពង់ស្វាយមានឫទ្ធិ : វត្តកំពង់ស្វាយ",
    "សិរីសោភ័ណមានជ័យ : វត្តសិរីសោភ័ណ",
    "ព្រះប្រសប់ជ័យ : វត្តប្រសប់",
    "ព្រែកលួងបារមីជ័យ : វត្តព្រែកលួង",
    "កោះធំសុខសាន្តជ័យ : វត្តកោះធំ",
    "ស្វាយជ្រុំសាមគ្គីជ័យ : វត្តស្វាយជ្រុំ",
    "អរិយក្សត្រឈ្នះជ័យ : វត្តអរិយក្សត្រ",
    "ព្រែកដាច់មានបារមី : វត្តព្រែកដាច់",
    "រកាខ្ពស់សែនជ័យ : វត្តរកាខ្ពស់",
    "តាខ្មៅរុងរឿងជ័យ : វត្តតាខ្មៅ",
    "សិត្បូសែនជ័យ : វត្តសិត្បូ",
    "ព្រែកហូរមហាជ័យ : វត្តព្រែកហូរ",
    "មហានិគ្រោធតេជោសែនជ័យ : ទូកវត្តមហានិគ្រោធ",
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
    }

    // Click interaction
    li.addEventListener('click', () => {
        alert(`🚣‍♂️ ${boat}\n\nសូមជូនពរឲ្យទទួលបានជ័យជម្នះ!`);
    });

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
const main = document.querySelector('main');

if (main) {
    main.appendChild(boatSection);
} else {
    console.error('Main element not found.');
}
