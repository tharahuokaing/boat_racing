// ===================================================
// Wedding Background Music Interactivity (script3.js)
// ===================================================

/**
 * Audio Engine Configuration
 * Uses a single public romantic/ambient classical track suitable for traditional setups
 */
const weddingAudioSrc = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

// Create HTMLAudioElement instance
const weddingAudio = new Audio(weddingAudioSrc);
weddingAudio.loop = true; // Ensures continuous looping throughout guest review
weddingAudio.volume = 0.4; // Set elegant ambient volume threshold (40%)

// Create Floating Audio Control Interface Button
const audioBtn = document.createElement('button');
audioBtn.id = 'weddingAudioToggleBtn';
audioBtn.innerHTML = '🎵 ဖွင့်តន្ត្រី'; // Initial Native Khmer Button Prompt Label

// Apply inline layout styling to cleanly position the controller on screen
Object.assign(audioBtn.style, {
    position: 'fixed',
    bottom: '80px', // Sits safely above the default "Scroll to Top" button placement
    right: '20px',
    zIndex: '1000',
    backgroundColor: '#800020', // Matches your --ceremony-red theme signature
    color: '#ffffff',
    border: '2px solid #c5a059', // Matches your --heritage-gold accent accent line
    borderRadius: '50px',
    padding: '10px 18px',
    fontFamily: "'Hanuman', serif",
    fontSize: '0.88rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(128, 0, 32, 0.3)',
    transition: 'all 0.3s ease-in-out'
});

// Emulate CSS hover states dynamically
audioBtn.onmouseover = () => {
    audioBtn.style.transform = 'scale(1.05)';
    audioBtn.style.backgroundColor = '#ffffff';
    audioBtn.style.color = '#800020';
};
audioBtn.onmouseout = () => {
    audioBtn.style.transform = 'scale(1)';
    audioBtn.style.backgroundColor = '#800020';
    audioBtn.style.color = '#ffffff';
};

/**
 * Toggle Audio Playback Status
 */
function toggleWeddingMusic() {
    if (weddingAudio.paused) {
        weddingAudio.play()
            .then(() => {
                audioBtn.innerHTML = '🔇 បិទតន្ត្រី'; // Update label to "Mute Music"
                audioBtn.style.borderColor = '#800020';
            })
            .catch(error => {
                console.log("Autoplay was blocked by browser policies. Interaction required.", error);
                alert("សូមចុចម្តងទៀត ដើម្បីរីករាយជាមួយតន្ត្រីបកអមមង្គលការ!");
            });
    } else {
        weddingAudio.pause();
        audioBtn.innerHTML = '🎵 ဖွင့်តន្ត្រី'; // Revert back to "Play Music"
        audioBtn.style.borderColor = '#c5a059';
    }
}

// Bind native click event handler directly
audioBtn.addEventListener('click', toggleWeddingMusic);

// Inject component inside the document layout context dynamically once loaded
document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(audioBtn);
    
    // Optional: Attempt subtle background trigger logic immediately upon viewport interactions
    document.body.addEventListener('click', () => {
        // Automatically kicks in background ambient track if audio engine is fresh/unstarted
        if (weddingAudio.paused && audioBtn.innerHTML === '🎵 ဖွင့်តន្ត្រី') {
            // Un-comment the line below if you want the track to force-start on user's very first click anywhere on the screen:
            // toggleWeddingMusic();
        }
    }, { once: true }); // Executes exactly once to respect native browser sandbox policies safely
});
