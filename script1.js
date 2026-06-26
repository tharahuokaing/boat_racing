// ===================================================
// Wedding Boat Race Management & Logistics (script2.js)
// ===================================================

/**
 * Wedding Race Logistics & Event Data Structure
 */
const raceLogistics = {
    ferries: {
        count: 10,
        purpose: "សម្រាប់ទទួលកីឡាករចូលរួមប្រណាំង ពិសាភោជនាហារ (Racer Dining Ferries)",
        image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=800&q=80"
    },
    vipCruiser: {
        name: "កប៉ាល់ធំជូនពរ (Grand Blessing Cruise)",
        purpose: "សម្រាប់ទទួលភ្ញៀវកិត្តិយសពិសាភោជនាហារ និងទស្សនាការប្រណាំងទូក (VIP Guest Welcoming Cruise)",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80"
    },
    safetyUnits: {
        count: 50,
        role: "Life Guards សម្រាប់សង្គ្រោះបន្ទាន់លើផ្ទៃទឹក (Water Rescue Professionals)",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80"
    },
    securityRegiments: {
        regiment1: {
            name: "កងព័ទ្ធទីមួយ",
            location: "មុខផ្ទះខាងស្រី (Front of Bride's Residence)"
        },
        regiment2: {
            name: "កងព័ទ្ធទីពីរ (កងព័ទ្ធស្គរជ័យ)",
            location: "មុខផ្ទះខាងប្រុស (Front of Groom's Residence)"
        }
    },
    rounds: [
        {
            id: 1,
            title: "ជើងទី ១ (Round 01 - Qualifying Heat)",
            setup: "កងព័ទ្ធទីមួយ ការពារមុខផ្ទះខាងស្រី | កងព័ទ្ធទីពីរ (កងព័ទ្ធស្គរជ័យ) ស្ថិតនៅមុខផ្ទះខាងប្រុស។"
        },
        {
            id: 2,
            title: "ជើងទី ២ (Round 02 - Semi-Final Heat)",
            setup: "កងព័ទ្ធស្គរជ័យ (កងព័ទ្ធទីពីរ) ផ្លាស់ប្តូរទីតាំងទៅចល័ត ការពារនៅខាងមុខផ្ទះខាងស្រីវិញ។"
        },
        {
            id: 3,
            title: "ជើងទី ៣ (Round 03 - Championship Final Heat)",
            setup: "ទូកកូនកំលោះ (ទូកង ហួកាំង ថារ៉ា) ចេញប្រកួតផ្លូវការដើម្បីស្វែងរកជើងឯក លេខ ១ លេខ ២ លេខ ៣។ កងព័ទ្ធស្គរជ័យ ប្តូរត្រឡប់មកកាន់ជួរមុខផ្ទះខាងប្រុសវិញ។"
        }
    ]
};

// ===================================================
// DOM Construction & Interface Injection
// ===================================================

const logisticsSection = document.createElement('section');
logisticsSection.className = 'race-logistics-section';
logisticsSection.style.marginTop = '40px';
logisticsSection.style.padding = '20px';
logisticsSection.style.background = '#fffdf9';
logisticsSection.style.border = '2px solid #c5a059';
logisticsSection.style.borderRadius = '8px';
logisticsSection.style.textAlign = 'left';

// Title Layout
const logisticsHeader = document.createElement('h3');
logisticsHeader.style.fontFamily = "'Moul', serif";
logisticsHeader.style.color = "#800020";
logisticsHeader.style.fontSize = "1.1rem";
logisticsHeader.style.borderBottom = "2px solid #c5a059";
logisticsHeader.style.paddingBottom = "8px";
logisticsHeader.textContent = "⚓ គ្រឿងឧបកិច្ច ហេដ្ឋារចនាសម្ព័ន្ធ និងប្រព័ន្ធគ្រប់គ្រងការប្រកួត";
logisticsSection.appendChild(logisticsHeader);

// Grid System for Assets
const assetGrid = document.createElement('div');
assetGrid.className = 'asset-grid';
assetGrid.style.display = 'grid';
assetGrid.style.gridTemplateColumns = 'window.innerWidth < 600 ? "1fr" : "1fr 1fr 1fr"';
assetGrid.style.gap = '20px';
assetGrid.style.marginTop = '20px';

// Asset Cards Template Function
function createAssetCard(title, subtitle, imgUrl) {
    const card = document.createElement('div');
    card.style.border = '1px solid rgba(197, 160, 89, 0.3)';
    card.style.borderRadius = '6px';
    card.style.overflow = 'hidden';
    card.style.background = '#ffffff';
    card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.03)';

    const img = document.createElement('img');
    img.src = imgUrl;
    img.style.width = '100%';
    img.style.height = '150px';
    img.style.objectFit = 'cover';
    img.alt = title;

    const body = document.createElement('div');
    body.style.padding = '12px';

    const h4 = document.createElement('h4');
    h4.style.margin = '0 0 5px 0';
    h4.style.color = '#800020';
    h4.style.fontSize = '0.95rem';
    h4.textContent = title;

    const p = document.createElement('p');
    p.style.margin = '0';
    p.style.fontSize = '0.85rem';
    p.style.color = '#555';
    p.style.lineHeight = '1.4';
    p.textContent = subtitle;

    body.appendChild(h4);
    body.appendChild(p);
    card.appendChild(img);
    card.appendChild(body);
    
    return card;
}

// Generate Logistics Asset Elements
assetGrid.appendChild(createAssetCard(`🚢 សាឡាងទទួលកីឡាករ (${raceLogistics.ferries.count} សាឡាង)`, raceLogistics.ferries.purpose, raceLogistics.ferries.image));
assetGrid.appendChild(createAssetCard(raceLogistics.vipCruiser.name, raceLogistics.vipCruiser.purpose, raceLogistics.vipCruiser.image));
assetGrid.appendChild(createAssetCard(`🛟 ក្រុម Lifeguards សង្គ្រោះ (${raceLogistics.safetyUnits.count} នាក់)`, raceLogistics.safetyUnits.role, raceLogistics.safetyUnits.image));

logisticsSection.appendChild(assetGrid);

// Tactics & Strategic Regiment Deployments Block
const regimentContainer = document.createElement('div');
regimentContainer.style.marginTop = '25px';
regimentContainer.style.padding = '15px';
regimentContainer.style.background = 'rgba(128, 0, 32, 0.03)';
regimentContainer.style.borderRadius = '6px';
regimentContainer.style.borderLeft = '4px solid #800020';

const regimentTitle = document.createElement('h4');
regimentTitle.style.margin = '0 0 10px 0';
regimentTitle.style.fontFamily = "'Moul', serif";
regimentTitle.style.fontSize = '0.9rem';
regimentTitle.style.color = '#800020';
regimentTitle.textContent = "⚔️ ផែនការចាត់តាំងកងព័ទ្ធការពារ និងកងវរៈស្គរជ័យ";
regimentContainer.appendChild(regimentTitle);

const regimentDesc = document.createElement('p');
regimentDesc.style.fontSize = '0.9rem';
regimentDesc.style.margin = '0 0 10px 0';
regimentDesc.style.lineHeight = '1.6';
regimentDesc.innerHTML = `• <strong>${raceLogistics.securityRegiments.regiment1.name}៖</strong> ប្រចាំការយាមល្បាត និងគ្រប់គ្រងសន្តិសុខនៅត្រើយទីលានដៅ <strong>${raceLogistics.securityRegiments.regiment1.location}</strong><br>` +
                        `• <strong>${raceLogistics.securityRegiments.regiment2.name}៖</strong> បង្កបង្កើតឡើងជាពិសេសជាកងវរៈស្គរជ័យ បំផុសស្មារតីជ័យជំនះ ដំបូងឡើយឈរជើងនៅ <strong>${raceLogistics.securityRegiments.regiment2.location}</strong>`;
regimentContainer.appendChild(regimentDesc);
logisticsSection.appendChild(regimentContainer);

// Interactive 3-Round Structural Racing Bracket Layout
const timelineHeader = document.createElement('h4');
timelineHeader.style.marginTop = '25px';
timelineHeader.style.fontFamily = "'Moul', serif";
timelineHeader.style.fontSize = '0.9rem';
timelineHeader.style.color = '#800020';
timelineHeader.textContent = "🏁 កាលវិភាគវិលជុំផ្លាស់ប្តូរទីតាំង និងដំណើរការប្រកួតផ្លូវការ";
logisticsSection.appendChild(timelineHeader);

const roundListContainer = document.createElement('div');
roundListContainer.style.display = 'flex';
roundListContainer.style.flexDirection = 'column';
roundListContainer.style.gap = '12px';
roundListContainer.style.marginTop = '15px';

raceLogistics.rounds.forEach((round) => {
    const roundItem = document.createElement('div');
    roundItem.style.padding = '12px 15px';
    roundItem.style.background = '#ffffff';
    roundItem.style.border = '1px solid rgba(197, 160, 89, 0.2)';
    roundItem.style.borderRadius = '6px';
    roundItem.style.cursor = 'pointer';
    roundItem.style.transition = 'all 0.2s ease-in-out';
    
    // Interactive hover style rules emulation via inline listeners
    roundItem.onmouseover = () => {
        roundItem.style.borderColor = '#800020';
        roundItem.style.boxShadow = '0 2px 8px rgba(128,0,32,0.08)';
    };
    roundItem.onmouseout = () => {
        roundItem.style.borderColor = 'rgba(197, 160, 89, 0.2)';
        roundItem.style.boxShadow = 'none';
    };

    roundItem.innerHTML = `
        <div style="font-weight: bold; color: #800020; font-size: 0.95rem; margin-bottom: 4px;">${round.title}</div>
        <div style="font-size: 0.88rem; color: #333; line-height: 1.5;">${round.setup}</div>
    `;

    // Click behavior notification
    roundItem.addEventListener('click', () => {
        alert(`🏆 ព័ត៌មានលម្អិតការប្រកួត៖\n\n${round.title}\n\n${round.setup}\n\nសូមកីឡាករត្រៀមខ្លួនឲ្យបានរួចរាល់!`);
    });

    roundListContainer.appendChild(roundItem);
});

logisticsSection.appendChild(roundListContainer);

// Inject into HTML main body layout context wrapper
const targetMainElement = document.querySelector('main') || document.querySelector('.invitation-container');
if (targetMainElement) {
    targetMainElement.appendChild(logisticsSection);
} else {
    document.body.appendChild(logisticsSection);
}

// Media Query responsiveness setup dynamically handling asset grids
const handleResize = () => {
    if (window.innerWidth < 640) {
        assetGrid.style.gridTemplateColumns = '1fr';
    } else {
        assetGrid.style.gridTemplateColumns = '1fr 1fr 1fr';
    }
};
window.addEventListener('resize', handleResize);
handleResize(); // Execute initial check layout configuration context
