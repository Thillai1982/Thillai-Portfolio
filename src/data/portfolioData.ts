import {
  MetricItem,
  ExpertiseItem,
  ImpactItem,
  ExperienceRole,
  CaseStudyItem,
  ServiceItem,
  TechItem,
  EducationItem,
  ArchitectureLayer,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Thillai Nayagam Samia Pillai',
  displayName: 'Thillai Nayagam',
  title: 'Industrial Automation & MES Controls Expert',
  subtitle:
    '20+ years of experience helping manufacturing organizations design, integrate, stabilize and optimize automation and manufacturing control systems.',
  valuePills: [
    'PLC / PAC Controls',
    'SCADA Systems',
    'MES Controls & Integration',
    'Machine Vision',
    'OT–IT Convergence',
    'Smart Manufacturing / IIoT',
  ],
  tagline:
    'I don’t just automate machines. I help manufacturing organizations improve productivity, reliability, quality and operational performance through automation and MES.',
  availabilityStatus: 'Available for Consulting & Senior Automation Opportunities',
  email: 'thillaiine@gmail.com',
  location: 'Chennai, India (Global Project Delivery & Consulting)',
  linkedInUrl: 'https://www.linkedin.com/in/thillai-nayagam-85579919/',
  experienceYears: '20+',
};

export const HERO_METRICS: MetricItem[] = [
  {
    id: 'exp',
    value: '20+',
    label: 'Years Experience',
    sublabel: 'Controls & MES Leadership',
    description:
      'Two decades spanning field application engineering, regional system integration, and global manufacturing automation leadership.',
    highlight: '2004 – Present',
    iconName: 'Clock',
  },
  {
    id: 'throughput',
    value: '17K/day',
    label: 'Production Throughput',
    sublabel: 'Solar Module Facility',
    description:
      'Identified critical manufacturing process bottlenecks and integrated MES-driven automation to scale daily throughput.',
    highlight: '17,000 modules / day',
    iconName: 'Zap',
  },
  {
    id: 'scrap',
    value: '$150K',
    label: 'Scrap Reduction',
    sublabel: 'Raw-Material Cost Savings',
    description:
      'Engineered closed-loop process-control interlocks and parameter validation rules reducing costly raw-material waste.',
    highlight: '$150,000 Saved',
    iconName: 'TrendingDown',
  },
  {
    id: 'global',
    value: '85+',
    label: 'Countries Supported',
    sublabel: 'Global Application Engineering',
    description:
      'Provided direct field engineering, protocol integration, and complex SCADA/PLC application support worldwide.',
    highlight: 'Global OT Standards',
    iconName: 'Globe',
  },
  {
    id: 'troubleshoot',
    value: '50%',
    label: 'Troubleshooting Time',
    sublabel: 'Mean Time to Repair (MTTR)',
    description:
      'Reduced average troubleshooting cycle from 2 hours to 1 hour through structured diagnostic playbooks and technician enablement.',
    highlight: 'From 2h down to 1h',
    iconName: 'CheckCircle2',
  },
];

export const CAREER_JOURNEY = [
  {
    stage: '01',
    period: '2005 – 2006',
    title: 'Foundational Engineering & Academia',
    role: 'Lecturer (Electrical & Electronics)',
    company: 'Swamy Abedhanandha Polytechnic',
    focus: 'Control systems pedagogy, circuit theory, electrical instrumentation fundamentals.',
  },
  {
    stage: '02',
    period: '2006 – 2013',
    title: 'Regional System Integration & Projects',
    role: 'Senior Project Engineer',
    company: 'Electro Automation / Toshni-Tek',
    focus: 'PLC/HMI/SCADA programming, VFDs, sensors, customized machine automation, commissioning across industrial plants in South India.',
  },
  {
    stage: '03',
    period: '2014 – 2022',
    title: 'Global Application Engineering',
    role: 'Senior Field Application Engineer',
    company: 'Brainchild Electronics (Taipei, Taiwan)',
    focus: 'International technical support across 85+ countries, industrial networking, OEM SCADA/HMI solutions, expanding Indian business 10x.',
  },
  {
    stage: '04',
    period: '2022 – Present',
    title: 'MES Controls & Greenfield Manufacturing',
    role: 'Controls Engineer III — MES Controls',
    company: 'First Solar',
    focus: 'Greenfield plant startup within 6 months, 40+ equipment vendors, MES equipment integration, traceability, and 17K/day throughput.',
  },
];

export const EXPERTISE_DATA: ExpertiseItem[] = [
  {
    id: 'ia',
    category: 'Controls Architecture',
    title: 'Industrial Automation',
    tagline: 'Deterministic, resilient machine control from sensor to PAC.',
    iconName: 'Cpu',
    skills: [
      'PLC & PAC Programming (Allen-Bradley, Siemens, Omron, Delta)',
      'HMI & SCADA Interface Design & Optimization',
      'Variable Frequency Drives (VFDs) & Servo Motion Control',
      'Functional Safety Systems & Interlocks',
      'Industrial Instrumentation & Process Calibration',
      'Closed-Loop Control (PID, Tension, Temperature, Flow)',
    ],
    protocolsAndStandards: ['IEC 61131-3', 'Ladder Logic', 'Structured Text', 'S88 Batch Control', 'ISA-101 HMI Design'],
    businessValue: 'Maximizes machine availability, cycle-time consistency, and equipment safety across harsh industrial operating conditions.',
    deliverables: [
      'Control Architecture Diagrams',
      'PLC/HMI Tag Database & Standard Code Templates',
      'I/O Allocation & Loop Wiring Schematics',
      'Functional Safety Risk Assessments & Interlock Matrices',
    ],
  },
  {
    id: 'mes',
    category: 'Manufacturing Systems',
    title: 'MES & Manufacturing Systems',
    tagline: 'Bridging the shop floor to enterprise visibility and compliance.',
    iconName: 'Layers',
    skills: [
      'MES Equipment Integration & Automated Handshakes',
      'Product Traceability & Serialized Genealogies',
      'Production Data Validation & Interlocking',
      'Paperless Manufacturing & Recipe Management',
      'WIP Tracking & Route Enforcement',
      'OEE Calculation & Downtime Categorization',
    ],
    protocolsAndStandards: ['ISA-95 Level 3', 'OPC UA Data Access', 'SQL / Relational DBs', 'REST APIs', 'MES Middleware'],
    businessValue: 'Eliminates operator manual entry errors, enforces strict quality gating before downstream processing, and provides real-time line transparency.',
    deliverables: [
      'MES-to-PLC Data Contract & Handshake Specifications',
      'Equipment Traceability Integration Blueprints',
      'Recipe & Parameter Validation Matrix',
      'Production Data Reconciliation Logic',
    ],
  },
  {
    id: 'vision',
    category: 'Inspection & Quality',
    title: 'Machine Vision Systems',
    tagline: 'High-speed automated defect detection and dimensional verification.',
    iconName: 'ScanEye',
    skills: [
      'Keyence Vision Systems (CV-X, XG-X, IV Series)',
      'Cognex In-Sight & VisionPro Applications',
      'Automated Optical Inspection (AOI) & Defect Detection',
      '1D/2D Barcode & DPM Matrix Reading',
      'Camera, Lens & Lighting Optical Configuration',
      'Direct Vision-to-PLC Ethernet/IP & Modbus Handshakes',
    ],
    protocolsAndStandards: ['GigE Vision', 'EtherNet/IP', 'Modbus TCP', 'TCP/IP Socket Communication', 'Lighting Geometry Optimization'],
    businessValue: 'Prevents non-conforming parts from escaping to downstream assembly or customers, saving hundreds of thousands in scrap and warranty claims.',
    deliverables: [
      'Vision Inspection Feasibility & Lighting Studies',
      'Camera & Optical Positioning Diagrams',
      'Trained Pattern, Edge & OCR Inspection Tools',
      'Pass/Fail/Rework Rejection Trigger Sequences',
    ],
  },
  {
    id: 'networking',
    category: 'OT Infrastructure',
    title: 'Industrial Networking & Protocols',
    tagline: 'Robust, deterministic communication across diverse multi-vendor ecosystems.',
    iconName: 'Network',
    skills: [
      'OPC UA & OPC DA Server/Client Architectures',
      'MQTT / Sparkplug B Industrial IoT Messaging',
      'Modbus TCP & Modbus RTU Multi-drop Networks',
      'EtherCAT, Profibus DP & Profinet Systems',
      'BACnet/IP Building & Facility Integration',
      'Substation Automation: IEC 61850, IEC 60870-5-101/104',
      'Industrial Ethernet Segmentation & OT VLANs',
    ],
    protocolsAndStandards: ['IEEE 802.3', 'CIP Protocol', 'IEC 61850', 'IEC 104', 'Fieldbus Standards'],
    businessValue: 'Eliminates communication dropouts, ensures deterministic cycle times, and establishes secure boundaries between shop-floor OT and enterprise IT.',
    deliverables: [
      'Industrial Network Topology Maps',
      'Bandwidth & Subnet Segmentation Plans',
      'Protocol Gateway & Data Broker Configurations',
      'Network Fault Diagnostic Reports',
    ],
  },
  {
    id: 'smart-mfg',
    category: 'Digital Transformation',
    title: 'Smart Manufacturing & Industry 4.0',
    tagline: 'Actionable data pipelines from edge instruments to central operations.',
    iconName: 'Activity',
    skills: [
      'OT–IT Convergence Architectures',
      'Edge Data Collector & Broker Deployment',
      'High-Frequency Time-Series Telemetry Ingestion',
      'Predictive Maintenance Triggering & Condition Monitoring',
      'Unified Namespace (UNS) Architecture Foundations',
      'Digital Twin & Shop-Floor Operational Dashboards',
    ],
    protocolsAndStandards: ['ISA-95', 'MQTT Sparkplug', 'JSON Payloads', 'InfluxDB / Historian Pipelines', 'REST APIs'],
    businessValue: 'Transforms dark factory data into actionable operational intelligence for plant managers and engineering leadership.',
    deliverables: [
      'OT-IT Data Flow Architecture Maps',
      'Edge Gateway Deployment Blueprints',
      'Real-Time Telemetry Pipeline Specifications',
      'Plant Digitalization Roadmaps',
    ],
  },
  {
    id: 'execution',
    category: 'Delivery & Commissioning',
    title: 'Project Execution & Commissioning',
    tagline: 'Rigorous end-to-end delivery from vendor coordination to full ramp.',
    iconName: 'CheckSquare',
    skills: [
      'Greenfield Plant Controls Deployment & Fast-Track Startup',
      'Brownfield Line Modernization & Retrofits without Downtime',
      'Factory Acceptance Testing (FAT) & Site Acceptance Testing (SAT)',
      'Multi-OEM Tool Vendor Coordination (40+ tool builders)',
      'Loop Checking, Cold/Hot Commissioning & Sign-Offs',
      'System Validation, I/O Checkout & Safety Interlocks',
    ],
    protocolsAndStandards: ['GAMP 5 Validation Principles', 'ISA Standards', 'FAT/SAT Protocols', 'Punch-list Governance'],
    businessValue: 'Minimizes plant startup delays, enforces vendor standard compliance, and secures on-time commercial production targets.',
    deliverables: [
      'FAT & SAT Protocol Scripts & Execution Logs',
      'Tool Vendor Automation Compliance Specifications',
      'Site Commissioning Schedules & Milestone Plans',
      'Punch List Resolution Documentation',
    ],
  },
  {
    id: 'leadership',
    category: 'Organization & Standards',
    title: 'Technical Leadership & Mentoring',
    tagline: 'Empowering engineering teams with structured diagnostic capabilities.',
    iconName: 'Users',
    skills: [
      'Cross-Functional Technical Team Mentorship',
      'Diagnostic Playbook Formulation & Troubleshooting Guides',
      'Vendor Coordination & SLA Governance',
      'Plant-Wide Engineering Standards & Tag Naming Conventions',
      'Comprehensive Technical Manuals & SOP Authoring',
      'Global Stakeholder & Cross-Timezone Collaboration',
    ],
    protocolsAndStandards: ['ISO 9001 Alignment', 'Corporate Controls Standards', 'Standard Operating Procedures (SOPs)', 'Root Cause Analysis (5-Why/Fishbone)'],
    businessValue: 'Builds permanent institutional capability, slashes technician training cycles, and cuts mean time to resolution in half.',
    deliverables: [
      'Standardized Troubleshooting Guides & Flowcharts',
      'Controls Engineering Coding Guidelines',
      'Hands-On Technical Training Curriculum',
      'Root Cause Analysis & Corrective Action Reports',
    ],
  },
];

export const IMPACT_STORIES: ImpactItem[] = [
  {
    number: '01',
    title: 'Greenfield Solar Plant Startup',
    metric: '6 Months',
    metricLabel: 'From Groundbreak to Production Ramp',
    badge: 'Solar Manufacturing & Automation',
    domain: 'High-Volume Photovoltaic Manufacturing',
    context:
      'Supported successful startup of a brand-new multi-gigawatt solar manufacturing facility requiring synchronized controls across complex automated material handling, laser scribing, deposition, and test equipment.',
    description:
      'Coordinated across 40+ international tool vendors to standardize PLC architectures, execute rigorous FAT/SAT protocols, integrate MES control gates, and achieve commercial production readiness within 6 months.',
    keyOutcomes: [
      'Coordinated automation deliverables across 40+ global equipment suppliers',
      'Enforced unified MES data validation handshakes across all cell lines',
      'Achieved zero critical controls-related startup delays during commercial ramp',
    ],
  },
  {
    number: '02',
    title: 'Production Throughput Optimization',
    metric: '17,000',
    metricLabel: 'Modules / Day Sustained Throughput',
    badge: 'Throughput & Line Optimization',
    domain: 'High-Speed Automated Production Line',
    context:
      'Analyzed end-to-end manufacturing process bottlenecks where micro-stoppages and uncoordinated buffer handshakes were throttling overall line yield.',
    description:
      'Pinpointed critical machine-to-machine transfer timing gaps, optimized PLC cycle-time logic, and implemented deterministic queue handshakes that elevated production throughput to a steady 17,000 modules per day.',
    keyOutcomes: [
      'Eliminated inter-station buffer starvation and accumulation deadlocks',
      'Automated dynamic line balance triggers based on real-time buffer states',
      'Established high-speed tracking across continuous processing segments',
    ],
  },
  {
    number: '03',
    title: 'Raw-Material Scrap Reduction',
    metric: '$150,000',
    metricLabel: 'Direct Cost Savings via Process Control',
    badge: 'Quality & Process Control',
    domain: 'Critical Raw Material Conversion',
    context:
      'High-value glass and semiconductor materials were experiencing scrap during sudden line state changes, recipe switches, and manual operator overrides.',
    description:
      'Designed fail-safe parameter interlocks, automated recipe verification against MES batch work orders, and closed-loop process feedback that directly cut raw-material scrap by $150,000.',
    keyOutcomes: [
      'Enforced automated MES recipe parameter validation before cycle start',
      'Integrated real-time sensor verification to abort misaligned processing',
      'Secured substantial annual operational cost recovery directly to bottom line',
    ],
  },
  {
    number: '04',
    title: 'Mean Time to Repair (MTTR) Reduction',
    metric: '50% Faster',
    metricLabel: 'Troubleshooting Time Slashed (2h → 1h)',
    badge: 'Operational Excellence & Training',
    domain: 'Plant Maintenance & Reliability',
    context:
      'Complex multi-vendor controls networks caused prolonged shift downtime when junior technicians struggled to pinpoint sensor, network, or MES communication faults.',
    description:
      'Built a structured diagnostic framework, visual fault-tree SOPs, and conducted intensive hands-on training that permanently reduced average machine troubleshooting time from 2 hours down to 1 hour.',
    keyOutcomes: [
      'Developed standardized visual diagnostic flowcharts for all major tool types',
      'Trained plant maintenance engineers on live PLC/SCADA packet tracing',
      'Substantially boosted overall line availability and OEE uptime scores',
    ],
  },
  {
    number: '05',
    title: 'Global Application Engineering Support',
    metric: '85+ Countries',
    metricLabel: 'International Industrial Deployments',
    badge: 'Global Field Engineering',
    domain: 'Industrial Networking & SCADA',
    context:
      'Provided tier-3 application engineering and field problem resolution for industrial automation hardware, recorders, HMI, and networked controllers deployed across diverse international manufacturing sites.',
    description:
      'Delivered remote and on-site technical resolution across more than 85 countries, solving high-severity protocol mismatches (Modbus, BACnet, Profibus, IEC 61850) and accelerating regional market growth.',
    keyOutcomes: [
      'Supported system integrators and plant teams across 85+ global territories',
      'Spearheaded Indian regional sales expansion from ~$50K to $500K at Brainchild',
      'Authored definitive technical application notes, whitepapers, and integration guides',
    ],
  },
];

export const EXPERIENCE_HISTORY: ExperienceRole[] = [
  {
    company: 'First Solar',
    role: 'Controls Engineer III — MES Controls',
    period: 'July 2022 – Present',
    location: 'Chennai, India',
    type: 'Full-Time Leadership',
    summary:
      'Leading MES Controls integration, greenfield automation startup, equipment verification, and high-volume solar module manufacturing optimization.',
    highlights: [
      'Supported the end-to-end greenfield startup of a high-tech solar manufacturing plant within a rapid 6-month timeline.',
      'Managed automation deliverables and FAT/SAT verification across 40+ international equipment and tool vendors.',
      'Architected robust MES-to-PLC communication contracts, ensuring strict recipe management, product serialization, and real-time genealogy tracking.',
      'Identified line bottlenecks and executed process control optimizations contributing to scaling throughput to 17,000 modules/day.',
      'Formulated structured troubleshooting methodologies that decreased mean troubleshooting time by 50% across operations.',
      'Collaborated closely with cross-functional manufacturing, quality, IT, and maintenance engineering teams to maintain world-class line availability.',
    ],
    technologies: [
      'Rockwell Automation',
      'Studio 5000',
      'MES Controls',
      'EtherNet/IP',
      'Cognex / Keyence Vision',
      'FAT / SAT Protocols',
      'SQL & Manufacturing Data',
      'OPC UA',
    ],
    keyAchievement: 'Delivered greenfield plant startup in 6 months with 17K/day throughput and $150K scrap reduction.',
    metrics: [
      { label: 'Startup Time', value: '6 Months' },
      { label: 'Daily Output', value: '17K Modules' },
      { label: 'Vendors Coordinated', value: '40+ OEMs' },
    ],
  },
  {
    company: 'Brainchild Electronics',
    role: 'Senior Field Application Engineer',
    period: 'January 2014 – July 2022',
    location: 'Taipei, Taiwan',
    type: 'Global Engineering & Tech Support',
    summary:
      'Directed international application engineering, customer technical enablement, multi-protocol industrial networking, and regional market expansion across 85+ countries.',
    highlights: [
      'Delivered expert technical support, system architecture consultation, and complex problem resolution to industrial clients across 85+ countries.',
      'Engineered multi-protocol connectivity bridges spanning Modbus RTU/TCP, BACnet/IP, Profibus DP, and Substation IEC 61850 / IEC 104 standards.',
      'Spearheaded Indian regional sales expansion from approximately $50K to $500K through deep technical pre-sales and field engineering excellence.',
      'Authored comprehensive technical documentation, application guides, and integration tutorials for global distributors and OEMs.',
      'Conducted global technical training seminars on HMI/SCADA configurations, paperless chart recorders, and remote telemetry units.',
    ],
    technologies: [
      'Industrial Networking',
      'Modbus TCP/RTU',
      'BACnet/IP',
      'Profibus DP',
      'IEC 61850 / IEC 104',
      'HMI / SCADA',
      'Paperless Recorders',
      'Data Acquisition (DAQ)',
    ],
    keyAchievement: 'Expanded regional market revenue 10x ($50K to $500K) while supporting clients across 85+ countries.',
    metrics: [
      { label: 'Global Reach', value: '85+ Countries' },
      { label: 'Sales Growth', value: '$50K → $500K' },
      { label: 'Protocols Mastered', value: '10+ Standards' },
    ],
  },
  {
    company: 'Electro Automation / Toshni-Tek',
    role: 'Senior Project Engineer',
    period: 'July 2006 – October 2013',
    location: 'Chennai / Coimbatore, India',
    type: 'Project Engineering & Integration',
    summary:
      'Designed, programmed, and commissioned turnkey industrial automation, PLC/SCADA systems, machine vision inspection, and motion control for diverse manufacturing sectors.',
    highlights: [
      'Executed turnkey automation projects from initial functional specification through panel design, PLC/HMI coding, and on-site commissioning.',
      'Integrated advanced machine vision systems (Keyence & Cognex) for high-speed automated part inspection and defect sorting.',
      'Engineered closed-loop drive and motion control solutions utilizing VFDs, servo drives, load cells, and temperature/pressure transmitters.',
      'Contributed significantly to regional business delivery, executing high-value industrial automation solutions exceeding INR 2 crore regional sales.',
      'Troubleshot and overhauled legacy control panels, upgrading relay-logic machinery to modern PLC/HMI automation architectures.',
    ],
    technologies: [
      'PLC & HMI Programming',
      'Machine Vision (Keyence / Cognex)',
      'VFDs & Servo Drives',
      'Industrial Sensors & Transmitters',
      'Control Panel Engineering',
      'Site Commissioning',
    ],
    keyAchievement: 'Delivered turnkey multi-industry automation projects exceeding INR 2 crore in regional execution.',
    metrics: [
      { label: 'Regional Scale', value: 'INR 2+ Crore' },
      { label: 'Industries Served', value: 'Automotive, Solar, Process' },
      { label: 'Inspection Systems', value: 'Turnkey Vision' },
    ],
  },
  {
    company: 'Swamy Abedhanandha Polytechnic',
    role: 'Lecturer — Electrical & Electronics Engineering',
    period: '2005 – 2006',
    location: 'Tamil Nadu, India',
    type: 'Academic Pedagogy',
    summary:
      'Instructed diploma engineering students in electrical machines, control circuits, instrumentation fundamentals, and laboratory experiments.',
    highlights: [
      'Delivered curriculum lectures on industrial control circuits, power electronics, and electrical measurement principles.',
      'Supervised laboratory practicals focusing on motor control, relay logic wiring, and analog sensor signal conditioning.',
    ],
    technologies: ['Electrical Machines', 'Control Circuit Design', 'Instrumentation Lab', 'Power Systems'],
    keyAchievement: 'Mentored emerging electrical engineers in core industrial control foundations.',
  },
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'greenfield-solar',
    title: 'Greenfield Solar Manufacturing Automation & Fast Startup',
    clientContext: 'Multi-Gigawatt Solar Module Manufacturing Facility',
    domain: 'High-Volume Clean Energy Manufacturing',
    challenge:
      'Standing up a massive greenfield manufacturing facility under tight time-to-market pressure required integrating more than 40 independent international equipment manufacturers. Disparate PLC programming styles, unstandardized communication protocols, and unverified data handshakes posed severe risks of startup gridlock.',
    approach: [
      'Established strict corporate automation and MES interface standards distributed to all 40+ tool builders prior to fabrication.',
      'Enforced rigorous Factory Acceptance Testing (FAT) checklists verifying tag naming, alarm hierarchies, and handshake timing before tools shipped.',
      'Led on-site Site Acceptance Testing (SAT), loop checking, and integrated cold/hot dry runs.',
      'Engineered uniform MES handshake state-machines ensuring deterministic WIP routing, recipe validation, and serialization across every cell.',
    ],
    technologies: ['Rockwell Studio 5000', 'EtherNet/IP CIP', 'MES Equipment Interlocks', 'FAT/SAT Protocols', 'SQL Data Logging'],
    result: 'Plant achieved commercial startup and ramped into volume manufacturing in just 6 months with zero catastrophic controls roadblocks.',
    metrics: [
      { label: 'Startup Duration', value: '6 Months' },
      { label: 'OEM Vendors Integrated', value: '40+ Builders' },
      { label: 'MES Handshake Integrity', value: '100% Verified' },
    ],
    takeaway:
      'Proactive vendor automation governance and standardized MES data contracts eliminate 90% of on-site commissioning delays.',
  },
  {
    id: 'throughput-optimization',
    title: 'Manufacturing Bottleneck Analysis & Throughput Scaling',
    clientContext: 'Automated Module Assembly & Lamination Line',
    domain: 'High-Speed Discrete Manufacturing',
    challenge:
      'The manufacturing line was experiencing intermittent transfer delays, micro-stoppages, and uneven buffer utilization that restricted daily output well below target nameplate capacity.',
    approach: [
      'Conducted millisecond-level PLC cycle time audits and sensor trace logging to pinpoint hidden transfer lag and asynchronous waiting states.',
      'Redesigned inter-station handshake logic from static delays to predictive sensor-triggered handshakes.',
      'Implemented automated dynamic line balance routines that adjust upstream conveyor pacing according to downstream buffer capacity.',
      'Integrated real-time MES cycle-time telemetry to highlight instantaneous variance for line operators.',
    ],
    technologies: ['PLC Cycle Optimization', 'Dynamic Buffer Algorithms', 'Sensor Feedback Loops', 'MES OEE Telemetry'],
    result: 'Elevated sustained facility production throughput to 17,000 modules per day while smoothing line balance.',
    metrics: [
      { label: 'Daily Output', value: '17,000 / day' },
      { label: 'Micro-Stoppage Reduction', value: '-35%' },
      { label: 'Buffer Starvation', value: 'Virtually Eliminated' },
    ],
    takeaway:
      'True throughput optimization requires auditing micro-second handshake transitions, not just increasing mechanical conveyor speeds.',
  },
  {
    id: 'troubleshooting-reduction',
    title: 'Diagnostic Framework & 50% MTTR Reduction',
    clientContext: '24/7 Multi-Shift Manufacturing Operations',
    domain: 'Plant Reliability & Engineering Enablement',
    challenge:
      'When complex machine faults or network dropouts occurred on shift, junior maintenance technicians faced an average 2-hour resolution cycle, leading to substantial production loss during off-hours.',
    approach: [
      'Mapped all common machine failure modes into clear, step-by-step visual fault-tree diagnostic playbooks.',
      'Developed on-screen HMI diagnostic screens that clearly indicate exactly which sensor, interlock, or MES handshake is halting a sequence.',
      'Conducted rigorous, hands-on troubleshooting workshops training technicians on network packet sniffing, PLC online monitoring, and drive fault codes.',
      'Standardized root-cause analysis (5-Why) protocols to eliminate chronic repeat failures.',
    ],
    technologies: ['ISA-101 Diagnostic HMIs', 'Network Packet Analysis', 'Fault-Tree Logic', 'Structured SOP Workflows'],
    result: 'Reduced average troubleshooting downtime from 2 hours down to 1 hour (50% reduction), directly boosting operational availability.',
    metrics: [
      { label: 'MTTR Before', value: '~2 Hours' },
      { label: 'MTTR After', value: '~1 Hour' },
      { label: 'Downtime Slashed', value: '50% Faster' },
    ],
    takeaway:
      'Investing in clear HMI diagnostic indicators and technician troubleshooting playbooks yields immediate double-digit OEE improvements.',
  },
  {
    id: 'vision-inspection',
    title: 'High-Speed Automated Machine Vision & Quality Gating',
    clientContext: 'Precision Assembly & Surface Defect Inspection',
    domain: 'Automated Optical Inspection (AOI)',
    challenge:
      'Manual inspection was unable to reliably catch microscopic surface anomalies and dimensional deviations on high-speed components, leading to customer-facing quality escapes and costly scrap generation.',
    approach: [
      'Selected and configured high-resolution Keyence and Cognex industrial cameras, matched with optimized telecentric lenses and custom lighting geometry.',
      'Programmed advanced vision algorithms for pattern matching, edge detection, dimensional gauging, and 2D DataMatrix verification.',
      'Built deterministic high-speed Ethernet/IP and digital I/O handshakes with master PLCs for microsecond-precise pass/fail part rejection.',
      'Integrated vision inspection telemetry into the plant MES, establishing serialized inspection records for every produced unit.',
    ],
    technologies: ['Keyence CV-X / XG-X', 'Cognex In-Sight', 'EtherNet/IP', 'Optimized Optics & Lighting', 'MES Serialization'],
    result: 'Achieved 100% automated in-line quality verification, eliminating defect escapes and slashing component scrap by over $150K.',
    metrics: [
      { label: 'Inspection Speed', value: 'In-Line 100%' },
      { label: 'Scrap Avoidance', value: '$150K Saved' },
      { label: 'Traceability', value: '100% Serialized' },
    ],
    takeaway:
      'Proper optical and lighting engineering is 80% of machine vision success; robust PLC handshakes ensure the remaining 20% executes flawlessly.',
  },
  {
    id: 'global-support',
    title: 'Multi-Protocol Industrial Networking & Global Support',
    clientContext: 'Worldwide Industrial Instrumentation & OEM Deployments',
    domain: 'Industrial Networking & SCADA Systems',
    challenge:
      'Industrial end-users across Europe, the Americas, and Asia were struggling to integrate mixed-vendor instruments, PLCs, and SCADA packages across legacy and modern network standards.',
    approach: [
      'Delivered tier-3 consultative application engineering across 85+ countries, diagnosing complex protocol interoperability issues.',
      'Designed protocol gateway blueprints converting legacy Modbus RTU/Profibus networks into modern OPC UA, MQTT, and Ethernet architectures.',
      'Engineered specialized SCADA drivers and BACnet/IP interfaces for mission-critical infrastructure and substation monitoring (IEC 61850).',
      'Developed pre-engineered integration templates that reduced customer integration time from weeks to hours.',
    ],
    technologies: ['Modbus TCP/RTU', 'BACnet/IP', 'Profibus DP', 'IEC 61850 / 104', 'OPC UA', 'SCADA Drivers'],
    result: 'Successfully resolved critical field integration challenges across 85+ nations and accelerated regional revenue 10-fold.',
    metrics: [
      { label: 'Global Footprint', value: '85+ Countries' },
      { label: 'Protocols Supported', value: '10+ Standards' },
      { label: 'Revenue Growth', value: '$50K → $500K' },
    ],
    takeaway:
      'Standardized protocol mapping and deep knowledge of legacy-to-modern communication layers unlock global system interoperability.',
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'arch-advisory',
    title: 'Automation Architecture & Advisory',
    description:
      'Strategic controls architecture, vendor-neutral hardware selection, PLC/SCADA standards definition, and end-to-end integration roadmaps for new or expanding manufacturing plants.',
    iconName: 'Compass',
    whoItsFor: 'Plant Managers, Engineering Directors, and OEMs embarking on greenfield plants or major expansion projects.',
    deliverables: [
      'Plant-Wide Controls Architecture Blueprints',
      'Vendor-Neutral Hardware & Software Selection Matrix',
      'PLC & SCADA Tagging & Code Style Guides',
      'OT Network Topology & Cybersecurity Boundary Design',
    ],
    engagementModel: 'Project-Based Advisory / Retainer Consulting',
  },
  {
    id: 'mes-consulting',
    title: 'MES Controls & Integration',
    description:
      'Seamlessly connecting shop-floor PLCs and machine controllers with Manufacturing Execution Systems (MES) for bulletproof recipe control, serialized traceability, and paperless operations.',
    iconName: 'Database',
    whoItsFor: 'Manufacturing plants seeking automated product genealogy, route enforcement, and error-proof recipe validation.',
    deliverables: [
      'PLC-to-MES Handshake State Machine Logic',
      'Recipe & Parameter Validation Interlock Specifications',
      'Serialized Traceability & Barcode/DPM Integration',
      'Real-Time WIP & Station Cycle Telemetry Bridges',
    ],
    engagementModel: 'Turnkey Integration / Technical Leadership',
  },
  {
    id: 'plant-optimization',
    title: 'Plant Automation Optimization',
    description:
      'In-depth audit of running production lines to uncover hidden cycle-time losses, buffer starvation, micro-stoppages, and controls bottlenecks that limit overall throughput.',
    iconName: 'Gauge',
    whoItsFor: 'Facilities operating below nameplate capacity or struggling with unpredictable line balance.',
    deliverables: [
      'Millisecond-Level PLC Cycle & Handshake Audit',
      'Bottleneck Identification & Root-Cause Analysis',
      'Optimized Conveyor & Buffer Interlock Code',
      'Quantified Throughput Improvement Action Plan',
    ],
    engagementModel: 'Diagnostic Audit & Implementation Sprint',
  },
  {
    id: 'execution-commissioning',
    title: 'Project Execution & Commissioning',
    description:
      'Hands-on management of complex automation deployments: tool vendor coordination, FAT/SAT protocol execution, I/O checkout, and on-site commissioning to hit production milestones.',
    iconName: 'ShieldCheck',
    whoItsFor: 'Companies needing senior on-site execution leadership to prevent startup delays and enforce vendor compliance.',
    deliverables: [
      'FAT / SAT Test Protocols & Verification Scripts',
      'Multi-Vendor Automation Coordination & Punchlist Management',
      'Loop Checking & Functional Safety Checkout Sign-Offs',
      'Commercial Production Handover Documentation',
    ],
    engagementModel: 'Milestone-Based Project Leadership',
  },
  {
    id: 'troubleshooting-recovery',
    title: 'Manufacturing Troubleshooting & Recovery',
    description:
      'Rapid diagnostic intervention for chronic controls failures, intermittent network dropouts, PLC faults, and line-down emergencies, followed by structured root-cause prevention.',
    iconName: 'Wrench',
    whoItsFor: 'Plants experiencing chronic downtime, elusive intermittent faults, or high scrap events.',
    deliverables: [
      'Emergency Controls Fault Isolation & Recovery',
      'Visual Diagnostic Playbooks & Fault-Tree SOPs',
      'Root-Cause Analysis (5-Why / Fishbone) Report',
      'Permanent Countermeasure Interlocks',
    ],
    engagementModel: 'Urgent Intervention / Diagnostic Engagement',
  },
  {
    id: 'training-enablement',
    title: 'Industrial Automation Training & Mentorship',
    description:
      'Practical, shop-floor-proven training programs for plant maintenance technicians, junior controls engineers, and system integrators covering PLC, SCADA, networking, and diagnostics.',
    iconName: 'GraduationCap',
    whoItsFor: 'Engineering organizations looking to build internal technical independence and slash MTTR.',
    deliverables: [
      'Hands-On PLC / SCADA / Vision Workshop Modules',
      'Shop-Floor Troubleshooting & Packet Sniffing Masterclasses',
      'Standardized Operator & Technician Manuals',
      'One-on-One Engineering Mentorship Programs',
    ],
    engagementModel: 'Custom Corporate Training / Multi-Day Bootcamps',
  },
];

export const TECH_STACK: TechItem[] = [
  // PLC / Controls
  { name: 'Rockwell Studio 5000', category: 'PLC / Controls', highlight: true, description: 'ControlLogix & CompactLogix PACs' },
  { name: 'Siemens TIA Portal / S7', category: 'PLC / Controls', highlight: true, description: 'S7-1200 / S7-1500 Controllers' },
  { name: 'CODESYS', category: 'PLC / Controls', highlight: false, description: 'IEC 61131-3 Standard Development' },
  { name: 'Delta / Omron PLCs', category: 'PLC / Controls', highlight: false, description: 'Modular Machine Automation' },
  { name: 'IEC 61131-3 (LD, ST, FBD, SFC)', category: 'PLC / Controls', highlight: true, description: 'Structured Text & Ladder Logic' },
  { name: 'VFDs & Servo Drives', category: 'PLC / Controls', highlight: false, description: 'Motion & Tension Control Systems' },
  { name: 'Functional Safety PLCs', category: 'PLC / Controls', highlight: false, description: 'Safety Interlocks & E-Stop Guarding' },

  // SCADA / MES
  { name: 'Rockwell FactoryTalk', category: 'SCADA / MES', highlight: true, description: 'View ME/SE Enterprise SCADA' },
  { name: 'Inductive Automation Ignition', category: 'SCADA / MES', highlight: true, description: 'Modern Unified SCADA & MES' },
  { name: 'GE Proficy iFIX / CIMPLICITY', category: 'SCADA / MES', highlight: false, description: 'Process HMI / SCADA Infrastructure' },
  { name: 'AVEVA / Wonderware MES', category: 'SCADA / MES', highlight: true, description: 'Production & Recipe Execution' },
  { name: 'First Solar Proprietary MES', category: 'SCADA / MES', highlight: true, description: 'High-Volume Solar Manufacturing Data' },
  { name: 'Microsoft SQL & Database Handshakes', category: 'SCADA / MES', highlight: false, description: 'Relational Logging & Traceability' },

  // Machine Vision
  { name: 'Keyence Vision (CV-X / XG-X / IV)', category: 'Machine Vision', highlight: true, description: 'High-Speed Automated Inspection' },
  { name: 'Cognex In-Sight & VisionPro', category: 'Machine Vision', highlight: true, description: 'Pattern Matching & Defect Verification' },
  { name: '1D / 2D DPM Barcode Verification', category: 'Machine Vision', highlight: false, description: 'Direct Part Mark Serialization' },
  { name: 'Telecentric Optics & Lighting', category: 'Machine Vision', highlight: false, description: 'Optical Geometry Optimization' },
  { name: 'Vision-to-PLC Ethernet/IP', category: 'Machine Vision', highlight: false, description: 'Synchronized Inspection Triggers' },

  // Industrial Networking
  { name: 'OPC UA & OPC DA', category: 'Industrial Networking', highlight: true, description: 'Open Platform Communications' },
  { name: 'MQTT / Sparkplug B', category: 'Industrial Networking', highlight: true, description: 'Lightweight IIoT Edge Telemetry' },
  { name: 'Modbus TCP & RTU', category: 'Industrial Networking', highlight: true, description: 'Universal Device Interoperability' },
  { name: 'EtherNet/IP CIP', category: 'Industrial Networking', highlight: true, description: 'Deterministic Industrial Ethernet' },
  { name: 'EtherCAT & Profibus DP', category: 'Industrial Networking', highlight: false, description: 'High-Speed Fieldbus Architectures' },
  { name: 'BACnet/IP', category: 'Industrial Networking', highlight: false, description: 'Building & Utilities Integration' },
  { name: 'IEC 61850 & IEC 101/104', category: 'Industrial Networking', highlight: true, description: 'Substation & Energy Grid Automation' },

  // Manufacturing & Industry 4.0
  { name: 'ISA-95 Enterprise Integration', category: 'Manufacturing & Industry 4.0', highlight: true, description: 'L0-L4 Hierarchy Architecture' },
  { name: 'OT–IT Convergence & DMZ', category: 'Manufacturing & Industry 4.0', highlight: true, description: 'Secure Shop-Floor to Enterprise Bridges' },
  { name: 'Real-Time OEE & Downtime Tracking', category: 'Manufacturing & Industry 4.0', highlight: false, description: 'Operational Equipment Effectiveness' },
  { name: 'Paperless Recipe & Route Gating', category: 'Manufacturing & Industry 4.0', highlight: true, description: 'Zero-Escape Manufacturing Controls' },
  { name: 'Edge Gateways & Data Brokers', category: 'Manufacturing & Industry 4.0', highlight: false, description: 'Shop-Floor Telemetry Aggregation' },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'MBA in Project Management',
    field: 'Project Governance, Operations & Risk Management',
    institution: 'Alagappa University',
    type: 'Degree',
    iconName: 'Briefcase',
  },
  {
    degree: 'Bachelor of Engineering (B.E.)',
    field: 'Instrumentation & Control Engineering',
    institution: 'MAM College of Engineering',
    type: 'Degree',
    iconName: 'GraduationCap',
  },
  {
    degree: 'Diploma in Engineering',
    field: 'Electrical & Electronics Engineering (EEE)',
    institution: 'Jayaraj Annapackiam CSI Polytechnic',
    type: 'Diploma',
    iconName: 'Award',
  },
];

export const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    level: 'Level 0 / 1',
    name: 'Field & Control Layer',
    subtitle: 'Sensors, Actuators, Vision & PAC/PLCs',
    components: ['Photoelectric / Laser Sensors', 'Keyence / Cognex Vision Cameras', 'VFDs & Servo Drives', 'Allen-Bradley / Siemens PLCs', 'Remote I/O Blocks'],
    protocols: ['EtherNet/IP', 'Modbus RTU', 'EtherCAT', 'Digital / 4-20mA I/O', 'IO-Link'],
    roleInFactory: 'Executes sub-millisecond physical control loops, machine interlocks, and sensor verification on the machine floor.',
  },
  {
    level: 'Level 2',
    name: 'Supervisory & SCADA',
    subtitle: 'Plant Floor HMI, SCADA & Alarm Management',
    components: ['Rockwell FactoryTalk View', 'Inductive Automation Ignition', 'Operator Touch Panels', 'Alarm Historians', 'Line Overview Displays'],
    protocols: ['OPC UA', 'Modbus TCP', 'CIP Messaging', 'BACnet/IP'],
    roleInFactory: 'Provides real-time line visualization, operator intervention screens, alarm routing, and setpoint adjustments.',
  },
  {
    level: 'Level 3',
    name: 'Manufacturing Execution (MES)',
    subtitle: 'MES Controls, Traceability & Recipe Gating',
    components: ['MES Engine', 'Serialized Product Genealogy DB', 'Recipe Manager', 'WIP Route Validator', 'Scrap & Quality Gatekeepers'],
    protocols: ['OPC UA Client/Server', 'REST APIs', 'SQL Database Links', 'TCP Sockets'],
    roleInFactory: 'Enforces correct recipe parameters, verifies previous station pass status, logs serialized genealogy, and prevents defect escapes.',
  },
  {
    level: 'Level 4',
    name: 'Enterprise & Analytics',
    subtitle: 'IIoT Cloud, ERP & Executive Insights',
    components: ['Enterprise Resource Planning (ERP)', 'Unified Namespace (UNS) MQTT Broker', 'Cloud Data Lake', 'Plant Performance Dashboards'],
    protocols: ['MQTT / Sparkplug B', 'HTTPS / REST', 'ODBC / JDBC', 'JSON Over WebSockets'],
    roleInFactory: 'Supplies long-term operational analytics, supply-chain demand forecasting, and cross-plant benchmarking to leadership.',
  },
];

export const ENGAGEMENT_MODES = [
  {
    title: 'Senior Leadership Opportunities',
    badge: 'Executive / Technical Director',
    description:
      'Senior Automation Engineering Manager, Controls Engineering Lead, or Principal MES Controls Specialist roles driving large-scale manufacturing operations.',
    iconName: 'Award',
    idealFor: 'Solar, Semiconductor, Automotive, and High-Volume Manufacturing Leaders.',
  },
  {
    title: 'Consulting & Architecture',
    badge: 'Advisory / Project Scope',
    description:
      'Greenfield automation planning, MES integration blueprints, vendor FAT/SAT governance, bottleneck analysis, and controls troubleshooting.',
    iconName: 'Compass',
    idealFor: 'Plants building new lines, struggling with downtime, or upgrading legacy control systems.',
  },
  {
    title: 'Training & Team Enablement',
    badge: 'Workshops & Masterclasses',
    description:
      'Hands-on technical curriculum for plant engineers and maintenance teams in PLC logic, SCADA diagnostics, networking, and MTTR reduction.',
    iconName: 'GraduationCap',
    idealFor: 'Organizations looking to upskill internal teams and build self-reliant troubleshooting capabilities.',
  },
];
