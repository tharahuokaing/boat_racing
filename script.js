// ===================================================
// Wedding Boat Race Interactivity & Logistics (script2.js)
// ===================================================

// ១. បញ្ជីទូកងចូលរួមប្រកួតទាំងអស់ (Participating Racing Boats List)
const boats = [
    { km: "ទូកង ព្រះទីនាំងឥន្ទ្របុរៈ : វត្តឥន្ទ្របុរៈ", en: "Preah Tineang Indrapura Racing Boat : Wat Indrapura" },
    { km: "ទូកង បារមីសុវណ្ណភូមិសែនជ័យ : វត្តមានជ័យ", en: "Baramey Sovannaphum Sen Chey : Wat Meanchey" },
    { km: "ទូកង ពោធិ៍មាសសែនមានជ័យ : វត្តពោធិ៍មាស", en: "Po Meas Sen Meanchey : Wat Po Meas" },
    { km: "ទូកង សារាយតេជោសែនជ័យ : វត្តពិជ័យរង្សី (ហៅថា វត្តអញ្ជែង)", en: "Saray Techo Sen Chey : Wat Pichey Rangsey (Wat Anchaeng)" },
    { km: "ទូកង ព្រែកតាមាក់រុងរឿង : វត្តព្រែកតាមាក់", en: "Prek Tamak Rong Roeung : Wat Prek Tamak" },
    { km: "ទូកង ជ័យមង្គលបវរ : វត្តជ័យមង្គល", en: "Chey Mongkol Bovor : Wat Chey Mongkol" },
    { km: "ទូកង ព្រែកអញ្ចាញឈ្នះជ័យ : វត្តព្រែកអញ្ចាញ", en: "Prek Anchanh Chhneah Chey : Wat Prek Anchanh" },
    { km: "ទូកង កំពង់ស្វាយមានឫទ្ធិ : វត្តកំពង់ស្វាយ", en: "Kampong Svay Mean Rith : Wat Kampong Svay" },
    { km: "ទូកង សិរីសោភ័ណមានជ័យ : វត្តសិរីសោភ័ណ", en: "Serei Saophoan Meanchey : Wat Serei Saophoan" },
    { km: "ទូកង ព្រះប្រសប់មានជ័យ : វត្តប្រសប់", en: "Preah Prasab Meanchey : Wat Prasab" },
    { km: "ទូកង ព្រែកលួងបារមីមានជ័យ : វត្តព្រែកលួង", en: "Prek Luong Baramey Meanchey : Wat Prek Luong" },
    { km: "ទូកង កោះធំសុខសាន្តមានជ័យ : វត្តកោះធំ", en: "Koh Thom Soksan Meanchey : Wat Koh Thom" },
    { km: "ទូកង សាឯមសែនជ័យបារមីស្វាយជ្រុំ : វត្តស្វាយជ្រុំ", en: "Sa Em Sen Chey Baramey Svay Chrum : Wat Svay Chrum" },
    { km: "ទូកង អរិយក្សត្រឈ្នះមានជ័យ : វត្តអរិយក្សត្រ", en: "Arey Ksat Chhneah Meanchey : Wat Arey Ksat" },
    { km: "ទូកង ព្រែកដាច់មានបារមី : វត្តព្រែកដាច់", en: "Prek Dach Mean Baramey : Wat Prek Dach" },
    { km: "ទូកង រកាខ្ពស់សែនជ័យ : វត្តរកាខ្ពស់", en: "Roka Khpos Sen Chey : Wat Roka Khpos" },
    { km: "ទូកង តាខ្មៅរុងរឿងជ័យ : វត្តតាខ្មៅ", en: "Ta Khmau Rong Roeung Chey : Wat Ta Khmau" },
    { km: "ទូកង សិត្បូសែនជ័យ : វត្តសិត្បូ", en: "Setbo Sen Chey : Wat Setbo" },
    { km: "ទូកង ព្រែកហូរមហាជ័យ : វត្តព្រែកហូរ", en: "Prek Ho Moha Chey : Wat Prek Ho" },
    { km: "ទូកង មហានិគ្រោធតេជោសែនជ័យ : វត្តមហានិគ្រោធ", en: "Moha Nikroth Techo Sen Chey : Wat Moha Nikroth" },
    { km: "ទូកង ហួកាំង ថារ៉ា : (ភោជនីយដ្ឋាន ផ្កាយ ៥ ហួ កាំង សាខាអូរស្មាច់ ខេត្តឧត្តមានជ័យ)", en: "Huokaing Thara Racing Boat : (Hou Kaing 5-Star Restaurant, O'Smach Branch, Oddar Meanchey)" }
];

// ២. ទិន្នន័យគ្រឿងឧបកិច្ច ផែនការចាត់តាំង និងការប្រកួត (Logistics, Infrastructure & Race Rounds)
const raceLogistics = {
    ferries: {
        count: 11,
        titleKm: "សាឡាងកីឡាករ (11 សាឡាង)",
        titleEn: "Racer Dining Ferries (11 Vessels)",
        purposeKm: "សម្រាប់ទទួលកីឡាករចូលរួមប្រណាំង ពិសាភោជនាហារ",
        purposeEn: "Dedicated dining & hospitality ferries for participating boat racers.",
        image: "https://i.ytimg.com/vi/v75fvzvI0JQ/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGFQgXShlMA8=&rs=AOn4CLB5T5vYEymxlZHCy8W-4k6ca_u_8A"
    },
    vipCruiser: {
        titleKm: "កប៉ាល់ធំជូនពរ (02 កប៉ាល់)",
        titleEn: "Grand Blessing VIP Cruisers (02 Vessels)",
        purposeKm: "សម្រាប់ទទួលភ្ញៀវកិត្តិយសពិសាភោជនាហារ និងទស្សនាការប្រណាំងទូក",
        purposeEn: "VIP dining and riverfront viewing cruisers for distinguished wedding guests.",
        image: "https://image.freshnewsasia.com/2020/id-154/fn-2020-02-14-11-43-11-0.jpg"
    },
    safetyUnits: {
        count: 50,
        titleKm: "ក្រុម Lifeguards (50 នាក់)",
        titleEn: "Water Rescue Lifeguards (50 Personnel)",
        purposeKm: "Life Guards សម្រាប់សង្គ្រោះបន្ទាន់លើផ្ទៃទឹក",
        purposeEn: "Certified water rescue professionals stationed for emergency river safety.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTimMGzZETksy-J9OREb2mRs4eCNpaUIPvZcLnJu--Y-d4OI9qd&s"
    },
    rounds: [
        {
            id: 1,
            titleKm: "ជើងទី ១ (Round 01 - Qualifying Heat)",
            setupKm: "កងព័ទ្ធទីមួយ ការពារមុខផ្ទះខាងស្រី | កងព័ទ្ធទីពីរ (កងព័ទ្ធស្គរជ័យ) ស្ថិតនៅមុខផ្ទះខាងប្រុស។",
            setupEn: "First Guard Unit stationed in front of the Bride's residence | Second Guard Unit (Victory Drum Unit) positioned in front of the Groom's residence."
        },
        {
            id: 2,
            titleKm: "ជើងទី ២ (Round 02 - Semi-Final Heat)",
            setupKm: "កងព័ទ្ធស្គរជ័យ (កងព័ទ្ធទីពីរ) ផ្លាស់ប្តូរទីតាំងទៅចល័ត ការពារនៅខាងមុខផ្ទះខាងស្រីវិញ។",
            setupEn: "The Victory Drum Unit (Second Guard Unit) maneuvers into formation to guard the front of the Bride's residence."
        },
        {
            id: 3,
            titleKm: "ជើងទី ៣ (Round 03 - Championship Final Heat)",
            setupKm: "ទូកកូនកំលោះ (ទូកង ហួកាំង ថារ៉ា) ចេញប្រកួតផ្លូវការដើម្បីស្វែងរកជើងឯក លេខ ១ លេខ ២ លេខ ៣។ កងព័ទ្ធស្គរជ័យ ប្តូរត្រឡប់មកកាន់ជួរមុខផ្ទះខាងប្រុសវិញ។",
            setupEn: "The Groom's Boat (Huokaing Thara Racing Boat) officially enters the final race to determine 1st, 2nd, and 3rd place champions. The Victory Drum Unit returns to the Groom's front line."
        }
    ]
};

// ៣. បង្កើត Interface និងដាក់បញ្ចូលទៅក្នុងទំព័រ HTML
document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.querySelector('main') || document.querySelector('.invitation-container');
    if (!mainContainer) return;

    // --- បង្កើតផ្នែកបញ្ជីទូកងប្រណាំង (Participating Boats Section) ---
    const boatSection = document.createElement('section');
    boatSection.className = 'boat-list';
    boatSection.style.cssText = "margin-top: 30px; text-align: left;";

    const heading = document.createElement('h3');
    heading.style.cssText = "font-family: 'Moul', serif; color: #800020; font-size: 1.1rem; border-bottom: 2px solid #c5a059; padding-bottom: 8px;";
    heading.innerHTML = `🚣 បញ្ជីទូកប្រណាំង <span>(${boats.length} ទូក)</span><br><small style="font-family: 'Playfair Display', serif; font-size: 0.9rem; color: #7a5c2b; font-weight: 600;">Participating Racing Boats (${boats.length} Vessels)</small>`;
    boatSection.appendChild(heading);

    const description = document.createElement('p');
    description.style.cssText = "font-size: 0.95rem; color: #333; line-height: 1.6; margin-top: 10px;";
    description.innerHTML = `
        សូមស្វាគមន៍ក្រុមទូកទាំងអស់ដែលបានចូលរួមក្នុងកម្មវិធីប្រណាំងអ៊ុំទូក ដើម្បីអបអរសាទរពិធីសិរីមង្គលអាពាហ៍ពិពាហ៍។<br>
        <span style="font-family: 'Playfair Display', serif; font-size: 0.88rem; color: #666; font-style: italic;">Welcome to all participating racing boat teams joining our traditional boat race in celebration of our auspicious wedding ceremony.</span>
    `;
    boatSection.appendChild(description);

    const ul = document.createElement('ul');
    ul.style.cssText = "list-style: none; padding: 0; margin: 15px 0;";

    boats.forEach((boat, index) => {
        const li = document.createElement('li');
        li.style.cssText = "padding: 12px; margin-bottom: 8px; border: 1px solid rgba(197,160,89,0.25); border-radius: 6px; display: flex; align-items: flex-start; cursor: pointer; background: #fff; transition: transform 0.2s ease;";

        li.innerHTML = `
            <span class="boat-number" style="font-weight: bold; color: #800020; margin-right: 15px; min-width: 25px; padding-top: 2px;">${index + 1}</span>
            <div class="boat-name-wrapper" style="display: flex; flex-direction: column;">
                <span class="boat-name" style="font-size: 0.95rem; color: #2c2520;">${boat.km}</span>
                <span class="boat-name-en" style="font-family: 'Poppins', sans-serif; font-size: 0.8rem; color: #7a5c2b; margin-top: 2px;">${boat.en}</span>
            </div>
        `;

        // បន្លិចពណ៌ពិសេសសម្រាប់ទូកកូនកំលោះ និងដាក់ Event ចុចមើលរូបភាព ២ សន្លឹកព្រមគ្នា
        if (boat.km.includes('ហួកាំង ថារ៉ា')) {
            li.style.background = "rgba(128, 0, 32, 0.05)";
            li.style.border = "1.5px solid #800020";
            li.querySelector('.boat-name').style.fontWeight = "bold";
            
            li.addEventListener('click', () => {
                showBoatImagesModal(['boat.png', 'boat1.png'], `${boat.km}<br><span style="font-family: 'Poppins', sans-serif; font-size: 0.85rem; color: #fff;">${boat.en}</span>`);
            });
        } else {
            // ទូកធម្មតាបង្ហាញ Alert ជូនពរជាពីរភាសា
            li.addEventListener('click', () => {
                alert(`🚣‍♂️ ${boat.km}\n(${boat.en})\n\nសូមជូនពរឲ្យទទួលបានជ័យជម្នះ!\nWishing your team victory and success!`);
            });
        }
        ul.appendChild(li);
    });
    boatSection.appendChild(ul);

    const summary = document.createElement('div');
    summary.style.cssText = "font-size: 0.95rem; color: #800020; margin-top: 10px;";
    summary.innerHTML = `<strong>ចំនួនទូកសរុប៖ ${boats.length} ទូក | Total Participating Boats: ${boats.length} Vessels</strong>`;
    boatSection.appendChild(summary);
    
    mainContainer.appendChild(boatSection);

    // --- បង្កើតផ្នែកគ្រឿងឧបកិច្ច ហេដ្ឋារចនាសម្ព័ន្ធ និងប្រព័ន្ធប្រកួត (Logistics & Race Structure) ---
    const logisticsSection = document.createElement('section');
    logisticsSection.style.cssText = "margin-top: 40px; padding: 20px; background: #fffdf9; border: 2px solid #c5a059; border-radius: 8px; text-align: left;";

    const logisticsHeader = document.createElement('h3');
    logisticsHeader.style.cssText = "font-family: 'Moul', serif; color: #800020; font-size: 1.1rem; border-bottom: 2px solid #c5a059; padding-bottom: 8px;";
    logisticsHeader.innerHTML = `⚓ គ្រឿងឧបកិច្ច ហេដ្ឋារចនាសម្ព័ន្ធ និងប្រព័ន្ធគ្រប់គ្រងការប្រកួត<br><small style="font-family: 'Playfair Display', serif; font-size: 0.88rem; color: #7a5c2b; font-weight: 600;">Race Logistics, Fleet Infrastructure &amp; Event Management</small>`;
    logisticsSection.appendChild(logisticsHeader);

    const assetGrid = document.createElement('div');
    assetGrid.style.cssText = "display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 20px; margin-top: 20px;";

    function createAssetCard(titleKm, titleEn, purposeKm, purposeEn, imgUrl) {
        const card = document.createElement('div');
        card.style.cssText = "border: 1px solid rgba(197, 160, 89, 0.3); border-radius: 6px; overflow: hidden; background: #ffffff; box-shadow: 0 4px 8px rgba(0,0,0,0.03);";
        card.innerHTML = `
            <img src="${imgUrl}" alt="${titleEn}" style="width: 100%; height: 120px; object-fit: cover;">
            <div style="padding: 12px;">
                <h4 style="margin: 0 0 2px 0; color: #800020; font-size: 0.95rem;">🚢 ${titleKm}</h4>
                <div style="font-family: 'Poppins', sans-serif; font-size: 0.78rem; font-weight: 600; color: #b08d47; margin-bottom: 6px;">${titleEn}</div>
                <p style="margin: 0 0 4px 0; font-size: 0.85rem; color: #444; line-height: 1.4;">${purposeKm}</p>
                <p style="margin: 0; font-family: 'Poppins', sans-serif; font-size: 0.78rem; color: #666; line-height: 1.4;">${purposeEn}</p>
            </div>
        `;
        return card;
    }

    assetGrid.appendChild(createAssetCard(
        raceLogistics.ferries.titleKm,
        raceLogistics.ferries.titleEn,
        raceLogistics.ferries.purposeKm,
        raceLogistics.ferries.purposeEn,
        raceLogistics.ferries.image
    ));
    assetGrid.appendChild(createAssetCard(
        raceLogistics.vipCruiser.titleKm,
        raceLogistics.vipCruiser.titleEn,
        raceLogistics.vipCruiser.purposeKm,
        raceLogistics.vipCruiser.purposeEn,
        raceLogistics.vipCruiser.image
    ));
    assetGrid.appendChild(createAssetCard(
        raceLogistics.safetyUnits.titleKm,
        raceLogistics.safetyUnits.titleEn,
        raceLogistics.safetyUnits.purposeKm,
        raceLogistics.safetyUnits.purposeEn,
        raceLogistics.safetyUnits.image
    ));
    logisticsSection.appendChild(assetGrid);

    // ផ្នែកបង្ហាញជើងប្រកួតទាំង ៣ (3 Race Heats / Rounds)
    const roundListContainer = document.createElement('div');
    roundListContainer.style.cssText = "display: flex; flex-direction: column; gap: 12px; margin-top: 25px;";

    raceLogistics.rounds.forEach((round) => {
        const roundItem = document.createElement('div');
        roundItem.style.cssText = "padding: 14px 16px; background: #ffffff; border: 1px solid rgba(197, 160, 89, 0.3); border-radius: 6px; cursor: pointer;";
        roundItem.innerHTML = `
            <div style="font-weight: bold; color: #800020; font-size: 0.95rem; margin-bottom: 5px;">🏁 ${round.titleKm}</div>
            <div style="font-size: 0.88rem; color: #333; line-height: 1.5; margin-bottom: 4px;">${round.setupKm}</div>
            <div style="font-family: 'Poppins', sans-serif; font-size: 0.8rem; color: #666; line-height: 1.45; font-style: italic;">${round.setupEn}</div>
        `;
        roundItem.onclick = () => alert(`🏆 ព័ត៌មានលម្អិតការប្រកួត / Race Heat Details:\n\n${round.titleKm}\n\n🇰🇭 ${round.setupKm}\n\n🇬🇧 ${round.setupEn}`);
        roundListContainer.appendChild(roundItem);
    });
    logisticsSection.appendChild(roundListContainer);

    mainContainer.appendChild(logisticsSection);
});

// ៤. មុខងារលេចចេញផ្ទាំងរូបភាពចល័ត (Popup Modal) បង្ហាញរូបភាពទាំង ២ សន្លឹកព្រមគ្នា
function showBoatImagesModal(srcArray, titleText) {
    const overlay = document.createElement('div');
    overlay.style.cssText = "position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.9); display: flex; flex-direction: column; justify-content: center; align-items: center; z-index: 2000; cursor: zoom-out; padding: 20px; box-sizing: border-box;";

    const modalWrapper = document.createElement('div');
    modalWrapper.style.cssText = "max-width: 500px; max-height: 85vh; overflow-y: auto; position: relative; text-align: center; padding-right: 5px;";

    const label = document.createElement('h4');
    label.style.cssText = "font-family: 'Moul', serif; color: #c5a059; margin: 0 0 15px 0; font-size: 1rem; line-height: 1.6; text-shadow: 1px 1px 4px rgba(0,0,0,0.8);";
    label.innerHTML = `🏆 ${titleText}`;
    modalWrapper.appendChild(label);

    // លូបរៀបចំបង្ហាញរូបភាព boat.png និង boat1.png តាមលំដាប់
    srcArray.forEach((src) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = "Racing Boat Preview";
        img.style.cssText = "width: 100%; max-height: 40vh; object-fit: cover; border: 2px solid #c5a059; border-radius: 6px; margin-bottom: 12px; box-shadow: 0 5px 15px rgba(0,0,0,0.3); display: block;";
        
        // បើរូបភាពមិនចេញ នឹងបង្ហាញអក្សរជំនួសជាពីរភាសា
        img.onerror = function() {
            this.style.display = 'none';
            const errorPlaceholder = document.createElement('div');
            errorPlaceholder.style.cssText = "width:100%; height:90px; background:rgba(255,255,255,0.1); border:1px dashed #c5a059; color:#fff; display:flex; flex-direction:column; justify-content:center; align-items:center; font-size:0.85rem; margin-bottom:12px; border-radius:6px; padding: 10px;";
            errorPlaceholder.innerHTML = `
                <span>🖼️ រូបភាពប្លង់ និងសកម្មភាព [${src}]</span>
                <small style="font-family: 'Poppins', sans-serif; color: #c5a059; margin-top: 4px;">Boat Blueprint &amp; Action Preview [${src}]</small>
            `;
            img.parentNode.insertBefore(errorPlaceholder, img.nextSibling);
        };
        
        modalWrapper.appendChild(img);
    });

    const footerNote = document.createElement('p');
    footerNote.style.cssText = "font-family: 'Hanuman', 'Poppins', sans-serif; color: #fffdf9; font-size: 0.85rem; margin: 8px 0 0 0; line-height: 1.5;";
    footerNote.innerHTML = `(សូមចុចកន្លែងណាក៏បានដើម្បីបិទវិញ)<br><span style="font-size: 0.78rem; color: #c5a059;">(Click anywhere to close)</span>`;
    modalWrapper.appendChild(footerNote);

    overlay.appendChild(modalWrapper);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => {
        overlay.remove();
    });
}
