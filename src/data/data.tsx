import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.jpg';
import profilepic from '../images/profile_pic.jpg'; // replace with actual image
import testimonialImage from '../images/testimonial.webp';
import daikin_pic from '../images/portfolio/daikin_pic.jpg';



import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Erhan Zeki KILNAZ - Resume',
  description: 'Computer Engineer Resume - Erhan Zeki KILNAZ',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Erhan Zeki KILNAZ.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Hendek, Sakarya-based <strong className="text-stone-100">Computer Engineer</strong>, recently graduated
        from <strong className="text-stone-100">Düzce University</strong>. I interned at Daikin, where I worked on
        projects related to energy efficiency and environmental sustainability.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am passionate about embedded systems, machine learning, and database systems. I strive to solve problems with
        innovative solutions.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a Computer Engineer with experience in developing embedded systems, secure file management platforms, and machine learning models. My primary focus is on environmental sustainability and energy efficiency projects.`,
  aboutItems: [
    {label: 'Location', text: 'Hendek, Sakarya', Icon: MapIcon},
    {label: 'Date of Birth', text: '2001', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Turkish', Icon: FlagIcon},
    {label: 'Interests', text: 'Machine Learning, Embedded Systems, Data Analysis', Icon: SparklesIcon},
    {label: 'Study', text: 'Düzce University', Icon: AcademicCapIcon},
    {label: 'Internship', text: 'Daikin Turkey R&D', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {name: 'C++', level: 8},
      {name: 'C#', level: 7},
      {name: 'Python', level: 7},
      {name: 'SQL', level: 6},
    ],
  },
  {
    name: 'Databases',
    skills: [
      {name: 'MSSQL', level: 6},
      {name: 'PostgreSQL', level: 5},
    ],
  },
  {
    name: 'Embedded Systems & Tools',
    skills: [
      {name: 'Arduino IDE', level: 7},
      {name: 'ESP32 Programming', level: 6},
    ],
  },
  {
    name: 'Machine Learning',
    skills: [
      {name: 'Data Analysis & Classification', level: 6},
      {name: 'Model Performance Optimization', level: 5},
    ],
  },
  {
    name: 'Tools & Frameworks',
    skills: [
      {name: 'Git', level: 6},
      {name: 'MS Office (Word, Excel, PowerPoint)', level: 7},
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'CloudReli',
    description: 'A cloud reliability platform',
    url: 'https://github.com/ErhanKlnz/Cloud-Site',
    image: {
      src: '/src/images/portfolio/cloud_reli_pic.png',
      width: 500,
      height: 300,
      alt: 'CloudReli Image',
    },
  },
  {
    title: 'Yurt Otomasyonu',
    description: 'Dormitory management system',
    url: 'https://github.com/ErhanKlnz/Yurt-Otomasyonu',
    image: {
      src: '/src/images/portfolio/yurt_pic.png',
      width: 500,
      height: 300,
      alt: 'Yurt Otomasyonu Image',
    },
  },
  
  {
    title: 'Air Conditioning Maintenance Tracking System',
    description: 'An embedded system project using ESP32',
    url: 'https://github.com/ErhanKlnz/Air-Conditioning-Maintenance-Tracking-System',
    image: {
      src: '/src/images/portfolio/ardiunino_pic.png',
      width: 500,
      height: 300,
      alt: 'Air Conditioning Maintenance Tracking System Image',
    },
  },
  {
    title: 'Thermostat Simulation Platform',
    description: 'A simulation platform for smart thermostats',
    url: 'https://github.com/ErhanKlnz/Thermostat-Simulation-Platform',
    image: {
      src: '/src/images/portfolio/thermostat_pic.jpg',
      width: 500,
      height: 300,
      alt: 'Thermostat Simulation Platform Image',
    },
  },
  {
    title: 'Comparison of Classification Algorithms',
    description: 'Analysis and optimization of machine learning models',
    url: 'https://github.com/ErhanKlnz/Data-Engineering-Classification',
    image: {
      src: '/src/images/portfolio/data_pic.png',
      width: 500,
      height: 300,
      alt: 'Comparison of Classification Algorithms Image',
    },
  },
];


/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: '2020 - 2024',
    location: 'Düzce University',
    title: 'BSc in Computer Engineering',
    content: <p>Specialized in embedded systems, machine learning, and database systems.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2024 - September 2024',
    location: 'Daikin Turkey R&D',
    title: 'Intern',
    content: (
      <p>
        Worked on projects related to environmental sustainability, including the evaluation of heat pumps and smart
        thermostats.
      </p>
    ),
    imageSrc: daikin_pic, 
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Kübra Kılnaz--Daikin Turkey Quality and Sustainability Department Manager',
      text: ''
      
    },
    {
      name: 'Asena Ceylan--Daikin Turkey Heating and Cooling Systems R&D Senior Compliance Engineer',
      text: '',
      image: '../images/portfolio/daikin_pic.jpg',
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out via any of the following platforms.',
  items: [
    {
      type: ContactType.Email,
      text: 'erhanzekikilnaz@hotmail.com',
      href: 'mailto:erhanzekikilnaz@hotmail.com',
    },
    {
      type: ContactType.Phone,
      text: '+90 536 735 65 65',
      href: 'tel:+905367356565',
    },
    {
      type: ContactType.Location,
      text: 'Hendek, Sakarya, Turkey',
      href: 'https://www.google.com/maps/place/Hendek,+Sakarya',
    },
    {
      type: ContactType.Github,
      text: 'ErhanKlnz',
      href: 'https://github.com/ErhanKlnz',
    },
  ],
};

/**
 * Social links
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ErhanKlnz'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/erhan-zeki-k%C4%B1lnaz/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/ErhanKlnz/'},
];
