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
    "ទូកវត្តព្រះប្រសប់",
    "ទូកវត្តស្វាយជ្រំ",
    "ទូកវត្តកំពង់ភ្នំ",
    "ទូកវត្តកោះធំ",
    "ទូកវត្តកោះចិន",
    "ទូកវត្តកោះកែវ",
    "ទូកវត្តពោធិ៍បាន",
    "ទូកវត្តសិរីមង្គល",
    "ទូកវត្តអង្គរជ័យ",
    "ទូកវត្តព្រែកអញ្ចាញ",
    "ទូកវត្តជ្រោយអំពិល",
    "ទូកវត្តព្រែកតាមាក់",
    "ទូកវត្តរកាកោង",
    "ទូកវត្តទួលក្រសាំង",
    "ទូកវត្តកណ្ដាល",
    "ទូកវត្តស្វាយរមៀត",
    "ទូកវត្តត្រើយកោះ",
    "ទូកវត្តព្រែកតាទែន",
    "ទូកវត្តព្រះឥន្ទសាមគ្គី",
    "ទូកវត្តសុវណ្ណវារី",
    "ទូកង ហួកាំង ថារ៉ា (ភោជនីយដ្ឋាន ផ្កាយ ៥ ហួ កាំង សាខាអូរស្មាច់ ខេត្តឧត្តមានជ័យ)"
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