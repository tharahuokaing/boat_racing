// Existing interactivity: click on images
document.querySelectorAll('.event-images img').forEach(img => {
    img.addEventListener('click', () => {
        alert("សូមអញ្ជើញរីករាយជាមួយប្រណាំងអ៊ុំទូក!");
    });
});

// List of 20 boats from pagodas in Kandal province (Khmer names)
const boats = [
    "ទូកវត្តព្រះសុមេធ",
    "ទូកវត្តកោះធំ",
    "ទូកវត្តកោះចិន",
    "ទូកវត្តកោះរំលេច",
    "ទូកវត្តកោះក្រហម",
    "ទូកវត្តកោះសំពៅ",
    "ទូកវត្តកោះព្រះសីហនុ",
    "ទូកវត្តកោះព្រះចន្ទ",
    "ទូកវត្តកោះព្រះអាទិត្យ",
    "ទូកវត្តកោះព្រះកែវ",
    "ទូកវត្តកោះព្រះសង្ឃ",
    "ទូកវត្តកោះព្រះសុរិយា",
    "ទូកវត្តកោះព្រះសុភមង្គល",
    "ទូកវត្តកោះព្រះសុភានី",
    "ទូកវត្តកោះព្រះសុភី",
    "ទូកវត្តកោះព្រះសុភ័ក្រ",
    "ទូកវត្តកោះព្រះសុភមន្ត",
    "ទូកវត្តកោះព្រះសុភាណ",
    "ទូកវត្តកោះព្រះសុភាន",
    "ទូកង ហួកាំង​​ថារ៉ា"
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
