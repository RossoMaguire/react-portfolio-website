import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  index: {
    title: 'Ross Maguire | Front End Web Developer', // e.g: 'Name | Developer'
    lang: 'en', // e.g: en, es, fr, jp
    description:
      'This is the portfolio of Ross Maguire - Web Developer | Software Developer | SEO Specialist and Designer based in Dublin, Ireland.', // e.g: Welcome to my website
    ogImage: '/images/rm-logo.png',
  },
  services: {
    title: 'Services | Ross Maguire | Front End Web Developer', // e.g: 'Name | Developer'
    lang: 'en', // e.g: en, es, fr, jp
    description:
      'Check out my Services, Ross Maguire - Web Developer | Software Developer | SEO Specialist and Designer based in Dublin, Ireland.', // e.g: Welcome to my website
    ogImage: '/images/rm-logo.png',
  },
};

// LOGO DATA
export const logoData = {
  image: 'rm-logo.png',
  imageAlt: 'RM Designs Logo',
};

// NAVBAR ITEMS
export const navData = [
  {
    url: 'projects',
    label: 'Projects',
    type: 'jumplink',
  },
  {
    url: '/services',
    label: 'Services',
    type: 'external',
  },
  {
    url: 'contact',
    label: 'Contact',
    type: 'jumplink',
  },
];

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Hey, thanks for visiting! I am Ross and I currently work as a Web Developer at Facebook. I built this website using Gatsby - an open source React based framework for building static websites.',
  paragraphTwo:
    'With over 6 years experience writing code in various languages (HTML & CSS, PHP, JavaScript, C#..) new code excites me and I tend to get my teeth sunk in easily, adapting to whatever the problem requires. With that in mind please feel free to have a look at some of my projects below and on GitHub where you can see the types of things I am experimenting with right now, the types of websites I have built in the past, and what projects I am working on in my part-time Software Development HDip at Dublin Business School. ',
  paragraphThree:
    'If you are here hoping to hire a Web Developer and want to know more, check out the services I provide to see how I can help.',
  resume: '/services', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'family-protection-planner.png',
    title: 'Family Protection Planner',
    info: 'Insurance Quote Tool created for Irish Life.',
    info2:
      'This is a JQuery app packaged into a Drupal plugin for integration with a Drupal website. The tool was designed by a UX Designer at the company and it was my job to build out the UI and hook the user input up to an internal quote engine which handled the calculations presented back to the user.',
    url: 'https://www.irishlife.ie/life-insurance/one-plan-protection/quote',
    label: 'See Live',
    repo: '', // if no repo, the button will not show up
    label2: '',
    languages: 'PHP | JavaScript',
  },
  {
    id: nanoid(),
    img: 'cunninghams.png',
    title: 'Cunninghams Bar Website',
    info: 'Brochure website for Cunninghams Bar, Kildare town.',
    info2:
      "This is one of my favourite sites to showcase out of the many I have built, as it didn't involve just picking a theme out of the box and catering for a few standard pages. Instead, I worked with a friend of mine who is a digital marketing expert on branding Cunninghams complete online presence, applying it to a new website and subsequently increasing visits and booking via ad campaigns and social media marketing.",
    url: 'http://cunninghamskildare.com/',
    label: 'See Live',
    repo: '', // if no repo, the button will not show up
    label2: '',
    languages: 'WordPress | JavaScript',
  },
  {
    id: nanoid(),
    img: 'facebook-business.png',
    title: 'Success Stories Hub',
    info: 'Micro site with interactive UI for Facebook.',
    info2:
      'This is a page I built within the Facebook Business website which uses a dynamic grid module to display cards which then link to individual pages created on the same platform. I used an internal framework written in Hack (FB Internal Server Side language) which exposed modules I could use within the CMS platform, which uses custom XML tags to code web pages.',
    url: 'https://www.facebook.com/business/small-business/success-stories',
    label: 'See Live',
    repo: '', // if no repo, the button will not show up
    label2: '',
    languages: 'HTML & CSS | JavaScript',
  },
  {
    id: nanoid(),
    img: 'find-my-photo.png',
    title: 'Find My Photo',
    info: 'Photography Tool for Photo Experience Ireland.',
    info2:
      "This is a JavaScript app packaged as a WordPress plugin which was needed for Photo Experience Ireland's events where they wanted the customers to be able to go to the app and download their photo once it was taken directly to their device to save on printing costs.",
    url: 'https://photoexperienceireland.ie/find-my-photo/',
    label: 'See Live',
    repo: 'https://github.com/RossoMaguire/photo-experience-irl', // if no repo, the button will not show up
    label2: 'Source Code',
    languages: 'PHP | JavaScript',
  },
];

export const moreProjectsData = [
  {
    id: nanoid(),
    img: 'all-stone.png',
    title: 'Social Media Management',
    info: 'Facebook pages for Continental Stone and All Stone',
    info2:
      'I created and managed these Facebook pages and grew the followers to over 1000 and still counting in 3 months. I created all the artwork, posts and ran ads between 2015 and 2018 targeting customers based off various market research I conducted in the industries.',
    url: 'https://www.facebook.com/allstone02/',
    label: 'All Stone',
    url2: 'https://www.facebook.com/CS-Continental-Stone-1469918546652725',
    label2: 'CS Stone',
    repo: '', // if no repo, the button will not show up
    languages: 'Facebook | Twitter',
  },
  {
    id: nanoid(),
    img: 'pyramid-hill.png',
    title: 'Graphic Design',
    info: 'Album Artwork for Pyramid Hill band',
    info2:
      "I don't do much Graphic Design commission but occassionally when developing apps or websites this experience comes in handy. I worked with Pyramid Hill to deliver graphics which would be used on physical copies of their album. I can't claim credit for the awesome illustration, I created the logo & the fonts and organised the elements digitally to create the final product.",
    url: '/static/26014ef034b354802afd78be2e70013d/43fa5/pyramid-hill.png',
    label: 'View',
    repo: '', // if no repo, the button will not show up
    label2: '',
    languages: 'Photoshop | Illustrator',
  },
  {
    id: nanoid(),
    img: 'mix-projects.png',
    title: 'Various',
    info: 'Various projects around the web',
    info2:
      'I have completed many more projects for clients that span a lot of different areas. For Horse Racing Ireland I completed an SEO Project to grow rankings and increase website optimisation. I also worked on an Online Store for ascuteasabutton.ie, a restaurant booking system for cookesofcaragh.com and maintained 15 hotel websites for Tifco Hotels Ltd.',
    url: '/services',
    label: 'My Services',
    repo: '', // if no repo, the button will not show up
    label2: '',
    languages: '',
  },
];

export const servicesData = [
  {
    title: 'Web Design & Development',
    paragraphOne:
      "I build responsive websites and web apps. I have a wealth of experience building websites for small businesses, working in companies on agile teams to deliver new features for web apps & full sites, and programming in various environments and languages. I love to be creative and work on my own and I also love to collaborate, first and foremost it's about problem solving. I believe in building things in a way that makes sense, for users and for the web.",
    paragraphTwo:
      'When I work I aim to make ideas come to life. I can handle graphics, programming and coding but equally like to be a part of any conversation throughout the development life cycle to ensure that by the time its ready to put my headphones in and my head down - the most thought out iteration is being delivered.',
    image: 'all-stone-responsive-web-design',
    cta: '',
  },
  {
    title: 'Website Optimisation',
    paragraphOne:
      'When you build something for the web, you need a way for that thing to be found. I rarely build a website and wipe my hands clean. I will always offer the client my advice and hand in getting your website found by the people you want, and for the keywords you want. This process is called Search Engine Optimisation (SEO) and has grown and changed over the years as the web evolves. The web is different to sole Software Development and the conversions count on you being a part of its ever changing eco system in the most optimal way.',
    paragraphTwo:
      'There are a number of sides to this and it all depends on your website, your product and your needs. When starting from scratch I always bring this into the conversation and incorporate the extra bandwith to account for this work. I have a wealth of experience optimising sites and can advise and help through optimising an existing website.',
    image: 'seo-strategy-elements',
  },
  {
    title: 'Consultancy & Ad Hoc Development',
    paragraphOne:
      'As a qualified Software Developer and Media Specialist, I have studied and worked in many areas of this vast ever changing eco-system. If you seek someone on your team to help project manage or if you seek someone to do some ad hoc programming, bug fixing, maintenance or to join your team for a totally new position I would relish the opportunity to help. I am always learning, and I am always open to trying my hand at problems wether I have solved them before or am throwing myself in at the deep end.',
    paragraphTwo:
      "At the end of the day, I am here to help, master my craft, grow my art, learn and to solve problems. So feel free to get in touch and let's have a chat to see what I can do for you.",
    image: 'software-dev-lifecycle',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ross.rmdesigns@gmail.com',
};

// CLIENTS DATA
export const clientData = [
  {
    src1: 'facebook-logo.png',
    alt1: 'facebook logo',
    src2: 'all-stone-logo.png',
    alt2: 'all stone logo',
    src3: 'horse-racing-ireland-logo.png',
    alt3: 'horse racing ireland logo',
  },
  {
    src1: 'classic-hits-logo.png',
    alt1: 'classic hits 4fm logo',
    src2: 'irish-life-logo.png',
    alt2: 'irish life logo',
  },
];

// TESTIMONIAL DATA
export const testimonialData = [
  {
    company: 'Keith - All Stone Ltd',
    quote:
      '"I have only good things to say, totally professional, totally committed, totally knowledgeable and a pleasure to work with."',
  },
  {
    company: 'Siobhan - As Cute as A Button',
    quote: '"Ross understood my vision and new exactly what I wanted to achieve."',
  },
  {
    company: 'Bernie - Dillon Byrne Accountants',
    quote:
      '"Ross is very professional and knew exactly what I needed when turning our website into the real thing!"',
  },
  {
    company: 'Eoghan - Pyramid Hill Band',
    quote: '"Ross was a pleasure to work with and very professional. A great eye for detail."',
  },
  {
    company: "Ed - Ed's Guitar Lessons",
    quote:
      '"With a great knowledge of design and web building the site was finished ahead of schedule ahead of expectations!"',
  },
];

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/rmdesignsnaas',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/maguireross/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/RossoMaguire',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/rmdesignsnaas',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
