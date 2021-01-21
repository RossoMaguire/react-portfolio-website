## This is my website that I developed using Gatsby - an Open Source React based framework for static websites.

## Features

⚡️ Modern UI Design + Reveal Animations\
⚡️ One Page Layout built with React\
⚡️ Styled with Bootstrap v4.3 + Custom SCSS\
⚡️ Fully Responsive\
⚡️ Configurable color scheme\
⚡️ Image optimization

To view a demo example, **[click here](https://rossmaguire.com)**

---

## How it's made 🔧

### STRUCTURE

`/src/mock/data.js` is where I store all my data:

### Hero Section

```javascript
export const heroData = {
  title: '', // Hello, my name is
  name: '', // Ross
  subtitle: '', // I'm a Front End Developer
  cta: '', // Know more
};
```

### About Section

**_Important Note_**: All the images must live inside the `src/images/` folder in order for Gatsby to show the images correctly.

```javascript
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};
```

### Projects Section

**_Important Note_**: All the images must live inside the `src/images/` folder in order for Gatsby to show the images correctly.

You can put as many projects object you want inside the `array`.

```javascript
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  ...
];
```

### Contact Section

```javascript
export const contactData = {
  cta: '', // call to action text for the contact section
  btn: '', // text inside the button
  email: '',
};
```

### Footer Section

```javascript
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '', // twitter url
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '', // codepen url
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '', // linkedin url
    },
    {
      id: nanoid(),
      name: 'github',
      url: '', // github url
    },
  ],
};
```

### Step 2 - STYLES

I am using SASS pre-processor to handle all the CSS

```scss
// Default values
$main-color: #02aab0;
$secondary-color: #00cdac;
```

**_Note_**: I highly recommend to checkout gradients variations on [UI Gradient](https://uigradients.com/#BrightVault)

---

## Deployment 📦

Once I was done. I put my website online!

I use [Netlify](https://netlify.com) to achieve this on the EASIEST WAY

## Technologies used 🛠️

- [Gatsby](https://www.gatsbyjs.org/) - Static Site Generator
- [GraphQL](https://graphql.org/) - Query language for APIs
- [React](https://es.reactjs.org/) - Front-End JavaScript library
- [Bootstrap 4](https://getbootstrap.com/docs/4.3/getting-started/introduction/) - Front-End UI library
- [Sass](https://sass-lang.com/documentation) - CSS extension language

## Authors

- Ross Maguire
- Credit to Jacobo Martinez - https://github.com/cobidev for developing the starter boiler plate that I initialised my project with
