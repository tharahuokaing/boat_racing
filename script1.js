// ===================================================
// Wedding Boat Race Management & Logistics (script2.js)
// ===================================================

/**
 * Wedding Race Logistics & Event Data Structure
 */
const raceLogistics = {
    ferries: {
        count: 11,
        purpose: "សម្រាប់ទទួលកីឡាករចូលរួមប្រណាំង ពិសាភោជនាហារ (Racer Dining Ferries)",
        image: "data:image/jpeg;base64,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"
    },
    vipCruiser: {
        name: "កប៉ាល់ធំជូនពរ (Grand Blessing Cruise) (02 កប៉ាល់)",
        purpose: "សម្រាប់ទទួលភ្ញៀវកិត្តិយសពិសាភោជនាហារ និងទស្សនាការប្រណាំងទូក (VIP Guest Welcoming Cruise)",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP6R3ntU16jQxVGGnA2iQ2n4ieC8LHOOw3hg&s"
    },
    safetyUnits: {
        count: 50,
        role: "Life Guards សម្រាប់សង្គ្រោះបន្ទាន់លើផ្ទៃទឹក (Water Rescue Professionals)",
        image: "data:image/jpeg;base64,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"
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
