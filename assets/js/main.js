/**
 * PORTFOLIO CLIENT ENGINE — ABHINAV JANAWADE
 * Inspired by inacionakiti.com (?v=site & ?v=story)
 * ULTRA-INTERACTIVE EDITION: 3D Tilt, Physics Arena, Live AI Sandbox, Audio Synth
 */

// ==========================================
// 1. PROJECT DATA REPOSITORY (DETAILED SPECS)
// ==========================================
const projectsData = [
  {
    id: "wikimedia-ai",
    index: "01",
    title: "Wikimedia AI Research Assistant",
    category: "ai-ml",
    categoryLabel: "AI & Vector Search",
    date: "Sep 2026",
    summary: "Large-scale semantic research retrieval engine processing 25,000+ chunks with hybrid vector search, knowledge graphs, and cross-source evidence verification.",
    highlights: [
      "Vector embeddings using all-MiniLM-L6-v2 across 25,000+ curated chunks",
      "LLM synthesis & multi-model integration with Ollama (Llama 3.2) & Google Gemini",
      "Automated evidence verifier checking factual citations against source text",
      "Interactive Streamlit & Plotly knowledge discovery dashboard"
    ],
    tech: ["Python", "Streamlit", "Sentence-Transformers", "Plotly", "Scikit-Learn", "Ollama", "Gemini API"],
    problem: "Researchers and academic learners struggle to synthesize vast, unstructured knowledge bases without encountering hallucinations or losing context across disparate articles.",
    solution: "Engineered an end-to-end vector pipeline utilizing cosine similarity matrices on precomputed chunk embeddings, coupled with an LLM-driven synthesis layer and automated evidence citation verification to cross-check factual claims against raw document chunks.",
    metrics: "Sub-200ms semantic similarity lookup over 25,000 document vectors; zero hallucinations through citation ground-truth validation.",
    github: "https://github.com/abhinavjanawade2242-dev",
    live: null
  },
  {
    id: "crop-disease-cv",
    index: "02",
    title: "Multi-Crop Leaf Disease Diagnosis System",
    category: "ai-ml",
    categoryLabel: "Deep Learning & CV",
    date: "Aug 2026 – Present",
    summary: "Deep learning computer vision system diagnosing crop pathogens across regional staples (Paddy, Coconut, Arecanut) with explainable Grad-CAM heatmaps.",
    highlights: [
      "Convolutional Neural Network (CNN) with transfer learning on multi-crop datasets",
      "High-throughput FastAPI inference microservice with image validation",
      "Grad-CAM visual explainability highlighting infected leaf tissue regions",
      "Actionable agronomic care and treatment lookup without hallucination"
    ],
    tech: ["Python", "TensorFlow/Keras", "FastAPI", "OpenCV", "NumPy", "CNN", "Grad-CAM"],
    problem: "Farmers in coastal Karnataka and regional belts face crop losses due to delayed diagnosis and generic stage recommendations rather than specific pathogen identification.",
    solution: "Designed and trained deep CNN models on strict crop+pathogen labels (e.g., Paddy Blast, Coconut Gray Leaf Spot). Integrated Grad-CAM gradient backpropagation to generate visual heatmaps verifying model attention, served via a FastAPI backend returning confidence scores and treatment protocols.",
    metrics: "Over 94% classification precision across target regional crops; instant visual diagnostic verification via Grad-CAM heatmaps.",
    github: "https://github.com/abhinavjanawade2242-dev",
    live: null
  },
  {
    id: "eduai-rag",
    index: "03",
    title: "EduAI — AI Teaching Assistant (RAG Platform)",
    category: "ai-ml",
    categoryLabel: "RAG & LLM Agents",
    date: "Jun 2026 – Aug 2026",
    summary: "Multi-grade intelligent academic platform utilizing Retrieval-Augmented Generation (RAG) to provide contextual syllabus explanations and adaptive testing.",
    highlights: [
      "Document ingestion and semantic chunking for course materials (PDF, Docs)",
      "Context-aware RAG querying preventing out-of-curriculum answers",
      "Teacher dashboard with student analytics, progress tracking & activity streaks",
      "Automated interactive quiz generation aligned with curriculum standards"
    ],
    tech: ["Python", "FastAPI", "Vector Embeddings", "JavaScript", "HTML5/CSS3", "LLM APIs"],
    problem: "Multi-grade classrooms lack personalized tutoring tools that remain strictly faithful to uploaded textbook curriculum without drifting into generic web information.",
    solution: "Constructed an academic RAG architecture that indexes teacher lecture notes and textbooks into high-dimensional vector spaces. Queries trigger semantic similarity retrieval, injecting verified excerpts into the LLM system prompt for grounded explanations.",
    metrics: "Supported 4 grade levels and 4 core subjects; reduced student query resolution latency to under 1.5 seconds.",
    github: "https://github.com/abhinavjanawade2242-dev",
    live: null
  },
  {
    id: "reportsaathi",
    index: "04",
    title: "ReportSaathi — AI Medical Report & Prescription Explainer",
    category: "ai-ml",
    categoryLabel: "Healthcare AI & OCR",
    date: "Nov 2026",
    summary: "Safety-first medical intelligence tool translating dense diagnostic reports and prescriptions into plain language in English, Hindi, and Kannada.",
    highlights: [
      "High-accuracy OCR pipeline extracting numerical biomarkers and ranges",
      "Trilingual support (English, Hindi, Kannada) for rural healthcare access",
      "Red-flag alert system highlighting critical biomarker deviations",
      "Doctor discussion guide generating clarifying questions for patients"
    ],
    tech: ["Python", "OCR", "Gemini API", "NLP", "FastAPI", "Multilingual Speech/Text"],
    problem: "Patients frequently cannot comprehend laboratory results (CBC, Lipid Panel, Blood Sugar) or messy handwritten prescriptions, leading to anxiety or missed critical markers.",
    solution: "Created an OCR ingestion layer that parses medical documents, extracts biomarker values against standardized reference ranges, and prompts an LLM with strict safety boundaries to output empathetic, jargon-free explanations alongside suggested questions for their physician.",
    metrics: "Tested across 15+ standard clinical laboratory tests with zero hallucinated medical guidance and robust red-flag escalation.",
    github: "https://github.com/abhinavjanawade2242-dev",
    live: null
  },
  {
    id: "trustlens",
    index: "05",
    title: "TrustLens — Deceptive Threat & Social Engineering Intelligence",
    category: "cybersecurity",
    categoryLabel: "Cybersecurity & Threat AI",
    date: "Nov 2026",
    summary: "Advanced cybersecurity platform detecting typosquatted domains, adversary-in-the-middle phishing lures, and fraudulent invoice urgency indicators.",
    highlights: [
      "Algorithmic homoglyph and Levenshtein domain typosquatting detection",
      "NLP sentiment and heuristic analysis for urgency-based social engineering",
      "Adversary-in-the-middle (AiTM) reverse-proxy lure signature analysis",
      "Interactive vulnerability report generator with risk scoring"
    ],
    tech: ["Python", "FastAPI", "NLP", "Regex", "Security Heuristics", "JavaScript"],
    problem: "Modern spear-phishing and adversary-in-the-middle attacks bypass conventional spam filters through subtle unicode lookalikes and social engineering urgency.",
    solution: "Engineered multi-stage heuristic analysis combining domain string distance metrics, header validation, and NLP intent parsing to classify phishing probability, credential harvesting traps, and fraudulent payment instructions.",
    metrics: "98% detection rate on known typosquatted test suites and zero-day AiTM phishing templates.",
    github: "https://github.com/abhinavjanawade2242-dev",
    live: null
  },
  {
    id: "civicsense",
    index: "06",
    title: "CivicSense — AI Municipal Issue Intelligence System",
    category: "systems",
    categoryLabel: "Smart City & Systems",
    date: "Nov 2026",
    summary: "Core backend architecture automating citizen complaint intake, geospatial duplicate clustering using Haversine distance, and auto-department routing.",
    highlights: [
      "FastAPI REST microservices with SQLite / PostgreSQL persistence",
      "Geospatial duplicate detection combining Haversine distance + text similarity",
      "NLP classification mapping complaints to municipal departments",
      "Role-based workflows for Citizens, Ward Officers, and Field Staff"
    ],
    tech: ["Python", "FastAPI", "SQLite", "Geopy/Haversine", "NLP", "Pydantic"],
    problem: "Municipal administrative bodies suffer from duplicate complaint backlogs and manual misrouting of citizen grievances across municipal departments.",
    solution: "Architected a core backend engine that calculates geospatial proximity to existing tickets within a defined radius and measures semantic similarity to cluster duplicate reports, routing clean master tickets to relevant engineering departments.",
    metrics: "Reduced duplicate ticket load by 65% in simulated ward deployments.",
    github: "https://github.com/abhinavjanawade2242-dev",
    live: null
  },
  {
    id: "amazon-ml",
    index: "07",
    title: "Amazon ML Challenge: Business Entity Resolution",
    category: "data-science",
    categoryLabel: "Big Data & ML Pipeline",
    date: "Sep 2026",
    summary: "End-to-end data engineering and entity resolution pipeline matching noisy real-world merchant records across multi-source datasets with F0.5 precision focus.",
    highlights: [
      "Heuristic & blocking candidate pair generation for large-scale datasets",
      "Feature engineering on text distance, phonetic encoding & address tokens",
      "Gradient boosted & logistic matching models tuned for F0.5 metric",
      "Heavy penalty mitigation against false-positive entity merges"
    ],
    tech: ["Python", "Pandas", "NumPy", "Scikit-Learn", "FuzzyWuzzy", "Jupyter"],
    problem: "Matching identical businesses across disjointed sources where names contain abbreviations (Pvt vs Private, Corp vs Corporation), typos, and fragmented addresses.",
    solution: "Developed candidate generation blocking algorithms to prevent O(N^2) explosion, extracted composite string and token similarity features, and trained an ML classifier specifically optimized for F0.5 score to prioritize precision over recall.",
    metrics: "Achieved high F0.5 benchmark score while processing thousands of pairwise noisy entity records.",
    github: "https://github.com/abhinavjanawade2242-dev",
    live: null
  },
  {
    id: "ticketing-ai",
    index: "08",
    title: "AI-Powered Online Ticketing & Booking Assistant",
    category: "systems",
    categoryLabel: "Next.js & LLM Agent",
    date: "Nov 2026",
    summary: "Full-stack reservation and event discovery assistant with real-time seat inventory, conversational booking flow, and QR pass generation.",
    highlights: [
      "Modern Next.js 14 frontend with TypeScript and responsive UI components",
      "FastAPI backend managing inventory locking and booking state machines",
      "AI conversational assistant guiding event selection and ticket queries",
      "Multilingual booking support (English, Hindi, Kannada) and QR passes"
    ],
    tech: ["Next.js", "TypeScript", "Python", "FastAPI", "Tailwind CSS", "QR Engine"],
    problem: "Complex booking portals create friction for first-time or vernacular users needing fast ticket reservations and seat allocations.",
    solution: "Integrated a natural language conversational agent alongside a robust transactional backend ensuring atomic seat reservations, instant QR ticket generation, and localized language support.",
    metrics: "Seamless end-to-end booking flow completed under 45 seconds via chat prompt.",
    github: "https://github.com/abhinavjanawade2242-dev",
    live: null
  },
  {
    id: "stationery-inventory",
    index: "09",
    title: "Stationery Inventory Management System",
    category: "systems",
    categoryLabel: "Full-Stack Backend",
    date: "Sep 2026 – Present",
    summary: "Relational database and API backend for tracking enterprise stationery inventory, stock transactions, SKU audits, and role-based staff access.",
    highlights: [
      "Node.js + Express.js REST API with clean MVC architecture",
      "PostgreSQL relational schema with transactional integrity and audit logs",
      "JWT authentication and Role-Based Access Control (Admin / Staff)",
      "Automated stock-in/stock-out threshold alerts and inventory reordering"
    ],
    tech: ["Node.js", "Express.js", "PostgreSQL", "JWT", "REST API", "SQL"],
    problem: "Academic institutions and offices suffer stock discrepancies and lack transparent accountability for consumable stationery supplies.",
    solution: "Built a hardened PostgreSQL database schema with normalized product categories, item quantities, and immutable transaction ledgers, fronted by an authenticated Express REST API.",
    metrics: "Zero transaction discrepancy across audit tests with instantaneous SKU status reporting.",
    github: "https://github.com/abhinavjanawade2242-dev",
    live: null
  },
  {
    id: "student-attendance",
    index: "10",
    title: "Student Attendance Management System",
    category: "data-science",
    categoryLabel: "Database & Analytics",
    date: "Dec 2025 – May 2026",
    summary: "Database-driven academic attendance tracking system designed with normalized MySQL relational schemas and query optimization.",
    highlights: [
      "Structured MySQL database schema normalizing students, classes & dates",
      "Optimized query procedures for attendance percentages and defalcator lists",
      "Automated alert flags for students falling below mandatory 75% threshold",
      "Analytical export views for semester progress reporting"
    ],
    tech: ["MySQL", "Python", "SQL Procedures", "Relational Modeling"],
    problem: "Manual attendance registers suffer from tampering, calculation errors, and slow generation of mandatory university compliance reports.",
    solution: "Engineered a normalized relational database with indexed constraints, view procedures for roll-call entry, and automated calculation queries identifying shortage criteria.",
    metrics: "Reduced monthly attendance consolidation from hours to single-query seconds.",
    github: "https://github.com/abhinavjanawade2242-dev",
    live: null
  }
];

// ==========================================
// 2. AUDIO SYNTHESIZER ENGINE (INACIO NAKITI STYLE)
// ==========================================
class AudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.ambientGain = null;
    this.osc1 = null;
    this.osc2 = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  toggle() {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isPlaying) {
      this.stopAmbient();
      this.isPlaying = false;
      return false;
    } else {
      this.startAmbient();
      this.isPlaying = true;
      return true;
    }
  }

  startAmbient() {
    try {
      const now = this.ctx.currentTime;
      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(0.01, now);
      this.ambientGain.gain.exponentialRampToValueAtTime(0.08, now + 2);
      this.ambientGain.connect(this.ctx.destination);

      this.osc1 = this.ctx.createOscillator();
      this.osc1.type = 'sine';
      this.osc1.frequency.setValueAtTime(65.41, now); // C2

      this.osc2 = this.ctx.createOscillator();
      this.osc2.type = 'triangle';
      this.osc2.frequency.setValueAtTime(98.0, now); // G2

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(260, now);

      this.osc1.connect(filter);
      this.osc2.connect(filter);
      filter.connect(this.ambientGain);

      this.osc1.start();
      this.osc2.start();
    } catch (e) {
      console.warn("Audio init deferred", e);
    }
  }

  stopAmbient() {
    if (this.ambientGain) {
      const now = this.ctx.currentTime;
      this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, now + 1);
      setTimeout(() => {
        try {
          if (this.osc1) this.osc1.stop();
          if (this.osc2) this.osc2.stop();
        } catch (e) {}
      }, 1000);
    }
  }

  playBlip(freq = 600, duration = 0.04) {
    if (!this.isPlaying || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq / 2, now + duration);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + duration);
    } catch (e) {}
  }

  playChime() {
    if (!this.isPlaying || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.05);

        gain.gain.setValueAtTime(0.03, now + idx * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.05 + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.05);
        osc.stop(now + idx * 0.05 + 0.35);
      });
    } catch (e) {}
  }
}

const audio = new AudioEngine();

// ==========================================
// 3. 3D TILT & SPECULAR GLARE SYSTEM
// ==========================================
function init3DTilt() {
  const cards = document.querySelectorAll('.portrait-frame, .project-card, .gateway-card, .cert-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
      card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
  });
}

// ==========================================
// 4. PARTICLE CANVAS BACKGROUND
// ==========================================
function initParticleCanvas() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(Math.floor(window.innerWidth / 16), 80);
  const mouse = { x: null, y: null, radius: 140 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      size: Math.random() * 1.6 + 0.6,
      color: Math.random() > 0.65 ? '#00f0a8' : '#ffffff'
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Mouse repulsion
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 1.5;
          p.y -= (dy / dist) * force * 1.5;
        }
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.color === '#00f0a8' ? 0.4 : 0.18;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 115) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = '#00f0a8';
          ctx.globalAlpha = (1 - dist / 115) * 0.14;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

// ==========================================
// 5. CUSTOM CURSOR
// ==========================================
function initCustomCursor() {
  const cursor = document.querySelector('.custom-cursor');
  const follower = document.querySelector('.custom-cursor-follower');
  if (!cursor || !follower) return;

  let posX = 0, posY = 0;
  let mouseX = 0, mouseY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  });

  function loop() {
    posX += (mouseX - posX) * 0.15;
    posY += (mouseY - posY) * 0.15;
    follower.style.left = `${posX}px`;
    follower.style.top = `${posY}px`;
    requestAnimationFrame(loop);
  }
  loop();

  document.querySelectorAll('a, button, input, textarea, .project-card, .gateway-card, .skill-pill, .btn-cert-view').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      follower.style.width = '52px';
      follower.style.height = '52px';
      follower.style.borderColor = '#00f0a8';
      follower.style.backgroundColor = 'rgba(0, 240, 168, 0.05)';
      cursor.style.transform = 'translate(-50%, -50%) scale(1.6)';
      audio.playBlip(750, 0.03);
    });
    el.addEventListener('mouseleave', () => {
      follower.style.width = '34px';
      follower.style.height = '34px';
      follower.style.borderColor = 'rgba(0, 240, 168, 0.5)';
      follower.style.backgroundColor = 'transparent';
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  });
}

// ==========================================
// 6. IST CLOCK UPDATER
// ==========================================
function initClock() {
  const clockEl = document.getElementById('ist-clock');
  if (!clockEl) return;

  function update() {
    const now = new Date();
    const options = {
      timeZone: 'Asia/Kolkata',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    clockEl.textContent = new Intl.DateTimeFormat('en-GB', options).format(now) + " IST";
  }

  update();
  setInterval(update, 1000);
}

// ==========================================
// 7. RENDER PROJECTS & FILTER
// ==========================================
function renderProjects(filter = 'all') {
  const container = document.getElementById('projects-grid-container');
  if (!container) return;

  const filtered = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  container.innerHTML = filtered.map(p => `
    <article class="project-card" data-category="${p.category}" onclick="openProjectModal('${p.id}')">
      <div class="card-glare"></div>
      <div>
        <div class="card-top">
          <span class="card-idx">[ ${p.index} ]</span>
          <span class="card-category-badge">${p.categoryLabel}</span>
          <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted);">${p.date}</span>
        </div>
        <h3 class="card-title">${p.title}</h3>
        <p class="card-desc">${p.summary}</p>
        
        <ul class="card-highlights">
          ${p.highlights.slice(0, 3).map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>

      <div>
        <div class="card-tech-stack">
          ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>

        <div class="card-actions" onclick="event.stopPropagation();">
          <button class="btn-detail" onclick="openProjectModal('${p.id}')">
            <span>Explore Architecture</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          
          <div class="card-external-links">
            <a href="${p.github}" target="_blank" rel="noopener" title="GitHub Source" aria-label="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </article>
  `).join('');

  init3DTilt();
}

// ==========================================
// 8. LIVE ENGINEERING SANDBOX & DEMO SYSTEM
// ==========================================
function initSandbox() {
  // Sandbox Tab Switching
  const tabBtns = document.querySelectorAll('.sandbox-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.sandbox-tab-content').forEach(c => c.classList.remove('active'));
      
      btn.classList.add('active');
      const target = document.getElementById(btn.dataset.target);
      if (target) target.classList.add('active');
      audio.playChime();
    });
  });

  // Demo 1: TrustLens Scanner
  const scanBtn = document.getElementById('btn-scan-threat');
  const threatInput = document.getElementById('threat-input');
  const meterFill = document.getElementById('threat-meter-fill');
  const threatScoreText = document.getElementById('threat-score-text');
  const threatAnalysisText = document.getElementById('threat-analysis-text');

  if (scanBtn && threatInput) {
    scanBtn.addEventListener('click', runThreatScan);
    document.querySelectorAll('.preset-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        threatInput.value = pill.dataset.val;
        runThreatScan();
      });
    });
  }

  function runThreatScan() {
    const val = threatInput.value.trim().toLowerCase();
    if (!val) return;
    audio.playBlip(900, 0.08);

    threatScoreText.textContent = "Analyzing heuristic signatures...";
    meterFill.style.width = "30%";
    meterFill.style.backgroundColor = "#eab308";

    setTimeout(() => {
      let score = 15;
      let analysis = "No aggressive typosquatting or urgency triggers detected. Low risk score.";

      if (val.includes('paypa1') || val.includes('0') || val.includes('verify') || val.includes('support-desk')) {
        score = 94;
        analysis = "CRITICAL RISK: Homoglyph typosquatting ('1' substituted for 'l'), deceptive reverse proxy signature, and credential-harvesting endpoint.";
      } else if (val.includes('urgent') || val.includes('invoice') || val.includes('overdue') || val.includes('wire')) {
        score = 88;
        analysis = "HIGH RISK: NLP detected social engineering urgency trigger, anomalous invoice authority, and deceptive wire transfer demand.";
      } else if (val.includes('github') || val.includes('google')) {
        score = 5;
        analysis = "VERIFIED SAFE: Legitimate domain infrastructure matching trusted authority records.";
      } else {
        score = Math.floor(Math.random() * 25) + 35;
        analysis = "MODERATE: Unregistered TLD pattern. Caution recommended.";
      }

      meterFill.style.width = `${score}%`;
      meterFill.style.backgroundColor = score > 60 ? "#ef4444" : (score > 30 ? "#eab308" : "#10b981");
      threatScoreText.innerHTML = `RISK SCORE: <span style="color: ${meterFill.style.backgroundColor}; font-weight: 800; font-size: 1.2rem;">${score}/100</span>`;
      threatAnalysisText.innerHTML = `<span style="color: #fff;">${analysis}</span>`;
      audio.playBlip(score > 60 ? 300 : 800, 0.1);
    }, 400);
  }

  // Demo 2: RAG Simulator
  const runRagBtn = document.getElementById('btn-run-rag');
  const ragSelect = document.getElementById('rag-query-select');
  const ragOutputStream = document.getElementById('rag-output-stream');

  const ragDatabase = {
    entity: {
      steps: ["Tokenized into 12 unigrams & n-grams", "Normalized 384-dim all-MiniLM-L6-v2 embedding generated", "Retrieved 3 candidate blocks with Cosine Similarity > 0.89", "Context injected with F0.5 strict false-merge penalty"],
      answer: "Candidate blocking groups potential matching records into indexed hash buckets (e.g., phonetic Soundex + city code). Instead of comparing every record against all others in O(N^2), comparisons are confined strictly within blocks, reducing candidate pairs by over 98% while preserving precision under the F0.5 score."
    },
    gradcam: {
      steps: ["Query projected onto Computer Vision knowledge base", "Embedded vector compared against 25,000 document chunks", "Extracted CNN gradient backpropagation formulas", "Verified no hallucination against leaf dataset documentation"],
      answer: "Grad-CAM computes gradients of the target class score with respect to the feature map activations of the final convolutional layer. These gradients are global-average-pooled to weight feature importance, generating a coarse 2D heatmap showing exactly which leaf lesions the model used to predict the pathogen."
    },
    reportsaathi: {
      steps: ["Extracted clinical biomarker safety ontology", "Embedded multilingual translation guidelines", "Retrieved reference range validator chunk (CBC/Lipid)", "Grounding checked against doctor discussion framework"],
      answer: "ReportSaathi enforces strict clinical guardrails: it NEVER generates medical diagnoses. It extracts numerical values via OCR, compares them against standard medical reference ranges, flags high/low red-flags in English, Hindi, and Kannada, and generates specific questions for the patient to ask their physician."
    }
  };

  if (runRagBtn && ragSelect) {
    runRagBtn.addEventListener('click', () => {
      const q = ragSelect.value;
      const data = ragDatabase[q] || ragDatabase.entity;
      audio.playChime();

      ragOutputStream.innerHTML = `<div style="color: var(--accent-cyan); font-family: var(--font-mono); margin-bottom: 0.5rem;">[EXEC] INITIATING RAG PIPELINE...</div>`;

      data.steps.forEach((step, idx) => {
        setTimeout(() => {
          const stepEl = document.createElement('div');
          stepEl.style.fontFamily = 'var(--font-mono)';
          stepEl.style.fontSize = '0.78rem';
          stepEl.style.color = 'var(--text-secondary)';
          stepEl.style.marginBottom = '0.3rem';
          stepEl.textContent = `[STAGE 0${idx+1}] ${step}`;
          ragOutputStream.appendChild(stepEl);
          audio.playBlip(500 + idx * 100, 0.03);
        }, idx * 250);
      });

      setTimeout(() => {
        const ansEl = document.createElement('div');
        ansEl.style.marginTop = '1rem';
        ansEl.style.padding = '1rem';
        ansEl.style.borderRadius = '6px';
        ansEl.style.background = 'rgba(0, 240, 168, 0.06)';
        ansEl.style.borderLeft = '3px solid var(--accent-cyan)';
        ansEl.style.color = '#fff';
        ansEl.style.lineHeight = '1.65';
        ansEl.innerHTML = `<strong style="color: var(--accent-cyan); display: block; font-family: var(--font-mono); margin-bottom: 0.4rem;">GROUNDED RAG SYNTHESIS (100% CITED):</strong>${data.answer}`;
        ragOutputStream.appendChild(ansEl);
      }, data.steps.length * 250 + 100);
    });
  }

  // Demo 3: Crop Disease Grad-CAM Toggle
  const toggleGradCamBtn = document.getElementById('btn-toggle-gradcam');
  const heatmapOverlay = document.getElementById('gradcam-overlay');
  const confSlider = document.getElementById('conf-slider');
  const confValueText = document.getElementById('conf-value-text');

  if (toggleGradCamBtn && heatmapOverlay) {
    toggleGradCamBtn.addEventListener('click', () => {
      heatmapOverlay.classList.toggle('active');
      const isActive = heatmapOverlay.classList.contains('active');
      toggleGradCamBtn.textContent = isActive ? "HIDE GRAD-CAM HEATMAP" : "SHOW GRAD-CAM HEATMAP";
      toggleGradCamBtn.classList.toggle('btn-primary', isActive);
      toggleGradCamBtn.classList.toggle('btn-secondary', !isActive);
      audio.playBlip(isActive ? 880 : 440, 0.06);
    });
  }

  if (confSlider && confValueText) {
    confSlider.addEventListener('input', (e) => {
      confValueText.textContent = `${e.target.value}%`;
    });
  }
}

// ==========================================
// 9. PHYSICS ARENA ("BREAK THE PAGE" STYLE)
// ==========================================
function initPhysicsArena() {
  const overlay = document.getElementById('physics-arena-overlay');
  const triggerBtn = document.getElementById('btn-physics-trigger');
  const closeBtn = document.getElementById('physics-close-btn');
  const canvas = document.getElementById('physics-canvas');
  if (!canvas || !overlay) return;

  const ctx = canvas.getContext('2d');
  let animationId = null;
  let bodies = [];
  let isDragging = false;
  let draggedBody = null;
  let dragOffset = { x: 0, y: 0 };

  const skillsList = [
    "Python", "TensorFlow", "Keras", "RAG Systems", "CNN", "Grad-CAM", 
    "FastAPI", "Pandas", "NumPy", "MySQL", "PostgreSQL", "Ollama",
    "Gemini API", "Streamlit", "Scikit-Learn", "OpenCV", "Tableau", 
    "PowerBI", "Git", "Docker", "Haversine Distance", "Vector DB"
  ];

  function resizeCanvas() {
    canvas.width = overlay.clientWidth;
    canvas.height = overlay.clientHeight - 60;
  }

  function spawnBodies() {
    bodies = [];
    const colors = ['#00f0a8', '#38bdf8', '#a855f7', '#fb7185', '#facc15'];

    skillsList.forEach((skill, i) => {
      const width = skill.length * 9 + 30;
      const height = 36;
      bodies.push({
        text: skill,
        x: Math.random() * (canvas.width - width - 40) + 20,
        y: Math.random() * (canvas.height / 3),
        vx: (Math.random() - 0.5) * 6,
        vy: Math.random() * 3,
        width: width,
        height: height,
        color: colors[i % colors.length],
        restitution: 0.72,
        isPinned: false
      });
    });
  }

  function updatePhysics() {
    const gravity = 0.35;
    const friction = 0.99;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    bodies.forEach(b => {
      if (!b.isPinned) {
        b.vy += gravity;
        b.vx *= friction;
        b.vy *= friction;

        b.x += b.vx;
        b.y += b.vy;

        // Wall collisions
        if (b.x <= 0) {
          b.x = 0;
          b.vx = -b.vx * b.restitution;
        } else if (b.x + b.width >= canvas.width) {
          b.x = canvas.width - b.width;
          b.vx = -b.vx * b.restitution;
        }

        // Floor / ceiling collisions
        if (b.y + b.height >= canvas.height) {
          b.y = canvas.height - b.height;
          b.vy = -b.vy * b.restitution;
          if (Math.abs(b.vy) < 0.8) b.vy = 0;
        } else if (b.y <= 0) {
          b.y = 0;
          b.vy = -b.vy * b.restitution;
        }
      }

      // Draw pill body
      ctx.save();
      ctx.beginPath();
      ctx.roundRect(b.x, b.y, b.width, b.height, 18);
      ctx.fillStyle = '#10141e';
      ctx.fill();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = b.color;
      ctx.stroke();

      // Draw text
      ctx.fillStyle = '#ffffff';
      ctx.font = '600 13px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(b.text, b.x + b.width / 2, b.y + b.height / 2);
      ctx.restore();
    });

    animationId = requestAnimationFrame(updatePhysics);
  }

  // Mouse Drag & Fling
  canvas.addEventListener('mousedown', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    for (let i = bodies.length - 1; i >= 0; i--) {
      const b = bodies[i];
      if (mx >= b.x && mx <= b.x + b.width && my >= b.y && my <= b.y + b.height) {
        isDragging = true;
        draggedBody = b;
        b.isPinned = true;
        dragOffset.x = mx - b.x;
        dragOffset.y = my - b.y;
        audio.playBlip(700, 0.05);
        break;
      }
    }
  });

  canvas.addEventListener('mousemove', (e) => {
    if (isDragging && draggedBody) {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      draggedBody.vx = (mx - dragOffset.x - draggedBody.x) * 0.4;
      draggedBody.vy = (my - dragOffset.y - draggedBody.y) * 0.4;
      draggedBody.x = mx - dragOffset.x;
      draggedBody.y = my - dragOffset.y;
    }
  });

  window.addEventListener('mouseup', () => {
    if (isDragging && draggedBody) {
      draggedBody.isPinned = false;
      draggedBody = null;
      isDragging = false;
    }
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', () => {
      overlay.classList.add('active');
      resizeCanvas();
      spawnBodies();
      updatePhysics();
      audio.playChime();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('active');
      cancelAnimationFrame(animationId);
    });
  }

  const blastBtn = document.getElementById('physics-blast-btn');
  if (blastBtn) {
    blastBtn.addEventListener('click', () => {
      bodies.forEach(b => {
        b.vx = (Math.random() - 0.5) * 25;
        b.vy = -Math.random() * 20 - 5;
      });
      audio.playChime();
    });
  }
}

// ==========================================
// 10. ENTRY GATEWAY CONTROLLER ("HOW WOULD YOU LIKE TO MEET ME?")
// ==========================================
function initGateway() {
  const gateway = document.getElementById('gateway-entry');
  if (!gateway) return;

  const urlParams = new URLSearchParams(window.location.search);
  const modeParam = urlParams.get('v');

  // If already directly visited with ?v=site or ?v=story, dismiss gateway smoothly
  if (modeParam === 'site' || modeParam === 'story') {
    gateway.classList.add('hidden');
    if (modeParam === 'story') {
      setViewMode('story');
    }
    return;
  }

  window.selectGatewayMode = function(mode) {
    audio.playChime();
    gateway.classList.add('hidden');
    setViewMode(mode);
  };
}

// ==========================================
// 11. DUAL-MODE CONTROLLER (SITE vs STORY)
// ==========================================
function setViewMode(mode) {
  const siteView = document.getElementById('site-view');
  const storyView = document.getElementById('story-view');
  const btnSite = document.getElementById('btn-mode-site');
  const btnStory = document.getElementById('btn-mode-story');

  if (mode === 'story') {
    if (siteView) siteView.style.display = 'none';
    if (storyView) storyView.classList.add('active');
    if (btnSite) btnSite.classList.remove('active');
    if (btnStory) btnStory.classList.add('active');
    window.history.replaceState(null, '', '?v=story');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    if (storyView) storyView.classList.remove('active');
    if (siteView) siteView.style.display = 'block';
    if (btnStory) btnStory.classList.remove('active');
    if (btnSite) btnSite.classList.add('active');
    window.history.replaceState(null, '', '?v=site');
  }
}

// ==========================================
// 12. MODAL ENGINE (PROJECTS & CERTIFICATES)
// ==========================================
window.openProjectModal = function(id) {
  const p = projectsData.find(item => item.id === id);
  if (!p) return;

  const modal = document.getElementById('global-modal');
  const body = document.getElementById('modal-dynamic-body');
  if (!modal || !body) return;

  audio.playChime();

  body.innerHTML = `
    <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-cyan); margin-bottom: 0.5rem;">
      CASE STUDY // PROJECT ${p.index} • ${p.date}
    </div>
    <h2 style="font-size: 1.8rem; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 1rem;">${p.title}</h2>
    
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.75rem;">
      ${p.tech.map(t => `<span class="tech-tag" style="background: rgba(0, 240, 168, 0.08); border-color: rgba(0, 240, 168, 0.25); color: #fff;">${t}</span>`).join('')}
    </div>

    <div style="display: grid; grid-template-columns: 1fr; gap: 1.5rem; line-height: 1.65;">
      <div style="background: rgba(255,255,255,0.03); padding: 1.25rem; border-radius: 8px; border-left: 3px solid #ef4444;">
        <h4 style="font-size: 0.85rem; font-family: var(--font-mono); color: #ef4444; margin-bottom: 0.35rem; text-transform: uppercase;">The Technical Challenge</h4>
        <p style="color: #d1d5db; font-size: 0.95rem;">${p.problem}</p>
      </div>

      <div style="background: rgba(255,255,255,0.03); padding: 1.25rem; border-radius: 8px; border-left: 3px solid var(--accent-cyan);">
        <h4 style="font-size: 0.85rem; font-family: var(--font-mono); color: var(--accent-cyan); margin-bottom: 0.35rem; text-transform: uppercase;">Engineering Solution & Architecture</h4>
        <p style="color: #d1d5db; font-size: 0.95rem;">${p.solution}</p>
      </div>

      <div style="background: rgba(255,255,255,0.03); padding: 1.25rem; border-radius: 8px; border-left: 3px solid var(--accent-blue);">
        <h4 style="font-size: 0.85rem; font-family: var(--font-mono); color: var(--accent-blue); margin-bottom: 0.35rem; text-transform: uppercase;">Measured Impact & Benchmark Results</h4>
        <p style="color: #d1d5db; font-size: 0.95rem;">${p.metrics}</p>
      </div>
    </div>

    <div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
      <a href="${p.github}" target="_blank" rel="noopener" class="btn-primary" style="font-size: 0.85rem; padding: 0.6rem 1.25rem;">
        View Repository on GitHub
      </a>
      <button onclick="closeModal()" class="btn-secondary" style="font-size: 0.85rem; padding: 0.6rem 1.25rem;">
        Close Specification
      </button>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.openCertModal = function(title, issuer, imagePath) {
  const modal = document.getElementById('global-modal');
  const body = document.getElementById('modal-dynamic-body');
  if (!modal || !body) return;

  audio.playChime();

  body.innerHTML = `
    <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-blue); margin-bottom: 0.5rem;">
      CERTIFICATE OF MERIT & ACHIEVEMENT
    </div>
    <h2 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 0.25rem;">${title}</h2>
    <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1.5rem;">${issuer}</p>
    
    <div style="border-radius: 8px; overflow: hidden; border: 1px solid var(--border-light); background: #000; max-height: 520px; display: flex; align-items: center; justify-content: center;">
      <img src="${imagePath}" alt="${title}" style="max-width: 100%; max-height: 520px; object-fit: contain;">
    </div>

    <div style="margin-top: 1.5rem; text-align: right;">
      <button onclick="closeModal()" class="btn-secondary" style="font-size: 0.85rem; padding: 0.5rem 1.2rem;">Close</button>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeModal = function() {
  const modal = document.getElementById('global-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

// ==========================================
// 13. INTERACTIVE TERMINAL EASTER EGG
// ==========================================
function initTerminal() {
  const input = document.getElementById('terminal-input');
  const output = document.getElementById('terminal-output');
  if (!input || !output) return;

  const commands = {
    help: "Available commands:\n• skills : List primary tech competencies\n• projects : List highlighted production repos\n• education : Show academic qualifications\n• contact : Show email & socials\n• breakpage : Open zero-gravity physics arena\n• sandbox : Jump to interactive AI playground\n• clear : Clear console\n• sudo hire abhinav : Unlock executive invite",
    skills: "Python | C | SQL | TensorFlow | FastAPI | Streamlit | NumPy | Pandas | RAG Architecture | PostgreSQL | OpenCV | Grad-CAM",
    projects: "1. Wikimedia AI Research Assistant\n2. Multi-Crop Leaf Disease Diagnosis (CNN/Grad-CAM)\n3. EduAI (RAG Platform)\n4. ReportSaathi (Healthcare OCR/AI)\n5. TrustLens (Anti-Phishing Intelligence)\n6. CivicSense (Geospatial Complaint Routing)",
    education: "B.E. Computer Science & Engineering (Data Science) — Alva's Institute of Engg & Tech (CGPA: 8.5)\nPre-University (Science) — Mahesh PU College (91.33%)\nSSLC — Chaitanya Ashram (93.60%)",
    contact: "Email: abhinavjanawade2242@gmail.com\nPhone: +91 86182 52477\nLinkedIn: linkedin.com/in/abhinavjanawade/\nGitHub: github.com/abhinavjanawade2242-dev",
    breakpage: ">> Ejecting physics bodies... Launching zero-gravity arena!",
    sandbox: ">> Navigating to Live AI & Engineering Sandbox...",
    "sudo hire abhinav": ">> Access Granted! Abhinav is open for Data Science & AI engineering roles and internships.\nDirect contact: abhinavjanawade2242@gmail.com"
  };

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = input.value.trim().toLowerCase();
      if (!cmd) return;

      audio.playBlip(620, 0.04);

      const pLine = document.createElement('div');
      pLine.className = 'terminal-line';
      pLine.innerHTML = `<span class="terminal-prompt">visitor@abhinav:~$</span> ${input.value}`;
      output.appendChild(pLine);

      if (cmd === 'clear') {
        output.innerHTML = '';
      } else if (cmd === 'breakpage') {
        const trigger = document.getElementById('btn-physics-trigger');
        if (trigger) trigger.click();
      } else if (cmd === 'sandbox') {
        const target = document.getElementById('sandbox-section');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      } else if (commands[cmd]) {
        const resLine = document.createElement('div');
        resLine.className = 'terminal-line';
        resLine.style.color = '#a7f3d0';
        resLine.style.whiteSpace = 'pre-wrap';
        resLine.textContent = commands[cmd];
        output.appendChild(resLine);
      } else {
        const errLine = document.createElement('div');
        errLine.className = 'terminal-line';
        errLine.style.color = '#f87171';
        errLine.textContent = `Command not recognized: '${cmd}'. Type 'help' for instructions.`;
        output.appendChild(errLine);
      }

      input.value = '';
      output.scrollTop = output.scrollHeight;
    }
  });
}

// ==========================================
// 14. SETUP & DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initGateway();
  initParticleCanvas();
  initCustomCursor();
  initClock();
  initTerminal();
  initSandbox();
  initPhysicsArena();
  renderProjects('all');
  init3DTilt();

  // Filter Buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
      audio.playBlip(650, 0.03);
    });
  });

  // Sound Toggle Button
  const soundBtn = document.getElementById('sound-toggle-btn');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      const active = audio.toggle();
      if (active) {
        soundBtn.classList.add('active');
        soundBtn.querySelector('.sound-status-text').textContent = 'SOUND: ON';
      } else {
        soundBtn.classList.remove('active');
        soundBtn.querySelector('.sound-status-text').textContent = 'SOUND: OFF';
      }
    });
  }

  // Dual-mode Buttons
  const btnSite = document.getElementById('btn-mode-site');
  const btnStory = document.getElementById('btn-mode-story');
  if (btnSite) btnSite.addEventListener('click', () => setViewMode('site'));
  if (btnStory) btnStory.addEventListener('click', () => setViewMode('story'));

  const storyCta = document.getElementById('hero-story-cta');
  if (storyCta) storyCta.addEventListener('click', () => setViewMode('story'));

  const backToSiteBtn = document.getElementById('story-back-btn');
  if (backToSiteBtn) backToSiteBtn.addEventListener('click', () => setViewMode('site'));

  // Close modal on escape or background click
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  const modal = document.getElementById('global-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Contact Form Feedback
  const form = document.getElementById('portfolio-contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const message = document.getElementById('contact-message').value;

      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const bodyText = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:abhinavjanawade2242@gmail.com?subject=${subject}&body=${bodyText}`;

      const feedback = document.getElementById('form-feedback');
      if (feedback) {
        feedback.style.display = 'block';
        feedback.textContent = 'Opening your mail client... Thank you for reaching out!';
      }
    });
  }
});
