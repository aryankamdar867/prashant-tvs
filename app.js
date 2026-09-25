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
  init3DStudio();
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
// 3. Interactive 3D Motorcycle Showroom Studio (Three.js)
// ----------------------------------------------------
let scene, camera, renderer, controls, bikeGroup;
let bikePaintMaterials = [];
let currentHotspots = [];
let isStudioAutoRotating = true;

const HOTSPOTS_DATA = [
  {
    id: 'engine',
    title: 'Race-Tuned Fuel Injection (RT-Fi) Engine',
    desc: 'Oil-cooled 4-valve combustion chamber with Glide Through Technology (GTT) for zero-stall bumper-to-bumper Pune traffic riding.',
    pos: [0, 0.4, 0.2]
  },
  {
    id: 'console',
    title: 'SmartXonnect TFT Digital Telemetry',
    desc: 'Bluetooth connected display with Turn-by-Turn GPS navigation, lean angle display, call/SMS notifications, and race lap recorder.',
    pos: [0.75, 1.25, 0]
  },
  {
    id: 'abs',
    title: 'Dual-Channel Super-Moto ABS',
    desc: '270mm Roto-Petal front disc brake with calibrated feedback for short, controlled braking distance on Pune monsoon roads.',
    pos: [1.3, 0.2, 0.1]
  },
  {
    id: 'headlamp',
    title: 'Bi-LED Projector with Signature DRLs',
    desc: 'Piercing high-throw LED projector lamp paired with TVS trademark twin-fang DRL brows for unmistakable road presence.',
    pos: [1.2, 1.05, 0]
  },
  {
    id: 'suspension',
    title: 'Race-Tuned Showa Monoshock',
    desc: 'Developed in conjunction with 6-time National Championship winning TVS Racing factory team for razor-sharp high-speed stability.',
    pos: [-0.65, 0.55, 0]
  }
];

function init3DStudio() {
  const container = document.getElementById('three-canvas-container');
  if (!container) return;

  // Scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xF8FAFC);

  // Camera
  const width = container.clientWidth || 800;
  const height = container.clientHeight || 500;
  camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
  camera.position.set(3.8, 1.8, 3.2);

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  container.appendChild(renderer.domElement);

  // OrbitControls
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.maxPolarAngle = Math.PI / 2 - 0.05;
  controls.minDistance = 2.0;
  controls.maxDistance = 6.5;
  controls.target.set(0, 0.6, 0);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
  scene.add(ambientLight);

  const mainLight = new THREE.DirectionalLight(0xffffff, 2.0);
  mainLight.position.set(5, 7, 4);
  mainLight.castShadow = true;
  mainLight.shadow.mapSize.width = 2048;
  mainLight.shadow.mapSize.height = 2048;
  mainLight.shadow.bias = -0.0005;
  scene.add(mainLight);

  const fillLight = new THREE.DirectionalLight(0xF1F5F9, 1.2);
  fillLight.position.set(-5, 4, -4);
  scene.add(fillLight);

  const topRimLight = new THREE.SpotLight(0xffffff, 1.8);
  topRimLight.position.set(0, 6, 0);
  topRimLight.angle = Math.PI / 4;
  scene.add(topRimLight);

  // Turntable Showroom Floor in Official Royal Cobalt Blue & Crimson Red
  createShowroomFloor();

  // Procedural 3D Motorcycle
  build3DMotorcycle();

  // Create Hotspot HTML overlays
  create3DHotspotElements(container);

  // Resize handler
  window.addEventListener('resize', onStudioResize);

  // Start Animation Loop
  animateStudio();
}

function createShowroomFloor() {
  const floorGeo = new THREE.CylinderGeometry(2.8, 2.85, 0.06, 64);
  const floorMat = new THREE.MeshStandardMaterial({
    color: 0xFFFFFF,
    metalness: 0.15,
    roughness: 0.3
  });
  const floor = new THREE.Mesh(floorGeo, floorMat);
  floor.position.y = -0.03;
  floor.receiveShadow = true;
  scene.add(floor);

  // Outer ring in TVS Royal Cobalt Blue (#013D93)
  const ringGeo = new THREE.RingGeometry(2.78, 2.84, 64);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0x013D93, side: THREE.DoubleSide });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.005;
  scene.add(ring);

  // Inner ring in TVS Pegasus Crimson Red (#D91D2F)
  const innerRingGeo = new THREE.RingGeometry(1.2, 1.22, 48);
  const innerRingMat = new THREE.MeshBasicMaterial({ color: 0xD91D2F, side: THREE.DoubleSide });
  const innerRing = new THREE.Mesh(innerRingGeo, innerRingMat);
  innerRing.rotation.x = -Math.PI / 2;
  innerRing.position.y = 0.005;
  scene.add(innerRing);
}

function build3DMotorcycle() {
  bikeGroup = new THREE.Group();
  scene.add(bikeGroup);

  // PBR Materials
  const chromeMat = new THREE.MeshStandardMaterial({ color: 0xE2E8F0, metalness: 0.95, roughness: 0.1 });
  const darkMetalMat = new THREE.MeshStandardMaterial({ color: 0x1E293B, metalness: 0.8, roughness: 0.3 });
  const tireRubberMat = new THREE.MeshStandardMaterial({ color: 0x1A1C1E, roughness: 0.9, metalness: 0.05 });
  const goldForksMat = new THREE.MeshStandardMaterial({ color: 0xD4AF37, metalness: 0.9, roughness: 0.2 });
  const redBrakeMat = new THREE.MeshStandardMaterial({ color: 0xD91D2F, metalness: 0.4, roughness: 0.3 });

  // Initial Paint Material: TVS Royal Cobalt Blue (#013D93)
  const bodyPaintMat = new THREE.MeshStandardMaterial({
    color: 0x013D93,
    metalness: 0.75,
    roughness: 0.22,
    clearcoat: 0.9,
    clearcoatRoughness: 0.12
  });
  bikePaintMaterials.push(bodyPaintMat);

  // 1. WHEELS & BRAKES
  function createWheel(xPos, isRear = false) {
    const wheelGroup = new THREE.Group();
    wheelGroup.position.set(xPos, 0.42, 0);

    const tireGeo = new THREE.TorusGeometry(0.38, 0.12, 24, 48);
    const tire = new THREE.Mesh(tireGeo, tireRubberMat);
    tire.castShadow = true;
    wheelGroup.add(tire);

    const rimGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.14, 32);
    rimGeo.rotateX(Math.PI / 2);
    const rim = new THREE.Mesh(rimGeo, darkMetalMat);
    rim.castShadow = true;
    wheelGroup.add(rim);

    for (let i = 0; i < 5; i++) {
      const spokeGeo = new THREE.BoxGeometry(0.04, 0.58, 0.02);
      const spoke = new THREE.Mesh(spokeGeo, chromeMat);
      spoke.rotation.z = (i * Math.PI) / 2.5;
      wheelGroup.add(spoke);
    }

    const discGeo = new THREE.RingGeometry(0.12, 0.24, 32);
    const discMat = new THREE.MeshStandardMaterial({ color: 0xCBD5E1, metalness: 0.9, roughness: 0.2, side: THREE.DoubleSide });
    const disc = new THREE.Mesh(discGeo, discMat);
    disc.position.z = 0.08;
    wheelGroup.add(disc);

    const caliperGeo = new THREE.BoxGeometry(0.08, 0.12, 0.06);
    const caliper = new THREE.Mesh(caliperGeo, redBrakeMat);
    caliper.position.set(0.18, 0.12, 0.09);
    wheelGroup.add(caliper);

    return wheelGroup;
  }

  const frontWheel = createWheel(1.25, false);
  const rearWheel = createWheel(-1.15, true);
  bikeGroup.add(frontWheel);
  bikeGroup.add(rearWheel);

  // 2. FRONT SUSPENSION FORKS
  const forkLeftGeo = new THREE.CylinderGeometry(0.032, 0.032, 0.9, 24);
  const forkLeft = new THREE.Mesh(forkLeftGeo, goldForksMat);
  forkLeft.position.set(1.05, 0.85, 0.11);
  forkLeft.rotation.z = -0.38;
  forkLeft.castShadow = true;
  bikeGroup.add(forkLeft);

  const forkRight = forkLeft.clone();
  forkRight.position.z = -0.11;
  bikeGroup.add(forkRight);

  const clampGeo = new THREE.BoxGeometry(0.12, 0.04, 0.28);
  const clamp = new THREE.Mesh(clampGeo, darkMetalMat);
  clamp.position.set(0.9, 1.15, 0);
  clamp.rotation.z = -0.38;
  bikeGroup.add(clamp);

  // 3. ENGINE BLOCK & EXHAUST
  const engineBlockGeo = new THREE.BoxGeometry(0.55, 0.45, 0.3);
  const engineBlock = new THREE.Mesh(engineBlockGeo, darkMetalMat);
  engineBlock.position.set(0.05, 0.45, 0);
  engineBlock.castShadow = true;
  bikeGroup.add(engineBlock);

  for (let f = 0; f < 5; f++) {
    const finGeo = new THREE.BoxGeometry(0.4, 0.015, 0.34);
    const fin = new THREE.Mesh(finGeo, chromeMat);
    fin.position.set(0.08, 0.52 + f * 0.035, 0);
    bikeGroup.add(fin);
  }

  const caseGeo = new THREE.CylinderGeometry(0.14, 0.14, 0.08, 32);
  caseGeo.rotateX(Math.PI / 2);
  const caseCover = new THREE.Mesh(caseGeo, goldForksMat);
  caseCover.position.set(0.05, 0.38, 0.18);
  bikeGroup.add(caseCover);

  const exhaustCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.28, 0.55, 0.12),
    new THREE.Vector3(0.35, 0.32, 0.15),
    new THREE.Vector3(0.0, 0.22, 0.16),
    new THREE.Vector3(-0.4, 0.25, 0.22),
    new THREE.Vector3(-0.95, 0.5, 0.24)
  ]);
  const exhaustGeo = new THREE.TubeGeometry(exhaustCurve, 32, 0.038, 16, false);
  const exhaustPipe = new THREE.Mesh(exhaustGeo, chromeMat);
  exhaustPipe.castShadow = true;
  bikeGroup.add(exhaustPipe);

  const mufflerGeo = new THREE.CylinderGeometry(0.075, 0.065, 0.55, 24);
  mufflerGeo.rotateZ(Math.PI / 3.2);
  const muffler = new THREE.Mesh(mufflerGeo, darkMetalMat);
  muffler.position.set(-0.85, 0.48, 0.24);
  muffler.castShadow = true;
  bikeGroup.add(muffler);

  const shieldGeo = new THREE.CylinderGeometry(0.082, 0.072, 0.35, 24, 1, true, 0, Math.PI);
  shieldGeo.rotateZ(Math.PI / 3.2);
  const shield = new THREE.Mesh(shieldGeo, chromeMat);
  shield.position.set(-0.82, 0.49, 0.25);
  bikeGroup.add(shield);

  // 4. CHASSIS / FRAME
  const frameBarGeo = new THREE.CylinderGeometry(0.024, 0.024, 0.95, 16);
  const frameLeft = new THREE.Mesh(frameBarGeo, bodyPaintMat);
  frameLeft.position.set(0.45, 0.72, 0.14);
  frameLeft.rotation.z = -0.85;
  bikeGroup.add(frameLeft);

  const frameRight = frameLeft.clone();
  frameRight.position.z = -0.14;
  bikeGroup.add(frameRight);

  const swingarmGeo = new THREE.BoxGeometry(0.85, 0.06, 0.26);
  const swingarm = new THREE.Mesh(swingarmGeo, darkMetalMat);
  swingarm.position.set(-0.6, 0.38, 0);
  swingarm.rotation.z = 0.12;
  bikeGroup.add(swingarm);

  const shockGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.32, 16);
  const shock = new THREE.Mesh(shockGeo, redBrakeMat);
  shock.position.set(-0.4, 0.55, 0);
  shock.rotation.z = 0.65;
  bikeGroup.add(shock);

  // 5. FUEL TANK
  const tankGeo = new THREE.BoxGeometry(0.72, 0.34, 0.38);
  const tank = new THREE.Mesh(tankGeo, bodyPaintMat);
  tank.position.set(0.35, 0.92, 0);
  tank.castShadow = true;
  bikeGroup.add(tank);

  const capGeo = new THREE.CylinderGeometry(0.065, 0.065, 0.02, 24);
  const cap = new THREE.Mesh(capGeo, chromeMat);
  cap.position.set(0.42, 1.1, 0);
  bikeGroup.add(cap);

  const shroudLGeo = new THREE.ConeGeometry(0.18, 0.45, 4);
  shroudLGeo.rotateZ(-Math.PI / 2.3);
  const shroudL = new THREE.Mesh(shroudLGeo, bodyPaintMat);
  shroudL.position.set(0.68, 0.85, 0.2);
  bikeGroup.add(shroudL);

  const shroudR = shroudL.clone();
  shroudR.position.z = -0.2;
  bikeGroup.add(shroudR);

  // 6. SEAT & COWL
  const seatGeo = new THREE.BoxGeometry(0.75, 0.12, 0.26);
  const seatMat = new THREE.MeshStandardMaterial({ color: 0x0F172A, roughness: 0.9 });
  const seat = new THREE.Mesh(seatGeo, seatMat);
  seat.position.set(-0.25, 0.88, 0);
  seat.castShadow = true;
  bikeGroup.add(seat);

  const pillionGeo = new THREE.BoxGeometry(0.35, 0.1, 0.22);
  const pillion = new THREE.Mesh(pillionGeo, seatMat);
  pillion.position.set(-0.55, 0.96, 0);
  bikeGroup.add(pillion);

  const tailGeo = new THREE.ConeGeometry(0.16, 0.55, 4);
  tailGeo.rotateZ(Math.PI / 2.2);
  const tail = new THREE.Mesh(tailGeo, bodyPaintMat);
  tail.position.set(-0.85, 0.92, 0);
  tail.castShadow = true;
  bikeGroup.add(tail);

  const tailLightGeo = new THREE.BoxGeometry(0.04, 0.06, 0.14);
  const tailLightMat = new THREE.MeshBasicMaterial({ color: 0xD91D2F });
  const tailLight = new THREE.Mesh(tailLightGeo, tailLightMat);
  tailLight.position.set(-1.12, 0.94, 0);
  bikeGroup.add(tailLight);

  // 7. COCKPIT
  const barGeo = new THREE.CylinderGeometry(0.016, 0.016, 0.65, 16);
  barGeo.rotateX(Math.PI / 2);
  const handlebars = new THREE.Mesh(barGeo, chromeMat);
  handlebars.position.set(0.75, 1.18, 0);
  bikeGroup.add(handlebars);

  const gripLGeo = new THREE.CylinderGeometry(0.024, 0.024, 0.12, 16);
  gripLGeo.rotateX(Math.PI / 2);
  const gripL = new THREE.Mesh(gripLGeo, tireRubberMat);
  gripL.position.set(0.75, 1.18, 0.28);
  bikeGroup.add(gripL);

  const gripR = gripL.clone();
  gripR.position.z = -0.28;
  bikeGroup.add(gripR);

  const dashGeo = new THREE.BoxGeometry(0.12, 0.08, 0.14);
  dashGeo.rotateZ(-0.4);
  const dashMat = new THREE.MeshStandardMaterial({ color: 0x0F172A });
  const dash = new THREE.Mesh(dashGeo, dashMat);
  dash.position.set(0.72, 1.24, 0);
  bikeGroup.add(dash);

  const screenFaceGeo = new THREE.PlaneGeometry(0.11, 0.07);
  const screenFaceMat = new THREE.MeshBasicMaterial({ color: 0x013D93 });
  const screenFace = new THREE.Mesh(screenFaceGeo, screenFaceMat);
  screenFace.rotation.y = -Math.PI / 2;
  screenFace.rotation.z = 0.4;
  screenFace.position.set(0.73, 1.25, 0);
  bikeGroup.add(screenFace);

  const mirrorStemGeo = new THREE.CylinderGeometry(0.008, 0.008, 0.22, 8);
  const mirrorLStem = new THREE.Mesh(mirrorStemGeo, darkMetalMat);
  mirrorLStem.position.set(0.8, 1.28, 0.24);
  mirrorLStem.rotation.x = 0.5;
  bikeGroup.add(mirrorLStem);

  const mirrorHeadGeo = new THREE.BoxGeometry(0.08, 0.05, 0.02);
  const mirrorHeadL = new THREE.Mesh(mirrorHeadGeo, darkMetalMat);
  mirrorHeadL.position.set(0.8, 1.36, 0.32);
  bikeGroup.add(mirrorHeadL);

  const mirrorRStem = mirrorLStem.clone();
  mirrorRStem.position.z = -0.24;
  mirrorRStem.rotation.x = -0.5;
  bikeGroup.add(mirrorRStem);

  const mirrorHeadR = mirrorHeadL.clone();
  mirrorHeadR.position.z = -0.32;
  bikeGroup.add(mirrorHeadR);

  // 8. HEADLAMP
  const headlampFairingGeo = new THREE.ConeGeometry(0.24, 0.38, 4);
  headlampFairingGeo.rotateZ(-Math.PI / 1.8);
  const headlampFairing = new THREE.Mesh(headlampFairingGeo, bodyPaintMat);
  headlampFairing.position.set(1.12, 1.04, 0);
  headlampFairing.castShadow = true;
  bikeGroup.add(headlampFairing);

  const lensGeo = new THREE.SphereGeometry(0.055, 16, 16);
  const lensMat = new THREE.MeshBasicMaterial({ color: 0xEFF6FF });
  const lensL = new THREE.Mesh(lensGeo, lensMat);
  lensL.position.set(1.26, 1.02, 0.05);
  bikeGroup.add(lensL);

  const lensR = lensL.clone();
  lensR.position.z = -0.05;
  bikeGroup.add(lensR);

  bikeGroup.position.y = 0.02;
}

function create3DHotspotElements(container) {
  const overlay = document.getElementById('three-hotspots-overlay');
  if (!overlay) return;
  overlay.innerHTML = '';

  currentHotspots = HOTSPOTS_DATA.map((h, idx) => {
    const el = document.createElement('div');
    el.className = 'hotspot-pin';
    el.innerHTML = `<span>${idx + 1}</span>`;
    el.title = h.title;
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      showHotspotDetail(h);
      focusHotspotCamera(h.pos);
    });
    overlay.appendChild(el);

    return {
      element: el,
      data: h,
      vector: new THREE.Vector3(...h.pos)
    };
  });
}

function updateHotspotsPosition() {
  const container = document.getElementById('three-canvas-container');
  if (!container || !renderer || !camera) return;

  const width = container.clientWidth;
  const height = container.clientHeight;

  currentHotspots.forEach(item => {
    const worldPos = item.vector.clone();
    worldPos.applyAxisAngle(new THREE.Vector3(0, 1, 0), bikeGroup.rotation.y);
    worldPos.add(bikeGroup.position);

    const screenPos = worldPos.clone().project(camera);
    const isBehind = screenPos.z > 1.0;

    if (isBehind) {
      item.element.style.display = 'none';
    } else {
      item.element.style.display = 'flex';
      const x = (screenPos.x * 0.5 + 0.5) * width;
      const y = (-(screenPos.y * 0.5) + 0.5) * height;
      item.element.style.left = `${x}px`;
      item.element.style.top = `${y}px`;
    }
  });
}

function showHotspotDetail(hotspot) {
  const card = document.getElementById('hotspot-info-card');
  const title = document.getElementById('hotspot-title');
  const desc = document.getElementById('hotspot-desc');
  if (!card || !title || !desc) return;

  title.textContent = hotspot.title;
  desc.textContent = hotspot.desc;

  card.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
  card.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
}

window.closeHotspotDetail = function() {
  const card = document.getElementById('hotspot-info-card');
  if (card) {
    card.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
    card.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
  }
};

function focusHotspotCamera(posArray) {
  isStudioAutoRotating = false;
  document.getElementById('autorotate-btn')?.classList.remove('bg-[#013D93]', 'text-white');

  const targetVec = new THREE.Vector3(...posArray);
  if (window.gsap) {
    gsap.to(controls.target, {
      x: targetVec.x,
      y: targetVec.y,
      z: targetVec.z,
      duration: 1.2,
      ease: 'power2.out'
    });
    gsap.to(camera.position, {
      x: targetVec.x + 1.8,
      y: targetVec.y + 0.8,
      z: targetVec.z + 1.6,
      duration: 1.4,
      ease: 'power2.out'
    });
  }
}

window.set3DCameraPreset = function(preset) {
  isStudioAutoRotating = false;
  const autoBtn = document.getElementById('autorotate-btn');
  if (autoBtn) autoBtn.classList.remove('bg-[#013D93]', 'text-white');

  let targetPos = new THREE.Vector3(0, 0.6, 0);
  let camPos = new THREE.Vector3(3.8, 1.8, 3.2);

  if (preset === 'profile') {
    camPos.set(0, 1.0, 3.8);
    targetPos.set(0, 0.6, 0);
  } else if (preset === 'front') {
    camPos.set(3.6, 1.2, 0.1);
    targetPos.set(0.6, 0.8, 0);
  } else if (preset === 'cockpit') {
    camPos.set(0.1, 1.8, 0.7);
    targetPos.set(0.7, 1.15, 0);
  } else if (preset === 'engine') {
    camPos.set(1.4, 0.7, 1.4);
    targetPos.set(0.1, 0.45, 0);
  }

  if (window.gsap) {
    gsap.to(camera.position, { x: camPos.x, y: camPos.y, z: camPos.z, duration: 1.2, ease: 'power2.inOut' });
    gsap.to(controls.target, { x: targetPos.x, y: targetPos.y, z: targetPos.z, duration: 1.2, ease: 'power2.inOut' });
  } else {
    camera.position.copy(camPos);
    controls.target.copy(targetPos);
  }
};

window.set3DColor = function(colorHex, name, element) {
  bikePaintMaterials.forEach(mat => {
    mat.color.setHex(colorHex);
  });

  const nameEl = document.getElementById('active-color-name');
  if (nameEl) nameEl.textContent = name;

  document.querySelectorAll('.color-swatch-btn').forEach(btn => {
    btn.classList.remove('ring-4', 'ring-[#013D93]', 'scale-110');
  });
  if (element) {
    element.classList.add('ring-4', 'ring-[#013D93]', 'scale-110');
  }
};

window.toggle3DAutoRotate = function() {
  isStudioAutoRotating = !isStudioAutoRotating;
  const btn = document.getElementById('autorotate-btn');
  if (btn) {
    if (isStudioAutoRotating) {
      btn.classList.add('bg-[#013D93]', 'text-white');
    } else {
      btn.classList.remove('bg-[#013D93]', 'text-white');
    }
  }
};

function onStudioResize() {
  const container = document.getElementById('three-canvas-container');
  if (!container || !renderer || !camera) return;

  const width = container.clientWidth;
  const height = container.clientHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

function animateStudio() {
  requestAnimationFrame(animateStudio);

  if (isStudioAutoRotating && bikeGroup) {
    bikeGroup.rotation.y += 0.005;
  }

  controls.update();
  updateHotspotsPosition();
  renderer.render(scene, camera);
}

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
