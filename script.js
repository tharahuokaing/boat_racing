// Simple interactivity: alert when clicking on an image
document.querySelectorAll('.event-images img').forEach(img => {
    img.addEventListener('click', () => {
        alert("សូមអញ្ជើញរីករាយជាមួយប្រណាំងអ៊ុំទូក!");
    });
});
