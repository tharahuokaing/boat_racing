// Existing interactivity: click on images
document.querySelectorAll('.event-images img').forEach(img => {
    img.addEventListener('click', () => {
        alert("សូមអញ្ជើញរីករាយជាមួយប្រណាំងអ៊ុំទូក!");
    });
});

// List of 20 boats from pagodas in Kandal province (Khmer names)
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
  "ទូកវត្តសុវណ្ណវារី"
  "ទូកង ហួកាំង ថារ៉ា​ (ភោជនីយដ្ឋាន ផ្កាយ ៥ ហួ កាំង (សាខាអូរស្មាច់ ខេត្តឧត្តមានជ័យ ព្រះរាជាណាចក្រកម្ពុជា))"
];

// Dynamically render boats into the page
const boatListContainer = document.createElement('div');
boatListContainer.className = "boat-list";

const title = document.createElement('h3');
title.textContent = "បញ្ជីទូកប្រណាំង (ខេត្តកណ្ដាល)";
boatListContainer.appendChild(title);

const ul = document.createElement('ul');
boats.forEach((name, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${name}`;
    ul.appendChild(li);
});
boatListContainer.appendChild(ul);

// Append to main content
document.querySelector('main').appendChild(boatListContainer);
