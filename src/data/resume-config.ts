import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'Benoit Da Silva Freitas',
    photo: '/images/photo-bda.jpg',
    photoBackEmoji: '👨‍💻',
    title: {
      en: 'Senior Full Stack .NET / Angular Developer',
      fr: 'Développeur Senior Full Stack .NET / Angular',
    },
    subtitle: {
      en: '10 years of experience',
      fr: "10 ans d'expérience",
    },
    location: 'Genève, Suisse',
  },

  // ===== SEO =====
  seo: {
    title: 'Benoit Da Silva Freitas — Senior Full Stack Developer',
    description: 'Interactive resume of Benoit Da Silva Freitas, Senior Full Stack Developer specializing in .NET and Angular.',
  },

  // ===== LANGUAGES =====
  languages: {
    default: 'fr',
    available: ['en', 'fr'],
    labels: {
      en: 'EN',
      fr: 'FR',
    },
  },

  // ===== CONTACT =====
  contact: [
    { type: 'linkedin', label: 'Benoit Da Silva Freitas', href: 'https://www.linkedin.com/in/benoit-da-silva-freitas' },
    // { type: 'email', label: 'ben.dasilvaf@gmail.com' },
    // { type: 'phone', label: '+33 6 28 26 77 15' },
    { type: 'location', label: 'Genève, Suisse' },
  ],

  // ===== SKILLS =====
  skills: [
    {
      title: { en: 'Technical Stack', fr: 'Stack Technique' },
      type: 'badges',
      items: [
        { name: '.NET Core / 8' },
        { name: 'Angular 13-18' },
        { name: 'C#' },
        { name: 'TypeScript' },
        { name: 'SQL Server' },
        { name: 'RabbitMQ' },
        { name: 'Kafka' },
        { name: 'Nx' },
        { name: 'Azure DevOps' },
      ],
    },
    {
      title: { en: 'Languages', fr: 'Langues' },
      type: 'languages',
      items: [
        { name: { en: 'French', fr: 'Français' }, level: { en: 'Native', fr: 'Natif' } },
        { name: { en: 'English', fr: 'Anglais' }, level: { en: 'Full Professional', fr: 'Professionnel complet' }, details: 'B2' },
        { name: { en: 'Spanish', fr: 'Espagnol' }, level: { en: 'Elementary', fr: 'Élémentaire' }, details: 'A2' },
      ],
    },
  ],

  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
    {
      id: 'cbtw-cim-banque',
      company: { en: 'CBTW (CIM Banque)', fr: 'CBTW (CIM Banque)' },
      role: { en: 'Senior Full Stack Developer', fr: 'Développeur Senior Full Stack' },
      period: { en: '08/2025 - Present', fr: '08/2025 - Présent' },
      description: {
        en: 'Evolution of the e-banking solution and internal tools.',
        fr: "Évolution de la solution e-banking et des outils d'administration.",
      },
      techs: ['.NET Framework 4.7', 'ASP.NET MVC', 'Razor', 'SQL Server', 'RabbitMQ', 'EF'],
      isHighlighted: true,
      details: {
        context: { en: 'E-banking platform for 10,000+ users.', fr: "Plateforme e-banking pour 10 000+ utilisateurs." },
        env: { en: 'Agile, Git, IIS', fr: 'Agile, Git, IIS' },
        tasks: {
          en: [
            'Adapted applications to legislative changes (FINMA, LSFin)',
            'Developed internal features for account management',
            'Improved performance and resilience of RabbitMQ processing',
            'Optimized critical SQL queries',
          ],
          fr: [
            'Adaptation aux évolutions législatives (FINMA, LSFin)',
            'Développement de fonctionnalités de gestion de comptes',
            'Amélioration de la résilience des traitements RabbitMQ',
            'Optimisation de requêtes SQL critiques',
          ],
        },
      },
    },
    {
      id: 'cbtw-tpg',
      company: { en: 'CBTW (TPG)', fr: 'CBTW (TPG)' },
      role: { en: 'Senior Full Stack Developer', fr: 'Développeur Senior Full Stack' },
      period: { en: '07/2024 - 08/2025', fr: '07/2024 - 08/2025' },
      description: {
        en: 'Development of an event management solution.',
        fr: "Développement d'une solution de gestion d'événements.",
      },
      techs: ['.NET 8', 'Angular 18', 'EF Core', 'NGXS', 'Nx', 'SQL Server'],
      details: {
        context: { en: 'System handling 50,000 annual events for 1000 users.', fr: "Système gérant 50 000 événements annuels pour 1000 utilisateurs." },
        env: { en: 'Azure DevOps, Scrum, Nx', fr: 'Azure DevOps, Scrum, Nx' },
        tasks: {
          en: [
            'Implemented OIDC authentication',
            'Migrated to Angular 18 and Nx architecture',
            'Developed real-time event tracking features',
          ],
          fr: [
            "Implémentation de l'authentification OIDC",
            'Migration vers Angular 18 et architecture Nx',
            "Développement de fonctionnalités de suivi en temps réel",
          ],
        },
      },
    },
    {
      id: 'cegid',
      company: { en: 'Cegid', fr: 'Cegid' },
      role: { en: 'Full Stack Analyst Developer', fr: 'Analyste Développeur Full Stack' },
      period: { en: '06/2019 - 01/2022', fr: '06/2019 - 01/2022' },
      description: {
        en: 'Cloud collaborative portal for accounting experts.',
        fr: "Portail cloud collaboratif pour experts-comptables.",
      },
      techs: ['Angular 10', '.NET Core 3.1', 'xUnit', 'Azure DevOps', 'SQL Server'],
      details: {
        context: { en: 'SaaS portal for client and billing management.', fr: 'Portail SaaS de gestion client et facturation.' },
        env: { en: 'Scrum, TDD, CI/CD', fr: 'Scrum, TDD, CI/CD' },
        tasks: {
          en: [
            'Designed and implemented billing features',
            'Ensured GDPR and security compliance',
            'Maintained 80% code coverage via unit testing',
          ],
          fr: [
            "Conception et développement des fonctions de facturation",
            "Garantie de conformité RGPD et sécurité",
            "Maintien d'une couverture de code de 80% (TDD)",
          ],
        },
      },
    },
    {
      id: 'atos-worldgrid',
      company: { en: 'Atos Worldgrid', fr: 'Atos Worldgrid' },
      role: { en: 'Full Stack .NET Developer', fr: 'Développeur Full Stack .NET' },
      period: { en: '09/2015 - 05/2019', fr: '09/2015 - 05/2019' },
      description: {
        en: 'Business and industrial management applications.',
        fr: "Applications métier et de gestion industrielle.",
      },
      techs: ['ASP.NET MVC', 'C#', 'SQL Server', 'JavaScript', 'jQuery', 'Entity Framework'],
      details: {
        context: { en: 'Maintenance and evolution of industrial software.', fr: "Maintenance et évolution d'applicatifs industriels." },
        env: { en: 'Agile, Cycle en V', fr: 'Agile, Cycle en V' },
        tasks: {
          en: [
            'Corrective and evolutive maintenance',
            'Functional testing and qualification',
            'Optimization of SQL reporting queries',
          ],
          fr: [
            'Maintenance corrective et évolutive',
            'Qualification fonctionnelle et tests',
            'Optimisation de requêtes SQL pour le reporting',
          ],
        },
      },
    },
    {
      id: 'acteon',
      company: { en: 'Acteon Group', fr: 'Acteon Group' },
      role: { en: 'Developer Intern', fr: 'Stagiaire Développeur' },
      period: { en: '04/2015 - 07/2015', fr: '04/2015 - 07/2015' },
      description: {
        en: 'Medical image viewer prototype for iPad.',
        fr: "Prototype de viewer d'images médicales pour iPad.",
      },
      techs: ['PHP', 'HTML', 'CSS', 'SQL'],
      details: {
        context: { en: 'R&D project for medical devices.', fr: 'Projet R&D pour dispositifs médicaux.' },
        env: { en: 'Quality standards 62304', fr: 'Norme qualité 62304' },
        tasks: {
          en: [
            'Database and software architecture design',
            'Secured remote access implementation',
            'Functional testing of the solution',
          ],
          fr: [
            'Architecture logicielle et conception BDD',
            'Sécurisation des accès distants',
            'Réalisation des tests fonctionnels',
          ],
        },
      },
    },
    {
      id: 'it-ce',
      company: { en: 'IT-CE', fr: 'IT-CE' },
      role: { en: 'Developer Intern', fr: 'Stagiaire Développeur' },
      period: { en: '04/2014 - 07/2014', fr: '04/2014 - 07/2014' },
      description: {
        en: 'Tools for the IT operations portal.',
        fr: "Outils pour le portail d'exploitation informatique.",
      },
      techs: ['VB.NET', 'ASP.NET', 'SSRS', 'SQL Server'],
      details: {
        context: { en: 'Incident management tool evolution.', fr: "Évolution d'outils de gestion d'incidents." },
        env: { en: 'Banking IT', fr: 'Informatique Bancaire' },
        tasks: {
          en: [
            'Automated incident reporting via email',
            'Stored procedures for data processing',
            'Developed SSRS reports',
          ],
          fr: [
            'Outil de diffusion automatisée d’incidents',
            'Création de procédures stockées',
            'Élaboration de rapports SSRS',
          ],
        },
      },
    },
  ],

  // ===== EDUCATION =====
  education: [
    {
      school: { en: 'MIAGE Aix-Marseille University', fr: 'MIAGE Aix-Marseille Université' },
      degree: { en: "Master's Degree (MIAGE)", fr: 'Master MIAGE' },
      period: '2016',
    },
    {
      school: { en: 'Faculty of Economics Aix-Marseille', fr: "Faculté d'économie d'Aix-Marseille" },
      degree: { en: "Bachelor's Degree in Economics and Management", fr: 'Licence Économie et Management' },
      period: '2014',
    },
  ],

  // ===== PROJECTS =====
  projects: [
    {
      id: 'crm-kafka',
      title: { en: 'CRM-Core Banking Integration', fr: 'Intégration CRM-Core Banking' },
      description: {
        en: 'Automation of CRM flows using .NET and Kafka.',
        fr: 'Automatisation des flux CRM via .NET et Kafka.',
      },
      techs: ['.NET Core', 'Kafka', 'Finnova'],
    },
  ],

  // ===== HOBBIES =====
  hobbies: [
    { title: { en: 'Guitar', fr: 'Guitare' } },
    { title: { en: 'Motorcycling', fr: 'Moto' } },
    { title: { en: 'Football', fr: 'Football' } },
    { title: { en: 'Weightlifting', fr: 'Musculation' } },
  ],

  // ===== THEME =====
  theme: {
    preset: 'slate',
  },

  // ===== UI LABELS =====
  labels: {
    sections: {
      contact: { en: 'CONTACT', fr: 'CONTACT' },
      skills: { en: 'SKILLS', fr: 'COMPÉTENCES' },
      experience: { en: 'PROFESSIONAL EXPERIENCE', fr: 'EXPÉRIENCES PROFESSIONNELLES' },
      education: { en: 'EDUCATION', fr: 'FORMATION' },
      projects: { en: 'PROJECTS', fr: 'PROJETS' },
      hobbies: { en: 'HOBBIES', fr: 'LOISIRS' },
    },
    experience: {
      mainTasks: { en: 'Main tasks:', fr: 'Tâches principales :' },
      moreTasks: { en: 'more tasks...', fr: 'autres tâches...' },
      training: { en: 'Training:', fr: 'Formations :' },
      techEnv: { en: 'Technical Environment:', fr: 'Environnement Technique :' },
      technologies: { en: 'Technologies:', fr: 'Technologies :' },
    },
    actions: {
      clickHint: { en: 'Click for details', fr: 'Cliquez pour les détails' },
      switchTheme: { en: 'Switch theme', fr: 'Changer le thème' },
      downloadPdf: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    }
  },
}