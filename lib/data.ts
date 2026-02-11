// ──────────────────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────────────────

export interface Metric {
  value: string
  numericValue: number
  suffix: string
  prefix: string
  label: string
  context: string
  isAward?: boolean
}

export interface Venture {
  title: string
  subtitle: string
  challenge: string
  insight: string
  action: string
  outcome: string
  status?: string
  signal?: string
  isCurrent?: boolean
}

export interface TimelineEntry {
  year: string
  title: string
  organization: string
  location: string
  description: string
  significance: string
  isAward?: boolean
  isCurrent?: boolean
}

export interface TimelineAct {
  number: number
  title: string
  subtitle: string
  yearRange: string
  entries: TimelineEntry[]
}

export interface Domain {
  title: string
  tagline: string
  evidence: string[]
  relevance: string
}

// ──────────────────────────────────────────────────────────
// Navigation
// ──────────────────────────────────────────────────────────

export const navigationLinks = [
  { label: 'Thesis', href: '#thesis' },
  { label: 'Track Record', href: '#track-record' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Journey', href: '#journey' },
  { label: 'Domains', href: '#domains' },
  { label: 'Contact', href: '#contact' },
]

// ──────────────────────────────────────────────────────────
// Hero
// ──────────────────────────────────────────────────────────

export const heroData = {
  headline:
    'The Age of AI Demands a New Operating System for Intellectual Property',
  subtitle: 'Katherine Newman — CEO/Founder, SILOETT.AI',
  ctaPrimary: 'Request the Deck',
  ctaSecondary: 'Book a Conversation',
  linkedIn: 'https://www.linkedin.com/in/katherine-newman-450bb9338/',
}

export const credentials = [
  'Station F, Paris',
  'International Emmy Award',
  'BAFTA Nominated',
  'Oxford AI Governance',
  '£20M+ Projects Led',
]

// ──────────────────────────────────────────────────────────
// Thesis
// ──────────────────────────────────────────────────────────

export const thesisData = {
  sectionTitle: 'The Thesis',
  problem: {
    title: 'The Problem',
    body: 'IP rights management is a multi-billion dollar industry running on spreadsheets, email chains, and fragmented legacy systems. AI-generated content is creating an exponential increase in IP that existing systems cannot handle. The creative industries are hemorrhaging value through inefficient rights management.',
  },
  insight: {
    title: 'The Insight',
    body: 'Katherine spent 20+ years inside the creative industries, experiencing the IP management problem firsthand. She acquired and commercialised an entire TV franchise, navigating the full complexity of rights, licensing, and international distribution. She then deliberately trained in AI/ML and AI governance to understand the solution space. This combination — deep domain expertise + technical literacy + founder ambition — is extremely rare.',
  },
  solution: {
    title: 'The Solution',
    body: "SILOETT.AI: An AI-native operating system for IP rights management. Currently building at Station F, Paris — the world's largest startup campus. Positioned at the intersection of creativity, technology, education, and commerce.",
  },
  founderMarketFit:
    'Most founders building in the IP space come from either technology or law. Katherine comes from the creative industries themselves — the people who create, manage, and monetise IP every day. After spending two decades inside the problem, she acquired the technical and governance knowledge to build the solution. This is founder-market fit in its purest form.',
}

// ──────────────────────────────────────────────────────────
// Metrics / Track Record
// ──────────────────────────────────────────────────────────

export const metrics: Metric[] = [
  {
    value: '£20M+',
    numericValue: 20,
    prefix: '£',
    suffix: 'M+',
    label: 'Projects Led',
    context:
      "She's managed significant budgets and delivered at the highest level of the creative industries.",
  },
  {
    value: '50+',
    numericValue: 50,
    prefix: '',
    suffix: '+',
    label: 'Countries Distributed',
    context:
      'She understands international markets, licensing complexity, and global scale.',
  },
  {
    value: '10M+',
    numericValue: 10,
    prefix: '',
    suffix: 'M+',
    label: 'Viewers Reached',
    context:
      "She's built products that reach massive audiences and create real-world impact.",
  },
  {
    value: 'International Emmy',
    numericValue: 0,
    prefix: '',
    suffix: '',
    label: 'Primeval Evolved (2010)',
    context:
      'Her work has been recognised at the highest level — Best Digital Program: Fiction.',
    isAward: true,
  },
  {
    value: 'Emmy Award',
    numericValue: 0,
    prefix: '',
    suffix: '',
    label: 'Sugar Rush',
    context:
      'This is a pattern of excellence, not a one-off. Best Teen Drama.',
    isAward: true,
  },
  {
    value: 'BAFTA Nomination',
    numericValue: 0,
    prefix: '',
    suffix: '',
    label: 'Primeval Evolved',
    context:
      'Consistent quality across the most prestigious institutions in global media.',
    isAward: true,
  },
  {
    value: 'Station F',
    numericValue: 0,
    prefix: '',
    suffix: '',
    label: 'Current Residence',
    context:
      "Vetted by the world's most competitive startup ecosystem. Notable alumni include Hugging Face.",
    isAward: true,
  },
]

// ──────────────────────────────────────────────────────────
// Ventures / Case Studies
// ──────────────────────────────────────────────────────────

export const ventures: Venture[] = [
  {
    title: 'SILOETT.AI',
    subtitle: 'Building the AI-Native OS for Intellectual Property',
    challenge:
      'IP rights management is a multi-billion dollar problem running on broken infrastructure, and AI-generated content is making it exponentially worse.',
    insight:
      'Having spent 20 years managing IP from the creative side, Katherine identified that the industry needs an operating system, not another tool.',
    action:
      "Completed Andrew Ng's Deep Learning specialisation and Oxford AI Governance program. Secured a place at Station F. Building SILOETT.AI from first principles.",
    outcome: 'Active build, Station F, Paris',
    status: 'Building',
    signal:
      'Station F acceptance (competitive program, notable alumni include Hugging Face)',
    isCurrent: true,
  },
  {
    title: 'Primeval IP Acquisition',
    subtitle: 'Acquiring and Monetising a Global Entertainment Franchise',
    challenge:
      'The Primeval franchise — a major ITV sci-fi series — had unrealised commercial value locked in its IP library.',
    insight:
      'Katherine saw an opportunity to acquire 100% of the rights and the full 5-season library, then build a distribution engine around it.',
    action:
      'Negotiated and completed the full IP acquisition. Built distribution relationships across 50+ countries including ITV, BBC, Amazon Prime, Apple TV, and Roku.',
    outcome:
      'Created a self-sustaining IP revenue engine from an asset others undervalued.',
    status: 'Completed',
  },
  {
    title: 'Makutano Junction',
    subtitle: 'Scaling Social Impact Through Storytelling Across East Africa',
    challenge:
      'Reaching millions of viewers across Kenya, Uganda, and Tanzania with educational content on health, corruption, education, and women\'s empowerment.',
    insight:
      'Entertainment-first approaches to social impact reach larger audiences and create deeper behavioural change than traditional educational programming.',
    action:
      'Supervised production as Producer/Script Editor at MEDIAE in Nairobi, ensuring content met both production quality standards and social impact objectives.',
    outcome:
      '10M+ viewers, most-watched local program in Kenya (7M+ regular viewers), series ran for 15 seasons and inspired a 2025 spinoff.',
    status: 'Legacy',
  },
]

// ──────────────────────────────────────────────────────────
// Journey / Timeline
// ──────────────────────────────────────────────────────────

export const timelineActs: TimelineAct[] = [
  {
    number: 1,
    title: 'The Foundation',
    subtitle: 'Building Creative Instincts',
    yearRange: '1992–2006',
    entries: [
      {
        year: '1992–1994',
        title: "Bachelor's, Business (Film & TV Production)",
        organization: 'QUT — Queensland University of Technology',
        location: 'Brisbane, Australia',
        description:
          'Dual foundation in business and creative production, combining commercial thinking with storytelling craft.',
        significance:
          'Business + Creative dual foundation — the same combination that drives SILOETT.',
      },
      {
        year: '1993',
        title: 'Student Exchange',
        organization: 'San José State University',
        location: 'California, USA',
        description:
          'Early international exposure in Silicon Valley\'s backyard.',
        significance: 'First international experience, early exposure to the US market.',
      },
      {
        year: '2003–2004',
        title: 'Royal Academy of Music',
        organization: 'Royal Academy of Music',
        location: 'London, UK',
        description:
          'Artistic discipline and creative rigor at one of the world\'s most prestigious institutions.',
        significance:
          'Deepened artistic sensibility and disciplined creative process.',
      },
      {
        year: '2005–2006',
        title: 'Post Production Supervisor',
        organization: 'Shine Television',
        location: 'London, UK',
        description:
          '"Sugar Rush" — Emmy Award winner for Best Teen Drama. Managed the full post-production pipeline.',
        significance:
          'First Emmy-associated project. Learned end-to-end production delivery.',
      },
      {
        year: '2006',
        title: 'Producer / Script Editor',
        organization: 'MEDIAE',
        location: 'Nairobi, Kenya',
        description:
          '"Makutano Junction" — educational drama reaching 10M+ viewers across East Africa.',
        significance:
          'Proved ability to manage complex stakeholder environments and mission-driven production at international scale.',
      },
    ],
  },
  {
    number: 2,
    title: 'The Proving Ground',
    subtitle: 'Executing at Scale',
    yearRange: '2007–2017',
    entries: [
      {
        year: '2007–2013',
        title: 'Executive Producer / Creative Executive',
        organization: 'Impossible Pictures',
        location: 'London, UK',
        description:
          '~9 years on the Primeval franchise. Produced "Primeval Evolved" — the digital extension that won the International Emmy.',
        significance:
          'Deep immersion in the IP that Katherine would later acquire. Built expertise in franchise management and multi-platform storytelling.',
      },
      {
        year: '2010',
        title: 'International Emmy Award',
        organization: 'Primeval Evolved',
        location: '',
        description:
          'Won Best Digital Program: Fiction at the International Emmy Awards.',
        significance:
          'Global recognition at the highest level. Validated the creative-digital bridge that defines Katherine\'s approach.',
        isAward: true,
      },
      {
        year: '2010',
        title: 'BAFTA Nomination',
        organization: 'Primeval Evolved',
        location: '',
        description:
          'Nominated at the British Academy of Film and Television Arts.',
        significance:
          'Consistent excellence across the most prestigious institutions in global media.',
        isAward: true,
      },
      {
        year: '2012–2017',
        title: 'Executive Producer, Scripted',
        organization: 'ITV Studios',
        location: 'London, UK',
        description:
          '5 years leading scripted drama at one of the UK\'s largest broadcasters. Developed series including "Beowulf: Return to the Shieldlands".',
        significance:
          'Led £20M+ projects with multidisciplinary teams. Executive-level decision making at broadcaster scale.',
      },
    ],
  },
  {
    number: 3,
    title: 'The Founder Era',
    subtitle: 'Building the Future',
    yearRange: '2018–Present',
    entries: [
      {
        year: '2018–2025',
        title: 'CEO / Founder',
        organization: 'Kettle Black Productions',
        location: 'London / Paris',
        description:
          'Acquired 100% of Rights and 5-season library to the Primeval franchise. Built distribution to 50+ countries including ITV, BBC, Amazon Prime, Apple TV, Roku.',
        significance:
          'Transitioned from producer to owner. Learned firsthand how broken IP management is — the insight that led to SILOETT.',
      },
      {
        year: '2024–2025',
        title: "Andrew Ng's Deep Learning & ML Specialisation",
        organization: 'Online',
        location: '',
        description:
          'Deliberate technical upskilling to understand the AI solution space for IP management.',
        significance:
          'Bridged the gap between domain expertise and technical understanding.',
      },
      {
        year: '2024–2025',
        title: 'Oxford AI Governance',
        organization: 'University of Oxford',
        location: 'Oxford / Online',
        description:
          'Policy and regulatory understanding of AI governance frameworks.',
        significance:
          'Added governance and policy perspective — critical for an AI company operating in IP/rights.',
      },
      {
        year: '2025–Present',
        title: 'CEO / Founder — SILOETT.AI',
        organization: 'Station F',
        location: 'Paris, France',
        description:
          'Building the AI-native operating system for intellectual property management at the world\'s largest startup campus.',
        significance:
          'Every chapter of Katherine\'s career led here. SILOETT is the synthesis of 20+ years of domain expertise.',
        isCurrent: true,
      },
    ],
  },
]

// ──────────────────────────────────────────────────────────
// Strategic Domains
// ──────────────────────────────────────────────────────────

export const domains: Domain[] = [
  {
    title: 'IP Rights & Licensing',
    tagline: 'Full lifecycle management from creation to global distribution',
    evidence: [
      'Primeval franchise acquisition — 100% of rights + 5-season library',
      '50+ country distribution deals',
      'Rights negotiation across ITV, BBC, Amazon Prime, Apple TV, Roku',
    ],
    relevance:
      'This is the domain Katherine is building technology to transform.',
  },
  {
    title: 'AI & Machine Learning',
    tagline: 'Technical literacy with governance awareness',
    evidence: [
      "Andrew Ng's Deep Learning & ML Specialisation",
      'Oxford AI Governance program',
    ],
    relevance:
      'Understands both the capabilities and the constraints of AI in the IP space.',
  },
  {
    title: 'Creative Production at Scale',
    tagline: '£20M+ budgets, Emmy/BAFTA-caliber output',
    evidence: [
      'International Emmy — Primeval Evolved',
      'Emmy Award — Sugar Rush',
      'BAFTA nomination',
      'ITV Studios scripted drama leadership',
    ],
    relevance:
      'Knows how to ship complex creative projects on time and at quality.',
  },
  {
    title: 'International Markets & Distribution',
    tagline: '50+ countries across UK, EU, North America, and East Africa',
    evidence: [
      'Primeval distribution to 50+ countries',
      'Makutano Junction across East Africa (10M+ viewers)',
      'ITV Studios international projects',
    ],
    relevance:
      'Understands the global complexity of IP rights — the exact problem SILOETT solves.',
  },
  {
    title: 'Startup Leadership & Company Building',
    tagline: 'Station F founder, 0-to-1 company building',
    evidence: [
      'Station F acceptance (alumni include Hugging Face)',
      'Kettle Black Productions built from scratch',
      'SILOETT.AI founding and active build',
    ],
    relevance: 'Proven ability to go from idea to execution.',
  },
]

// ──────────────────────────────────────────────────────────
// Contact / Invitation
// ──────────────────────────────────────────────────────────

export const contactData = {
  headline:
    'Katherine is selectively building the founding team and investor syndicate for SILOETT.AI.',
  subtext:
    "If you share her vision for the future of intellectual property, she'd welcome a conversation.",
  seeking: [
    'Investors (Pre-Seed / Seed)',
    'Technical Co-founder',
    'Strategic Advisors',
    'Industry Partners',
  ],
  linkedIn: 'https://www.linkedin.com/in/katherine-newman-450bb9338/',
  location: 'Station F, Paris, France / London, UK',
  availability:
    'Available for in-person meetings in Paris and London, virtual meetings globally.',
}
