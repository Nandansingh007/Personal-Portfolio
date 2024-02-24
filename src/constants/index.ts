import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

import {
  pandas,
  tf,
  spacy,
  pytorch,
  flask,
  Numpy,
  aws,
  django,
  html,
  css,
  tailwind,
  git,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  tripguide,
  cplus,
  python,
  movie,
  fakeNews,
  expense,
  sudoko,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'C++',
    icon: cplus,
  },
  {
    title: 'Python',
    icon: python,
  },
  {
    title: 'Pytorch',
    icon: pytorch,
  },

  {
    title: 'Pandas',
    icon: pandas,
  },
  {
    title: 'TensorFlow',
    icon: tf,
  },
  {
    title: 'Spacy',
    icon: spacy,
  },
  {
    title: 'Flask',
    icon: flask,
  },
  {
    title: 'Numpy',
    icon: Numpy,
  },
  {
    title: 'AWS',
    icon: aws,
  },
  {
    title: 'Django',
    icon: django,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'PyTorch',
    icon: pytorch,
  },
  {
    name: 'TensorFlow',
    icon: tf,
  },
  {
    name: 'NumPy',
    icon: Numpy,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'AWS',
    icon: aws,
  },

  {
    name: 'git',
    icon: git,
  },

  {
    name: 'docker',
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: 'Data Scientist',
    companyName: 'Wiseyak Inc',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Segmentation using Statistical and Clustering Approach',
      'Customer Segmentation using RMF Analysis',
      'Data Warehousing using Azure Synapse',
    ],
  },
  {
    title: 'Data Engineer Trainee',
    companyName: 'PMsquare',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'End to End Retail ETL task using AWS Glue,Athena',
      'RAG Chatbot Using LLMs,Langchain',
      'Learning AWS cloud Practitioner',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Data Fellowship',
    companyName: 'Code For Nepal',
    icon: shopify,
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'End to End Knowledge graph building using NLP library Spacy,NLTK',
      'Customer Churn Prediction using Scikit-learn , MLflow',
      'Expense Tracker Web app using Python ,Djanog ,css',
      'Take Certification courses on intermediate Python,SQL',
    ],
  },
  {
    title: 'Data Engineer Internship',
    companyName: 'Gritfeat Solutions',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'Data Modeling ,forecasting and building full ETL pipeline of weather API data using Databricks',
      'Data Transformation in Snowflake using DBT',
      'Data Analysis and Visualization using Tableau',
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial: 'I thought Nandan was poor in data analyst,But he proved me wrong',
    name: 'Samman Amgain',
    designation: 'CFO',
    company: 'Myownstartup',
    image:
      'https://static.vecteezy.com/system/resources/thumbnails/024/183/525/small/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg',
  },
  {
    testimonial: 'Never seen the such genious',
    name: 'Ngwang Tamang',
    designation: 'COO',
    company: 'Cloudtech',
    image:
      'https://img.freepik.com/premium-vector/young-man-avatar-character-vector-illustration-design_24877-18517.jpg',
  },
  {
    testimonial: 'I thought Nandan was poor in data analyst,But he proved me wrong',
    name: 'Samman Amgain',
    designation: 'CFO',
    company: 'Myownstartup',
    image:
      'https://static.vecteezy.com/system/resources/thumbnails/024/183/525/small/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg',
  },
  {
    testimonial: 'Never seen the such genious',
    name: 'Ngwang Tamang',
    designation: 'COO',
    company: 'Cloudtech',
    image:
      'https://img.freepik.com/premium-vector/young-man-avatar-character-vector-illustration-design_24877-18517.jpg',
  },
];

const projects: TProject[] = [
  {
    name: 'End to End Movie Recommendation System',
    description: 'Recommendation System using content-based filtering and cosine similarity ',

    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'Scikit-learn',
        color: 'green-text-gradient',
      },
    ],
    image: movie,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Nepali Fake news Detection',
    description:
      'Develop model for Nepali Fake news detection using BERT, Implementing Source Checking method for verifying news truthness',

    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'Pandas',
        color: 'green-text-gradient',
      },
      {
        name: 'BERT',
        color: 'pink-text-gradient',
      },
    ],
    image: fakeNews,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Expense Tracker Django powered web app',
    description:
      'Expense tracker which displays the Expense Chart.Extremly helpful to analyze the expenses you have done over a period.Easily add and remove the expenses',
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'Django',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient',
      },
    ],
    image: expense,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Soduko solver',
    description: 'Implementation of backtracking algorithm',
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
    ],
    image: sudoko,
    sourceCodeLink: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
