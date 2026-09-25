/**
 * Prashant TVS (Prashant Auto) - Interactive Application Logic
 * Authorised TVS Sales & Service Dealer | Bibwewadi, Pune
 * Color Scheme & Branding: Official TVS Royal Cobalt Blue (#013D93) & Crimson Red (#D91D2F)
 */

// Model Catalog Data
const TVS_MODELS = [
  {
    id: 'apache-rtr-160-4v',
    name: 'TVS Apache RTR 160 4V',
    tagline: 'The ART of Race Performance - Dual Channel ABS',
    category: 'racing',
    badge: 'Showroom Hero & Best Seller',
    exShowroom: '₹ 1,24,870',
    onRoadBibwewadi: '₹ 1,48,200',
    power: '17.55 PS @ 9250 rpm',
    mileage: '45 - 48 kmpl',
    engine: '159.7 cc, 4-Valve Oil Cooled',
    features: ['SmartXonnect Bluetooth', '3 Ride Modes (Urban, Rain, Sport)', 'Showa Suspension', 'Glide Through Technology'],
    colors: ['Racing Red', 'Matte Black', 'Metallic Blue', 'Knight Black'],
    image: 'assets/showroom/showroom_interior.jpg',
    description: 'Born on the racetrack. TVS Apache RTR 160 4V features class-leading 4-valve oil-cooled engine with race-tuned fuel injection and SmartXonnect telemetry.'
  },
  {
    id: 'apache-rtr-310',
    name: 'TVS Apache RTR 310',
    tagline: 'Freestyle Brawler - Dynamic Stability Control',
    category: 'racing',
    badge: 'Flagship Super-Premium',
    exShowroom: '₹ 2,42,990',
    onRoadBibwewadi: '₹ 2,86,500',
    power: '35.6 PS @ 9700 rpm',
    mileage: '30 - 32 kmpl',
    engine: '312.12 cc, DOHC Liquid Cooled',
    features: ['Cruise Control', 'Climate Controlled Seat', 'Bi-Directional Quickshifter', 'Cornering ABS & Traction'],
    colors: ['Arsenal Black', 'Fury Yellow', 'Sepang Blue'],
    image: 'assets/showroom/showroom_front.jpg',
    description: 'The pinnacle of naked streetfighter performance. 0-60 km/h in 2.81 seconds with bespoke racing aerodynamics and TFT dash.'
  },
  {
    id: 'jupiter-125',
    name: 'TVS Jupiter 125 SmartXonnect',
    tagline: 'Zyada Ka Fayda - Largest 33L Underseat Storage',
    category: 'scooters',
    badge: 'Pune Family Favorite',
    exShowroom: '₹ 86,405',
    onRoadBibwewadi: '₹ 1,04,300',
    power: '8.15 PS @ 6500 rpm',
    mileage: '50 - 55 kmpl',
    engine: '124.8 cc, Single Cylinder Air Cooled',
    features: ['External Front Fuel Fill', 'All-in-One Digital Cluster with Nav', 'Dual Helmets Storage (33L)', 'Metal Body Assurance'],
    colors: ['Titanium Grey', 'Indiblue', 'Pristine White', 'Dawn Orange'],
    image: 'assets/showroom/showroom_fleet.jpg',
    description: 'Engineered for comfort and unmatched convenience. External front fuel tank lid, LED light bar, and best-in-class storage for two full-face helmets.'
  },
  {
    id: 'ntorq-125',
    name: 'TVS Ntorq 125 Race XP',
    tagline: 'India First Connected Scooter with Voice Assist',
    category: 'scooters',
    badge: 'Gen-Z Performance',
    exShowroom: '₹ 89,200',
    onRoadBibwewadi: '₹ 1,08,400',
    power: '10.2 PS @ 7000 rpm',
    mileage: '45 - 50 kmpl',
    engine: '124.8 cc, 3-Valve CVTi-REVV',
    features: ['Dual Ride Modes (Race & Street)', 'Voice Assist & Navigation', 'Race Telemetry Display', 'Stealth Aircraft Styling'],
    colors: ['Race Red Tri-Tone', 'Combat Blue', 'Stealth Black'],
    image: 'assets/showroom/showroom_front.jpg',
    description: 'The sharpest, most powerful 125cc scooter in India. Features dual ride modes, race lap timer, and 0-60 km/h in 8.6 seconds.'
  },
  {
    id: 'raider-125',
    name: 'TVS Raider 125',
    tagline: 'The Wicked Commuter with Animalistic LED Headlamp',
    category: 'commuter',
    badge: 'Top Choice for Youth',
    exShowroom: '₹ 95,219',
    onRoadBibwewadi: '₹ 1,14,500',
    power: '11.38 PS @ 7500 rpm',
    mileage: '65 - 67 kmpl',
    engine: '124.8 cc, 3-Valve Air & Oil Cooled',
    features: ['Color TFT Display with Nav', 'Underseat Storage with USB', 'Eco & Power Ride Modes', 'Mono-shock Suspension'],
    colors: ['Wicked Black', 'Fiery Yellow', 'Blazing Blue', 'Striking Red'],
    image: 'assets/showroom/showroom_interior.jpg',
    description: 'Redefining the 125cc segment with naked street motorcycle DNA, gas-charged monoshock, and phenomenal fuel economy.'
  },
  {
    id: 'ronin-225',
    name: 'TVS Ronin 225',
    tagline: 'Modern-Retro Scrambler - Unscripted Riding',
    category: 'commuter',
    badge: 'Neo-Retro Scrambler',
    exShowroom: '₹ 1,49,200',
    onRoadBibwewadi: '₹ 1,76,800',
    power: '20.4 PS @ 7750 rpm',
    mileage: '40 - 42 kmpl',
    engine: '225.9 cc, 4-Valve Single Cylinder',
    features: ['Upside Down (USD) Forks', 'Dual-Channel ABS', 'Assist & Slipper Clutch', 'T-Face LED Signature'],
    colors: ['Magma Red', 'Lightning Black', 'Delta Blue', 'Galactic Grey'],
    image: 'assets/showroom/showroom_front.jpg',
    description: 'Crafted for riders who carve their own path. High low-end torque, upright comfortable riding posture, and retro styling.'
  },
  {
    id: 'iqube-electric',
    name: 'TVS iQube Electric Smart EV',
    tagline: 'The Smart, Silent & Sustainable Two Wheeler',
    category: 'electric',
    badge: '100% Electric Savings',
    exShowroom: '₹ 1,17,299',
    onRoadBibwewadi: '₹ 1,28,900',
    power: '4.4 kW Peak Motor',
    mileage: '100 - 145 km True Range',
    engine: '3.4 kWh / 5.1 kWh Lithium-ion Pack',
    features: ['₹0.30 per km Running Cost', 'Fast Charging Support', 'Q-Park Assist (Reverse)', 'Geo-fencing & Live Tracking'],
    colors: ['Pearl White', 'Titanium Grey Gloss', 'Mercury Grey'],
    image: 'assets/showroom/showroom_fleet.jpg',
    description: 'Save over ₹35,000 every year on fuel. Powered by advanced BMS, water & dust-resistant IP67 battery, and silent direct drive.'
  },
  {
    id: 'xl100-heavy-duty',
    name: 'TVS XL100 Heavy Duty i-Touch',
    tagline: 'Kamaal Ka Saathi - Reliable Multipurpose Partner',
    category: 'utility',
    badge: 'Unmatched Utility',
    exShowroom: '₹ 44,999',
    onRoadBibwewadi: '₹ 56,800',
    power: '4.4 PS @ 6000 rpm',
    mileage: '65+ kmpl',
    engine: '99.7 cc, EcoThrust Fuel Injected',
    features: ['Integrated Starter Generator (ISG)', 'Detachable Rear Seat', 'Roll-Over Sensor', 'Heavy-Duty Payload Carrier'],
    colors: ['Mineral Purple', 'Copper Gold', 'Sparkling Silver'],
    image: 'assets/showroom/showroom_fleet.jpg',
    description: 'India\'s most trusted workhorse for business, goods movement, and dependable daily transportation across Bibwewadi and Pune.'
  }
];

// Real Showroom Gallery Data
const SHOWROOM_GALLERY = [
  {
    title: 'Prashant TVS Night Frontage & Display Court',
    subtitle: 'Illuminated fascia banner on Swami Vivekanand Road, Bibwewadi',
    badge: 'Main Entrance & Display',
    src: 'assets/showroom/showroom_front.jpg',
    description: 'Our iconic road-facing display court highlighting the latest TVS Jupiter, Apache RTR, and Scooty models available for walk-in consultation.'
  },
  {
    title: 'Customer Experience Lounge & TVS Racing Zone',
    subtitle: 'Air-conditioned consultation area & Apache RTR 160 4V showcase',
    badge: 'Showroom Interior',
    src: 'assets/showroom/showroom_interior.jpg',
    description: 'Modern customer seating lounge featuring official TVS Racing wall graphics, dedicated finance consultation desks, and display units in immaculate condition.'
  },
  {
    title: 'New Vehicle Ready-for-Delivery Yard',
    subtitle: 'PDI verified, factory-wrapped brand new bikes & scooters ready for handover',
    badge: 'Delivery Readiness',
    src: 'assets/showroom/showroom_fleet.jpg',
    description: 'Dedicated vehicle inspection bay with fresh shipments from TVS factory. Every two-wheeler undergoes 40-point Pre-Delivery Inspection (PDI) with sanitization.'
  },
  {
    title: 'Prashant TVS Authorised Dealership Signboard',
    subtitle: 'Official TVS Motor Company certified dealer in Pune',
    badge: 'Authorised Branding',
    src: 'assets/showroom/showroom_board.png',
    description: 'Prashant TVS (Prashant Auto) is an accredited TVS sales, genuine spares, and authorized service center serving Bibwewadi, Salisbury Park, and South Pune.'
  }
];

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initLucideIcons();
  renderCatalog('all');
  renderGallery();
  init360Studio();
  initEmiCalculator();
  initExchangeEstimator();
  initServiceTracker();
  initScrollAnimations();
});

function initLucideIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ----------------------------------------------------
// 1. Two-Wheeler Catalog Filtering & Rendering
// ----------------------------------------------------
function renderCatalog(filter) {
  const container = document.getElementById('catalog-grid');
  if (!container) return;

  const filtered = filter === 'all' 
    ? TVS_MODELS 
    : TVS_MODELS.filter(m => m.category === filter);

  container.innerHTML = filtered.map(model => `
    <div class="tilt-card bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col justify-between group hover:border-[#013D93]/40 transition-all duration-300">
      <div class="relative bg-gradient-to-b from-slate-50 to-white p-5 pb-2">
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="px-2.5 py-1 rounded-full text-xs font-bold tracking-wide ${model.category === 'racing' ? 'bg-red-50 text-[#D91D2F] border border-red-200' : 'bg-blue-50 text-[#013D93] border border-blue-200'}">
            ${model.badge}
          </span>
          <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">${model.category}</span>
        </div>

        <div class="w-full h-48 rounded-xl overflow-hidden relative shadow-inner bg-slate-100 flex items-center justify-center">
          <img src="${model.image}" alt="${model.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex items-end p-4">
            <div>
              <p class="text-white text-xs font-medium tracking-wide drop-shadow">${model.tagline}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-start justify-between gap-2">
            <div>
              <h3 class="text-xl font-extrabold text-slate-900 group-hover:text-[#013D93] transition-colors">${model.name}</h3>
              <p class="text-xs text-slate-500 mt-0.5">${model.engine}</p>
            </div>
            <div class="text-right">
              <span class="text-xs text-slate-400 block font-medium">Ex-Showroom</span>
              <span class="text-lg font-black text-slate-900">${model.exShowroom}</span>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-2 my-4 py-3 px-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
            <div class="flex items-center gap-1.5 text-slate-700">
              <span class="w-2 h-2 rounded-full bg-[#D91D2F]"></span>
              <span class="font-bold">${model.power.split('@')[0]}</span>
            </div>
            <div class="flex items-center gap-1.5 text-slate-700">
              <span class="w-2 h-2 rounded-full bg-[#013D93]"></span>
              <span class="font-bold">${model.mileage}</span>
            </div>
          </div>

          <div class="space-y-1 mb-4">
            ${model.features.slice(0, 3).map(f => `
              <div class="flex items-center gap-2 text-xs text-slate-600">
                <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-500 shrink-0"></i>
                <span>${f}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <div>
            <span class="text-[11px] text-slate-500 block">Est. Pune On-Road</span>
            <span class="text-sm font-bold text-[#D91D2F]">${model.onRoadBibwewadi}*</span>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="openTestRideModal('${model.name}')" class="px-3.5 py-2 text-xs font-bold text-white bg-[#013D93] hover:bg-[#002D6E] rounded-lg shadow-sm transition-all flex items-center gap-1.5">
              <i data-lucide="calendar" class="w-3.5 h-3.5"></i>
              Test Ride
            </button>
            <button onclick="openQuoteModal('${model.name}', '${model.exShowroom}', '${model.onRoadBibwewadi}')" class="p-2 text-xs font-semibold text-slate-700 hover:text-[#013D93] bg-slate-100 hover:bg-slate-200 rounded-lg transition-all" title="View Price Quotation">
              <i data-lucide="file-text" class="w-4 h-4"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  initLucideIcons();
}

window.filterCatalog = function(category, element) {
  document.querySelectorAll('.catalog-tab').forEach(tab => {
    tab.classList.remove('bg-[#013D93]', 'text-white', 'shadow-md');
    tab.classList.add('bg-white', 'text-slate-700', 'hover:bg-slate-100');
  });
  if (element) {
    element.classList.remove('bg-white', 'text-slate-700', 'hover:bg-slate-100');
    element.classList.add('bg-[#013D93]', 'text-white', 'shadow-md');
  }
  renderCatalog(category);
};

// ----------------------------------------------------
// 2. Real Showroom Photos Gallery & Lightbox
// ----------------------------------------------------
function renderGallery() {
  const container = document.getElementById('gallery-grid');
  if (!container) return;

  container.innerHTML = SHOWROOM_GALLERY.map((item, idx) => `
    <div class="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm cursor-pointer hover:shadow-xl transition-all duration-300" onclick="openLightbox(${idx})">
      <div class="relative h-64 overflow-hidden bg-slate-100">
        <img src="${item.src}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
        <div class="absolute top-3 left-3">
          <span class="px-2.5 py-1 bg-white/95 backdrop-blur-md text-[#013D93] text-[11px] font-bold rounded-full shadow-sm border border-slate-100">
            ${item.badge}
          </span>
        </div>
        <div class="absolute bottom-3 left-3 right-3 text-white">
          <h4 class="text-base font-bold drop-shadow leading-snug">${item.title}</h4>
          <p class="text-xs text-slate-200 mt-1 line-clamp-1">${item.subtitle}</p>
        </div>
      </div>
      <div class="p-4 bg-white">
        <p class="text-xs text-slate-600 line-clamp-2">${item.description}</p>
        <div class="mt-3 flex items-center justify-between text-xs font-semibold text-[#013D93] group-hover:text-[#D91D2F] transition-colors">
          <span>Click to view full photo</span>
          <i data-lucide="maximize-2" class="w-4 h-4"></i>
        </div>
      </div>
    </div>
  `).join('');

  initLucideIcons();
}

window.openLightbox = function(index) {
  const item = SHOWROOM_GALLERY[index];
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-image');
  const title = document.getElementById('lightbox-title');
  const desc = document.getElementById('lightbox-desc');

  if (!modal || !img) return;

  img.src = item.src;
  title.textContent = item.title;
  desc.textContent = item.description;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
};

window.closeLightbox = function() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

// ----------------------------------------------------
// 3. Interactive 360° Real Vehicle Turntable Studio
// ----------------------------------------------------
const VEHICLES_360 = {
  apache_310: {
    id: 'apache_310',
    title: 'TVS Apache RTR 310',
    badge: 'Racing Flagship',
    badgeClass: 'bg-red-50 text-[#D91D2F] border-red-200',
    subtitle: 'Dual-Channel Cornering ABS • 35.6 PS Track Brawler',
    modelName: 'TVS Apache RTR 310',
    ext: 'png',
    frameCount: 25,
    colors: [
      { id: 'arsenalblack', name: 'Arsenal Black', hex: '#1E293B' },
      { id: 'furyyellow', name: 'Fury Yellow', hex: '#FACC15' }
    ],
    techHighlight: 'Bi-Directional Quickshifter & Cruise Control',
    specs: {
      engine: '312.12 cc',
      engineSub: 'DOHC Liquid Cooled',
      power: '35.6 PS',
      powerSub: '@ 9700 rpm (28.7 Nm)',
      speed: '150 km/h',
      speedSub: '0-60 in 2.81s',
      mileage: '30 - 32 kmpl',
      mileageSub: 'RT-Fi Race Telemetry',
      price: '₹ 2,86,500*',
      priceSub: 'Bibwewadi On-Road'
    }
  },
  raider_125: {
    id: 'raider_125',
    title: 'TVS Raider 125',
    badge: 'Wicked Commuter',
    badgeClass: 'bg-amber-50 text-amber-700 border-amber-200',
    subtitle: 'Naked Streetfighter DNA • Animalistic LED Headlamp',
    modelName: 'TVS Raider 125',
    ext: 'webp',
    frameCount: 9,
    colors: [
      { id: 'red', name: 'Blazing Red', hex: '#DC2626' },
      { id: 'black', name: 'Wicked Black', hex: '#1E293B' },
      { id: 'blue', name: 'Striking Blue', hex: '#2563EB' }
    ],
    techHighlight: 'Gas-Charged Mono-shock & Eco/Power Modes',
    specs: {
      engine: '124.8 cc',
      engineSub: '3-Valve Air & Oil Cooled',
      power: '11.38 PS',
      powerSub: '@ 7500 rpm (11.2 Nm)',
      speed: '99 km/h',
      speedSub: '0-60 in 5.9s',
      mileage: '65 - 67 kmpl',
      mileageSub: 'Best-in-Class Mileage',
      price: '₹ 1,14,500*',
      priceSub: 'Bibwewadi On-Road'
    }
  },
  jupiter_110: {
    id: 'jupiter_110',
    title: 'TVS Jupiter 110 SmartXonnect',
    badge: 'Family Favorite',
    badgeClass: 'bg-blue-50 text-[#013D93] border-blue-200',
    subtitle: 'Zyada Ka Fayda • 33L Underseat Dual-Helmet Storage',
    modelName: 'TVS Jupiter 125 SmartXonnect',
    ext: 'webp',
    frameCount: 25,
    colors: [
      { id: 'dawn_blue', name: 'Dawn Blue Matte', hex: '#1E40AF' },
      { id: 'galactic_copper', name: 'Galactic Copper Matte', hex: '#C2410C' }
    ],
    techHighlight: 'iGO Electric Assist & External Front Fuel Tank',
    specs: {
      engine: '113.3 cc',
      engineSub: 'iGO Assist Air Cooled',
      power: '8.02 PS',
      powerSub: '@ 6500 rpm (9.8 Nm)',
      speed: '82 km/h',
      speedSub: 'Smooth & Vibration-Free',
      mileage: '55 - 58 kmpl',
      mileageSub: 'i-Touch Start EcoThrust',
      price: '₹ 94,800*',
      priceSub: 'Bibwewadi On-Road'
    }
  },
  radeon_110: {
    id: 'radeon_110',
    title: 'TVS Radeon 110 DuraLife',
    badge: 'Heavy-Duty Commuter',
    badgeClass: 'bg-slate-100 text-slate-800 border-slate-300',
    subtitle: 'Synchronised Braking Tech • Tough Metal Body Frame',
    modelName: 'TVS Radeon 110',
    ext: 'webp',
    frameCount: 24,
    colors: [
      { id: 'black', name: 'All-Black Special Edition', hex: '#18181B' }
    ],
    techHighlight: 'Synchronised Braking Tech & Metal Body Chassis',
    specs: {
      engine: '109.7 cc',
      engineSub: 'DuraLife EcoThrust Fi',
      power: '8.19 PS',
      powerSub: '@ 7350 rpm (8.7 Nm)',
      speed: '90 km/h',
      speedSub: 'Sturdy Highway Cruiser',
      mileage: '68 kmpl',
      mileageSub: 'Real-Time Mileage Indicator',
      price: '₹ 82,400*',
      priceSub: 'Bibwewadi On-Road'
    }
  }
};

let activeVehicleId = 'apache_310';
let activeColorId = 'arsenalblack';
let currentFrameIndex = 1;
let is360AutoSpinning = false;
let autoSpinTimer = null;
let isTurntableDragging = false;
let dragStartX = 0;
let dragStartFrame = 1;
let hasUserInteracted = false;
const preloadedImagesCache = {};

function init360Studio() {
  const stage = document.getElementById('turntable-stage');
  if (!stage) return;

  // Set up vehicle UI
  update360VehicleDisplay();

  // Mouse drag interactions
  stage.addEventListener('mousedown', (e) => {
    isTurntableDragging = true;
    dragStartX = e.clientX;
    dragStartFrame = currentFrameIndex;
    if (is360AutoSpinning) stop360AutoSpin();
    hideDragHint();
  });

  window.addEventListener('mousemove', (e) => {
    if (!isTurntableDragging) return;
    const v = VEHICLES_360[activeVehicleId];
    const deltaX = e.clientX - dragStartX;
    const pixelsPerFrame = 12; // sensitivity
    const frameShift = Math.round(deltaX / pixelsPerFrame);
    
    // Natural rotation direction (dragging left spins clockwise)
    let newFrame = ((dragStartFrame - 1 - frameShift) % v.frameCount + v.frameCount) % v.frameCount + 1;
    set360Frame(newFrame);
  });

  window.addEventListener('mouseup', () => {
    isTurntableDragging = false;
  });

  // Touch interactions
  stage.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) {
      isTurntableDragging = true;
      dragStartX = e.touches[0].clientX;
      dragStartFrame = currentFrameIndex;
      if (is360AutoSpinning) stop360AutoSpin();
      hideDragHint();
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isTurntableDragging || e.touches.length === 0) return;
    const v = VEHICLES_360[activeVehicleId];
    const deltaX = e.touches[0].clientX - dragStartX;
    const pixelsPerFrame = 14;
    const frameShift = Math.round(deltaX / pixelsPerFrame);
    
    let newFrame = ((dragStartFrame - 1 - frameShift) % v.frameCount + v.frameCount) % v.frameCount + 1;
    set360Frame(newFrame);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isTurntableDragging = false;
  });

  // Preload initial frames
  preloadVehicleFrames(activeVehicleId, activeColorId);
}

function hideDragHint() {
  if (!hasUserInteracted) {
    hasUserInteracted = true;
    const hint = document.getElementById('v-drag-hint');
    if (hint) {
      hint.style.opacity = '0';
      setTimeout(() => hint.remove(), 600);
    }
  }
}

function update360VehicleDisplay() {
  const v = VEHICLES_360[activeVehicleId];
  if (!v) return;

  // Title, Subtitle, Badges
  const titleEl = document.getElementById('v-title');
  const subEl = document.getElementById('v-subtitle');
  const badgeEl = document.getElementById('v-badge');
  const techEl = document.getElementById('v-tech-text');

  if (titleEl) titleEl.textContent = v.title;
  if (subEl) subEl.textContent = v.subtitle;
  if (techEl) techEl.textContent = v.techHighlight;

  if (badgeEl) {
    badgeEl.textContent = v.badge;
    badgeEl.className = `px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${v.badgeClass}`;
  }

  // Specs HUD
  const elEngine = document.getElementById('spec-engine');
  const elEngineSub = document.getElementById('spec-engine-sub');
  const elPower = document.getElementById('spec-power');
  const elPowerSub = document.getElementById('spec-power-sub');
  const elSpeed = document.getElementById('spec-speed');
  const elSpeedSub = document.getElementById('spec-speed-sub');
  const elMileage = document.getElementById('spec-mileage');
  const elMileageSub = document.getElementById('spec-mileage-sub');
  const elPrice = document.getElementById('spec-price');

  if (elEngine) elEngine.textContent = v.specs.engine;
  if (elEngineSub) elEngineSub.textContent = v.specs.engineSub;
  if (elPower) elPower.textContent = v.specs.power;
  if (elPowerSub) elPowerSub.textContent = v.specs.powerSub;
  if (elSpeed) elSpeed.textContent = v.specs.speed;
  if (elSpeedSub) elSpeedSub.textContent = v.specs.speedSub;
  if (elMileage) elMileage.textContent = v.specs.mileage;
  if (elMileageSub) elMileageSub.textContent = v.specs.mileageSub;
  if (elPrice) elPrice.textContent = v.specs.price;

  // Color Swatches
  const swatchesContainer = document.getElementById('v-color-swatches');
  const colorNameEl = document.getElementById('v-color-name');
  if (swatchesContainer) {
    swatchesContainer.innerHTML = v.colors.map(c => `
      <button onclick="switch360Color('${c.id}', '${c.name}', this)" class="color-swatch-360 w-7 h-7 rounded-full border-2 border-white shadow transition-all duration-200 hover:scale-110 ${c.id === activeColorId ? 'ring-4 ring-[#013D93] scale-110' : ''}" style="background-color: ${c.hex};" title="${c.name}"></button>
    `).join('');
  }
  const activeColorObj = v.colors.find(c => c.id === activeColorId) || v.colors[0];
  if (colorNameEl) colorNameEl.textContent = activeColorObj.name;

  // Reset Scrubber and frame
  currentFrameIndex = 1;
  set360Frame(1);
}

function preloadVehicleFrames(vehicleId, colorId) {
  const v = VEHICLES_360[vehicleId];
  if (!v) return;

  const cacheKey = `${vehicleId}_${colorId}`;
  if (preloadedImagesCache[cacheKey]) return; // Already cached

  preloadedImagesCache[cacheKey] = [];
  const loaderEl = document.getElementById('v-loader');
  if (loaderEl) loaderEl.classList.remove('opacity-0', 'pointer-events-none');

  let loadedCount = 0;
  for (let i = 1; i <= v.frameCount; i++) {
    const img = new Image();
    img.src = `assets/vehicles/${vehicleId}/${colorId}/${i}.${v.ext}`;
    img.onload = () => {
      loadedCount++;
      if (loadedCount >= Math.min(v.frameCount, 5) && loaderEl) {
        loaderEl.classList.add('opacity-0', 'pointer-events-none');
      }
    };
    img.onerror = () => {
      loadedCount++;
      if (loadedCount >= v.frameCount && loaderEl) {
        loaderEl.classList.add('opacity-0', 'pointer-events-none');
      }
    };
    preloadedImagesCache[cacheKey].push(img);
  }
}

function set360Frame(frameIdx) {
  const v = VEHICLES_360[activeVehicleId];
  if (!v) return;

  currentFrameIndex = Math.max(1, Math.min(frameIdx, v.frameCount));
  const turntableImg = document.getElementById('v-turntable-img');
  if (turntableImg) {
    turntableImg.src = `assets/vehicles/${activeVehicleId}/${activeColorId}/${currentFrameIndex}.${v.ext}`;
  }

  // Update Angle HUD & Scrubber
  const deg = Math.round(((currentFrameIndex - 1) / v.frameCount) * 360);
  const angleEl = document.getElementById('v-angle-text');
  const scrubber = document.getElementById('v-scrubber');
  const scrubberVal = document.getElementById('v-scrubber-val');

  if (angleEl) angleEl.textContent = `${deg}°`;
  if (scrubberVal) scrubberVal.textContent = `${deg}°`;
  if (scrubber && !isTurntableDragging) {
    scrubber.value = deg;
  }
}

window.switch360Vehicle = function(vehicleId, btnEl) {
  if (activeVehicleId === vehicleId) return;
  activeVehicleId = vehicleId;
  const v = VEHICLES_360[vehicleId];
  activeColorId = v.colors[0].id;

  // Update Tab styling
  document.querySelectorAll('.vehicle-tab-btn').forEach(btn => {
    btn.classList.remove('bg-[#013D93]', 'text-white', 'shadow-md');
    btn.classList.add('bg-transparent', 'text-slate-700', 'hover:bg-white', 'hover:shadow-sm');
  });
  if (btnEl) {
    btnEl.classList.remove('bg-transparent', 'text-slate-700', 'hover:bg-white', 'hover:shadow-sm');
    btnEl.classList.add('bg-[#013D93]', 'text-white', 'shadow-md');
  }

  preloadVehicleFrames(activeVehicleId, activeColorId);
  update360VehicleDisplay();
};

window.switch360Color = function(colorId, colorName, btnEl) {
  activeColorId = colorId;
  const colorNameEl = document.getElementById('v-color-name');
  if (colorNameEl) colorNameEl.textContent = colorName;

  document.querySelectorAll('.color-swatch-360').forEach(btn => {
    btn.classList.remove('ring-4', 'ring-[#013D93]', 'scale-110');
  });
  if (btnEl) {
    btnEl.classList.add('ring-4', 'ring-[#013D93]', 'scale-110');
  }

  preloadVehicleFrames(activeVehicleId, activeColorId);
  set360Frame(currentFrameIndex);
};

window.on360SliderScrub = function(val) {
  if (is360AutoSpinning) stop360AutoSpin();
  hideDragHint();
  const v = VEHICLES_360[activeVehicleId];
  if (!v) return;

  const deg = parseInt(val, 10);
  const targetFrame = Math.min(v.frameCount, Math.max(1, Math.round((deg / 360) * (v.frameCount - 1)) + 1));
  set360Frame(targetFrame);
};

window.set360AnglePreset = function(targetDeg) {
  if (is360AutoSpinning) stop360AutoSpin();
  hideDragHint();
  const v = VEHICLES_360[activeVehicleId];
  if (!v) return;

  const targetFrame = Math.min(v.frameCount, Math.max(1, Math.round((targetDeg / 360) * (v.frameCount - 1)) + 1));
  
  // Quick smooth rotational transition
  const startF = currentFrameIndex;
  const diff = targetFrame - startF;
  const steps = 6;
  let s = 0;
  const animInterval = setInterval(() => {
    s++;
    const nextF = Math.round(startF + (diff * (s / steps)));
    set360Frame(nextF);
    if (s >= steps) {
      clearInterval(animInterval);
      set360Frame(targetFrame);
    }
  }, 35);
};

window.toggle360AutoSpin = function() {
  if (is360AutoSpinning) {
    stop360AutoSpin();
  } else {
    start360AutoSpin();
  }
};

function start360AutoSpin() {
  is360AutoSpinning = true;
  hideDragHint();
  const spinBtn = document.getElementById('v-spin-btn');
  const spinText = document.getElementById('v-spin-text');
  if (spinBtn) {
    spinBtn.classList.remove('bg-slate-100', 'text-slate-800');
    spinBtn.classList.add('bg-[#013D93]', 'text-white');
  }
  if (spinText) spinText.textContent = 'Pause';

  autoSpinTimer = setInterval(() => {
    const v = VEHICLES_360[activeVehicleId];
    if (!v) return;
    let nextFrame = currentFrameIndex + 1;
    if (nextFrame > v.frameCount) nextFrame = 1;
    set360Frame(nextFrame);
  }, 110);
}

function stop360AutoSpin() {
  is360AutoSpinning = false;
  if (autoSpinTimer) {
    clearInterval(autoSpinTimer);
    autoSpinTimer = null;
  }
  const spinBtn = document.getElementById('v-spin-btn');
  const spinText = document.getElementById('v-spin-text');
  if (spinBtn) {
    spinBtn.classList.remove('bg-[#013D93]', 'text-white');
    spinBtn.classList.add('bg-slate-100', 'text-slate-800');
  }
  if (spinText) spinText.textContent = 'Auto Spin';
}

window.openTestRideModalFor360 = function() {
  const v = VEHICLES_360[activeVehicleId];
  if (v && typeof openTestRideModal === 'function') {
    openTestRideModal(v.modelName);
  }
};

// ----------------------------------------------------
// 4. Interactive EMI & Loan Finance Calculator
// ----------------------------------------------------
function initEmiCalculator() {
  const downPaymentInput = document.getElementById('calc-downpayment');
  const loanTenureInput = document.getElementById('calc-tenure');
  const interestInput = document.getElementById('calc-interest');
  const vehicleSelect = document.getElementById('calc-vehicle-select');

  if (!downPaymentInput || !loanTenureInput || !interestInput) return;

  if (vehicleSelect) {
    vehicleSelect.innerHTML = TVS_MODELS.map(m => `
      <option value="${m.onRoadBibwewadi.replace(/[^0-9]/g, '')}">${m.name} - Est. ${m.onRoadBibwewadi}</option>
    `).join('');
    vehicleSelect.addEventListener('change', updateEmiResults);
  }

  [downPaymentInput, loanTenureInput, interestInput].forEach(inp => {
    inp.addEventListener('input', updateEmiResults);
  });

  updateEmiResults();
}

function updateEmiResults() {
  const vehiclePrice = parseFloat(document.getElementById('calc-vehicle-select')?.value || 148200);
  const downPaymentPercent = parseFloat(document.getElementById('calc-downpayment')?.value || 20);
  const tenureMonths = parseInt(document.getElementById('calc-tenure')?.value || 24);
  const annualInterestRate = parseFloat(document.getElementById('calc-interest')?.value || 7.99);

  document.getElementById('label-downpayment').textContent = `${downPaymentPercent}% (₹ ${Math.round(vehiclePrice * (downPaymentPercent / 100)).toLocaleString('en-IN')})`;
  document.getElementById('label-tenure').textContent = `${tenureMonths} Months (${(tenureMonths / 12).toFixed(1)} Yrs)`;
  document.getElementById('label-interest').textContent = `${annualInterestRate}% p.a.`;

  const downPaymentAmount = vehiclePrice * (downPaymentPercent / 100);
  const principalLoan = vehiclePrice - downPaymentAmount;

  const monthlyRate = (annualInterestRate / 12) / 100;
  const emi = (principalLoan * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) / (Math.pow(1 + monthlyRate, tenureMonths) - 1);
  const totalPayment = emi * tenureMonths;
  const totalInterest = totalPayment - principalLoan;

  document.getElementById('calc-emi-result').textContent = `₹ ${Math.round(emi).toLocaleString('en-IN')}`;
  document.getElementById('calc-principal-result').textContent = `₹ ${Math.round(principalLoan).toLocaleString('en-IN')}`;
  document.getElementById('calc-interest-result').textContent = `₹ ${Math.round(totalInterest).toLocaleString('en-IN')}`;
  document.getElementById('calc-total-result').textContent = `₹ ${Math.round(totalPayment + downPaymentAmount).toLocaleString('en-IN')}`;
}

// ----------------------------------------------------
// 5. Old Two-Wheeler Exchange Estimator
// ----------------------------------------------------
function initExchangeEstimator() {
  const form = document.getElementById('exchange-calc-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const brand = document.getElementById('ex-brand').value;
    const year = parseInt(document.getElementById('ex-year').value);
    const km = parseInt(document.getElementById('ex-km').value);
    const condition = document.getElementById('ex-condition').value;

    let baseVal = 48000;
    const currentYear = 2026;
    const age = Math.max(0, currentYear - year);

    baseVal -= (age * 4500);
    if (km > 40000) baseVal -= 6000;
    else if (km > 20000) baseVal -= 3000;

    if (condition === 'excellent') baseVal += 4000;
    else if (condition === 'average') baseVal -= 3500;

    baseVal = Math.max(12000, baseVal);
    const bonus = 3500;

    document.getElementById('ex-result-val').textContent = `₹ ${baseVal.toLocaleString('en-IN')}`;
    document.getElementById('ex-result-bonus').textContent = `+ ₹ ${bonus.toLocaleString('en-IN')} Prashant TVS Bonus`;
    document.getElementById('ex-result-total').textContent = `₹ ${(baseVal + bonus).toLocaleString('en-IN')}`;
    document.getElementById('exchange-result-box').classList.remove('hidden');

    if (window.confetti) {
      window.confetti({ particleCount: 60, spread: 60, origin: { y: 0.8 } });
    }
  });
}

// ----------------------------------------------------
// 6. Live Service Job-Card Status Tracker
// ----------------------------------------------------
function initServiceTracker() {
  const form = document.getElementById('service-tracker-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const regNum = document.getElementById('tracker-reg-num').value.trim().toUpperCase();
    const resultBox = document.getElementById('tracker-result-card');

    if (!regNum) {
      showToast('Please enter your vehicle registration number', 'error');
      return;
    }

    resultBox.classList.remove('hidden');
    document.getElementById('tracker-display-reg').textContent = regNum;

    const statuses = [
      { step: 1, title: 'Vehicle Inspection & Washing Completed', status: 'Ready for Test Drive', tech: 'Sunil Jadhav (Senior TVS Certified Master Tech)' },
      { step: 2, title: 'Engine Oil Replacement & Brake Servicing Underway', status: 'In Progress - Bay #3', tech: 'Mahesh Patil (TVS Expert)' }
    ];
    const picked = statuses[regNum.length % 2];

    document.getElementById('tracker-step-title').textContent = picked.title;
    document.getElementById('tracker-status-tag').textContent = picked.status;
    document.getElementById('tracker-tech-name').textContent = picked.tech;

    showToast(`Status updated for ${regNum}`, 'success');
  });
}

// ----------------------------------------------------
// 7. Modals: Test Ride Booking & On-Road Price Quotation
// ----------------------------------------------------
window.openTestRideModal = function(modelName = '') {
  const modal = document.getElementById('test-ride-modal');
  if (!modal) return;

  if (modelName) {
    const sel = document.getElementById('tr-model-select');
    if (sel) sel.value = modelName;
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
};

window.closeTestRideModal = function() {
  const modal = document.getElementById('test-ride-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

window.handleTestRideSubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById('tr-name').value;
  const phone = document.getElementById('tr-phone').value;
  const model = document.getElementById('tr-model-select').value;
  const location = document.getElementById('tr-location-type').value;

  closeTestRideModal();
  showToast(`Thank you ${name}! Your test ride for ${model} is scheduled. Our Bibwewadi team will call ${phone} shortly.`, 'success');

  if (window.confetti) {
    window.confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
  }

  const waMsg = `Hi Prashant TVS Bibwewadi, I booked a Test Ride for *${model}* at *${location}*. Name: ${name}, Phone: ${phone}. Please confirm my slot!`;
  const waUrl = `https://wa.me/918459101990?text=${encodeURIComponent(waMsg)}`;
  window.open(waUrl, '_blank');
};

window.openQuoteModal = function(name, exShowroom, onRoad) {
  const modal = document.getElementById('quote-modal');
  if (!modal) return;

  document.getElementById('quote-model-name').textContent = name;
  document.getElementById('quote-ex-showroom').textContent = exShowroom;
  document.getElementById('quote-on-road').textContent = onRoad;

  const exNum = parseInt(exShowroom.replace(/[^0-9]/g, ''));
  const rto = Math.round(exNum * 0.12);
  const ins = Math.round(exNum * 0.055 + 1800);
  const acc = 1450;

  document.getElementById('quote-rto').textContent = `₹ ${rto.toLocaleString('en-IN')}`;
  document.getElementById('quote-insurance').textContent = `₹ ${ins.toLocaleString('en-IN')}`;
  document.getElementById('quote-rsa').textContent = `₹ ${acc.toLocaleString('en-IN')}`;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
};

window.closeQuoteModal = function() {
  const modal = document.getElementById('quote-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

window.printQuotation = function() {
  window.print();
};

// ----------------------------------------------------
// 8. Service Appointment Booking Handler
// ----------------------------------------------------
window.handleServiceBookingSubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById('sb-name').value;
  const phone = document.getElementById('sb-phone').value;
  const vehicle = document.getElementById('sb-vehicle').value;
  const serviceType = document.getElementById('sb-service-type').value;
  const date = document.getElementById('sb-date').value;

  showToast(`Booking Confirmed! Appointment scheduled for ${vehicle} on ${date}. Our service advisor will call ${phone}.`, 'success');

  if (window.confetti) {
    window.confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
  }

  const waMsg = `Hello Prashant Auto TVS Service Centre Bibwewadi, I booked a workshop slot for *${vehicle}* (${serviceType}) on *${date}*. Customer: ${name}, Phone: ${phone}. Please confirm!`;
  const waUrl = `https://wa.me/918459101990?text=${encodeURIComponent(waMsg)}`;
  window.open(waUrl, '_blank');
};

// ----------------------------------------------------
// 9. Toast Notification System
// ----------------------------------------------------
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const bgClass = type === 'success' ? 'bg-emerald-600 text-white' : (type === 'error' ? 'bg-[#D91D2F] text-white' : 'bg-[#0F172A] text-white');
  const icon = type === 'success' ? 'check-circle' : 'info';

  toast.className = `flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-xl ${bgClass} text-sm font-semibold transform transition-all duration-300 translate-y-4 opacity-0`;
  toast.innerHTML = `
    <i data-lucide="${icon}" class="w-5 h-5 shrink-0"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  initLucideIcons();

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  });

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

// ----------------------------------------------------
// 10. GSAP Scroll Animations
// ----------------------------------------------------
function initScrollAnimations() {
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.hero-content', {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.utils.toArray('.reveal-on-scroll').forEach(section => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 85%'
        },
        opacity: 0,
        y: 35,
        duration: 0.8,
        ease: 'power2.out'
      });
    });
  }
}
