import { 
  RefreshCw, Cloud, Link2, ShieldCheck, Layout, Smartphone, Bug, Code,
  Search, Target, BarChart, Mail, TrendingUp, Users, Globe,
  PenTool, Monitor, MousePointer, LayoutDashboard, Layers, Eye,
  Briefcase, Flag, Sparkles, Megaphone, Star, Award, Compass, MessageCircle
} from 'lucide-react';

export const technologyServices = {
  title: 'Technology & Application Development',
  description: 'We build robust, scalable, and high-performance web and mobile applications tailored to your unique business needs. From initial architecture to deployment, our engineering team ensures top-tier quality.',
  bannerImage: '/service_tech.png',
  subServices: [
    {
      id: 'web-development',
      title: 'Web Site Development',
      description: 'Creating responsive, fast, and secure websites that drive engagement and business growth. We use modern frameworks to build future-proof web experiences that scale with your business.',
      icon: Layout,
      features: ['React & Next.js Development', 'Responsive & Mobile-First Design', 'SEO & Performance Optimized', 'Custom CMS Integration'],
    },
    {
      id: 'mobile-development',
      title: 'Mobile App Development',
      description: 'Building native and cross-platform mobile applications that offer seamless user experiences on iOS and Android devices, keeping your audience engaged on the go.',
      icon: Smartphone,
      features: ['iOS & Android Native Apps', 'Cross-Platform (React Native)', 'App Store Deployment', 'Mobile UI/UX Excellence'],
    },
    {
      id: 'software-testing',
      title: 'Software Testing',
      description: 'Ensuring your applications are flawless, secure, and perform optimally under all conditions through rigorous automated and manual QA testing protocols.',
      icon: Bug,
      features: ['Automated & Manual QA', 'Load & Performance Testing', 'Security Vulnerability Audits', 'Continuous Integration (CI/CD)'],
    },
    {
      id: 'custom-application',
      title: 'Custom Application',
      description: 'Developing tailored software solutions designed specifically to address your unique business challenges, streamline your operations, and boost productivity.',
      icon: Code,
      features: ['Enterprise Software Solutions', 'Business Workflow Automation', 'Scalable Microservices Architecture', 'Custom API Integrations'],
    }
  ],

  solutions: {
    title: 'Engineering Solutions Built for Scale',
    description: 'We don\'t just write code — we architect systems that grow with your business. Our approach combines proven frameworks with custom engineering to solve real operational bottlenecks.',
    points: [
      {
        title: 'Legacy System Modernization',
        description: 'Migrate outdated platforms to modern, cloud-native architectures without disrupting daily operations.',
        icon: RefreshCw,
      },
      {
        title: 'Scalable Cloud Infrastructure',
        description: 'Design and deploy infrastructure on AWS, Azure, or GCP that handles growth without costly rework.',
        icon: Cloud,
      },
      {
        title: 'Third-Party Integrations',
        description: 'Connect your product with payment gateways, CRMs, ERPs, and other tools your business relies on.',
        icon: Link2,
      },
      {
        title: 'Performance & Security Hardening',
        description: 'Audit and optimize existing applications for speed, reliability, and protection against vulnerabilities.',
        icon: ShieldCheck,
      },
    ],
  },

  process: {
    title: 'Our Development Process',
    description: 'A transparent, milestone-driven workflow that keeps you informed and in control at every stage.',
    steps: [
      {
        step: '01',
        title: 'Discovery & Requirement Analysis',
        description: 'We dive deep into your business goals, target users, and technical constraints to define a clear project roadmap and scope.',
      },
      {
        step: '02',
        title: 'Architecture & UI/UX Planning',
        description: 'Our team designs the system architecture and wireframes, ensuring scalability and usability are built in from day one.',
      },
      {
        step: '03',
        title: 'Agile Development Sprints',
        description: 'We build in iterative sprints with regular demos, so you see progress and can give feedback throughout, not just at the end.',
      },
      {
        step: '04',
        title: 'Quality Assurance & Testing',
        description: 'Every feature is rigorously tested — functionally, for performance, and for security — before it reaches production.',
      },
      {
        step: '05',
        title: 'Deployment & Launch',
        description: 'We handle deployment, CI/CD pipeline setup, and go-live support to ensure a smooth, zero-downtime launch.',
      },
      {
        step: '06',
        title: 'Ongoing Support & Maintenance',
        description: 'Post-launch, we provide monitoring, updates, and scaling support so your application keeps performing as you grow.',
      },
    ],
  },

  faq: [
    {
      question: 'How long does it take to build a custom web or mobile application?',
      answer: 'Timelines vary by scope, but most projects range from 8–16 weeks. A simple MVP can launch in 6–8 weeks, while complex, feature-rich platforms may take 4–6 months. We provide a detailed timeline after the discovery phase.',
    },
    {
      question: 'Which technologies and frameworks do you use?',
      answer: 'We primarily work with React, Next.js, and Node.js for web, and React Native or native Swift/Kotlin for mobile. Technology choices are always based on your project\'s specific performance, scalability, and budget requirements.',
    },
    {
      question: 'Do you offer post-launch support and maintenance?',
      answer: 'Yes. We offer flexible maintenance plans covering bug fixes, security updates, performance monitoring, and feature enhancements, so your application stays reliable and up to date long after launch.',
    },
    {
      question: 'Can you work with our existing in-house development team?',
      answer: 'Absolutely. We regularly integrate with in-house teams, acting as an extension of your engineering department, whether that means full project ownership or supplementing specific skill gaps.',
    },
    {
      question: 'How do you ensure the security of the applications you build?',
      answer: 'Security is built into every stage — from secure coding practices and code reviews to automated vulnerability scanning and penetration testing before launch.',
    },
  ],

  cta: {
    title: 'Ready to Build Something Powerful?',
    description: 'Let\'s turn your idea into a scalable, high-performing application. Talk to our engineering team today and get a free project consultation.',
    primaryButton: { label: 'Get a Free Consultation', href: '/contact' },
    secondaryButton: { label: 'View Our Portfolio', href: '/projects' },
  },
};

export const digitalMarketingServices = {
  title: 'Data-Driven SEO & Digital Marketing',
  description: 'Accelerate your growth with targeted marketing strategies. We combine creative campaigns with deep data analytics to maximize your ROI and dominate your digital presence.',
  bannerImage: '/service_marketing.png',
  subServices: [
    {
      id: 'seo-optimization',
      title: 'Search Engine Optimization (SEO)',
      description: 'Improve your organic search visibility and drive high-quality traffic to your website through comprehensive on-page, off-page, and technical SEO strategies.',
      icon: Search,
      features: ['Keyword Research & Strategy', 'Technical SEO Audits', 'Link Building Campaigns', 'Local & Global SEO'],
    },
    {
      id: 'pay-per-click',
      title: 'Pay-Per-Click (PPC) Advertising',
      description: 'Generate immediate, highly-targeted leads with data-driven advertising campaigns across Google, Bing, and major social media networks.',
      icon: Target,
      features: ['Google Ads Management', 'Social Media Advertising', 'Retargeting Campaigns', 'A/B Testing & Optimization'],
    },
    {
      id: 'content-marketing',
      title: 'Content Marketing',
      description: 'Engage your audience and establish authority in your industry with high-quality, relevant content tailored to your target demographic.',
      icon: TrendingUp,
      features: ['Blog & Article Writing', 'Video & Visual Content', 'Copywriting & Editing', 'Content Distribution'],
    },
    {
      id: 'email-marketing',
      title: 'Email Marketing & Automation',
      description: 'Nurture leads and drive conversions with automated, personalized email workflows designed to keep your brand top-of-mind.',
      icon: Mail,
      features: ['Campaign Strategy', 'List Building & Segmentation', 'Automated Drip Campaigns', 'Performance Analytics'],
    }
  ],
  solutions: {
    title: 'Marketing Solutions Built for Growth',
    description: 'We move beyond vanity metrics to focus on what matters most: qualified leads, customer acquisition, and measurable ROI.',
    points: [
      {
        title: 'Audience Targeting',
        description: 'Pinpoint and engage your ideal customers with hyper-targeted digital campaigns.',
        icon: Users,
      },
      {
        title: 'Conversion Rate Optimization',
        description: 'Analyze user behavior to refine your funnels and turn more visitors into paying customers.',
        icon: BarChart,
      },
      {
        title: 'Global Reach',
        description: 'Expand your market presence locally or internationally with localized marketing strategies.',
        icon: Globe,
      },
      {
        title: 'Data-Backed Decisions',
        description: 'Leverage deep analytics and reporting to continuously optimize your marketing spend.',
        icon: Target,
      },
    ],
  },
  process: {
    title: 'Our Marketing Process',
    description: 'A strategic, iterative approach to scaling your business.',
    steps: [
      {
        step: '01',
        title: 'Audit & Analysis',
        description: 'We audit your current digital footprint, analyze competitors, and identify immediate growth opportunities.',
      },
      {
        step: '02',
        title: 'Strategy Formulation',
        description: 'Developing a customized, multi-channel marketing plan aligned with your specific business objectives and budget.',
      },
      {
        step: '03',
        title: 'Campaign Execution',
        description: 'Launching targeted campaigns with compelling copy, striking visuals, and optimized tracking systems.',
      },
      {
        step: '04',
        title: 'Monitoring & Optimization',
        description: 'Continuously monitoring performance metrics and adjusting bids, targeting, and messaging to maximize ROI.',
      },
      {
        step: '05',
        title: 'Scaling Winners',
        description: 'Identifying the most profitable channels and scaling campaigns to accelerate your growth.',
      },
      {
        step: '06',
        title: 'Transparent Reporting',
        description: 'Providing clear, actionable reports on KPIs, so you always know how your investment is performing.',
      },
    ],
  },
  faq: [
    {
      question: 'How long does it take to see results from SEO?',
      answer: 'SEO is a long-term strategy. While some improvements can be seen in the first few months, significant and sustainable results typically take 4 to 6 months to materialize, depending on industry competition and your website\'s current state.',
    },
    {
      question: 'Do I need both SEO and PPC?',
      answer: 'While not mandatory, combining SEO and PPC is highly recommended. PPC provides immediate visibility and leads, while SEO builds long-term, sustainable organic traffic. Together, they dominate search engine results.',
    },
    {
      question: 'How do you measure marketing success?',
      answer: 'We measure success based on your bottom line. While we track metrics like traffic and click-through rates, our primary focus is on qualified leads, conversion rates, cost per acquisition (CPA), and overall Return on Ad Spend (ROAS).',
    },
  ],
  cta: {
    title: 'Ready to Dominate Your Market?',
    description: 'Stop guessing and start growing. Speak with our digital marketing experts to craft a winning strategy.',
    primaryButton: { label: 'Get a Marketing Audit', href: '/contact' },
    secondaryButton: { label: 'Explore Case Studies', href: '/projects' },
  },
};

export const experienceDesignServices = {
  title: 'User-Centric UI/UX & Experience Design',
  description: 'Craft intuitive, frictionless user journeys and stunning interfaces. Our design process ensures your digital products are both beautiful and highly functional, driving user engagement.',
  bannerImage: '/service_design.png',
  subServices: [
    {
      id: 'ux-research',
      title: 'UX Research & Strategy',
      description: 'Understanding your users through in-depth research, persona development, and journey mapping to create experiences that truly resonate.',
      icon: Users,
      features: ['User Interviews & Surveys', 'Persona Development', 'Customer Journey Mapping', 'Usability Testing'],
    },
    {
      id: 'ui-design',
      title: 'User Interface (UI) Design',
      description: 'Designing visually stunning, modern interfaces that align with your brand identity and delight users at every interaction.',
      icon: PenTool,
      features: ['Visual Design & Branding', 'Interactive Prototypes', 'Micro-interactions & Animation', 'Responsive Web/Mobile UI'],
    },
    {
      id: 'wireframing',
      title: 'Wireframing & Prototyping',
      description: 'Rapidly iterating on structural concepts and user flows before writing a single line of code, saving time and development costs.',
      icon: LayoutDashboard,
      features: ['Low & High-Fidelity Wireframes', 'Clickable Prototypes', 'Information Architecture', 'Flow Optimization'],
    },
    {
      id: 'design-systems',
      title: 'Design Systems & Libraries',
      description: 'Creating cohesive, scalable design systems that ensure consistency across all your digital products and speed up development.',
      icon: Layers,
      features: ['Component Libraries', 'Style Guides', 'Typography & Color Systems', 'Scalable Asset Management'],
    }
  ],
  solutions: {
    title: 'Design Solutions that Drive Engagement',
    description: 'We believe good design is good business. Our UI/UX solutions are crafted to reduce friction, increase retention, and elevate your brand.',
    points: [
      {
        title: 'Frictionless Journeys',
        description: 'Remove barriers in your user flows to significantly increase conversion rates.',
        icon: MousePointer,
      },
      {
        title: 'Cross-Device Consistency',
        description: 'Ensure a flawless experience whether your user is on a desktop, tablet, or smartphone.',
        icon: Monitor,
      },
      {
        title: 'Visual Hierarchy',
        description: 'Guide your users intuitively to the most important actions and information.',
        icon: Eye,
      },
      {
        title: 'Accessible Design',
        description: 'Build inclusive products that are accessible and usable by everyone.',
        icon: Target,
      },
    ],
  },
  process: {
    title: 'Our Design Process',
    description: 'A human-centered approach to solving complex design challenges.',
    steps: [
      {
        step: '01',
        title: 'Empathize & Research',
        description: 'We start by deeply understanding your business goals and the needs, pain points, and behaviors of your users.',
      },
      {
        step: '02',
        title: 'Define & Ideate',
        description: 'Synthesizing research to define the core problems and brainstorming creative, effective design solutions.',
      },
      {
        step: '03',
        title: 'Information Architecture',
        description: 'Structuring the content and navigation to ensure users can find what they need effortlessly.',
      },
      {
        step: '04',
        title: 'Wireframing & Prototyping',
        description: 'Creating structural blueprints and interactive prototypes to test concepts and flows early on.',
      },
      {
        step: '05',
        title: 'Visual Design',
        description: 'Applying typography, color, and branding to create stunning, polished interfaces.',
      },
      {
        step: '06',
        title: 'Testing & Handoff',
        description: 'Validating designs with real users and providing clean, organized assets to the development team.',
      },
    ],
  },
  faq: [
    {
      question: 'What is the difference between UI and UX?',
      answer: 'UX (User Experience) focuses on the logic, structure, and feel of the experience—how easy and intuitive it is to use. UI (User Interface) focuses on the visual look, layout, and interactive elements like buttons and typography. We excel at both.',
    },
    {
      question: 'Do you redesign existing websites or apps?',
      answer: 'Yes. We often conduct UX audits on existing platforms to identify friction points and then redesign them to improve usability, aesthetics, and conversion rates.',
    },
    {
      question: 'What design tools do you use?',
      answer: 'Our primary design and prototyping tool is Figma, which allows for seamless collaboration and developer handoff. We also use Adobe Creative Suite for specific graphic assets.',
    },
  ],
  cta: {
    title: 'Ready to Elevate Your Digital Experience?',
    description: 'Transform your product with world-class design that your users will love.',
    primaryButton: { label: 'Start Your Design Project', href: '/contact' },
    secondaryButton: { label: 'View Design Portfolio', href: '/projects' },
  },
};

export const brandingServices = {
  title: 'Corporate Identity & Brand Strategy',
  description: 'Define your voice and visualize your identity. We build memorable brands that resonate with your target audience, establish trust, and stand out in a crowded market.',
  bannerImage: '/service_branding.png',
  subServices: [
    {
      id: 'brand-strategy',
      title: 'Brand Strategy & Positioning',
      description: 'Defining your brand\'s core purpose, values, and market positioning to create a strong foundation for all communication.',
      icon: Compass,
      features: ['Market & Competitor Analysis', 'Brand Positioning & Promise', 'Target Audience Personas', 'Brand Messaging Framework'],
    },
    {
      id: 'logo-identity',
      title: 'Logo & Visual Identity',
      description: 'Crafting distinctive logos and comprehensive visual identities that instantly communicate who you are and what you stand for.',
      icon: Sparkles,
      features: ['Custom Logo Design', 'Color Palette & Typography', 'Iconography & Graphic Elements', 'Complete Visual Identity Systems'],
    },
    {
      id: 'brand-guidelines',
      title: 'Brand Guidelines',
      description: 'Creating detailed brand books that ensure consistency in how your brand is represented across all internal and external channels.',
      icon: Briefcase,
      features: ['Logo Usage Rules', 'Voice & Tone Guidelines', 'Visual Style Guidelines', 'Digital & Print Standards'],
    },
    {
      id: 'brand-activation',
      title: 'Brand Activation & Collateral',
      description: 'Bringing your brand to life through impactful marketing collateral, packaging, and digital assets.',
      icon: Megaphone,
      features: ['Business Cards & Stationery', 'Marketing Materials & Brochures', 'Packaging Design', 'Social Media Branding'],
    }
  ],
  solutions: {
    title: 'Building Brands that Last',
    description: 'A strong brand is your most valuable asset. We help you build equity and recognition that drives long-term business success.',
    points: [
      {
        title: 'Establish Trust',
        description: 'Professional, cohesive branding builds immediate credibility with your audience.',
        icon: Award,
      },
      {
        title: 'Market Differentiation',
        description: 'Stand out from competitors with a unique identity and clear value proposition.',
        icon: Star,
      },
      {
        title: 'Internal Alignment',
        description: 'Give your team a clear, unifying brand purpose to rally behind.',
        icon: Flag,
      },
      {
        title: 'Consistent Messaging',
        description: 'Ensure every touchpoint communicates the same powerful brand story.',
        icon: MessageCircle,
      },
    ],
  },
  process: {
    title: 'Our Branding Process',
    description: 'A collaborative journey to discover and visualize your brand\'s true essence.',
    steps: [
      {
        step: '01',
        title: 'Discovery Workshop',
        description: 'We collaborate with your stakeholders to unearth your brand\'s history, vision, and core values.',
      },
      {
        step: '02',
        title: 'Market & Competitor Research',
        description: 'Analyzing the landscape to find whitespace opportunities for your brand to own.',
      },
      {
        step: '03',
        title: 'Strategy & Positioning',
        description: 'Defining the strategic foundation: your mission, vision, voice, and unique positioning.',
      },
      {
        step: '04',
        title: 'Visual Exploration',
        description: 'Developing mood boards and initial design concepts that translate strategy into visuals.',
      },
      {
        step: '05',
        title: 'Identity Design',
        description: 'Refining the chosen concept into a complete visual identity system, including the logo and typography.',
      },
      {
        step: '06',
        title: 'Guidelines & Rollout',
        description: 'Delivering comprehensive brand guidelines and assets to ensure a successful, consistent launch.',
      },
    ],
  },
  faq: [
    {
      question: 'Why is brand strategy important before designing a logo?',
      answer: 'A logo is just the tip of the iceberg. Brand strategy defines what your brand stands for, who it speaks to, and how it differs from competitors. Designing a logo without strategy is like building a house without a blueprint.',
    },
    {
      question: 'Do you offer rebranding services?',
      answer: 'Yes! Whether you need a subtle brand refresh to modernize your look or a complete overhaul to pivot your business, we guide you through the entire rebranding process.',
    },
    {
      question: 'What deliverables do I get at the end of a branding project?',
      answer: 'Depending on the scope, you typically receive all logo files (vector and raster formats), a defined color palette and typography system, and a comprehensive PDF Brand Guidelines document detailing how to use your new assets.',
    },
  ],
  cta: {
    title: 'Ready to Build a Memorable Brand?',
    description: 'Let\'s collaborate to uncover your unique story and bring it to life visually.',
    primaryButton: { label: 'Start Your Branding Project', href: '/contact' },
    secondaryButton: { label: 'View Branding Portfolio', href: '/projects' },
  },
};
